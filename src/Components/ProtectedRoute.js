import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate
      to="/auth"
      state={{ from: location?.pathname + location?.search }}
      replace
    />
  );
};
