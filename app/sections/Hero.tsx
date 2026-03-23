"use client";
// @ts-nocheck
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const chars = "!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const typewriterWords = ["dominate.", "grow.", "stand out.", "go viral."];

function useScramble(target) {
  const [output, setOutput] = useState(target);
  const frame = useRef(0);
  const queue = useRef([]);

  useEffect(() => {
    queue.current = target.split("").map((to) => ({
      from: chars[Math.floor(Math.random() * chars.length)],
      to,
      start: Math.floor(Math.random() * 10),
      end: Math.floor(Math.random() * 10) + 10,
    }));
    let frameId;
    const update = () => {
      let complete = 0;
      const str = queue.current.map((item) => {
        if (frame.current >= item.end) { complete++; return item.to; }
        if (frame.current >= item.start) {
          item.char = chars[Math.floor(Math.random() * chars.length)];
          return '<span style="color:#a855f7">' + item.char + '</span>';
        }
        return item.from;
      }).join("");
      setOutput(str);
      frame.current++;
      if (complete < queue.current.length) frameId = requestAnimationFrame(update);
    };
    frame.current = 0;
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return output;
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const scrambled = useScramble("2BRAINEES");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const word = typewriterWords[index];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % typewriterWords.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <section ref={ref} className="h-screen flex flex-col items-center justify-center bg-[#050505] relative overflow-hidden z-10">
      <div className="absolute w-[700px] h-[700px] bg-purple-800 rounded-full blur-[200px] opacity-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[300px] h-[300px] bg-blue-800 rounded-full blur-[150px] opacity-10 top-1/4 left-1/4" />

      <motion.div style={{ y, opacity }} className="flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="text-xs uppercase text-purple-400 mb-8 tracking-[0.5em]"
        >
          Digital Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(4rem,15vw,12rem)] font-black text-center leading-none tracking-tighter"
          dangerouslySetInnerHTML={{ __html: scrambled }}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent my-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-gray-400 text-xl text-center"
        >
          We help brands{" "}
          <span className="text-purple-400 font-semibold">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}
