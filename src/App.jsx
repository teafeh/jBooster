import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import AuthPage from "./login 2";
import LandingPageTwo from "./home 2";

import Dashboard from "./dasboard 2";
import FundAccount from "./payment/fundacct";
import Orders from "./payment/orderhistory/Orders";

import ProtectedRoute from "./login 2/components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import DashboardLayout from "./dasboard 2/components/DashboardLayout";

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

        {/* Protected routes using DashboardLayout */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/fund"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <FundAccount />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Orders />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
