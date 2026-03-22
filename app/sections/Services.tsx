"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Social Media Marketing",
    icon: "📱",
    desc: "Content strategy, reels, growth hacking, and community management across all platforms.",
  },
  {
    title: "Web Development",
    icon: "💻",
    desc: "Fast, modern, conversion-focused websites built with Next.js and Tailwind.",
  },
  {
    title: "Branding & Design",
    icon: "🎨",
    desc: "Logos, brand kits, and visual identity that makes your business unforgettable.",
  },
  {
    title: "SEO & Growth",
    icon: "📈",
    desc: "Rank higher, reach more. Data-driven SEO strategies tailored to your niche.",
  },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-24">
      <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">What We Do</p>
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            whileHover={{ scale: 1.03, borderColor: "rgba(168,85,247,0.5)" }}
            className="border border-white/10 rounded-2xl p-8 flex gap-5 items-start transition-all duration-300 hover:bg-white/5"
          >
            <span className="text-4xl">{s.icon}</span>
            <div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}