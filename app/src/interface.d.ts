import type { API } from "./types/electronAPI";

declare global {
  interface Window {
    api: API;
    ipcRenderer: any;
  }
}
