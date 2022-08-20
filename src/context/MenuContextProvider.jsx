import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("1");

  return (
    <MenuContext.Provider value={[activeMenu, setActiveMenu]}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
