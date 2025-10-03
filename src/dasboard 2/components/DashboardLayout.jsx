import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import MobileFooterNav from "./MobileFooterNav";

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
    window.location.href = "/dashboard";
  };

  const handleSettingsClick = () => {
    window.location.href = "/settings";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col">
      {/* ✅ Desktop Header */}
      <div className="hidden sm:block">
        <DashboardHeader
          user={user}
          onFundClick={handleFundClick}
          onLogout={handleLogout}
          onOrderClick={handleOrderClick}
          onDashClick={handleDashClick}
        />
      </div>

      {/* ✅ Mobile Welcome + Balance (Top) */}
      <div className="sm:hidden bg-white/80 backdrop-blur-md shadow-md p-4 rounded-b-2xl">
        <h1 className="text-xl font-bold text-purple-700">
          Welcome, {user.username}!
        </h1>
        <p className="text-gray-600 text-sm">
          Balance:{" "}
          <span className="font-bold">₦{user.balance.toLocaleString()}</span>
        </p>
        <p className="text-gray-600 text-sm">
          Orders:{" "}
          <span className="font-bold">{user.totalOrders.toLocaleString()}</span>
        </p>
      </div>

      {/* ✅ Main Page Content */}
      <main className="flex-1 p-4 sm:p-8 pb-20 sm:pb-8">{children}</main>

      {/* ✅ Mobile Footer Nav */}
      <div className="sm:hidden">
        <MobileFooterNav
          user={user}
          onDashClick={handleDashClick}
          onOrderClick={handleOrderClick}
          onFundClick={handleFundClick}
          onSettingsClick={handleSettingsClick}
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
}
