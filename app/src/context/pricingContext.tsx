import { createContext, useContext, useState } from "react";
import { useOptionsContext } from "./optionsContext";
import { useCountryContext } from "./countryContext";
import { useTokenContext } from "./tokenContext";
import { useToastContext } from "./toastContext";
import { getCountryCodeFromMarketplaceID } from "../lib/countrys";
import { ItemsOnMarketplaceAmazonResponse } from "../interface";

interface PricingContextType {
  startSearching: () => void;
  currentProducts: ProductsInMarketplace[];
  isLoading: boolean;
}

export interface ProductsInMarketplace {
  countryCode: string;
  products: SingleProduct[];
}

interface SingleProduct {
  shippingPrice: number;
  listingPrice: number;
  landedPrice: number;
  currencyCode: string;
  shipsFrom: string;
  sellerID: string;
  rating: number;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

// Custom Hook, um auf den Kontext zuzugreifen
export const usePricingContext = () => {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error(
      "usePricingContext must be used within a SelectedCountriesProvider"
    );
  }
  return context;
};

// Provider-Komponente, um den Kontext bereitzustellen
export const PricingProvider = ({ children }: any) => {
  // State
  const [currentProducts, setCurrentProducts] = useState<
    ProductsInMarketplace[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  // Uses..
  const { asin, isValidAsin, condition } = useOptionsContext();
  const { selectedCountries, hasCountrysSelected } = useCountryContext();
  const {
    tokenState: { accessTokenEU, accessTokenNA },
  } = useTokenContext();
  const { showToast } = useToastContext();

  // Lib
  const parseAmazonListingItemsToProducts = (
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
        countryCode =
          getCountryCodeFromMarketplaceID(MarketplaceId) || undefined;

        // Marketpalce ID is not found, should happen anyway.
        if (countryCode === undefined) return;

        // Sortiere die Angebote nach dem Preis absteigend
        offers.sort((a, b) => {
          return a.ListingPrice.Amount - b.ListingPrice.Amount;
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

    // Sortiere die Produkte nach dem Ländercode, "DE" zuerst
    products.sort((a, b) => {
      if (a.countryCode === "DE") return -1;
      if (b.countryCode === "DE") return 1;
      return 0;
    });

    return products;
  };

  // Actions
  const startSearching = async () => {
    if (!window.api) return;

    setCurrentProducts([]);

    /**
     * Guards
     */
    if (!hasCountrysSelected) {
      showToast("Bitte ein Land Auswählen", "error");
      return;
    }

    if (!isValidAsin) {
      showToast("Bitte valide ASIN angeben", "error");
      return;
    }

    if (accessTokenEU === "" || accessTokenNA === "") {
      showToast("NA/EU Access Token fehlt", "error");
      return;
    }

    /**
     * Start fetch to amazon
     */
    setIsLoading(true);

    let ipcResponse;
    try {
      ipcResponse = await window.api.getListingForAsin(
        selectedCountries,
        asin,
        condition,
        accessTokenEU,
        accessTokenNA
      );
    } catch (error) {
      showToast("Unbekannter Fehler", "error");
      setIsLoading(false);
      return;
    }

    switch (ipcResponse.code) {
      case 21: {
        const parsedItems = parseAmazonListingItemsToProducts([
          ...(ipcResponse.response.response_na?.responses || []),
          ...(ipcResponse.response.response_eu?.responses || []),
        ]);

        if (parsedItems.length <= 0) {
          showToast("ASIN Zurzeit nicht Gelistet", "error");
          break;
        }

        setCurrentProducts(parsedItems);
        break;
      }

      case 42: {
        showToast(ipcResponse.message, "error");
        break;
      }
    }

    setIsLoading(false);
  };

  return (
    <PricingContext.Provider
      value={{ startSearching, currentProducts, isLoading }}
    >
      {children}
    </PricingContext.Provider>
  );
};
