import React, { createContext, useState } from "react";

export const NotifContext = createContext();

const NotifContextProvider = ({ children }) => {
  const [notifCountContext, setNotifCountContext] = useState(1);

  return (
    <NotifContext.Provider value={[notifCountContext, setNotifCountContext]}>
      {children}
    </NotifContext.Provider>
  );
};

export default NotifContextProvider;
