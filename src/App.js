import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
import { ProtectedRoute } from "./Components/ProtectedRoute";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}
