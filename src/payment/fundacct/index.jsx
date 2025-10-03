import { useState, useEffect } from "react";
import useFund from "./hook/useFund";
import FullPageLoader from "../../login 2/components/FullPageLoader";
import { useNavigate } from "react-router-dom";

export default function FundAccount() {
  const [amount, setAmount] = useState("");
  const { fundAccount, startPolling, loading } = useFund();
  const navigate = useNavigate();

  const handleFund = async () => {
    try {
      const res = await fundAccount(amount);

      if (res?.payment?.checkoutUrl) {
        // ✅ Save tx_ref for polling
        localStorage.setItem("lastTxRef", res.payment.tx_ref);

        // ✅ Start polling immediately
        startPolling(() => {
          // Redirect after payment success
          navigate("/dashboard");
        });

        // ✅ Redirect to Paystack checkout
        window.location.href = res.payment.checkoutUrl;
      } else {
        alert("❌ Failed to start payment.");
      }
    } catch (err) {
      alert(`❌ ${err.message}`);
    }
  };

  // ❌ Optional: if user left page mid-payment, resume polling
  useEffect(() => {
    const lastTx = localStorage.getItem("lastTxRef");
    if (lastTx) {
      startPolling(() => navigate("/dashboard"));
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6">
      <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 w-full max-w-md text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">
          Fund Your Account
        </h1>

        {/* Amount Input */}
        <div className="relative mb-4 sm:mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
            ₦
          </span>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 sm:p-4 pl-10 border rounded-xl focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          onClick={handleFund}
          disabled={loading}
          className="w-full py-2.5 sm:py-3 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-500 transition disabled:opacity-50"
        >
          {loading ? <FullPageLoader /> : "Proceed to Payment"}
        </button>
      </div>
    </div>
  );
}
