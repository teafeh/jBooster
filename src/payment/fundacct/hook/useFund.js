import { useState } from "react";

export default function useFund() {
  const [loading, setLoading] = useState(false);

  const fundAccount = async (amount) => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      throw new Error("Invalid amount");
    }

    setLoading(true);
    try {
      // 🔌 integrate payment gateway here
      // Example: initialize transaction via backend
      // const res = await axios.post("/api/payment/initialize", { amount });
      // return res.data;

      console.log("Funding initiated for ₦", amount);

      // mock response for now
      return { success: true, message: `Payment of ₦${amount} initialized` };
    } catch (error) {
      console.error(error);
      throw new Error("Failed to initialize payment");
    } finally {
      setLoading(false);
    }
  };

  return { fundAccount, loading };
}
