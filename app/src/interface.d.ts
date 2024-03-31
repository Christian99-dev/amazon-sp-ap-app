import { PossibleCredentialIDs } from "./context/credentlalsContext";
import { CountryData } from "./lib/countrys";
import type { API } from "./types/electronAPI";

type ManageTokenIPCResponse = {
  code: number;
  message: string;
  access_token: string;
};

type ChangeCredentialsIPCResponse = {
  code: number;
  message: string;
};

type GetCredentialsIPCResponse = {
  code: number;
  message: string;
  value: string;
};

type GetListingForAsinIPCResponse = {
  code: number;
  message: string;
  response: {
    response_eu:
      | {
          responses: ItemsOnMarketplaceAmazonResponse[];
        }
      | undefined;
    response_na:
      | {
          responses: ItemsOnMarketplaceAmazonResponse[];
        }
      | undefined;
  };
};

// AMAZON REPONSE FOR SINGLE ITEM
type ItemsOnMarketplaceAmazonResponse = {
  headers: {
    "x-amzn-RequestId": string;
    Date: string;
  };
  status: {
    statusCode: number;
    reasonPhrase: string;
  };
  body: {
    payload: {
      marketplaceId: string;
      Identifier: {
        ASIN: string;
        MarketplaceId: string;
        ItemCondition: string;
      };
      ASIN: string;
      Summary: {
        BuyBoxPrices: Array<{
          condition: string;
          LandedPrice: {
            CurrencyCode: string;
            Amount: number;
          };
          Shipping: {
            CurrencyCode: string;
            Amount: number;
          };
          ListingPrice: {
            CurrencyCode: string;
            Amount: number;
          };
        }>;
        BuyBoxEligibleOffers: Array<{
          condition: string;
          fulfillmentChannel: string;
          OfferCount: number;
        }>;
        LowestPrices: Array<{
          condition: string;
          fulfillmentChannel: string;
          LandedPrice: {
            CurrencyCode: string;
            Amount: number;
          };
          Shipping: {
            CurrencyCode: string;
            Amount: number;
          };
          ListingPrice: {
            CurrencyCode: string;
            Amount: number;
          };
        }>;
        NumberOfOffers: Array<{
          condition: string;
          fulfillmentChannel: string;
          OfferCount: number;
        }>;
        TotalOfferCount: number;
        SalesRankings: Array<{
          Rank: number;
          ProductCategoryId: string;
        }>;
      };
      Offers: Array<{
        ShippingTime: {
          minimumHours: number;
          maximumHours: number;
          availabilityType: string;
        };
        IsFulfilledByAmazon: boolean;
        ListingPrice: {
          CurrencyCode: string;
          Amount: number;
        };
        IsBuyBoxWinner: boolean;
        SellerId: string;
        Shipping: {
          CurrencyCode: string;
          Amount: number;
        };
        ShipsFrom: {
          Country: string;
        };
        SubCondition: string;
        IsFeaturedMerchant: boolean;
        SellerFeedbackRating: {
          FeedbackCount: number;
          SellerPositiveFeedbackRating: number;
        };
      }>;
      status: string;
      ItemCondition: string;
    };
  };
  request: {
    MarketplaceId: string;
    ItemCondition: string;
    Asin: string;
  };
};

declare global {
  interface Window {
    api: {
      manageToken: (
        region: Region,
        action: "refresh" | "get"
      ) => Promise<ManageTokenIPCResponse>;

      getListingForAsin: (
        countrys: CountryData[],
        asin: string,
        access_token_eu: string,
        access_token_na: string
      ) => Promise<GetListingForAsinIPCResponse>;

      changeCredentials: (
        id: PossibleCredentialIDs,
        value: string
      ) => Promise<ChangeCredentialsIPCResponse>;

      getCredentials: (
        id: PossibleCredentialIDs
      ) => Promise<GetCredentialsIPCResponse>;
    };
  }
}
