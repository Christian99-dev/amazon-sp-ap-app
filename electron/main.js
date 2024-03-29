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
const getItemListingBatchAsin = require("./get-item-listing-batch-asin");

/**
 * CONFIG
 */
const HTML_DEVELOPMENT_PATH = "http://localhost:3000/";
const HTML_PRODUCTION_PATH = path.join(__dirname, "../app/build/index.html");
const PRELOAD_PATH = path.join(__dirname, "preload.js");
const HEIGHT = 700;
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

  const startUrl = HTML_DEVELOPMENT_PATH;

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
        `${region.toUpperCase()} Token Erfolgreich Refresht`,
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
          `${region.toUpperCase()} Token Erfolgreich Refresht`,
          currentAccessToken
        );
      }

      return manageTokenResponse(
        22,
        `${region.toUpperCase()} Token Vorhanden`,
        currentAccessToken
      );
  }
});

ipcMain.handle("get_listing_for_asins", async (_, data) => {
  // response schema
  const getPricingAsinResponse = (code, message, response) => {
    return {
      code: code,
      message: message,
      response: response,
    };
  };

  // get payload
  const { coutrys, asins, access_token_eu, access_token_na } = data;

  // Create batches
  let eu_batch = [];
  let na_batch = [];

  asins.forEach((asin) => {
    coutrys
      .filter((c) => c.region === "eu")
      .forEach((country) => {
        eu_batch.push({
          uri: `/products/pricing/v0/items/${asin}/offers`,
          method: "GET",
          MarketplaceId: country.marketplaceId,
          ItemCondition: "New",
        });
      });
  });

  asins.forEach((asin) => {
    coutrys
      .filter((c) => c.region === "na")
      .forEach((country) => {
        na_batch.push({
          uri: `/products/pricing/v0/items/${asin}/offers`,
          method: "GET",
          MarketplaceId: country.marketplaceId,
          ItemCondition: "New",
        });
      });
  });

  // Placeholder for token
  let response_eu;
  let response_na;

  try {
    if (eu_batch.length > 0)
      response_eu = await getItemListingBatchAsin(
        "eu",
        access_token_eu,
        eu_batch
      );

    if (na_batch.length > 0)
      response_na = await getItemListingBatchAsin(
        "na",
        access_token_na,
        na_batch
      );
  } catch (error) {
    // Error fetch from amazon
    return getPricingAsinResponse(42, `Amazon API Fehler ${error}`, null);
  }

  // Success
  return getPricingAsinResponse(21, `Erfolgreich gefetcht`, {
    response_eu: response_eu,
    response_na: response_na,
  });
});
