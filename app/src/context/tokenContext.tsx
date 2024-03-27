import React, { createContext, useContext, useEffect, useState } from "react";
import { Region } from "../amazon-api/lib/countrys";

interface TokenState {
  accessTokenEU: string;
  accessTokenNA: string;
  loadingEuToken: boolean;
  loadingNaToken: boolean;
}

interface TokenContextType {
  tokenState: TokenState;
  manageToken: (region: "eu" | "na", action: "refresh" | "get") => void;
}

const initialTokenState: TokenState = {
  accessTokenEU: "",
  accessTokenNA: "",
  loadingEuToken: true,
  loadingNaToken: true,
};

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};

export const TokenProvider = ({ children }: any) => {
  const [tokenState, setTokenState] = useState<TokenState>(initialTokenState);

  const manageToken = async (region: "eu" | "na", action: "get" | "refresh") => {
    
    setTokenState((prevState) => ({
      ...prevState,
      loadingEuToken: region === "eu" ? true : prevState.loadingEuToken,
      loadingNaToken: region === "na" ? true : prevState.loadingNaToken,
    }));

    try {
      // Simuliere einen API-Aufruf
      const newToken = await window.api.manageToken(region, action)

      // Aktualisiere den Token-Zustand
      setTokenState((prevState) => ({
        ...prevState,
        loadingEuToken: region === "eu" ? false : prevState.loadingEuToken,
        loadingNaToken: region === "na" ? false : prevState.loadingNaToken,
        accessTokenEU: region === "eu" ? newToken : prevState.accessTokenEU,
        accessTokenNA: region === "na" ? newToken : prevState.accessTokenNA,
      }));

      console.log({ region: test, tokenAction: test, token: newToken });
    } catch (error) {
      console.error("Error managing token:", error);
    }
  };

  useEffect(() => {
    manageToken("eu", "get");
    manageToken("na", "get")
  }, [])

  return (
    <TokenContext.Provider value={{ tokenState, manageToken }}>
      {children}
    </TokenContext.Provider>
  );
};

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
