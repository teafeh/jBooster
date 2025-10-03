import useOrders from "./hook/useOrders";
import FullPageLoader from "../../login 2/components/FullPageLoader";

export default function Orders() {
  const { orders, loading, error } = useOrders();

  if (loading) return <FullPageLoader />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        Order History
      </h1>

      {orders.length === 0 ? (
        <p className="text-gray-600 text-center">No orders found</p>
      ) : (
        <div className="bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-100">
                <th className="p-3 text-left">Transaction ID</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{order.transactionId}</td>
                  <td className="p-3">₦{order.amount}</td>
                  <td
                    className={`p-3 font-semibold ${
                      order.status === "success"
                        ? "text-green-600"
                        : order.status === "pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="p-3">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
