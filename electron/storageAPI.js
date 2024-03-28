const fs = require("fs");
const path = require("path");

/**
 * CONFIG
 * */
const PATH = path.join(__dirname, "static/storage.json");

/**
 * BASE OPERATIONS
 * */
const readStorageValue = (key) => {
  const data = fs.readFileSync(PATH, "utf8");
  const storage = JSON.parse(data);
  return storage[key];
};

const writeStorageValue = (key, value) => {
  const data = fs.readFileSync(PATH, "utf8");
  let storage = JSON.parse(data);
  storage[key] = value;
  fs.writeFileSync(PATH, JSON.stringify(storage, null, 2));
};

/**
 * API
 * */
module.exports = {
  /** Read */
  readAccessToken: (region) => {
    switch (region) {
      case "eu": return readStorageValue("access_token_eu");
      case "na": return readStorageValue("access_token_na");
    }
  },

  readRefreshToken: (region) => {
    switch (region) {
      case "eu": return readStorageValue("refresh_token_eu");
      case "na": return readStorageValue("refresh_token_na");
    }
  },

  writeAccessToken: (region, value) => {
    switch (region) {
      case "eu": writeStorageValue("access_token_eu", value); break;
      case "na": writeStorageValue("access_token_na", value); break;
    }
  },
  
  readClientID: () => readStorageValue("client_id"),
  readClientSecret: () => readStorageValue("client_secret"),

};
