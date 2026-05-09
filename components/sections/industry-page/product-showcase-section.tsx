"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { ProductShowcaseProps } from "./types";

export function ProductShowcaseSection({
  heading: rawHeading,
  subtitle: rawSubtitle,
  products: rawProducts,
  accentColor = "#4EB3E8",
}: ProductShowcaseProps) {
  const heading = useTranslatedData(rawHeading);
  const subtitle = useTranslatedData(rawSubtitle);
  const products = useTranslatedData(rawProducts);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % products.length);
  }, [products.length]);

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + products.length) % products.length);
  }, [products.length]);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    if (isInView) setVisible(true);
  }, [isInView]);

  if (!products || products.length === 0) return null;

  const current = products[active];

  return (
    <div
      ref={ref}
      className="border-b border-black/[0.04] dark:border-white/[0.04]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {heading}
            </h2>
            {subtitle && (
              <p className="mt-4 text-base font-medium text-black/45 dark:text-white/45 max-w-xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </motion.div>

        {/* Slider card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative rounded-3xl overflow-hidden bg-[#fafafa] dark:bg-[#0c1322] border border-black/[0.06] dark:border-white/[0.04]"
            >
              {/* Accent gradient bg */}
              <div
                className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}60 0%, transparent 50%)`,
                }}
              />

              <div className="relative grid lg:grid-cols-[1fr_400px]">
                {/* Left content */}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white tracking-tight mb-4">
                    {current.title}
                  </h3>

                  <p className="text-[15px] font-medium text-black/50 dark:text-white/50 leading-relaxed mb-8 max-w-[520px]">
                    {current.description}
                  </p>

                  {/* Bullet points */}
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {current.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-[14px] font-medium text-black/65 dark:text-white/70"
                      >
                        <span
                          className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: accentColor }}
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right sidebar - Numbered feature cards */}
                <div className="border-t lg:border-t-0 lg:border-l border-black/[0.06] dark:border-white/[0.06] p-6 md:p-8 flex flex-col bg-black/[0.01] dark:bg-white/[0.01]">
                  <div className="flex items-center gap-2.5 mb-5">
                    <Layers
                      className="w-4 h-4"
                      style={{ color: accentColor }}
                    />
                    <span className="text-[12px] font-bold text-black/40 dark:text-white/40 uppercase tracking-[0.15em]">
                      {current.timelineLabel || "Key Capabilities"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {current.timeline.map((step, i) => (
                      <div
                        key={i}
                        className="relative rounded-xl p-4 border border-black/[0.05] dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.06] transition-all duration-500 hover:border-black/10 dark:hover:border-white/15"
                        style={{
                          opacity: visible ? 1 : 0,
                          transform: visible
                            ? "translateY(0)"
                            : "translateY(12px)",
                          transitionDelay: visible
                            ? `${i * 100}ms`
                            : "0ms",
                        }}
                      >
                        <span
                          className="text-[28px] font-black leading-none mb-2 block"
                          style={{ color: `${accentColor}40` }}
                        >
                          0{i + 1}
                        </span>
                        <p className="text-[13px] font-semibold text-black dark:text-white mb-1">
                          {step.title}
                        </p>
                        <p className="text-[11px] font-medium text-black/40 dark:text-white/40 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              {products.length > 1 && (
                <div className="px-8 md:px-10 lg:px-12 pb-6 flex items-center gap-3">
                  <button
                    onClick={goPrev}
                    className="w-10 h-10 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center text-black/40 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/25 dark:hover:border-white/30 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goNext}
                    className="w-10 h-10 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center text-black/40 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/25 dark:hover:border-white/30 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2 ml-3">
                    {products.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="transition-all duration-300 rounded-full"
                        style={{
                          width: i === active ? "24px" : "8px",
                          height: "8px",
                          backgroundColor:
                            i === active
                              ? accentColor
                              : "rgba(128,128,128,0.2)",
                        }}
                      />
                    ))}
                  </div>

                  <span className="ml-auto text-[12px] font-medium text-black/40 dark:text-white/40">
                    {active + 1} / {products.length}
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
