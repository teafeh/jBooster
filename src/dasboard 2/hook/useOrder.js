import { useState } from "react";

export default function useOrder() {
  const [loading, setLoading] = useState(false);
  // Instead of just message, return an object for fancy toast
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const placeOrder = async ({ serviceId, serviceName, rate, link, quantity }) => {
  setLoading(true);
  setToast({ show: false, message: "", type: "success" });
  try {
    const res = await fetch("http://localhost:5009/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ serviceId, serviceName, rate, link, quantity }),
    });

    const data = await res.json();

    if (data._id) {
      setToast({ show: true, message: `✅ Order placed! ID: ${data._id}`, type: "success" });
    } else {
      setToast({ show: true, message: `❌ Error: ${data.error || "Something went wrong"}`, type: "error" });
    }
  } catch (err) {
    setToast({ show: true, message: "❌ Failed to connect to backend", type: "error" });
  } finally {
    setLoading(false);
    setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 4000);
  }
};


  return { placeOrder, loading, toast };
}
