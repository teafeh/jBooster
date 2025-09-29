import { useState } from "react";
import axios from "axios";

export default function useFund() {
  const [loading, setLoading] = useState(false);

  const fundAccount = async (amount, phone) => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      throw new Error("Invalid amount");
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Unauthorized: Please login");

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/wallet/topup`,
        { amount, phone },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data; // backend response with virtual account details
    } catch (error) {
      console.error("Fund error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.error || "Failed to initialize payment");
    } finally {
      setLoading(false);
    }
  };

  return { fundAccount, loading };
}
