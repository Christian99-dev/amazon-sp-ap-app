import { createContext, useContext, useState } from "react";
import { isAsin } from "../lib/regex";

interface AsinsContext {
  asins: string[];
  handleChange: (index: number, value: string) => void;
  addAsin: () => void;
  delAsin: (index: number) => void;
  canAdd: boolean;
  getValidAsins: () => string[];
  hasValidAsins: boolean;
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
  const [asins, setAsins] = useState<string[]>(["B0BG51X88P" ,"B0BG51X8333"]);

  const handleChange = (index: number, value: string) => {
    const newAsins = [...asins];
    newAsins[index] = value;
    setAsins(newAsins);
  };

  const addAsin = () => {
    setAsins([...asins, ""]);
  };

  const delAsin = (index: number) => {
    if (asins.length > 1) {
      const newAsins = [...asins];
      newAsins.splice(index, 1);
      setAsins(newAsins);
    }
  };

  const getValidAsins = (): string[] => {
    return asins.filter((asin) => asin != "").filter((asin) => isAsin(asin));
  };

  const canAdd = asins.length >= 20;

  const hasValidAsins = getValidAsins().length > 0;

  return (
    <AsinsContext.Provider
      value={{ asins, handleChange, addAsin, delAsin, canAdd, getValidAsins, hasValidAsins }}
    >
      {children}
    </AsinsContext.Provider>
  );
};
