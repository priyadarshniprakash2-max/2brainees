"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-purple-900 rounded-full blur-[200px] opacity-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center relative z-10"
      >
        <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-8">Ready?</p>

        <h2 className="text-[clamp(3rem,12vw,10rem)] font-black leading-none mb-8">
          Lessgoooo 🔥
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-48 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-12"
        />

        <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto">
          Stop waiting. Your brand is not going to build itself.
        </p>

        <Link href="/contact">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-black text-lg rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-pointer"
          >
            Start your project 🚀
          </motion.div>
        </Link>

        <p className="text-gray-700 mt-8 text-xs tracking-widest uppercase">
          or reach us at{" "}
          <a href="mailto:connect@2brainees.com" className="text-purple-400 hover:text-purple-300 transition-colors">
            connect@2brainees.com
          </a>
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 text-gray-700 text-xs tracking-widest uppercase"
      >
        
      </motion.p>
    </section>
  );
}