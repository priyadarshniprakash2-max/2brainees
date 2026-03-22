"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-purple-700 rounded-full blur-[180px] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-sm uppercase tracking-[0.5em] text-purple-400 mb-6"
      >
        Digital Agency
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-9xl font-bold text-center leading-none tracking-tight"
      >
        2BRAINEES
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-6 text-gray-400 text-lg text-center max-w-sm"
      >
        We don't follow trends. We set them.
      </motion.p>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 relative group px-10 py-4 rounded-full text-sm font-bold overflow-hidden bg-purple-600 text-white"
      >
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-full" />
        <span className="relative z-10 flex items-center gap-2">
          Lets build something 🔥
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </span>
      </motion.a>
    </section>
  );
}