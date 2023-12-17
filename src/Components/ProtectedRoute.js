import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState(false);
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location?.pathname }} replace />
  );
};
