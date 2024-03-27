const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  manageToken: (region, action) =>
    ipcRenderer.invoke("manage_token", { region: region, action: action }),
});
