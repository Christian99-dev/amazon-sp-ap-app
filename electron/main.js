const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

/**
 * Services
 */
const storageAPI = require("./service/storage/storageAPI");
const getLWAAccessToken = require("./service/amazon/get-lwa-access-token");
const getItemListingBatchAsin = require("./service/amazon/get-item-listing-batch-asin");

/**
 * CONFIG
 */
const dev = true;
const HTML_DEVELOPMENT_PATH = "http://localhost:3000/";
const HTML_PRODUCTION_PATH = path.join(__dirname, "../app/build/index.html");
const PRELOAD_PATH = path.join(__dirname, "preload.js");
const TITLE = "Dietz Amazon SP-API";

/**
 * LIB
 * */
const createMainWindow = () => {
  const window = new BrowserWindow({
    title: TITLE,
    show: false,
    webPreferences: {
      preload: PRELOAD_PATH,
      sandbox: false,
    },
  });

  window.maximize();
  window.show();

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
  const refreshToken = storageAPI.readRefreshToken(region);
  const client_id = storageAPI.readClientID();
  const client_secret = storageAPI.readClientSecret();

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
      storageAPI.writeAccessToken(region, currentAccessToken);

      return responseSchema(
        21,
        `${region.toUpperCase()} Token Erfolgreich Refresht`,
        currentAccessToken
      );

    case "get":
      // Reading access token from storage
      currentAccessToken = storageAPI.readAccessToken(region);

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
        storageAPI.writeAccessToken(region, currentAccessToken);

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

ipcMain.handle("get_listing_for_asin", async (_, data) => {
  // response schema
  const responseSchema = (code, message, response) => {
    return {
      code: code,
      message: message,
      response: response,
    };
  };

  // get payload
  const { coutrys, asin, condition } = data;

  // get access token
  const access_token_eu = storageAPI.readAccessToken("eu")
  const access_token_na = storageAPI.readAccessToken("na")

  /**
   * Guards
   */
  if(coutrys.length <= 0) {
    return responseSchema(41, `Bitte ein Land Auswählen`, null);
  }

  //.. asin

  if(access_token_eu == "" || access_token_na == ""){
    return responseSchema(44, `NA/EU Access Token fehlt`, null);
  }

  // Create batches
  let eu_asin_body = [];
  let na_asin_body = [];

  // Splitting items according to region
  coutrys.forEach(({ marketplaceId, region }) => {
    const item = {
      uri: `/products/pricing/v0/items/${asin}/offers`,
      method: "GET",
      MarketplaceId: marketplaceId,
      ItemCondition: condition,
    };

    switch (region) {
      case "eu":
        eu_asin_body.push(item);
        break;
      case "na":
        na_asin_body.push(item);
        break;
    }
  });

  // Placeholder for each amazon response
  let amazon_response_eu;
  let amazon_response_na;

  try {
    if (eu_asin_body.length > 0)
      amazon_response_eu = await getItemListingBatchAsin(
        "eu",
        access_token_eu,
        eu_asin_body
      );

    if (na_asin_body.length > 0)
      amazon_response_na = await getItemListingBatchAsin(
        "na",
        access_token_na,
        na_asin_body
      );
  } catch (error) {
    // Error fetch from amazon
    return responseSchema(42, `Amazon API Fehler ${error}`, null);
  }

  // Success
  return responseSchema(21, `Erfolgreich gefetcht`, {
    response_eu: amazon_response_eu,
    response_na: amazon_response_na,
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
    case "seller_id":
      storageAPI.writeSellerID(value);
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
    case "seller_id":
      value = storageAPI.readSellerID();
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
