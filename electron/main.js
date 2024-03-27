const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const url = require("url");

// Storage API
const {
  writeAccessTokenEU,
  writeAccessTokenNA,
  readAccessTokenEU,
  readAccessTokenNA,
  readClientID,
  readClientSecret,
  readRefreshTokenEU,
  readRefreshTokenNA,
} = require("./storageAPI");

// Amazon API
const {
  getLWAAccessToken,
} = require("./get-lwa-access-token");

/**
 * CONFIG
 */
const HTML_DEVELOPMENT_PATH = "http://localhost:3000/";
const HTML_PRODUCTION_PATH = path.join(__dirname, "../app/build/index.html");
const PRELOAD_PATH = path.join(__dirname, "preload.js");
const HEIGHT = 640;
const WIDTH = 1200;
const TITLE = "Dietz Amazon SP-API";

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
  
  // get payload
  const { action, region } = data;

  // Placeholder for token
  let currentAccessToken;
  let currentRefreshToken;

  switch (region) {
    case "eu":
      currentRefreshToken = readRefreshTokenEU();
    case "na":
      currentRefreshToken = readRefreshTokenNA();
  }

  // Switch statement to determine action based on input data
  switch (action) {
    case "refresh":
      // Fetching new token
      currentAccessToken = await getLWAAccessToken(
        readClientID(),
        readClientSecret(),
        currentRefreshToken
      );

      // Writing to storage
      switch (region) {
        case "eu":
          writeAccessTokenEU(currentAccessToken);
          break;
        case "na":
          writeAccessTokenNA(currentAccessToken);
          break;
      }

      // Returning to app
      return currentAccessToken;

    case "get":
      // Reading token
      switch (region) {
        case "eu":
          currentAccessToken = readAccessTokenEU();
          break;
        case "na":
          currentAccessToken = readAccessTokenNA();
          break;
      }

      // If token doesn't exist, fetch a new one
      if (currentAccessToken == "" || !currentAccessToken) {
        // Making call to Amazon for new token
        currentAccessToken = await getLWAAccessToken(
          readClientID(),
          readClientSecret(),
          currentRefreshToken
        );

        // Writing new token to storage based on region
        switch (region) {
          case "eu":
            writeAccessTokenEU(currentAccessToken);
            break;
          case "na":
            writeAccessTokenNA(currentAccessToken);
            break;
        }
      }

      return currentAccessToken;
  }
});
