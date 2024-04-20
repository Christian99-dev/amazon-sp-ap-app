import {
  getCountryCodeFromMarketplaceID,
  getCountryIndex,
} from "../lib/countrys";

export const parseAmazonListingItemsToProducts = (
  itemsOnMarketplaceAmazonResponse: ItemsOnMarketplaceAmazonResponse[]
): ProductsInMarketplace[] => {
  let products: ProductsInMarketplace[] = [];

  // Go through every marketplace
  itemsOnMarketplaceAmazonResponse.forEach(
    ({
      status: { statusCode },
      request: { MarketplaceId },
      body: { payload },
    }) => {
      // Prepare
      let singleProducts: SingleProduct[] = [];
      let countryCode: string | undefined = "";
      let offers = [];

      // ASIN not found in marketplace
      if (statusCode !== 200) return;
      if (payload.Offers.length === 0) return;

      offers = payload.Offers;

      // Countrycode
      countryCode = getCountryCodeFromMarketplaceID(MarketplaceId) || undefined;

      // Marketpalce ID is not found, should happen anyway.
      if (countryCode === undefined) return;

      // Sortiere die Angebote nach dem Preis absteigend
      offers.sort((a, b) => {
        return (
          a.ListingPrice.Amount +
          a.Shipping.Amount -
          (b.ListingPrice.Amount - b.Shipping.Amount)
        );
      });

      // parse single products
      singleProducts = offers.map(
        ({
          SellerId,
          ListingPrice: { CurrencyCode, Amount: ListingAmount },
          Shipping: { Amount: ShippingAmount },
          ShipsFrom,
          SellerFeedbackRating: { SellerPositiveFeedbackRating },
        }) => {
          return {
            listingPrice: ListingAmount,
            shippingPrice: ShippingAmount,
            landedPrice:
              Math.round((ListingAmount + ShippingAmount) * 100) / 100,
            currencyCode: CurrencyCode,
            shipsFrom: ShipsFrom ? ShipsFrom.Country : "",
            sellerID: SellerId,
            rating: SellerPositiveFeedbackRating,
          };
        }
      );

      products.push({
        countryCode: countryCode,
        products: singleProducts,
      });
    }
  );

  // Sortiere die Produkte basierend auf der countryCodeIndexMap
  products.sort((a, b) => {
    const indexA = getCountryIndex(a.countryCode);
    const indexB = getCountryIndex(b.countryCode);

    // Wenn einer der Ländercodes nicht in der Map gefunden wird, sortiere sie nicht um
    if (indexA === undefined || indexB === undefined) return 0;

    return indexA - indexB;
  });

  return products;
};
