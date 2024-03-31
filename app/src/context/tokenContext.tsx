import { createContext, useContext, useEffect, useState } from "react";
import { useToastContext } from "./toastContext";
import { ManageTokenIPCResponse } from "../interface";

type TokenState = {
  accessTokenEU: string;
  accessTokenNA: string;
  loadingEuToken: boolean;
  loadingNaToken: boolean;
};

const TokenContext = createContext<
  | {
      tokenState: TokenState;
      manageTokenState: (
        region: "eu" | "na",
        action: "refresh" | "get"
      ) => void;
    }
  | undefined
>(undefined);

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};

export const TokenProvider = ({ children }: any) => {
  const { showToast } = useToastContext();

  /**
   * State
   * */
  const [tokenState, setTokenState] = useState<TokenState>({
    accessTokenEU: "",
    accessTokenNA: "",
    loadingEuToken: true,
    loadingNaToken: true,
  });

  /**
   * On App Start
   * */
  useEffect(() => {
    manageTokenState("eu", "get");
    manageTokenState("na", "get");
  }, []);

  /**
   * Actions
   * */
  const manageTokenState = async (
    region: "eu" | "na",
    action: "get" | "refresh"
  ) => {

    // Browser
    if(!window.api) {
      showToast("Kein IPC gefunden", "error");
      return;
    }
    
    let manageTokenIpcResponse: ManageTokenIPCResponse;

    // Start loading
    updateLoadingState(region, true);

    // Token wird aus der StorageApi geholt (entweder neu generiert oder refresht)
    try {
      manageTokenIpcResponse = await window.api.manageToken(region, action);
    } catch(error) {
      showToast("Unbekannter Fehler", "error");
      updateLoadingState(region, false);
      return;
    }

    // Auswerten des ereignis
    switch (manageTokenIpcResponse.code) {
      case 41:
      case 42: {
        showToast(manageTokenIpcResponse.message, "error");
        break;
      }
      case 21: {
        updateTokenState(region, manageTokenIpcResponse.access_token);
        showToast(manageTokenIpcResponse.message, "success");
        break;
      }
      case 22: {
        updateTokenState(region, manageTokenIpcResponse.access_token);
        showToast(manageTokenIpcResponse.message, "info");
        break;
      }
    }

    updateLoadingState(region, false);
    return;
  };

  /**
   * Helper
   * */

  const updateLoadingState = (region: "eu" | "na", isLoading: boolean) => {
    setTokenState((prevState) => ({
      ...prevState,
      loadingEuToken: region === "eu" ? isLoading : prevState.loadingEuToken,
      loadingNaToken: region === "na" ? isLoading : prevState.loadingNaToken,
    }));
  };

  const updateTokenState = (region: "eu" | "na", accessToken: string) => {
    setTokenState((prevState) => ({
      ...prevState,
      accessTokenEU: region === "eu" ? accessToken : prevState.accessTokenEU,
      accessTokenNA: region === "na" ? accessToken : prevState.accessTokenNA,
    }));
  };

  return (
    <TokenContext.Provider value={{ tokenState, manageTokenState }}>
      {children}
    </TokenContext.Provider>
  );
};
