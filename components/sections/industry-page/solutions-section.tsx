"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { IndustrySolutionsProps } from "./types";

export function IndustrySolutionsSection({
  heading: rawHeading,
  subtitle: rawSubtitle,
  solutions: rawSolutions,
  accentColor = "#4EB3E8",
}: IndustrySolutionsProps) {
  const heading = useTranslatedData(rawHeading);
  const subtitle = useTranslatedData(rawSubtitle);
  const solutions = useTranslatedData(rawSolutions);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % solutions.length);
  }, [solutions.length]);

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + solutions.length) % solutions.length);
  }, [solutions.length]);

  if (!solutions || solutions.length === 0) return null;

  const current = solutions[active];

  return (
    <div
      ref={ref}
      className="border-b border-black/[0.04] dark:border-white/[0.04]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {heading}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base font-medium text-black/45 dark:text-white/45 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-0 lg:gap-0">
          {/* Left tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 lg:pr-0"
          >
            {solutions.map((sol, i) => (
              <button
                key={sol.title}
                onClick={() => setActive(i)}
                className={`relative flex-shrink-0 text-left px-5 py-3.5 text-sm font-semibold transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                  active === i
                    ? "text-white rounded-xl lg:rounded-l-xl lg:rounded-r-none shadow-lg"
                    : "text-black/55 dark:text-white/50 hover:text-black/80 dark:hover:text-white/70 rounded-xl border border-transparent hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                }`}
                style={
                  active === i
                    ? {
                        background: accentColor,
                        boxShadow: `0 4px 20px ${accentColor}30`,
                      }
                    : undefined
                }
              >
                {sol.title}
              </button>
            ))}
          </motion.div>

          {/* Right content - dark card with slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative rounded-2xl lg:rounded-l-none lg:rounded-r-2xl overflow-hidden"
              >
                <div className="relative bg-[#fafafa] dark:bg-[#0c1322] border border-black/[0.06] dark:border-white/[0.04] p-8 md:p-10 min-h-[320px]">
                  {/* Accent gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor} 0%, transparent 60%)`,
                    }}
                  />
                  {/* Decorative angled accent on right */}
                  <div
                    className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] dark:opacity-[0.06] hidden md:block"
                    style={{
                      background: `linear-gradient(135deg, transparent 20%, ${accentColor}50 100%)`,
                      clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight mb-4">
                      {current.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] font-medium text-black/50 dark:text-white/50 leading-relaxed mb-8 max-w-[600px]">
                      {current.description}
                    </p>

                    {/* Features as bullet points with accent dots */}
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                      {current.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-start gap-3 text-[14px] font-medium text-black/65 dark:text-white/70"
                        >
                          <span
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: accentColor }}
                          />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Left-right navigation arrows  -  anchored inside the content card */}
                  {solutions.length > 1 && (
                    <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
                      <button
                        onClick={goPrev}
                        className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center text-black/40 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/25 dark:hover:border-white/25 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 active:scale-95"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={goNext}
                        className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center text-black/40 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/25 dark:hover:border-white/25 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 active:scale-95"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Bottom dot indicators */}
                  {solutions.length > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-8">
                      {solutions.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className="transition-all duration-300 rounded-full"
                          style={{
                            width: i === active ? "28px" : "8px",
                            height: "8px",
                            backgroundColor:
                              i === active
                                ? accentColor
                                : "rgba(128,128,128,0.15)",
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
