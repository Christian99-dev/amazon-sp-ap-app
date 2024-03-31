import { CountryData } from "./lib/countrys";
import type { API } from "./types/electronAPI";

type ManageTokenIPCResponse = {
  code: number;
  message: string;
  access_token: string;
};

type GetListingForAsinsIPCResponse = {
  code: number;
  message: string;
  response: GetListingForAsinsResponse;
};

type GetListingForAsinsResponse = {
  response_na: Items | undefined;
  response_eu: Items | undefined;
};

type Items = {
  responses: {
    status: {
      statusCode;
    };
    body: {
      payload: {
        marketplaceId: string;
        Summary: {
          LowestPrices: {
            ListingPrice: {
              CurrencyCode: string;
              Amount: number;
            };
          }[];
          TotalOfferCount: number;
        };
      };
    };
  }[];
};

type ChangeCredentialsIPCResponse = {
  code: number;
  message: string;
};

type GetCredentialsIPCResponse = {
  code: number;
  message: string;
  value: string;
}

declare global {
  interface Window {
    api: {
      manageToken: (
        region: Region,
        action: "refresh" | "get"
      ) => Promise<ManageTokenIPCResponse>;

      getListingForAsins: (
        countrys: CountryData[],
        asins: string[],
        access_token_eu: string,
        access_token_na: string
      ) => Promise<GetListingForAsinsIPCResponse>;

      changeCredentials: (
        id:
          | "client_id"
          | "client_secret"
          | "refresh_token_eu"
          | "refresh_token_na",
        value: string
      ) => Promise<ChangeCredentialsIPCResponse>;

      getCredentials: (
        id:
          | "client_id"
          | "client_secret"
          | "refresh_token_eu"
          | "refresh_token_na"
      ) => Promise<GetCredentialsIPCResponse>;
    };
  }
}
