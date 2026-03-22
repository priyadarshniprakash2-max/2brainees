"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const trail = useRef<HTMLDivElement[]>([]);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top = e.clientY + "px";
      }
      trail.current.forEach((el, i) => {
        setTimeout(() => {
          if (el) {
            el.style.left = e.clientX + "px";
            el.style.top = e.clientY + "px";
            el.style.opacity = String(1 - i * 0.15);
            el.style.transform = `translate(-50%, -50%) scale(${1 - i * 0.1})`;
          }
        }, i * 30);
      });
    };

    const animate = () => {
      if (ring.current) {
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
        ring.current.style.left = ringPos.current.x + "px";
        ring.current.style.top = ringPos.current.y + "px";
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    const els = document.querySelectorAll("a, button");
    els.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (ring.current) ring.current.style.transform = "translate(-50%, -50%) scale(2)";
        if (ring.current) ring.current.style.borderColor = "#a855f7";
      });
      el.addEventListener("mouseleave", () => {
        if (ring.current) ring.current.style.transform = "translate(-50%, -50%) scale(1)";
        if (ring.current) ring.current.style.borderColor = "white";
      });
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot} className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" />
      <div ref={ring} className="fixed w-10 h-10 border border-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300" />
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) trail.current[i] = el; }}
          className="fixed w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: 0 }}
        />
      ))}
    </>
  );
}