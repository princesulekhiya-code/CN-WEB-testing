"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, Clock, Shield } from "lucide-react";

const highlightIcons = [MessageSquare, Clock, Shield];

const consultationHighlights = [
  "1-on-1 Expert Session",
  "30 Min Free Call",
  "No Commitment Required",
];

export function FreeConsultation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-12 md:py-16 bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div
          ref={sectionRef}
          className={`relative overflow-hidden rounded-2xl border border-[#4EB3E8]/10 dark:border-white/[0.08] bg-[#D9EAFD] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-zinc-900 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <motion.div
            style={{ y: orbY1 }}
            className={`absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3 transition-opacity duration-1000 delay-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          />
          <motion.div
            style={{ y: orbY2 }}
            className={`absolute bottom-0 left-0 w-60 h-60 bg-[#4EB3E8]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3 transition-opacity duration-1000 delay-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="relative px-5 py-10 sm:px-8 sm:py-12 md:px-14 md:py-16 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14">
            <div className="flex-1 text-center md:text-left">
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b] leading-tight mb-4 transition-all duration-600 delay-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Let&apos;s Build Something
                <br className="hidden sm:block" />
                <span className="text-black dark:text-white">Great Together</span>
              </h2>
              <p
                className={`text-sm md:text-base text-black/50 dark:text-white/50 leading-relaxed max-w-md mb-8 transition-all duration-600 delay-[400ms] ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Book a free consultation with our experts. Share your vision, discuss your challenges, and get a tailored roadmap — no strings attached.
              </p>

              <div
                className={`flex flex-wrap justify-center md:justify-start gap-4 mb-8 transition-all duration-500 delay-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                {highlightIcons.map((Icon, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-black/50 dark:text-white/60"
                  >
                    <Icon size={15} strokeWidth={1.8} />
                    <span className="text-xs font-medium">{consultationHighlights[i]}</span>
                  </div>
                ))}
              </div>

              <div
                className={`transition-all duration-500 delay-[600ms] ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                <Link
                  href="/resources/contact"
                  className="group inline-flex items-center gap-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black px-7 py-3 text-sm font-semibold hover:bg-black/80 dark:hover:bg-white/90 transition-all duration-300 shadow-lg shadow-black/10 dark:shadow-white/10"
                >
                  Get Free Consultation
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div
              className={`hidden md:flex flex-col items-center gap-4 flex-shrink-0 transition-all duration-700 delay-500 ${
                visible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-6 scale-95"
              }`}
            >
              <div className="w-44 h-44 rounded-2xl border border-[#4EB3E8]/10 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] backdrop-blur-sm flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#4EB3E8]/10 dark:bg-indigo-500/15 flex items-center justify-center">
                  <MessageSquare size={28} strokeWidth={1.5} className="text-[#4EB3E8] dark:text-indigo-400" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-black dark:text-white">Talk to an Expert</p>
                  <p className="text-[10px] text-black/40 dark:text-white/40 mt-0.5">Response within 24hrs</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    visible ? "scale-100" : "scale-0"
                  } ${i === 0 ? "bg-[#4EB3E8] dark:bg-indigo-400" : "bg-black/15 dark:bg-white/20"}`}
                  style={{ transitionDelay: `${700 + i * 100}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
