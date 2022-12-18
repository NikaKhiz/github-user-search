import React from "react";
import { useContext, useState } from "react";
const AppContext = React.createContext();

const AppProveder = ({ children }) => {
  const [darkmode, setDarkMode] = useState(true);
  const [user, setUser] = useState([]);
  return (
    <AppContext.Provider
      value={{
        darkmode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProveder };
