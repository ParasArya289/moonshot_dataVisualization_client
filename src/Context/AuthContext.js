import { createContext, useContext } from "react";

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  return <authContext.Provider>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
