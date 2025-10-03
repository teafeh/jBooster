import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";

export default function DashboardLayout({ children }) {
  const [user, setUser] = useState({
    username: "",
    balance: 0,
    totalOrders: 0,
    status: "newbie",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleFundClick = () => {
    window.location.href = "/fund";
  };

  const handleOrderClick = () => {
    window.location.href = "/orders";
  };

  const handleDashClick = () => {
    window.location.href = "/";
  };

  const handleLogout = () => {
    // implement logout logic or call your hook
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col">
      <DashboardHeader
        user={user}
        onFundClick={handleFundClick}
        onLogout={handleLogout}
        onOrderClick={handleOrderClick}
        onDashClick={handleDashClick}
      />
      <main className="flex-1 p-4 sm:p-8">{children}</main>
    </div>
  );
}
