import React, { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Definiere den Typ für die Nachrichtentypen
type ToastType = "info" | "success" | "error";

// Definiere den Toast-Kontext
interface ToastContextProps {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

// Toast-Komponente
const ToastProvider = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer
        position="bottom-left"
        theme="colored"
        closeOnClick
      />
    </ToastContext.Provider>
  );
};

// Hook, um den Toast im Komponentenbaum zu verwenden
const useToastContext = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(
      "useToast muss innerhalb eines ToastProviders verwendet werden"
    );
  }
  return context;
};

export { ToastProvider, useToastContext };
