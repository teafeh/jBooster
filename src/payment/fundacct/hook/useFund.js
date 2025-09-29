import { useState } from "react";
import axios from "axios";

export default function useFund() {
  const [loading, setLoading] = useState(false);

  const fundAccount = async (amount) => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      throw new Error("Invalid amount");
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/wallet/topup`,
        { amount }, // payload
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ✅ auth header
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

  return { fundAccount, loading };
}
