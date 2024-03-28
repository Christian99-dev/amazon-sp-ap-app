import { createContext, useContext, useState } from "react";

interface AsinsContext {
  asins: string[];
  handleChange: (index: number, value: string) => void;
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
  const [asins, setAsins] = useState<string[]>(["", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    const newAsins = [...asins];
    newAsins[index] = value;
    setAsins(newAsins);
  };

  return (
    <AsinsContext.Provider value={{ asins, handleChange }}>
      {children}
    </AsinsContext.Provider>
  );
};
