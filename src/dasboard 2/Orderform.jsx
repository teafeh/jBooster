import { useState } from "react";
import useServices from "./hook/useServices";


export default function OrderForm() {
  const { services, loading } = useServices();

  const [category, setCategory] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [customRate, setCustomRate] = useState("");

  if (loading) return <p>Loading services...</p>;

  // Get unique categories
  const categories = [...new Set(services.map((s) => s.category))];

  // Filter services by selected category
  const filteredServices = services.filter((s) => s.category === category);

  return (
    <div className="p-6 max-w-lg mx-auto space-y-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold">Create New Order</h2>

      {/* Step 1: Category */}
      <div>
        <label className="block mb-1 font-medium">Category</label>
        <select
          className="w-full border rounded p-2"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSelectedService(null);
          }}
        >
          <option value="">-- Select a category --</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Step 2: Service */}
      {category && (
        <div>
          <label className="block mb-1 font-medium">Service</label>
          <select
            className="w-full border rounded p-2"
            value={selectedService?.id || ""}
            onChange={(e) => {
              const service = filteredServices.find(
                (s) => s.id === parseInt(e.target.value)
              );
              setSelectedService(service);
              setCustomRate(service?.rate || "");
            }}
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

      {/* Step 3: Service Details */}
      {selectedService && (
        <div className="space-y-3 p-3 border rounded bg-gray-50">
          <p><span className="font-semibold">Service:</span> {selectedService.name}</p>
          <p><span className="font-semibold">Min:</span> {selectedService.min}</p>
          <p><span className="font-semibold">Max:</span> {selectedService.max}</p>

          {/* Custom Rate Input */}
          <div>
            <label className="block mb-1 font-medium">Selling Rate (₦/1k)</label>
            <input
              type="number"
              value={customRate}
              onChange={(e) => setCustomRate(e.target.value)}
              className="w-full border rounded p-2"
            />
            <p className="text-xs text-gray-500">
              Default provider rate: ₦{selectedService.rate}/1k
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
