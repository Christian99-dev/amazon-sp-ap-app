import { createContext, useContext, useState } from "react";
import { useAsinsContext } from "./asinsContext";
import { useCountryContext } from "./countryContext";
import { useTokenContext } from "./tokenContext";
import { useToastContext } from "./toastContext";
import { GetListingForAsinsResponse } from "../interface";
import { getCountryCodeFromMarketplaceID } from "../lib/countrys";

interface PricingContextType {
  startSearching: () => void;
  currentResponse: CountryProduct[];
  isLoading: boolean;
}

export interface CountryProduct {
  countryCode: string;
  CurrencyCode: string;
  prices: string[];
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
  const [currentResponse, setCurrentResponse] = useState<CountryProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Uses..
  const { getValidAsins, hasValidAsins } = useAsinsContext();
  const { selectedCountries, hasCountrysSelected } = useCountryContext();
  const {
    tokenState: { accessTokenEU, accessTokenNA },
  } = useTokenContext();
  const { showToast } = useToastContext();

  const startSearching = async () => {
    if (!window.api) return;

    setCurrentResponse([]);

    const parseItems = (
      input: GetListingForAsinsResponse
    ): CountryProduct[] => {
      let out: CountryProduct[] = [];

      // Putting all products in 1 array
      let rawProducts = [];
      if (input.response_eu) rawProducts.push(...input.response_eu.responses);
      if (input.response_na) rawProducts.push(...input.response_na.responses);

      // Strip 404´s
      rawProducts = rawProducts.filter(
        (product) => product.status.statusCode === 200
      );

      // Strip total offer 0
      rawProducts = rawProducts.filter(
        (product) => product.body.payload.Summary.TotalOfferCount > 0
      );

      // no products left...
      if (rawProducts.length === 0) return [];

      // Create CountryProduct objects
      const productMap = new Map<string, CountryProduct>(); // Use Map for efficient lookup

      rawProducts.forEach((product) => {
        const marketplaceId = product.body.payload.marketplaceId;
        const countryCode = getCountryCodeFromMarketplaceID(marketplaceId);

        if (countryCode) {
          const prices = product.body.payload.Summary.LowestPrices.map(
            (price) => price.ListingPrice.Amount.toFixed(2)
          );

          if (productMap.has(countryCode)) {
            // Country exists, accumulate prices
            productMap.get(countryCode)!.prices.push(...prices); // Use spread operator for efficient concatenation
          } else {
            // New country, add entry
            productMap.set(countryCode, {
              countryCode: countryCode,
              CurrencyCode:
                product.body.payload.Summary.LowestPrices[0].ListingPrice
                  .CurrencyCode,
              prices: prices,
            });
          }
        }
      });

      // Convert map values to array
      out = Array.from(productMap.values());

      // Sort by price descending
      out.forEach((countryProduct) => {
        countryProduct.prices.sort((a, b) => parseFloat(a) - parseFloat(b));
      });

      return out;
    };

    /**
     * Guards
     */
    if (!hasCountrysSelected) {
      showToast("Bitte ein Land Auswählen", "error");
      return;
    }

    if (!hasValidAsins) {
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

    //...
    let ipcResponse;

    try {
      ipcResponse = await window.api.getListingForAsins(
        selectedCountries,
        getValidAsins(),
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
        setCurrentResponse(parseItems(ipcResponse.response));
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
      value={{ startSearching, currentResponse, isLoading }}
    >
      {children}
    </PricingContext.Provider>
  );
};
