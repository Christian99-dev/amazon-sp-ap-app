const fs = require("fs");
const path = require("path");


/** 
 * STORAGE SCHEMA 
 * */
// export type storageSchema = {
//   access_token_eu: "string";
//   access_token_na: "string";
//   client_id: "string";
//   client_secret: "string";
//   refresh_token_eu: "string";
//   refresh_token_na: "string";
// };

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
  let storage = {};
  const data = fs.readFileSync(PATH, "utf8");
  storage = JSON.parse(data);
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
