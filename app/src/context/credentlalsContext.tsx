import React, { createContext, useContext, useEffect, useState } from "react";
import { useToastContext } from "./toastContext";
import {
  GetCredentialsIPCResponse,
  type ChangeCredentialsIPCResponse,
} from "../interface";

type CredentialsContextType = {
  credentialsInput: {
    client_id: string;
    client_secret: string;
    refresh_token_eu: string;
    refresh_token_na: string;
  };
  credentialsLabel: {
    client_id: string;
    client_secret: string;
    refresh_token_eu: string;
    refresh_token_na: string;
  };
  isLoading: boolean;
  changeCredentialInputState: (
    id: PossibleCredentialIDs,
    value: string
  ) => void;
  setCredentialStorage: (id: PossibleCredentialIDs) => void;
};

export type PossibleCredentialIDs =
  | "client_id"
  | "client_secret"
  | "refresh_token_eu"
  | "refresh_token_na";

const initialCredentials = {
  client_id: "",
  client_secret: "",
  refresh_token_eu: "",
  refresh_token_na: "",
};

const CredentialsContext = createContext<CredentialsContextType | undefined>(
  undefined
);

export const useCredentialsContext = () => {
  const context = useContext(CredentialsContext);
  if (!context) {
    throw new Error(
      "useCredentialsContext must be used within a CredentialsContextProvider"
    );
  }
  return context;
};

export const CredentialsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToastContext();
  const [credentialsInput, setCredentialsInput] = useState(initialCredentials);
  const [credentialsLabel, setCredentialsLabel] = useState(initialCredentials);

  // State Change
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

  // Storage Set / Get
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

  useEffect(() => {
    const credIds: PossibleCredentialIDs[] = [
      "client_id",
      "client_secret",
      "refresh_token_eu",
      "refresh_token_na",
    ];

    credIds.forEach((id) => updateCredentialLabelPullFromStorage(id));
  }, []);

  return (
    <CredentialsContext.Provider
      value={{
        credentialsInput,
        credentialsLabel,
        isLoading,
        changeCredentialInputState,
        setCredentialStorage: setCredentialStorageAndUpdateLabel,
      }}
    >
      {children}
    </CredentialsContext.Provider>
  );
};
