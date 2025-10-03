import React from "react";

/**
 * DashboardHeader
 * - Shows minimal header on mobile (welcome only)
 * - Shows full cards + actions on sm and up
 */
export default function DashboardHeader({
  user = { username: "", balance: 0, totalOrders: 0, status: "newbie" },
  onDashClick,
  onOrderClick,
  onFundClick,
  onLogout,
}) {
  return (
    <header className="bg-white/70 backdrop-blur-md shadow-md p-4 sm:p-6 flex items-center justify-between gap-4 rounded-b-2xl">
      {/* Left: Welcome */}
      <div className="flex items-center gap-3">
        <button onClick={onDashClick} className="text-left">
          <h1 className="text-lg sm:text-2xl font-extrabold text-purple-700">
            Welcome, {user.username || "User"}!
          </h1>
        </button>
      </div>

      {/* Right: Desktop-only content */}
      <div className="flex items-center gap-4">
        {/* Full cards (visible from sm and up) */}
        <div className="hidden sm:flex gap-4 items-center">
          {/* Balance */}
          <div className="bg-white shadow-lg p-4 rounded-xl w-36">
            <p className="text-gray-500 text-xs">Balance</p>
            <p className="font-bold text-lg">
              ₦{(user.balance || 0).toLocaleString()}
            </p>
            <button
              onClick={onFundClick}
              className="mt-1 text-xs text-purple-600 hover:underline"
            >
              Fund Account
            </button>
          </div>

          {/* Total Orders */}
          <div className="bg-white shadow-lg p-4 rounded-xl w-36">
            <p className="text-gray-500 text-xs">Total Orders</p>
            <p className="font-bold text-lg">
              {(user.totalOrders || 0).toLocaleString()}
            </p>
            <button
              onClick={onOrderClick}
              className="mt-1 text-xs text-purple-600 hover:underline"
            >
              Order History
            </button>
          </div>

          {/* Status */}
          <div className="bg-white shadow-lg p-4 rounded-xl w-36 text-center">
            <p className="text-gray-500 text-xs">Status</p>
            <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {(user.status || "newbie").toUpperCase()}
            </span>
          </div>
        </div>

        {/* Logout (desktop only, mobile logout is in footer) */}
        <button
          onClick={onLogout}
          className="hidden sm:inline-block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
