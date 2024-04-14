import axios from "axios";
import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
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
      localStorage.setItem("token",request.data.token);
      localStorage.setItem("user",JSON.stringify(request.data.user));
      return request.data
    } catch (err) {
      alert(err.response.data.error);
      console.log(err)
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
      localStorage.setItem("token",request.data.token);
      localStorage.setItem("user",JSON.stringify(request.data.user));
      return request.data;
    } catch (err) {
      alert(err.response.data.error);
      console.log(err)
    } finally {
      setAuthLoading(false);
    }
  };
  const logoutUser = () => {
    setToken("");
    setUser({});
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
