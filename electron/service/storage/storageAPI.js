const Store = require("electron-store");

/**
 * Store
 */
// prettier-ignore
const schema = {
  access_token_eu:  { type: "string", default:"" },
  access_token_na:  { type: "string", default:"" },
  client_id:        { type: "string", default:"" },
  client_secret:    { type: "string", default:"" },
  seller_id_eu:     { type: "string", default:"" },
  seller_id_na:     { type: "string", default:"" },
  refresh_token_eu: { type: "string", default:"" },
  refresh_token_na: { type: "string", default:"" },
};
const store = new Store({ schema });

/**
 * API
 * */
module.exports = {
  /** Read */
  readClientID:         () => store.get("client_id"),
  readClientSecret:     () => store.get("client_secret"),
  readSellerID:         (region) => store.get(`seller_id_${region}`),
  readAccessToken:      (region) => store.get(`access_token_${region}`),
  readRefreshToken:     (region) => store.get(`refresh_token_${region}`),

  /** Write */
  writeClientID:        (value) => store.set("client_id", value),
  writeClientSecret:    (value) => store.set("client_secret", value),
  writeSellerID:        (region, value) => store.set(`seller_id_${region}`, value),
  writeAccessToken:     (region, value) => store.set(`access_token_${region}`, value),
  writeRefreshToken:    (region, value) => store.set(`refresh_token_${region}`, value),
};
