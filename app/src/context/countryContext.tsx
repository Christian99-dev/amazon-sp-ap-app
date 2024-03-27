import React, { createContext, useContext, useState } from "react";
import { CountryData, getAllActiveCountries } from "../amazon-api/lib/countrys";

// Definieren Sie den Kontext
interface ContriesContextType {
  selectedCountries: CountryData[];
  addCountry: (country: CountryData) => void;
  removeCountry: (country: CountryData) => void;
}

const CountriesContext = createContext<ContriesContextType | undefined>(undefined);

// Custom Hook, um auf den Kontext zuzugreifen
export const useCountryContext = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error("useSelectedCountries must be used within a SelectedCountriesProvider");
  }
  return context;
}

// Provider-Komponente, um den Kontext bereitzustellen
export const CountriesProvider = ({ children } : any) => {
  const [selectedCountries, setSelectedCountries] = useState<CountryData[]>(getAllActiveCountries());

  const addCountry = (country: CountryData) => {
    setSelectedCountries(prevSelectedCountries => [...prevSelectedCountries, country]);
  }

  const removeCountry = (country: CountryData) => {
    setSelectedCountries(prevSelectedCountries => prevSelectedCountries.filter(c => c !== country));
  }

  return (
    <CountriesContext.Provider value={{ selectedCountries, addCountry, removeCountry }}>
      {children}
    </CountriesContext.Provider>
  );
}