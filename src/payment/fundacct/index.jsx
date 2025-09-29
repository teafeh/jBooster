import { useState } from "react";
import useFund from "./hook/useFund";
import FullPageLoader from "../../login 2/components/FullPageLoader";

export default function FundAccount() {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const { fundAccount, loading } = useFund();

  const handleFund = async () => {
    try {
      const res = await fundAccount(amount, phone);

      // Show bank details returned by backend
      alert(
        `✅ Send ₦${amount} to:\n\nBank: ${res.payment.virtualBankName}\nAccount: ${res.payment.virtualAccountNumber}\nRef: ${res.payment.transactionId}`
      );
    } catch (err) {
      alert(`❌ ${err.message}`);
    }
  };

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
