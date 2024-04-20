import { createContext, useContext, useState } from "react";
import { CountryData, getAllActiveCountries } from "../lib/countrys";

/**
 * Context
 */
const CountriesContext = createContext<
  | {
      selectedCountries: CountryData[];
      addCountry: (country: CountryData) => void;
      removeCountry: (country: CountryData) => void;
      hasCountrysSelected: boolean;
      switchAllOn: () => void;
      switchAllOff: () => void;
    }
  | undefined
>(undefined);

export const useCountryContext = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error(
      "useSelectedCountries must be used within a SelectedCountriesProvider"
    );
  }
  return context;
};

/**
 * Provider
 */
export const CountriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /**
   * State
   */
  const [selectedCountries, setSelectedCountries] = useState<CountryData[]>(
    getAllActiveCountries()
  );

  /**
   * Actions
   */
  const addCountry = (country: CountryData) => {
    setSelectedCountries((prevSelectedCountries) => [
      ...prevSelectedCountries,
      country,
    ]);
  };
  const removeCountry = (country: CountryData) => {
    setSelectedCountries((prevSelectedCountries) =>
      prevSelectedCountries.filter((c) => c !== country)
    );
  };
  const switchAllOn = () => setSelectedCountries(getAllActiveCountries());
  const switchAllOff = () => setSelectedCountries([]);
  const hasCountrysSelected = selectedCountries.length > 0;

  return (
    <CountriesContext.Provider
      value={{
        selectedCountries,
        addCountry,
        removeCountry,
        hasCountrysSelected,
        switchAllOn,
        switchAllOff,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
