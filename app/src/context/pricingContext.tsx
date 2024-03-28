import React, { createContext, useContext, useState } from "react";
import { CountryData } from "../lib/countrys";
import { useAsinsContext } from "./asinsContext";
import { useCountryContext } from "./countryContext";
import { useTokenContext } from "./tokenContext";
import { getPricingAsin } from "../amazon-api/get-pricing-asin";
import { useToastContext } from "./toastContext";

interface PricingContextType {
  startSearching: () => void;
  currentResponse: any;
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
  // State
  const [currentResponse, setCurrentResponse] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  // Uses..
  const { getValidAsins, hasValidAsins } = useAsinsContext();
  const { selectedCountries, hasCountrysSelected } = useCountryContext();
  const {
    tokenState: { accessTokenEU, accessTokenNA },
  } = useTokenContext();
  const { showToast } = useToastContext();

  const startSearching = () => {
    if (!window.api) return;

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

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <PricingContext.Provider
      value={{ startSearching, currentResponse, isLoading }}
    >
      {children}
    </PricingContext.Provider>
  );
};
