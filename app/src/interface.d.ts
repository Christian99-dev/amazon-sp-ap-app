import type { API } from "./types/electronAPI";

type ManageTokenIPCResponse = {
  code: number;
  message: string;
  access_token: string;
};

declare global {
  interface Window {
    api: {
      manageToken: (region: Region, action: "refresh" | "get") => Promise<ManageTokenIPCResponse>;
    }
  }
}
