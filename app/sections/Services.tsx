"use client";
import { motion } from "framer-motion";

const services = [
  { num: "01", title: "Social Media Marketing", desc: "Content strategy, reels, growth hacking and community management across all platforms." },
  { num: "02", title: "Web Development", desc: "Fast, modern, conversion-focused websites built with Next.js and Tailwind." },
  { num: "03", title: "Branding & Design", desc: "Logos, brand kits and visual identity that makes your business unforgettable." },
  { num: "04", title: "SEO & Growth", desc: "Rank higher, reach more. Data-driven SEO strategies tailored to your niche." },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen bg-[#050505] flex flex-col justify-center px-8 py-32 relative">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-4">What We Do</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none">Our Services</h2>
        </motion.div>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{ x: 16 }}
              className="group flex items-center gap-8 py-8 border-b border-white/10 cursor-pointer transition-all duration-300"
            >
              <span className="text-purple-400/40 font-black text-sm w-8 shrink-0 group-hover:text-purple-400 transition-colors duration-300">{s.num}</span>
              <h3 className="text-2xl md:text-3xl font-black text-white/80 group-hover:text-white transition-colors duration-300 flex-1">{s.title}</h3>
              <p className="text-gray-600 text-sm max-w-xs hidden md:block group-hover:text-gray-400 transition-colors duration-300">{s.desc}</p>
              <span className="text-white/20 group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-2 text-xl">→</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16"
        >
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 group">
            Start a project
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}