const dummyData = {
    "responses": [
      {
        "headers": {
          "x-amzn-RequestId": "d54e45a5-da12-4daf-b279-4b04c9cf4998",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "A2EUQ1WTGCTBG2",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "A2EUQ1WTGCTBG2",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "TotalOfferCount": 0
            },
            "Offers": [],
            "status": "NoBuyableOffers",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "A2EUQ1WTGCTBG2",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "5b383826-79d0-43c8-ad6e-cb9fd56f371f",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "ATVPDKIKX0DER",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "ATVPDKIKX0DER",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "BuyBoxEligibleOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 1
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 2
                }
              ],
              "LowestPrices": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "USD",
                    "Amount": 69.99
                  },
                  "Shipping": {
                    "CurrencyCode": "USD",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "USD",
                    "Amount": 69.99
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "USD",
                    "Amount": 60
                  },
                  "Shipping": {
                    "CurrencyCode": "USD",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "USD",
                    "Amount": 60
                  }
                }
              ],
              "BuyBoxPrices": [
                {
                  "condition": "New",
                  "LandedPrice": {
                    "CurrencyCode": "USD",
                    "Amount": 60
                  },
                  "Shipping": {
                    "CurrencyCode": "USD",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "USD",
                    "Amount": 60
                  }
                }
              ],
              "NumberOfOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 1
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 2
                }
              ],
              "ListPrice": {
                "CurrencyCode": "USD",
                "Amount": 32.74
              },
              "TotalOfferCount": 3,
              "SalesRankings": [
                {
                  "Rank": 236598,
                  "ProductCategoryId": "toy_display_on_website"
                },
                {
                  "Rank": 1110,
                  "ProductCategoryId": "23478735011"
                }
              ]
            },
            "Offers": [
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "USD",
                  "Amount": 60
                },
                "IsBuyBoxWinner": true,
                "SellerId": "A3L0D1A73IIGAK",
                "Shipping": {
                  "CurrencyCode": "USD",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "US",
                  "State": "FL"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 1,
                  "SellerPositiveFeedbackRating": 0
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "USD",
                  "Amount": 69.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3SDNN4CWYFLCS",
                "Shipping": {
                  "CurrencyCode": "USD",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 2737,
                  "SellerPositiveFeedbackRating": 100
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "USD",
                  "Amount": 45.6
                },
                "IsBuyBoxWinner": false,
                "SellerId": "AP3VA1GJZM3EQ",
                "Shipping": {
                  "CurrencyCode": "USD",
                  "Amount": 31.3
                },
                "ShipsFrom": {
                  "Country": "LU"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                }
              }
            ],
            "status": "Success",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "ATVPDKIKX0DER",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "845c2a22-8f03-4b56-bfc5-def0050cbc7f",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "A1AM78C64UM0Y8",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "A1AM78C64UM0Y8",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "TotalOfferCount": 0
            },
            "Offers": [],
            "status": "NoBuyableOffers",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "A1AM78C64UM0Y8",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "3f7c3520-ac19-4fb5-a8ed-ff5d21dd1da9",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 400,
          "reasonPhrase": "Bad Request"
        },
        "body": {
          "errors": [
            {
              "message": "B08VY6GW8Q is an invalid ASIN for marketplace A2Q3Y263D00KWC",
              "details": "",
              "code": "InvalidInput"
            }
          ]
        },
        "request": {
          "MarketplaceId": "A2Q3Y263D00KWC",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "062a0071-0596-4a2e-9394-d36a8cdc08a7",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "A1PA6795UKMFR9",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "A1PA6795UKMFR9",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "BuyBoxEligibleOffers": [
                {
                  "condition": "used",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 1
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 13
                }
              ],
              "LowestPrices": [
                {
                  "condition": "used",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 24.89
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 5.9
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 18.99
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 37.99
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 37.99
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 25.38
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 25.38
                  }
                }
              ],
              "BuyBoxPrices": [
                {
                  "condition": "New",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 25.41
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 25.41
                  }
                },
                {
                  "condition": "Used",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 24.89
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 5.9
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 18.99
                  }
                }
              ],
              "CompetitivePriceThreshold": {
                "CurrencyCode": "EUR",
                "Amount": 45.22
              },
              "NumberOfOffers": [
                {
                  "condition": "used",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 1
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 13
                }
              ],
              "TotalOfferCount": 16,
              "SalesRankings": [
                {
                  "Rank": 1517,
                  "ProductCategoryId": "toy_display_on_website"
                },
                {
                  "Rank": 5,
                  "ProductCategoryId": "26208002031"
                }
              ]
            },
            "Offers": [
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 25.38
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A33SXG4HFQULNN",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 33331,
                  "SellerPositiveFeedbackRating": 90
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 1,
                  "maximumHours": 1,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 25.41
                },
                "IsBuyBoxWinner": true,
                "SellerId": "A27UBY0SF576T6",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 1680,
                  "SellerPositiveFeedbackRating": 93
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": false
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 27
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A264MFVM5P7RYE",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 2,
                  "SellerPositiveFeedbackRating": 100
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 29
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A2S9HIV3DW7M56",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 8,
                  "SellerPositiveFeedbackRating": 88
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 31.49
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A16HS8Q96720TH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 2,
                  "SellerPositiveFeedbackRating": 100
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 25.19
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1BHXCKZ5W2F8Q",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 6.91
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 3,
                  "SellerPositiveFeedbackRating": 100
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 27.29
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3RCLM136REFIQ",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 5
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 1264,
                  "SellerPositiveFeedbackRating": 82
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 1,
                  "maximumHours": 1,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 32.95
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3UIA61L5EULPF",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 12897,
                  "SellerPositiveFeedbackRating": 90
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": false
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 48,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 34.5
                },
                "IsBuyBoxWinner": false,
                "SellerId": "AQKED359RSXTK",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 8,
                  "SellerPositiveFeedbackRating": 100
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 48,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 36.98
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1TZJTAKU0T0RH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 1506,
                  "SellerPositiveFeedbackRating": 84
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 48,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 37
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A4U6OD2LQP0PJ",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 37.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1HQF924B6N6A2",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 21,
                  "SellerPositiveFeedbackRating": 95
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 31
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A2NCDMKAX2SLPQ",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 11.5
                },
                "ShipsFrom": {
                  "Country": "AT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 55,
                  "SellerPositiveFeedbackRating": 96
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 45.22
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3JWKAKR8XB7XF",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 5,
                  "SellerPositiveFeedbackRating": 20
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 40.93
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3W3CWOYWEOFZH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 7.94
                },
                "ShipsFrom": {
                  "Country": "IT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 455,
                  "SellerPositiveFeedbackRating": 88
                }
              }
            ],
            "status": "Success",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "A1PA6795UKMFR9",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "5202690a-4fa8-4395-bcec-6e1e1b3bb805",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "A1RKKUPIHCS9HS",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "A1RKKUPIHCS9HS",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "BuyBoxPrices": [
                {
                  "condition": "New",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 32.7
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 32.7
                  }
                },
                {
                  "condition": "Used",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 28.5
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 28.5
                  }
                }
              ],
              "BuyBoxEligibleOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 3
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 1
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 6
                }
              ],
              "LowestPrices": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 32.7
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 32.7
                  }
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 28.5
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 28.5
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 33.29
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 33.29
                  }
                }
              ],
              "NumberOfOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 3
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 1
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 6
                }
              ],
              "TotalOfferCount": 10,
              "SalesRankings": [
                {
                  "Rank": 741,
                  "ProductCategoryId": "toy_display_on_website"
                },
                {
                  "Rank": 2,
                  "ProductCategoryId": "26207996031"
                }
              ]
            },
            "Offers": [
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 32.7
                },
                "IsBuyBoxWinner": true,
                "SellerId": "A1AT7YVPFBWXBL",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 33.29
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A33SXG4HFQULNN",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 10097,
                  "SellerPositiveFeedbackRating": 83
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 44
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3J2UKWQF5FE1L",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 3,
                  "SellerPositiveFeedbackRating": 100
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 40.59
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3W3CWOYWEOFZH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 7.44
                },
                "ShipsFrom": {
                  "Country": "IT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 559,
                  "SellerPositiveFeedbackRating": 78
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 38
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A2NCDMKAX2SLPQ",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 12.5
                },
                "ShipsFrom": {
                  "Country": "AT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 5,
                  "SellerPositiveFeedbackRating": 60
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 50.42
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A2EL6K6KDM9FO1",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 3.99
                },
                "ShipsFrom": {
                  "Country": "UK"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 48,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 57.95
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1TZJTAKU0T0RH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 227,
                  "SellerPositiveFeedbackRating": 92
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 59.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3UT692XUVHG0O",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 121,
                  "SellerPositiveFeedbackRating": 91
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 59.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3RCLM136REFIQ",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 17,
                  "SellerPositiveFeedbackRating": 65
                }
              }
            ],
            "status": "Success",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "A1RKKUPIHCS9HS",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "eb2756d5-6945-4fec-a5bc-0b776e37e371",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "A13V1IB3VIYZZH",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "A13V1IB3VIYZZH",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "BuyBoxEligibleOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 3
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 6
                }
              ],
              "LowestPrices": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 34.82
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 34.82
                  }
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 29.36
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 29.36
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 35.67
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 35.67
                  }
                }
              ],
              "BuyBoxPrices": [
                {
                  "condition": "New",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 34.82
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 34.82
                  }
                },
                {
                  "condition": "Used",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 29.36
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 29.36
                  }
                }
              ],
              "CompetitivePriceThreshold": {
                "CurrencyCode": "EUR",
                "Amount": 44.18
              },
              "NumberOfOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 3
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 6
                }
              ],
              "TotalOfferCount": 11,
              "SalesRankings": [
                {
                  "Rank": 2906,
                  "ProductCategoryId": "toy_display_on_website"
                },
                {
                  "Rank": 15,
                  "ProductCategoryId": "26207998031"
                }
              ]
            },
            "Offers": [
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 34.82
                },
                "IsBuyBoxWinner": true,
                "SellerId": "A1X6FK5RDHNB96",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 35.67
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A33SXG4HFQULNN",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 16719,
                  "SellerPositiveFeedbackRating": 89
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 45.06
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3UT692XUVHG0O",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 4069,
                  "SellerPositiveFeedbackRating": 96
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 46.9
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A2W68NJA5YNXUP",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 2472,
                  "SellerPositiveFeedbackRating": 88
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 50
                },
                "IsBuyBoxWinner": false,
                "SellerId": "ATQZ2A1KZQ0X2",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "GB"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 48.05
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A32TUIRBZQ7RDO",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 4.99
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 44,
                  "SellerPositiveFeedbackRating": 80
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 46.89
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3W3CWOYWEOFZH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 8.94
                },
                "ShipsFrom": {
                  "Country": "IT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 820,
                  "SellerPositiveFeedbackRating": 85
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 48,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 58.97
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1TZJTAKU0T0RH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 575,
                  "SellerPositiveFeedbackRating": 92
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 58.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3RCLM136REFIQ",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 54,
                  "SellerPositiveFeedbackRating": 75
                }
              }
            ],
            "status": "Success",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "A13V1IB3VIYZZH",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "b8507db1-11b8-4803-9ce6-4b8e8c5a020d",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "AMEN7PMS3EDWL",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "AMEN7PMS3EDWL",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "BuyBoxEligibleOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 4
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 3
                }
              ],
              "LowestPrices": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 35.11
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 35.11
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 35.1
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 35.1
                  }
                }
              ],
              "BuyBoxPrices": [
                {
                  "condition": "New",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 35.11
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 35.11
                  }
                }
              ],
              "CompetitivePriceThreshold": {
                "CurrencyCode": "EUR",
                "Amount": 46.53
              },
              "NumberOfOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 4
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 3
                }
              ],
              "TotalOfferCount": 7,
              "SalesRankings": [
                {
                  "Rank": 4927,
                  "ProductCategoryId": "toy_display_on_website"
                },
                {
                  "Rank": 23,
                  "ProductCategoryId": "27631066031"
                }
              ]
            },
            "Offers": [
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 35.1
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A33SXG4HFQULNN",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 50,
                  "SellerPositiveFeedbackRating": 86
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 35.11
                },
                "IsBuyBoxWinner": true,
                "SellerId": "A3Q3FYJVX702M2",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 56.51
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3J2UKWQF5FE1L",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 46.89
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3W3CWOYWEOFZH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 10.44
                },
                "ShipsFrom": {
                  "Country": "IT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 9,
                  "SellerPositiveFeedbackRating": 89
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 59
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1HQF924B6N6A2",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 59.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3UT692XUVHG0O",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 48,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 57.95
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1TZJTAKU0T0RH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 19.9
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                }
              }
            ],
            "status": "Success",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "AMEN7PMS3EDWL",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "6f1d18bf-1238-4114-ad27-96cac41e1d2f",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "A1805IZSGTT6HS",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "A1805IZSGTT6HS",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "BuyBoxEligibleOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 1
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 5
                }
              ],
              "LowestPrices": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 37.69
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 37.69
                  }
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 26.52
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 26.52
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 38.06
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 38.06
                  }
                }
              ],
              "BuyBoxPrices": [
                {
                  "condition": "New",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 37.69
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 37.69
                  }
                },
                {
                  "condition": "Used",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 26.52
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 26.52
                  }
                }
              ],
              "CompetitivePriceThreshold": {
                "CurrencyCode": "EUR",
                "Amount": 46.53
              },
              "NumberOfOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 1
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 5
                }
              ],
              "TotalOfferCount": 8,
              "SalesRankings": [
                {
                  "Rank": 18717,
                  "ProductCategoryId": "toy_display_on_website"
                },
                {
                  "Rank": 84,
                  "ProductCategoryId": "26207992031"
                }
              ]
            },
            "Offers": [
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 37.69
                },
                "IsBuyBoxWinner": true,
                "SellerId": "A17D2BRD4YMT0X",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 38.06
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A33SXG4HFQULNN",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 193,
                  "SellerPositiveFeedbackRating": 64
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 38
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A2NCDMKAX2SLPQ",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 12.5
                },
                "ShipsFrom": {
                  "Country": "AT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 48,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 57.95
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1TZJTAKU0T0RH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 1,
                  "SellerPositiveFeedbackRating": 0
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 46.89
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3W3CWOYWEOFZH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 12.66
                },
                "ShipsFrom": {
                  "Country": "IT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 7,
                  "SellerPositiveFeedbackRating": 71
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 64.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3RCLM136REFIQ",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 2,
                  "SellerPositiveFeedbackRating": 50
                }
              }
            ],
            "status": "Success",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "A1805IZSGTT6HS",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "7c84010c-c116-47e1-82c2-ad409fe7c8a4",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "APJ6JRA9NG5V4",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "APJ6JRA9NG5V4",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "BuyBoxPrices": [
                {
                  "condition": "New",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 43.88
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 43.88
                  }
                },
                {
                  "condition": "Used",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 26.95
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 26.95
                  }
                }
              ],
              "BuyBoxEligibleOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 6
                }
              ],
              "LowestPrices": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 48.85
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 48.85
                  }
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 26.95
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 26.95
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 43.88
                  },
                  "Shipping": {
                    "CurrencyCode": "EUR",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "EUR",
                    "Amount": 43.88
                  }
                }
              ],
              "NumberOfOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 6
                }
              ],
              "TotalOfferCount": 10,
              "SalesRankings": [
                {
                  "Rank": 3341,
                  "ProductCategoryId": "toy_display_on_website"
                },
                {
                  "Rank": 14,
                  "ProductCategoryId": "26207988031"
                }
              ]
            },
            "Offers": [
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 43.88
                },
                "IsBuyBoxWinner": true,
                "SellerId": "A33SXG4HFQULNN",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 12162,
                  "SellerPositiveFeedbackRating": 87
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 43.89
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3W3CWOYWEOFZH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "IT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 5960,
                  "SellerPositiveFeedbackRating": 94
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 48.85
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1TMZHY2SHKLH2",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 3007,
                  "SellerPositiveFeedbackRating": 91
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 38
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A2NCDMKAX2SLPQ",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 12
                },
                "ShipsFrom": {
                  "Country": "AT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 14,
                  "SellerPositiveFeedbackRating": 79
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 51.35
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A11IL2PNWYJU7H",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 52.57
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3R2BN8GAL312Z",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 3.99
                },
                "ShipsFrom": {
                  "Country": "UK"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 48,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 57.95
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1TZJTAKU0T0RH",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 331,
                  "SellerPositiveFeedbackRating": 98
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "EUR",
                  "Amount": 58.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3RCLM136REFIQ",
                "Shipping": {
                  "CurrencyCode": "EUR",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 30,
                  "SellerPositiveFeedbackRating": 83
                }
              }
            ],
            "status": "Success",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "APJ6JRA9NG5V4",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "9ea41436-900e-46dc-8621-0b71b83dc404",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "A2NODRKZP88ZB9",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "A2NODRKZP88ZB9",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "BuyBoxEligibleOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 3
                }
              ],
              "LowestPrices": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "SEK",
                    "Amount": 549
                  },
                  "Shipping": {
                    "CurrencyCode": "SEK",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "SEK",
                    "Amount": 549
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "SEK",
                    "Amount": 548.99
                  },
                  "Shipping": {
                    "CurrencyCode": "SEK",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "SEK",
                    "Amount": 548.99
                  }
                }
              ],
              "BuyBoxPrices": [
                {
                  "condition": "New",
                  "LandedPrice": {
                    "CurrencyCode": "SEK",
                    "Amount": 552.16
                  },
                  "Shipping": {
                    "CurrencyCode": "SEK",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "SEK",
                    "Amount": 552.16
                  }
                }
              ],
              "NumberOfOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 3
                }
              ],
              "ListPrice": {
                "CurrencyCode": "SEK",
                "Amount": 0
              },
              "TotalOfferCount": 5,
              "SalesRankings": [
                {
                  "Rank": 29319,
                  "ProductCategoryId": "toy_display_on_website"
                },
                {
                  "Rank": 212,
                  "ProductCategoryId": "26207994031"
                }
              ]
            },
            "Offers": [
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "SEK",
                  "Amount": 548.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A33SXG4HFQULNN",
                "Shipping": {
                  "CurrencyCode": "SEK",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 103,
                  "SellerPositiveFeedbackRating": 51
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "SEK",
                  "Amount": 549
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1HQF924B6N6A2",
                "Shipping": {
                  "CurrencyCode": "SEK",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "SEK",
                  "Amount": 552.16
                },
                "IsBuyBoxWinner": true,
                "SellerId": "ANU9KP01APNAG",
                "Shipping": {
                  "CurrencyCode": "SEK",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 48,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "SEK",
                  "Amount": 649.12
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1TZJTAKU0T0RH",
                "Shipping": {
                  "CurrencyCode": "SEK",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 1,
                  "SellerPositiveFeedbackRating": 100
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "SEK",
                  "Amount": 535.46
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3W3CWOYWEOFZH",
                "Shipping": {
                  "CurrencyCode": "SEK",
                  "Amount": 189.38
                },
                "ShipsFrom": {
                  "Country": "IT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 2,
                  "SellerPositiveFeedbackRating": 50
                }
              }
            ],
            "status": "Success",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "A2NODRKZP88ZB9",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "40c54d51-065d-4eec-9fe3-988291f396fd",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "A1C3SOZRARQ6R3",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "A1C3SOZRARQ6R3",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "BuyBoxEligibleOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 1
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 3
                }
              ],
              "LowestPrices": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "PLN",
                    "Amount": 194
                  },
                  "Shipping": {
                    "CurrencyCode": "PLN",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "PLN",
                    "Amount": 194
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "PLN",
                    "Amount": 193.99
                  },
                  "Shipping": {
                    "CurrencyCode": "PLN",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "PLN",
                    "Amount": 193.99
                  }
                }
              ],
              "BuyBoxPrices": [
                {
                  "condition": "New",
                  "LandedPrice": {
                    "CurrencyCode": "PLN",
                    "Amount": 194
                  },
                  "Shipping": {
                    "CurrencyCode": "PLN",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "PLN",
                    "Amount": 194
                  }
                }
              ],
              "CompetitivePriceThreshold": {
                "CurrencyCode": "PLN",
                "Amount": 214
              },
              "NumberOfOffers": [
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 1
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 3
                }
              ],
              "ListPrice": {
                "CurrencyCode": "PLN",
                "Amount": 0
              },
              "TotalOfferCount": 4,
              "SalesRankings": [
                {
                  "Rank": 34158,
                  "ProductCategoryId": "toy_display_on_website"
                },
                {
                  "Rank": 184,
                  "ProductCategoryId": "26207986031"
                }
              ]
            },
            "Offers": [
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "PLN",
                  "Amount": 193.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A33SXG4HFQULNN",
                "Shipping": {
                  "CurrencyCode": "PLN",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 194,
                  "SellerPositiveFeedbackRating": 86
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "PLN",
                  "Amount": 194
                },
                "IsBuyBoxWinner": true,
                "SellerId": "A2R2221NX79QZP",
                "Shipping": {
                  "CurrencyCode": "PLN",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 48,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "PLN",
                  "Amount": 202.76
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A1TZJTAKU0T0RH",
                "Shipping": {
                  "CurrencyCode": "PLN",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 2,
                  "SellerPositiveFeedbackRating": 50
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "PLN",
                  "Amount": 201.11
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3W3CWOYWEOFZH",
                "Shipping": {
                  "CurrencyCode": "PLN",
                  "Amount": 39.78
                },
                "ShipsFrom": {
                  "Country": "IT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 7,
                  "SellerPositiveFeedbackRating": 100
                }
              }
            ],
            "status": "Success",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "A1C3SOZRARQ6R3",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      },
      {
        "headers": {
          "x-amzn-RequestId": "b31bd396-6f7e-4824-b9f7-dec101320983",
          "Date": "Wed, 03 Apr 2024 00:03:36 GMT"
        },
        "status": {
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "body": {
          "payload": {
            "marketplaceId": "A1F83G8C2ARO7P",
            "Identifier": {
              "ASIN": "B08VY6GW8Q",
              "MarketplaceId": "A1F83G8C2ARO7P",
              "ItemCondition": "New"
            },
            "ASIN": "B08VY6GW8Q",
            "Summary": {
              "BuyBoxEligibleOffers": [
                {
                  "condition": "used",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 8
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 4
                }
              ],
              "LowestPrices": [
                {
                  "condition": "used",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 30.98
                  },
                  "Shipping": {
                    "CurrencyCode": "GBP",
                    "Amount": 1.99
                  },
                  "ListingPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 28.99
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 21.4
                  },
                  "Shipping": {
                    "CurrencyCode": "GBP",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 21.4
                  }
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "LandedPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 20.97
                  },
                  "Shipping": {
                    "CurrencyCode": "GBP",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 20.97
                  }
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "LandedPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 21.4
                  },
                  "Shipping": {
                    "CurrencyCode": "GBP",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 21.4
                  }
                }
              ],
              "BuyBoxPrices": [
                {
                  "condition": "New",
                  "LandedPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 21.4
                  },
                  "Shipping": {
                    "CurrencyCode": "GBP",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 21.4
                  }
                },
                {
                  "condition": "Used",
                  "LandedPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 20.97
                  },
                  "Shipping": {
                    "CurrencyCode": "GBP",
                    "Amount": 0
                  },
                  "ListingPrice": {
                    "CurrencyCode": "GBP",
                    "Amount": 20.97
                  }
                }
              ],
              "CompetitivePriceThreshold": {
                "CurrencyCode": "GBP",
                "Amount": 48.99
              },
              "NumberOfOffers": [
                {
                  "condition": "used",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 8
                },
                {
                  "condition": "used",
                  "fulfillmentChannel": "Amazon",
                  "OfferCount": 2
                },
                {
                  "condition": "new",
                  "fulfillmentChannel": "Merchant",
                  "OfferCount": 4
                }
              ],
              "TotalOfferCount": 16,
              "SalesRankings": [
                {
                  "Rank": 2159,
                  "ProductCategoryId": "toy_display_on_website"
                },
                {
                  "Rank": 9,
                  "ProductCategoryId": "26208008031"
                }
              ]
            },
            "Offers": [
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 21.4
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3P5ROKL5A1OLE",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 21.4
                },
                "IsBuyBoxWinner": true,
                "SellerId": "A3P5ROKL5A1OLE",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 0,
                  "SellerPositiveFeedbackRating": 0
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 30.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A2WSNAT3QS08X7",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 50,
                  "SellerPositiveFeedbackRating": 100
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 31.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A32TUIRBZQ7RDO",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 1594,
                  "SellerPositiveFeedbackRating": 67
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 32
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A17EF3WTNFYXAW",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 165,
                  "SellerPositiveFeedbackRating": 98
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 32.98
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A2COJ2G1WBT46C",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 2,
                  "SellerPositiveFeedbackRating": 50
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 36.25
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A33SXG4HFQULNN",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 0
                },
                "ShipsFrom": {
                  "Country": "DE"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 23339,
                  "SellerPositiveFeedbackRating": 77
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 41.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "AQ4Q40P708ACP",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 3,
                  "SellerPositiveFeedbackRating": 100
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 42.99
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3JQCN9I96KLKW",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 1,
                  "SellerPositiveFeedbackRating": 100
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 39.79
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A30DC7701CXIBH",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 4.49
                },
                "ShipsFrom": {
                  "Country": "LU"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 250227,
                  "SellerPositiveFeedbackRating": 75
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 24,
                  "maximumHours": 24,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": false,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 37.01
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A3W3CWOYWEOFZH",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 9.44
                },
                "ShipsFrom": {
                  "Country": "IT"
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 275,
                  "SellerPositiveFeedbackRating": 86
                }
              },
              {
                "ShippingTime": {
                  "minimumHours": 0,
                  "maximumHours": 0,
                  "availabilityType": "NOW"
                },
                "IsFulfilledByAmazon": true,
                "ListingPrice": {
                  "CurrencyCode": "GBP",
                  "Amount": 48
                },
                "IsBuyBoxWinner": false,
                "SellerId": "A25W8OV8085MFX",
                "Shipping": {
                  "CurrencyCode": "GBP",
                  "Amount": 0
                },
                "SubCondition": "new",
                "IsFeaturedMerchant": true,
                "SellerFeedbackRating": {
                  "FeedbackCount": 6,
                  "SellerPositiveFeedbackRating": 100
                },
                "PrimeInformation": {
                  "IsPrime": true,
                  "IsNationalPrime": true
                }
              }
            ],
            "status": "Success",
            "ItemCondition": "New"
          }
        },
        "request": {
          "MarketplaceId": "A1F83G8C2ARO7P",
          "ItemCondition": "New",
          "Asin": "B08VY6GW8Q"
        }
      }
    ]
  }
  

module.exports = async (region, access_token, body) => {
  let testing = true;
  let response;

  let endpoint =
    region === "na"
      ? "https://sellingpartnerapi-na.amazon.com"
      : "https://sellingpartnerapi-eu.amazon.com";

  if (testing) {
    // Führe die gleiche Logik durch, aber gib stattdessen den Test-Token zurück
    response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          status: 200,
          statusText: "OK",
          json: async () => {
            return dummyData
          },
        });
      }, 500);
    });
  } else {
    try {
      response = await fetch(
        `${endpoint}/batches/products/pricing/v0/itemOffers`,
        {
          method: "POST",
          headers: {
            "x-amz-access-token": access_token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requests: body,
          }),
        }
      );
    } catch (error) {
      throw new Error("Unbekannter Fehler");
    }
  }

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
