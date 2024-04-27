import { createContext, useContext, useEffect, useState } from "react";
import { useToastContext } from "./toastContext";

/**
 * Context
 */
const TokenContext = createContext<
  | {
      tokenState: TokenState;
      manageTokenState: (
        region: "eu" | "na",
        action: "refresh" | "get"
      ) => Promise<boolean>;
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

/**
 * Provider
 */
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
   * Actions
   * */
  const manageTokenState = async (
    region: "eu" | "na",
    action: "get" | "refresh"
  ) => {

    let isSuccessfull = false;

    // Browser
    if(!window.api) {
      showToast("Kein IPC gefunden", "error");
      return isSuccessfull;
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
      return isSuccessfull;
    }

    // Auswerten des ereignis
    switch (manageTokenIpcResponse.code) {
      case 41:
      case 42: {
        showToast(manageTokenIpcResponse.message, "error");
        isSuccessfull = false;
        break;
      }
      case 21: {
        updateTokenState(region, manageTokenIpcResponse.access_token);
        showToast(manageTokenIpcResponse.message, "success");
        isSuccessfull = true;
        break;
      }
      case 22: {
        updateTokenState(region, manageTokenIpcResponse.access_token);
        showToast(manageTokenIpcResponse.message, "info");
        isSuccessfull = true;
        break;
      }
    }

    updateLoadingState(region, false);
    return isSuccessfull;
  };

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
