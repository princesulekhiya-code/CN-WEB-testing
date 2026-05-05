"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const circleRef = useRef<SVGCircleElement>(null);
  const rafId = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setVisible(y > 300);
        if (circleRef.current && max > 0) {
          const pct = Math.min(y / max, 1);
          circleRef.current.style.strokeDashoffset = String(
            CIRCUMFERENCE - pct * CIRCUMFERENCE
          );
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full transition-opacity duration-300 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={RADIUS} fill="none" stroke="currentColor" strokeWidth="2" className="text-black/10 dark:text-white/10" />
        <circle
          ref={circleRef}
          cx="24" cy="24" r={RADIUS} fill="none"
          stroke="#4EB3E8" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
        />
      </svg>
      <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-white/10 border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
        <ArrowUp className="w-4 h-4 text-[#4EB3E8]" strokeWidth={2} />
      </div>
    </button>
  );
}
