const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  manageToken: (region, action) =>
    ipcRenderer.invoke("manage_token", { region: region, action: action }),

  getListingForAsin: (
    coutrys,
    asin,
    condition
  ) =>
    ipcRenderer.invoke("get_listing_for_asin", {
      coutrys: coutrys,
      asin: asin,
      condition: condition
    }),

  changeCredentials: (id, value) =>
    ipcRenderer.invoke("change_credentials", {
      id: id,
      value: value,
    }),

  getCredentials: (id) =>
    ipcRenderer.invoke("get_credentials", {
      id: id,
    }),
});
