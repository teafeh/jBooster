import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "./hook/useAuth";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import LoadingSpinner from "./components/LoadingSpinner";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { login, register, loading, error } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin && form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (isLogin) {
      await login(form.email, form.password);
    } else {
      await register(form.username, form.email, form.password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black flex flex-col font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto w-full">
        <Link
          to={"/"}
          className="text-gray-300 font-medium hover:text-pink-400 transition"
        >
          ⬅ Back to Home
        </Link>
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          JBoost ⚡
        </h1>
      </nav>

      {/* Auth Card */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent">
            {isLogin ? "Welcome Back 👋" : "Create Your JBoost Account 🚀"}
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="JohnDoe"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                required
              />
            </div>

            {/* Password with toggle */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-pink-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-xl bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-pink-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            {/* Single Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-lg transition flex items-center justify-center"
            >
              {loading ? (
                <LoadingSpinner
                  text={isLogin ? "Logging in..." : "Signing up..."}
                />
              ) : isLogin ? (
                "Login"
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          {/* Toggle Auth Mode */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              disabled={loading}
              className="text-pink-400 font-semibold hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
