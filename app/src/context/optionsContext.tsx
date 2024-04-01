import { createContext, useContext, useState } from "react";
import { isAsin } from "../lib/regex";

interface OptionsContext {
  asin: string;
  setAsin: React.Dispatch<React.SetStateAction<string>>;
  isValidAsin: boolean;
  condition: string;
  setCondition: React.Dispatch<React.SetStateAction<ItemCondition>>;
  flipCondition: () => void;
}

type ItemCondition =
  | "New"
  | "Used"
  | "Collectible"
  | "Refurbished"
  | "Club";

// Erstellen Sie den Kontext
const OptionsContext = createContext<OptionsContext | undefined>(undefined);

// Hook, um auf den Kontext zuzugreifen
export const useOptionsContext = () => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error(
      "useOptionsContext must be used within a OptionsContext.Provider"
    );
  }
  return context;
};

// Provider-Komponente, um den Kontext bereitzustellen
export const AsinsProvider = ({ children }: any) => {
  const [asin, setAsin] = useState("");
  const isValidAsin = isAsin(asin);
  const [condition, setCondition] = useState<ItemCondition>("New");
  
  const flipCondition = () => {
    if(condition === "New") {
      setCondition("Used");
    } else {
      setCondition("New");
    }
  }

  return (
    <OptionsContext.Provider
      value={{
        asin,
        setAsin,
        isValidAsin,
        condition,
        setCondition,
        flipCondition
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};
