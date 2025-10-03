import { useState } from "react";
import axios from "axios";

export default function useFund() {
  const [loading, setLoading] = useState(false);

  // ✅ Create top-up
  const fundAccount = async (amount) => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      throw new Error("Invalid amount");
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/wallet/topup`,
        { amount },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const payment = res.data?.payment;

      if (payment?.transactionId) {
        // ✅ Save transaction ID for polling
        localStorage.setItem("lastTxRef", payment.transactionId);
      }

      return res.data; // contains checkoutUrl & transactionId
    } catch (error) {
      console.error("Fund error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.error || "Failed to create top-up");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Poll transaction status until success
  const startPolling = (onSuccess) => {
    const txRef = localStorage.getItem("lastTxRef");
    if (!txRef) return;

    const token = localStorage.getItem("token");

    const checkStatus = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/wallet/${txRef}/status`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (res.data.status === "success") {
          // Update user balance in localStorage
          const user = JSON.parse(localStorage.getItem("user")) || {};
          user.balance = res.data.balance;
          localStorage.setItem("user", JSON.stringify(user));

          localStorage.removeItem("lastTxRef");
          if (onSuccess) onSuccess(res.data);
          clearInterval(interval);
        } else if (res.data.status === "failed") {
          console.warn("Payment failed.");
          localStorage.removeItem("lastTxRef");
          clearInterval(interval);
        }
      } catch (err) {
        console.error("Polling error:", err);
      }
    };

    // check immediately
    checkStatus();

    // check every 2 minutes
    const interval = setInterval(checkStatus, 2 * 60 * 1000);

    return () => clearInterval(interval); // cleanup function
  };

  // ✅ Fetch latest wallet balance
  const fetchBalance = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/wallet/balance`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // update localStorage with latest balance
      const user = JSON.parse(localStorage.getItem("user")) || {};
      user.balance = res.data.balance;
      localStorage.setItem("user", JSON.stringify(user));

      return res.data;
    } catch (err) {
      console.error("Balance fetch error:", err);
      throw err;
    }
  };

  return { fundAccount, startPolling, fetchBalance, loading };
}
