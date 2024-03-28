import React, { createContext, useContext, useState } from "react";
import { CountryData } from "../lib/countrys";
import { useAsinsContext } from "./asinsContext";
import { useCountryContext } from "./countryContext";
import { useTokenContext } from "./tokenContext";
import { getPricingAsin } from "../amazon-api/get-pricing-asin";

interface PricingContextType {
  startSearching: () => void;
  currentList: any;
  isLoading: boolean;
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
  const [currentList, setCurrentList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { asins } = useAsinsContext();
  const { selectedCountries } = useCountryContext();
  const {
    tokenState: { accessTokenEU, accessTokenNA },
  } = useTokenContext();

  const startSearching = () => {
    if (!window.api) return;

    getPricingAsin(
      selectedCountries[0].marketplaceId,
      asins[0],
      accessTokenEU
    ).then((res: any) => {
      console.log(res);
    });
  };

  return (
    <PricingContext.Provider value={{ startSearching, currentList, isLoading }}>
      {children}
    </PricingContext.Provider>
  );
};
