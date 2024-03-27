const { contextBridge, ipcRenderer } = require("electron");

// Bridge to window
const API = {
  manageToken: (region, action) =>
    ipcRenderer.invoke("manage_token", { region: region, action: action }),
};

contextBridge.exposeInMainWorld("api", API);
