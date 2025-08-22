// src/pages/UnderConstruction.jsx
import { motion } from "framer-motion";
import { Clock, Construction } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-lg text-center p-10 rounded-2xl shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10"
      >
        {/* Logo or Icon */}
        <motion.div
          initial={{ rotate: -15 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Construction className="w-20 h-20 text-yellow-400 drop-shadow-xl" />
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
          Website Under Construction
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg mb-8">
          We’re crafting something amazing at <span className="font-semibold text-white">MacTech Global</span>.  
          Stay tuned for the future of technology and innovation.
        </p>

        {/* Countdown Placeholder */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-4 text-gray-200"
        >
          <Clock className="w-6 h-6 text-yellow-300 animate-pulse" />
          <span className="text-lg">Innovation is Loading...</span>
        </motion.div>

        {/* Notify Button */}
       
      </motion.div>
    </div>
  );
}
