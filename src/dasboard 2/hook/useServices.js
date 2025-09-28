import { useState, useEffect } from "react";

export default function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem("token"); // 👈 grab token
        const res = await fetch("https://jboosterbackend.onrender.com/api/services", {
          headers: {
            Authorization: `Bearer ${token}`, // 👈 attach token
          },
        });
        if (!res.ok) throw new Error("Failed to load services");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
}
