"use client";
// @ts-nocheck
import { motion } from "framer-motion";

const items = [
  "Social Media Marketing",
  "Web Development",
  "Branding & Design",
  "SEO & Growth",
  "Content Strategy",
  "Digital Presence",
  "Brand Identity",
  "Growth Hacking",
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-purple-600 py-4 z-10 relative">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-white font-semibold text-sm uppercase tracking-widest flex items-center gap-12">
            {item}
            <span className="text-purple-300">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}