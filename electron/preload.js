const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  manageToken: (region, action) =>
    ipcRenderer.invoke("manage_token", { region: region, action: action }),

  getListingForAsins: (coutrys, asins, access_token_eu, access_token_na) =>
    ipcRenderer.invoke("get_listing_for_asins", {
      coutrys: coutrys,
      asins: asins,
      access_token_eu: access_token_eu,
      access_token_na: access_token_na,
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
