import React, { createContext, useContext, useState } from "react";
import { useToastContext } from "./toastContext";

/**
 * Context
 */
const CredentialsContext = createContext<
  | {
      credentialsInput: Credentials;
      credentialsLabel: Credentials;
      isLoading: boolean;
      changeCredentialInputState: (
        id: PossibleCredentialIDs,
        value: string
      ) => void;
      setCredentialStorageAndUpdateLabel: (id: PossibleCredentialIDs) => void;
      updateCredentialLabelPullFromStorage: (id: PossibleCredentialIDs) => void;
    }
  | undefined
>(undefined);

export const useCredentialsContext = () => {
  const context = useContext(CredentialsContext);
  if (!context) {
    throw new Error(
      "useCredentialsContext must be used within a CredentialsContextProvider"
    );
  }
  return context;
};

/**
 * Provider
 */
export const CredentialsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /**
   * State
   */
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToastContext();
  const [credentialsInput, setCredentialsInput] = useState<Credentials>({
    client_id: "",
    client_secret: "",
    refresh_token_eu: "",
    refresh_token_na: "",
    seller_id_eu: "",
    seller_id_na: "",
  });
  const [credentialsLabel, setCredentialsLabel] = useState<Credentials>({
    client_id: "",
    client_secret: "",
    refresh_token_eu: "",
    refresh_token_na: "",
    seller_id_eu: "",
    seller_id_na: "",
  });

  /**
   * Actions
   */
  const changeCredentialInputState = (
    id: PossibleCredentialIDs,
    value: string
  ) => {
    setCredentialsInput((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };
  const changeCredentialLabelState = (
    id: PossibleCredentialIDs,
    value: string
  ) => {
    setCredentialsLabel((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };
  const setCredentialStorageAndUpdateLabel = async (
    id: PossibleCredentialIDs
  ) => {
    if (!window.api) {
      showToast("Kein IPC gefunden", "error");
      return true;
    }

    // response placeholder
    let ipcChangeCredentialsResponse: ChangeCredentialsIPCResponse;
    setIsLoading(true);

    // try changing creds
    try {
      ipcChangeCredentialsResponse = await window.api.changeCredentials(
        id,
        credentialsInput[id]
      );
    } catch (error) {
      showToast("Unbekannter Fehler", "error");
      setIsLoading(false);
      return;
    }

    // auswerten der response
    switch (ipcChangeCredentialsResponse.code) {
      case 41:
      case 42: {
        showToast(ipcChangeCredentialsResponse.message, "error");
        break;
      }
      case 21: {
        changeCredentialLabelState(id, credentialsInput[id]);
        changeCredentialInputState(id, "");
        showToast(ipcChangeCredentialsResponse.message, "success");
        break;
      }
    }

    // loading to false
    setIsLoading(false);
  };
  const updateCredentialLabelPullFromStorage = async (
    id: PossibleCredentialIDs
  ) => {
    if (!window.api) {
      showToast("Kein IPC gefunden", "error");
      return;
    }

    let ipcGetCredentialsResponse: GetCredentialsIPCResponse;

    // try changing creds
    try {
      ipcGetCredentialsResponse = await window.api.getCredentials(id);
    } catch (error) {
      showToast("Unbekannter Fehler", "error");
      return;
    }

    switch (ipcGetCredentialsResponse.code) {
      case 41:
      case 42: {
        showToast(ipcGetCredentialsResponse.message, "error");
        break;
      }
      case 21: {
        showToast(ipcGetCredentialsResponse.message, "success");
        changeCredentialLabelState(id, ipcGetCredentialsResponse.value);
        break;
      }
    }
  };

  return (
    <CredentialsContext.Provider
      value={{
        credentialsInput,
        credentialsLabel,
        isLoading,
        changeCredentialInputState,
        setCredentialStorageAndUpdateLabel,
        updateCredentialLabelPullFromStorage
      }}
    >
      {children}
    </CredentialsContext.Provider>
  );
};
