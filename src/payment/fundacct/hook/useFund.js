import { useState } from "react";
import axios from "axios";

export default function useFund() {
  const [loading, setLoading] = useState(false);

  // ✅ Create top-up
  const fundAccount = async (amount, phone) => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      throw new Error("Invalid amount");
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/wallet/topup`,
        { amount, phone }, // ✅ your backend expects phone too
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (error) {
      console.error("Fund error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.error || "Failed to create top-up");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Check transaction status
  const checkStatus = async (transactionId) => {
    if (!transactionId) throw new Error("No transactionId found");

    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/wallet/${transactionId}/status`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (error) {
      console.error("Status error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.error || "Failed to check status");
    } finally {
      setLoading(false);
    }
  };

  return { fundAccount, checkStatus, loading };
}
