import { createContext, useContext, useState } from "react";
import { isAsin } from "../lib/regex";

interface AsinsContext {
  asin: string;
  setAsin: React.Dispatch<React.SetStateAction<string>>
  isValidAsin: boolean;
}

// Erstellen Sie den Kontext
const AsinsContext = createContext<AsinsContext | undefined>(undefined);

// Hook, um auf den Kontext zuzugreifen
export const useAsinsContext = () => {
  const context = useContext(AsinsContext);
  if (!context) {
    throw new Error(
      "useAsinsContext must be used within a SelectedCountriesProvider"
    );
  }
  return context;
};

// Provider-Komponente, um den Kontext bereitzustellen
export const AsinsProvider = ({ children }: any) => {
  const [asin, setAsin] = useState("");
  const isValidAsin = isAsin(asin);

  return (
    <AsinsContext.Provider
      value={{
        asin,
        setAsin,
        isValidAsin,
      }}
    >
      {children}
    </AsinsContext.Provider>
  );
};
