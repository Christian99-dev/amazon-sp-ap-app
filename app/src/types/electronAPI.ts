import { Region } from "../amazon-api/lib/countrys";

export type API = {
  manageToken: (region: Region, action: "refresh" | "get") => Promise<string>;
}
