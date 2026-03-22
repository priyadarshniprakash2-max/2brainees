"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  { num: "01", label: "Big Brain Energy", desc: "Every move is calculated. We do not guess, we dominate." },
  { num: "02", label: "Fast AF", desc: "No slow corporate timelines. We move at startup speed." },
  { num: "03", label: "Results Only", desc: "Vanity metrics are mid. We chase real growth." },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="min-h-screen bg-[#050505] flex flex-col justify-center px-8 py-32 relative overflow-hidden">
      <motion.div style={{ y }} className="absolute right-[-100px] top-[10%] w-[500px] h-[500px] bg-purple-900 rounded-full blur-[160px] opacity-25 pointer-events-none" />
      <motion.div style={{ y }} className="absolute left-[-100px] bottom-[10%] w-[300px] h-[300px] bg-blue-900 rounded-full blur-[120px] opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-6"
        >
          Who We Are
        </motion.p>

        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 120 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black leading-none"
          >
            We are the
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: 120 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
          >
            cheat code.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Your competitors are sleeping. We are not. 2BRAINEES is a two-person agency that hits different — no bloated teams, no corporate nonsense, just raw strategy and execution that actually moves the needle.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            We build brands that make people stop scrolling. If you want cookie-cutter content and mid results — we are not for you. But if you are ready to actually blow up online — you found the right people.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, borderColor: "rgba(168,85,247,0.4)" }}
              className="border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-purple-950/20"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.15 + 0.3 }}
                className="text-purple-400/40 font-black text-sm block mb-6"
              >
                {item.num}
              </motion.span>
              <div className="w-8 h-[2px] bg-purple-400 mb-6" />
              <h3 className="text-white font-black text-xl mb-3">{item.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
