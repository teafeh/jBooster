import { motion } from "framer-motion";

export default function LoadingSpinner({ text }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <motion.div
        className="w-6 h-6 border-4 border-pink-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      {text && <p className="text-xs text-gray-300">{text}</p>}
    </div>
  );
}
