"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: "📱", title: "Social Media Marketing", desc: "Content strategy, reels, growth hacking and community management across all platforms." },
  { icon: "💻", title: "Web Development", desc: "Fast, modern, conversion-focused websites built with Next.js and Tailwind." },
  { icon: "🎨", title: "Branding & Design", desc: "Logos, brand kits and visual identity that makes your business unforgettable." },
  { icon: "📈", title: "SEO & Growth", desc: "Rank higher, reach more. Data-driven SEO strategies tailored to your niche." },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#080808] flex flex-col items-center justify-center px-6 py-24">
      <div ref={ref} className="max-w-4xl w-full text-center">
        <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">Who We Are</p>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Two minds. <span className="text-purple-400">Infinite results.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          2BRAINEES is a digital-first agency built by two passionate creators. We combine strategy, design and technology to help brands grow online.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left mb-16">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ scale: 1.03 }}
              className="border border-white/10 rounded-2xl p-8 flex gap-5 items-start hover:bg-white/5 hover:border-purple-500/40 transition-all duration-300"
            >
              <span className="text-4xl">{s.icon}</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[["50+", "Clients Served"], ["3x", "Avg. Growth Rate"], ["100%", "Passion Driven"]].map(([num, label]) => (
            <div key={label} className="border border-white/10 rounded-2xl p-6">
              <p className="text-4xl font-bold text-purple-400">{num}</p>
              <p className="text-gray-500 mt-2 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}