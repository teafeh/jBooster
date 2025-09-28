import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import AuthPage from "./login 2";
import LandingPageTwo from "./home 2";

import Dashboard from "./dasboard 2";
import ProtectedRoute from "./login 2/components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import FundAccount from "./payment/fundacct";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LandingPageTwo />
            </PublicRoute>
          }
        />

        <Route
          path="/auth"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />

        <Route
          path="/fund"
          element={
            <ProtectedRoute>
              <FundAccount />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
