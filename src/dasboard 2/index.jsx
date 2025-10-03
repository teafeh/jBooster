import { useState, useEffect } from "react";
import useServices from "./hook/useServices";
import useOrder from "./hook/useOrder";
import useLogout from "./hook/useLogout";
import FullPageLoader from "../login 2/components/FullPageLoader";


export default function Dashboard() {
  const { services, loading } = useServices();
  const { placeOrder, loading: orderLoading, toast } = useOrder();
  const { logout } = useLogout();

  const [user, setUser] = useState({
    username: "",
    balance: 0,
    totalOrders: 0,
    status: "newbie",
  });

  const [category, setCategory] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [quantity, setQuantity] = useState(100);
  const [link, setLink] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  if (loading) return <FullPageLoader />;

  const categories = [...new Set(services.map((s) => s.category))];
  const filteredServices = services.filter((s) => s.category === category);
  const charge = selectedService
    ? ((quantity / 1000) * parseFloat(selectedService.rate)).toFixed(2)
    : "0.00";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedService) return;

    placeOrder({
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      rate: selectedService.rate,
      link,
      quantity,
    });
  };

  const handleFundClick = () => {
    window.location.href = "/fund"; // redirect to fund page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col">


      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        {/* Order Form Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">
            Place New Order
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Category */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Category</label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setSelectedService(null);
                }}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="">-- Select a category --</option>
                {categories.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Service */}
            {category && (
              <div>
                <label className="block mb-1 text-gray-700 font-medium">Service</label>
                <select
                  value={selectedService?.id || ""}
                  onChange={(e) => {
                    const service = filteredServices.find(
                      (s) => s.id === parseInt(e.target.value)
                    );
                    setSelectedService(service);
                  }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">-- Select a service --</option>
                  {filteredServices.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Service Info */}
            {selectedService && (
              <div className="bg-purple-50 p-4 rounded-lg space-y-2">
                <p className="font-semibold text-gray-800">{selectedService.name}</p>
                <p className="text-gray-600 text-sm">
                  Min: {selectedService.min} | Max: {selectedService.max}
                </p>
                <p className="text-gray-600 text-sm">
                  Rate: ₦{selectedService.rate} per 1000
                </p>
              </div>
            )}

            {/* Link & Quantity */}
            {selectedService && (
              <>
                <div>
                  <label className="block mb-1 text-gray-700 font-medium">Post Link</label>
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://instagram.com/post/..."
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 font-medium">Quantity</label>
                  <input
                    type="number"
                    min={selectedService.min}
                    max={selectedService.max}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-500">
                    Charge: <span className="font-bold">₦{charge}</span>
                  </p>
                  <p className="text-gray-500">
                    Avg Time: <span className="font-bold">~ 2 hrs</span>
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={orderLoading}
                  className="w-full mt-4 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-500 transition"
                >
                  {orderLoading ? "Processing..." : "Submit Order"}
                </button>
              </>
            )}
          </form>

          {toast.show && (
            <div
              className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-xl shadow-lg flex items-center space-x-3 text-white transition-transform transform 
                ${toast.type === "success" ? "bg-green-500" : "bg-red-500"} animate-slide-in`}
            >
              <span>{toast.message}</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
