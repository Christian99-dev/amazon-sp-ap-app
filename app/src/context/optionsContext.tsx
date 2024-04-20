import { createContext, useContext, useState } from "react";
import { isAsin } from "../lib/regex";

/**
 * Context
 */
const OptionsContext = createContext<
  | {
      asin: string;
      setAsin: React.Dispatch<React.SetStateAction<string>>;
      isValidAsin: boolean;
      condition: ItemCondition;
      setCondition: React.Dispatch<React.SetStateAction<ItemCondition>>;
      flipCondition: () => void;
    }
  | undefined
>(undefined);

export const useOptionsContext = () => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error(
      "useOptionsContext must be used within a OptionsContext.Provider"
    );
  }
  return context;
};

/**
 * Provider
 */
export const AsinsProvider = ({ children }: { children: React.ReactNode }) => {
  /**
   * State
   */
  const [asin, setAsin] = useState("");
  const isValidAsin = isAsin(asin);
  const [condition, setCondition] = useState<ItemCondition>("New");

  /**
   * Actions
   */
  const flipCondition = () => {
    if (condition === "New") {
      setCondition("Used");
    } else {
      setCondition("New");
    }
  };

  return (
    <OptionsContext.Provider
      value={{
        asin,
        setAsin,
        isValidAsin,
        condition,
        setCondition,
        flipCondition,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};
