import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-black via-purple-950 to-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          JBoost ⚡
        </h1>
        <Link
          to={"/auth"}
          className="bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-2xl shadow-xl hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-28 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          Boost Your
          <span className="block bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-500 bg-clip-text text-transparent">
            Social Media Presence
          </span>
          Instantly
        </motion.h2>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Welcome to JBoost — trusted by creators, brands, and resellers for
          safe, automated growth. Over 70M+ orders delivered with confidence
          since 2020.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-2xl font-semibold hover:opacity-90 transition shadow-lg">
            Try Free Demo
          </button>
          <button className="border border-white/30 px-8 py-3 rounded-2xl font-semibold hover:bg-white/10 transition">
            Watch Video
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-6 text-center">
        {[
          { title: "70M+", desc: "Orders Delivered" },
          { title: "0.12s", desc: "Avg Order Speed" },
          { title: "5+ Years", desc: "Trusted Experience" },
          { title: "🏆", desc: "Best SMM Solution 2025" },
        ].map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-md"
          >
            <h4 className="text-3xl font-extrabold mb-2">{s.title}</h4>
            <p className="text-gray-300">{s.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <Users size={40} />,
            title: "Real Growth",
            desc: "Authentic followers & engagement with every order.",
          },
          {
            icon: <ShieldCheck size={40} />,
            title: "Safe & Secure",
            desc: "Triple verification ensures account & payment safety.",
          },
          {
            icon: <Zap size={40} />,
            title: "Automated Speed",
            desc: "AI-powered delivery that works while you sleep.",
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/10"
          >
            <div className="mb-5 text-pink-400">{f.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-purple-800/40 to-pink-700/30 py-24 px-6">
        <h3 className="text-4xl font-bold text-center mb-12">
          Trusted by Creators & Brands
        </h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "I gained 20k followers in weeks, safely!",
            "My sales doubled after boosting engagement.",
            "Finally — a platform that actually works!",
          ].map((quote, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg"
            >
              <p className="italic text-lg mb-4">“{quote}”</p>
              <span className="text-sm text-gray-400">– JBoost Client</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center px-6">
        <h3 className="text-5xl font-extrabold mb-6">
          Ready to Elevate Your Presence?
        </h3>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          From content creators to global brands, JBoost gives you the tools to
          show up, stand out, and scale fast — without compromising safety.
        </p>
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-5 rounded-3xl font-bold text-lg hover:opacity-90 transition inline-flex items-center gap-3 shadow-lg">
          Get Started Now <ArrowRight size={22} />
        </button>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} JBoost. All rights reserved.
      </footer>
    </div>
  );
}
