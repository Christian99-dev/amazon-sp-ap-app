import React, { createContext, useState, useContext } from "react";

// Erstellen des Kontexts für das Side Menu
const SideMenuContext = createContext<
  | {
      isOpen: boolean;
      toggleMenu: () => void;
    }
  | undefined
>(undefined);

export const useSideMenu = () => {
  const context = useContext(SideMenuContext);
  if (!context) {
    throw new Error("useSideMenu must be used within a SideMenuProvider");
  }
  return context;
};

export const SideMenuProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SideMenuContext.Provider
      value={{
        isOpen,
        toggleMenu,
      }}
    >
      {children}
    </SideMenuContext.Provider>
  );
};
