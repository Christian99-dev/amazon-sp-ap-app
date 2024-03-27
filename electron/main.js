const {
  writeAccessTokenEU,
  writeAccessTokenNA,
  readAccessTokenEU,
  readAccessTokenNA,
  readClientID,
  readClientSecret,
  readRefreshTokenEU,
  readRefreshTokenNA
} = require("./storage/storageAPI");
const { getLWAAccessToken } = require("./amazon-api/endpoints/get-lwa-access-token");
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const url = require("url");


/**
 * LIB
 * */
const createMainWindow = () => {
  const window = new BrowserWindow({
    title: "Dietz Amazon SP-API",
    width: 1200,
    height: 640,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      sandbox: false,
    },
  });

  const startUrl =
    process.env.NODE_ENV === "production"
      ? url.format({
          pathname: path.join(__dirname, "../app/build/index.html"),
          protocol: "file:",
          slashes: true,
        })
      : "http://localhost:3000/";
      

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
ipcMain.handle("manage_token", async (event, data) => {
  // get payload
  const { action, region } = data;

  // Placeholder for token
  let currentAccessToken;
  let currentRefreshToken;

  switch(region) {
    case "eu" : currentRefreshToken = readRefreshTokenEU();
    case "na" : currentRefreshToken = readRefreshTokenNA();
  }

  // Switch statement to determine action based on input data
  switch (action) {
    case "refresh":
      
      // Fetching new token
      currentAccessToken = await getLWAAccessToken(readClientID(), readClientSecret(), currentRefreshToken);

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
        currentAccessToken = await getLWAAccessToken(readClientID(), readClientSecret(), currentRefreshToken);

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
