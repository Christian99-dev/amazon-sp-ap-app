const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const url = require("url");

// Storage API
const {
  writeAccessToken,
  readRefreshToken,
  readAccessToken,
  readClientID,
  readClientSecret,
} = require("./storageAPI");

// Amazon API
const getLWAAccessToken = require("./get-lwa-access-token");

/**
 * CONFIG
 */
const HTML_DEVELOPMENT_PATH = "http://localhost:3000/";
const HTML_PRODUCTION_PATH = path.join(__dirname, "../app/build/index.html");
const PRELOAD_PATH = path.join(__dirname, "preload.js");
const HEIGHT = 700;
const WIDTH = 1200;
const TITLE = "Dietz Amazon SP-API";

// require('electron-reload')(__dirname, { ignored: /[\/\\]storage\.json/ });

/**
 * LIB
 * */
const createMainWindow = () => {
  const window = new BrowserWindow({
    title: TITLE,
    width: WIDTH,
    height: HEIGHT,
    webPreferences: {
      preload: PRELOAD_PATH,
      sandbox: false,
    },
  });

  const startUrl =
    process.env.NODE_ENV === "production"
      ? url.format({
          pathname: HTML_PRODUCTION_PATH,
          protocol: "file:",
          slashes: true,
        })
      : HTML_DEVELOPMENT_PATH;

  window.loadURL(startUrl);
};

/**
 * LIFECYCLE
 * */
app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on("window-all-closed", function () {
  // edgcase for mac
  if (process.platform !== "darwin") app.quit();
});

/**
 * IPC
 * */
ipcMain.handle("manage_token", async (_, data) => {
  // response schema
  const manageTokenResponse = (code, message, access_token) => {
    return {
      code: code,
      message: message,
      access_token: access_token,
    };
  };

  // get payload
  const { action, region } = data;

  // Placeholder for token
  let currentAccessToken;

  // pulling data from storage
  const refreshToken = readRefreshToken(region);
  const client_id = readClientID();
  const client_secret = readClientSecret();

  // Wenn daten nicht vollständig,
  if (refreshToken == "" || client_id == "" || client_secret == "")
    return manageTokenResponse(41, "Benutzerdaten Unvollständig", null);

  // Switch statement to determine action based on input data
  switch (action) {
    case "refresh":
      // Fetching new token
      try {
        currentAccessToken = await getLWAAccessToken(
          client_id,
          client_secret,
          refreshToken
        );
      } catch (error) {
        return manageTokenResponse(42, `Amazon API Fehler ${error}`, null);
      }

      // Writing to storage
      writeAccessToken(region, currentAccessToken);

      return manageTokenResponse(
        21,
        `${region} Token Erfolgreich Refresht`,
        currentAccessToken
      );

    case "get":
      // Reading access token from storage
      currentAccessToken = readAccessToken(region);

      // If token doesn't exist, fetch a new one
      if (currentAccessToken == "") {
        // Making call to Amazon for new token
        try {
          currentAccessToken = await getLWAAccessToken(
            client_id,
            client_secret,
            refreshToken
          );
        } catch (error) {
          return manageTokenResponse(42, `Amazon API Fehler ${error}`, null);
        }

        // Writing to storage
        writeAccessToken(region, currentAccessToken);

        return manageTokenResponse(
          21,
          `${region} Token Erfolgreich Refresht`,
          currentAccessToken
        );
      }

      return manageTokenResponse(
        22,
        `${region} Token Vorhanden`,
        currentAccessToken
      );
  }
});
