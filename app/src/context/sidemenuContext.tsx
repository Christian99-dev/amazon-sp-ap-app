import React, { createContext, useState, useContext } from "react";

/**
 * Context
 */
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

/**
 * Provider
 */
export const SideMenuProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /**
   * State
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Actions
   */
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
