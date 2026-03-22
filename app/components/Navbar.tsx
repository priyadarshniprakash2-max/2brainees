"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const links = ["About", "Services", "Contact"];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-purple-500 origin-left z-[99999]"
      />
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 backdrop-blur-md bg-black/30 border-b border-white/10"
      >
        <span className="text-xl font-bold tracking-widest">2BRAINEES</span>
        <ul className="flex gap-8 text-sm text-gray-400">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}