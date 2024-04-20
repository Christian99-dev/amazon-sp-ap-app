import React, { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Context
 */
const ToastContext = createContext<{
  showToast: (message: string, type?: ToastType) => void;
  clearAll: () => void
} | undefined>(undefined);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(
      "useToast muss innerhalb eines ToastProviders verwendet werden"
    );
  }
  return context;
};

/**
 * Provider
 */
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  
  /**
   * Actions
   */
  const showToast = (message: string, type: ToastType = "info") => {
    switch (type) {
      case "info":
        toast.info(message);
        break;
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
    }
  };
  const clearAll = () => {
    toast.dismiss();
  }

  return (
    <ToastContext.Provider value={{ showToast, clearAll }}>
      {children}
      <ToastContainer
        position="bottom-left"
        theme="colored"
        closeOnClick
        autoClose={1500}
      />
    </ToastContext.Provider>
  );
};

