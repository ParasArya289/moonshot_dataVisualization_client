import axios from "axios";
import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [authLoading, setAuthLoading] = useState(false);

  const loginUser = async (userData) => {
    try {
      setAuthLoading(true);
      const request = await axios.post(
        "https://moonshot-datavisulalization-server-1.onrender.com/user/login",
        userData
      );
      setToken(request.data.token);
      setUser(request.data.user);
    } catch (err) {
      alert("Some error occured " + err.message);
      console.log(err.toJSON())
    } finally {
      setAuthLoading(false);
    }
  };
  const signupUser = async (userData) => {
    try {
      setAuthLoading(true);
      const request = await axios.post(
        "https://moonshot-datavisulalization-server-1.onrender.com/user/signup",
        userData
      );
      setToken(request.data.token);
      setUser(request.data.user);
    } catch (err) {
      alert("Some error occured " + err.message);
      console.log(err.toJSON())
    } finally {
      setAuthLoading(false);
    }
  };
  const logoutUser = () => {
    setToken("");
    setUser({});
  };
  return (
    <authContext.Provider
      value={{ token, user, authLoading, loginUser, signupUser, logoutUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
