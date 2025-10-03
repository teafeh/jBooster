import React from "react";

export default function DashboardHeader({ user, onDashClick, onOrderClick, onFundClick, onLogout }) {
  return (
    <header className="bg-white/70 backdrop-blur-md shadow-md p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 rounded-b-2xl">
      <div>
        <button
              onClick={onDashClick}
              className="mt-1 text-xs sm:text-sm text-purple-600 hover:underline"
            >
             <h1 className="text-2xl sm:text-3xl font-extrabold text-purple-700">
          Welcome, {user.username}!
        </h1>
            </button>
        
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
        {/* Cards */}
        <div className="flex gap-4 flex-wrap">
          <div className="bg-white shadow-lg p-4 sm:p-6 rounded-xl w-36 sm:w-44 hover:shadow-2xl transition transform hover:-translate-y-1">
            <p className="text-gray-500 text-xs sm:text-sm">Balance</p>
            <p className="font-bold text-lg sm:text-xl">
              ₦{user.balance.toLocaleString()}
            </p>
            <button
              onClick={onFundClick}
              className="mt-1 text-xs sm:text-sm text-purple-600 hover:underline"
            >
              Fund Account
            </button>
          </div>

          <div className="bg-white shadow-lg p-4 sm:p-6 rounded-xl w-36 sm:w-44 hover:shadow-2xl transition transform hover:-translate-y-1">
            <p className="text-gray-500 text-xs sm:text-sm">Total Orders</p>
            <p className="font-bold text-lg sm:text-xl">
              {user.totalOrders.toLocaleString()}
            </p>
            <button
              onClick={onOrderClick}
              className="mt-1 text-xs sm:text-sm text-purple-600 hover:underline"
            >
              Fund Account
            </button>
          </div>

          <div className="bg-white shadow-lg p-4 sm:p-6 rounded-xl w-36 sm:w-44 hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
            <p className="text-gray-500 text-xs sm:text-sm">Status</p>
            <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm sm:text-base font-semibold">
              {user.status.toUpperCase()}
            </span>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition text-sm sm:text-base mt-2 sm:mt-0"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
