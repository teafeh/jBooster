import React from "react";
import {
  FiHome,
  FiCreditCard,
  FiList,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

export default function MobileFooterNav({ user }) {
  const handleNav = (path) => {
    window.location.href = path;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t flex justify-around items-center py-2 sm:hidden z-50">
      {/* Home */}
      <button
        onClick={() => handleNav("/dashboard")}
        className="flex flex-col items-center text-purple-600 focus:outline-none"
        aria-label="Home"
      >
        <FiHome size={20} />
        <span className="text-[11px]">Home</span>
      </button>

      {/* Fund */}
      <button
        onClick={() => handleNav("/fund")}
        className="flex flex-col items-center text-purple-600 focus:outline-none"
        aria-label="Fund"
      >
        <FiCreditCard size={20} />
        <span className="text-[11px]">Fund</span>
      </button>

      {/* Orders */}
      <button
        onClick={() => handleNav("/orders")}
        className="flex flex-col items-center text-purple-600 focus:outline-none"
        aria-label="Orders"
      >
        <FiList size={20} />
        <span className="text-[11px]">
          Orders ({user?.totalOrders ?? 0})
        </span>
      </button>

      {/* Status */}
      <div className="flex flex-col items-center text-yellow-500">
        <FiSettings size={20} />
        <span className="text-[11px] font-semibold">
          {user?.status?.toUpperCase() ?? "NEWBIE"}
        </span>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex flex-col items-center text-red-500 focus:outline-none"
        aria-label="Logout"
      >
        <FiLogOut size={20} />
        <span className="text-[11px]">Logout</span>
      </button>
    </nav>
  );
}
