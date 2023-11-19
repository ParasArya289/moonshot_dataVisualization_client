import { createContext, useContext } from "react";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  return <dataContext.Provider>{children}</dataContext.Provider>;
};

export const useData = () => useContext(dataContext);
