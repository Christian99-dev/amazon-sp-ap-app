const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

// Storage API
const {
  writeAccessToken,
  readRefreshToken,
  readAccessToken,
  readClientID,
  readClientSecret,
} = require("./storage/storageAPI");

// Amazon API
const getLWAAccessToken = require("./amazon/get-lwa-access-token");
const getItemListingBatchAsin = require("./amazon/get-item-listing-batch-asin");
const storageAPI = require("./storage/storageAPI");

/**
 * CONFIG
 */
const dev = true;
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

  const startUrl = dev ? HTML_DEVELOPMENT_PATH : HTML_PRODUCTION_PATH;

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
  const responseSchema = (code, message, access_token) => {
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

  /**
   * Guards
   */
  if (refreshToken == "" || client_id == "" || client_secret == "")
    return responseSchema(41, "Benutzerdaten Unvollständig", null);

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
        return responseSchema(42, `Amazon API Fehler ${error}`, null);
      }

      // Writing to storage
      writeAccessToken(region, currentAccessToken);

      return responseSchema(
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
          return responseSchema(42, `Amazon API Fehler ${error}`, null);
        }

        // Writing to storage
        writeAccessToken(region, currentAccessToken);

        // Returning to app
        return responseSchema(
          21,
          `${region.toUpperCase()} Token Erfolgreich Refresht`,
          currentAccessToken
        );
      }

      // Returning to app
      return responseSchema(
        22,
        `${region.toUpperCase()} Token Vorhanden`,
        currentAccessToken
      );
  }
});

ipcMain.handle("get_listing_for_asins", async (_, data) => {
  // response schema
  const responseSchema = (code, message, response) => {
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

  // Placeholder for amazon response
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
    return responseSchema(42, `Amazon API Fehler ${error}`, null);
  }

  // Success
  return responseSchema(21, `Erfolgreich gefetcht`, {
    response_eu: response_eu,
    response_na: response_na,
  });
});

ipcMain.handle("change_credentials", async (_, data) => {
  // response schema
  const responseSchema = (code, message) => {
    return {
      code: code,
      message: message,
    };
  };

  // get payload
  const { id, value } = data;

  /**
   * Guards
   */
  if (value === "" || value === undefined)
    return responseSchema(41, "Der Inhalt darf nicht Leer sein");

  // Writing value
  switch (id) {
    case "client_id":
      storageAPI.writeClientID(value);
      break;
    case "client_secret":
      storageAPI.writeClientSecret(value);
      break;
    case "refresh_token_eu":
      storageAPI.writeRefreshToken("eu", value);
      break;
    case "refresh_token_na":
      storageAPI.writeRefreshToken("na", value);
      break;
    default:
      return responseSchema(42, "ID nicht vorhanden");
  }

  return responseSchema(21, "Benutzerdaten erfolgreich Aktualisiert");
});

ipcMain.handle("get_credentials", async (_, data) => {
  // response schema
  const responseSchema = (code, message, value) => {
    return {
      code: code,
      message: message,
      value: value,
    };
  };

  // get payload
  const { id } = data;

  let value;

  // Writing value
  switch (id) {
    case "client_id":
      value = storageAPI.readClientID();
      break;
    case "client_secret":
      value = storageAPI.readClientSecret();
      break;
    case "refresh_token_eu":
      value = storageAPI.readRefreshToken("eu");
      break;
    case "refresh_token_na":
      value = storageAPI.readRefreshToken("na");
      break;
    default:
      return responseSchema(41, "ID nicht vorhanden", null);
  }

  if (value === "" || value === undefined)
    return responseSchema(42, "Benutzerdatenfeld Leer", null);

  return responseSchema(21, "Benutzerdaten im Storage Gefunden", value);
});
