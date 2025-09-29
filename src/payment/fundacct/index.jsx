import { useState } from "react";
import useFund from "./hook/useFund";
import FullPageLoader from "../../login 2/components/FullPageLoader";

export default function FundAccount() {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentDetails, setPaymentDetails] = useState(null);
  const { fundAccount, loading } = useFund();

  const handleFund = async () => {
    try {
      const res = await fundAccount(amount, phone);
      setPaymentDetails(res.payment); // store bank details
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

        {/* Show Bank Details */}
        {paymentDetails && (
          <div className="mt-8 p-6 border rounded-xl bg-purple-50 text-left">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">
              Payment Instructions
            </h2>
            <p className="mb-2">
              <span className="font-medium">Bank:</span>{" "}
              {paymentDetails.virtualBankName || "—"}
            </p>
            <p className="mb-2">
              <span className="font-medium">Account Number:</span>{" "}
              {paymentDetails.virtualAccountNumber}
            </p>
            <p className="mb-2">
              <span className="font-medium">Transaction Ref:</span>{" "}
              {paymentDetails.transactionId}
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Please transfer <span className="font-medium">₦{amount}</span> to
              complete your wallet top-up.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
