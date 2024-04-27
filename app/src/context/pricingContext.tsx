import { createContext, useContext, useState } from "react";
import { useOptionsContext } from "./optionsContext";
import { useCountryContext } from "./countryContext";
import { useToastContext } from "./toastContext";
import { parseAmazonListingItemsToProducts } from "../lib/parseAmazonItems";
import { useTokenContext } from "./tokenContext";

/**
 * Context
 */
const PricingContext = createContext<
  | {
      startSearching: (withAutoRefresh: boolean) => void;
      currentProducts: ProductsInMarketplace[];
      isLoading: boolean;
    }
  | undefined
>(undefined);

export const usePricingContext = () => {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error("usePricingContext must be used within a PricingProvider");
  }
  return context;
};

/**
 * Provider
 */
export const PricingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { asin, condition } = useOptionsContext();
  const { selectedCountries } = useCountryContext();
  const { showToast } = useToastContext();
  const { manageTokenState } = useTokenContext()

  /**
   * State
   */
  const [currentProducts, setCurrentProducts] = useState<
    ProductsInMarketplace[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Actions
   */
  const startSearching = async (withAutoRefresh: boolean) => {
    if (!window.api) {
      showToast("Kein IPC gefunden", "error");
      return;
    }

    setCurrentProducts([]);
    setIsLoading(true);
    let ipcResponse: GetListingForAsinIPCResponse;

    /**
     * Start fetch to amazon
     */
    try {
      ipcResponse = await window.api.getListingForAsin(
        selectedCountries,
        asin.trim(),
        condition
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

      case 41:
      case 42:
      case 43:
      case 44:
      case 45: {
        showToast(ipcResponse.message, "error");
        break;
      }
      
      // Token ist abgelaufen, falsch...
      // Es wird EINMAL einen versucht mit einem neuen token
      case 46: {
        showToast(ipcResponse.message, "error");

        // obwohl der token automatisch refresht wurde, ist er immernoch falsch
        // um eine endlosschleife zu vermeinden, unterbrechen wird
        if(withAutoRefresh) break;
        showToast("Auto-Refresh Token eingeleitet", "info");
        
        // try refreshing token
        const naWorked = await manageTokenState("eu", "refresh");
        const euWorked = await manageTokenState("na", "refresh");
        
        // Wenn beim token refreshen schon was schiefgelaufen ist, brauchen wird garnicht weitermachen
        if(!(naWorked && euWorked)) break;
          
        // Wir versuchen es nochmal, nur mit withAutoRefresh flag, um einen endlessloop zu vermeiden
        startSearching(true);
        return;
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
