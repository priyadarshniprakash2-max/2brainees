"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-[#080808] flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">Get In Touch</p>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Ready to dominate?
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Lets work together and build something great.
        </p>
        <a href="mailto:connect@2brainees.com" className="inline-block px-12 py-4 bg-purple-600 hover:bg-purple-500 rounded-full text-white font-semibold transition-all duration-300 text-lg">
          connect@2brainees.com
        </a>
        <p className="text-gray-600 mt-8 text-sm">We reply within 24 hours.</p>
      </motion.div>
    </section>
  );
}
