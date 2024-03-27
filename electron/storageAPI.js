const fs = require("fs");
const path = require("path");

/**
 * CONFIG
 * */
const PATH = path.join(__dirname, "storage.json");

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
  readAccessTokenEU: () => readStorageValue("access_token_eu"),
  readAccessTokenNA: () => readStorageValue("access_token_na"),
  readClientID: () => readStorageValue("client_id"),
  readClientSecret: () => readStorageValue("client_secret"),
  readRefreshTokenEU: () => readStorageValue("refresh_token_eu"),
  readRefreshTokenNA: () => readStorageValue("refresh_token_na"),

  /** Write */
  writeAccessTokenEU: (value) => writeStorageValue("access_token_eu", value),
  writeAccessTokenNA: (value) => writeStorageValue("access_token_na", value),
};
