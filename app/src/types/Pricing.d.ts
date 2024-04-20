type ProductsInMarketplace = {
  countryCode: string;
  products: SingleProduct[];
};

type SingleProduct = {
  shippingPrice: number;
  listingPrice: number;
  landedPrice: number;
  currencyCode: string;
  shipsFrom: string;
  sellerID: string;
  rating: number;
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
