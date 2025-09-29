import { useState, useEffect } from "react";
import useFund from "./hook/useFund";
import FullPageLoader from "../../login 2/components/FullPageLoader";

const EXPIRY_TIME = 15 * 60; // 15 minutes in seconds

export default function FundAccount() {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [timeLeft, setTimeLeft] = useState(EXPIRY_TIME);
  const { fundAccount, loading } = useFund();

  // Restore from localStorage on page load
  useEffect(() => {
    const saved = localStorage.getItem("paymentDetails");
    if (saved) {
      const parsed = JSON.parse(saved);
      const elapsed = Math.floor((Date.now() - parsed.startTime) / 1000);
      const remaining = Math.max(EXPIRY_TIME - elapsed, 0);
      setPaymentDetails(parsed.payment);
      setAmount(parsed.amount);
      setTimeLeft(remaining);
    }
  }, []);

  const handleFund = async () => {
    try {
      const res = await fundAccount(amount, phone);

      const data = {
        payment: res.payment,
        amount,
        startTime: Date.now(),
      };

      // save to localStorage
      localStorage.setItem("paymentDetails", JSON.stringify(data));
      setPaymentDetails(res.payment);
      setTimeLeft(EXPIRY_TIME);
    } catch (err) {
      alert(`❌ ${err.message}`);
    }
  };

  // countdown effect
  useEffect(() => {
    if (!paymentDetails) return;
    if (timeLeft <= 0) {
      localStorage.removeItem("paymentDetails"); // clear expired data
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [paymentDetails, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  if (paymentDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-6">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-purple-700 mb-4">
            Complete Your Transfer
          </h1>

          {/* Timer */}
          <p className="text-gray-600 mb-6">
            Please complete your transfer within:{" "}
            <span className="font-bold text-purple-600">{formatTime(timeLeft)}</span>
          </p>

          <div className="p-6 border rounded-xl bg-purple-50 text-left">
            <p className="mb-3">
              <span className="font-medium">Bank:</span>{" "}
              {paymentDetails.virtualBankName || "—"}
            </p>
            <p className="mb-3">
              <span className="font-medium">Account Number:</span>{" "}
              {paymentDetails.virtualAccountNumber}
            </p>
            <p className="mb-3">
              <span className="font-medium">Transaction Ref:</span>{" "}
              {paymentDetails.transactionId}
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Transfer exactly <span className="font-medium">₦{amount}</span> to
              complete your wallet top-up.
            </p>
          </div>

          <button
            onClick={() => {
              alert("✅ We’ll verify your payment shortly.");
              localStorage.removeItem("paymentDetails"); // clear after confirmation
            }}
            className="w-full mt-6 py-3 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-500 transition"
          >
            I Have Made The Transfer
          </button>
        </div>
      </div>
    );
  }

  // default form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">
          Fund Your Account
        </h1>

        {/* Amount Input */}
        <div className="relative mb-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
            ₦
          </span>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 pl-10 border rounded-xl focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Phone Input */}
        <div className="relative mb-6">
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          onClick={handleFund}
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-500 transition disabled:opacity-50"
        >
          {loading ? <FullPageLoader /> : "Proceed to Payment"}
        </button>
      </div>
    </div>
  );
}
