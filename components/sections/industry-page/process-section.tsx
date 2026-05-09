"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Search, Palette, Settings, Code2, ShieldCheck, Rocket } from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { IndustryProcessProps } from "./types";

const defaultIcons = [Search, Palette, Settings, Code2, ShieldCheck, Rocket];

export function IndustryProcessSection({
  heading: rawHeading,
  subtitle: rawSubtitle,
  steps: rawSteps,
  accentColor = "#4EB3E8",
}: IndustryProcessProps) {
  const heading = useTranslatedData(rawHeading);
  const subtitle = useTranslatedData(rawSubtitle);
  const steps = useTranslatedData(rawSteps);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isInView, steps.length]);

  if (!steps || steps.length === 0) return null;

  const activeStep = steps[activeIdx];
  const ActiveIcon = activeStep.icon || defaultIcons[activeIdx % defaultIcons.length];

  return (
    <div ref={ref} className="border-b border-black/[0.04] dark:border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{heading}</h2>
          {subtitle && (
            <p className="mt-4 text-base font-medium text-black/45 dark:text-white/45 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Step selector */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              {steps.map((step, i) => {
                const isActive = activeIdx === i;
                const isPast = i < activeIdx;
                const StepIcon = step.icon || defaultIcons[i % defaultIcons.length];
                return (
                  <motion.button
                    key={step.step}
                    onClick={() => setActiveIdx(i)}
                    className="w-full text-left relative overflow-hidden rounded-xl transition-all duration-400 group"
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.08 * i }}
                  >
                    <div
                      className={`relative flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-400 ${
                        isActive
                          ? "bg-white shadow-lg dark:bg-[#0c1322]"
                          : "bg-transparent hover:bg-[#f5f5f5] dark:hover:bg-white/[0.03]"
                      }`}
                      style={{
                        border: isActive ? `1.5px solid ${accentColor}40` : "1.5px solid transparent",
                      }}
                    >
                      {/* Left accent bar */}
                      <motion.div
                        className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                        style={{ background: accentColor }}
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Icon circle */}
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-400"
                        style={{
                          background: isActive ? accentColor : isPast ? `${accentColor}20` : `${accentColor}08`,
                          border: `2px solid ${isActive ? accentColor : `${accentColor}25`}`,
                        }}
                      >
                        {isPast ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3.5 3.5L13 5" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <StepIcon
                            className="w-4 h-4 transition-colors duration-400"
                            style={{ color: isActive ? "#fff" : accentColor }}
                            strokeWidth={1.8}
                          />
                        )}
                      </div>

                      {/* Title */}
                      <div className="flex-1 min-w-0">
                        <h4
                          className="text-sm font-bold tracking-tight transition-colors duration-400"
                          style={{ color: isActive ? accentColor : undefined }}
                        >
                          <span className={isActive ? "" : "text-black dark:text-white"}>{step.title}</span>
                        </h4>
                        {isActive && (
                          <motion.p
                            className="text-xs text-black/40 dark:text-white/40 mt-0.5 line-clamp-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </div>

                      {/* Arrow */}
                      <motion.div
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
                        transition={{ duration: 0.25 }}
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: accentColor }}>
                          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Auto-progress bar */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-5 right-5 h-[2px] rounded-full origin-left"
                        style={{ background: accentColor }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 5, ease: "linear" }}
                        key={`progress-${activeIdx}`}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Overall progress */}
            <div className="mt-6 px-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider">Progress</span>
                <span className="text-xs font-bold" style={{ color: accentColor }}>
                  {activeIdx + 1}/{steps.length}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-[#f0f0f0] dark:bg-white/[0.06] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: accentColor }}
                  initial={false}
                  animate={{ width: `${((activeIdx + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Active step detail card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div
              className="relative rounded-3xl overflow-hidden min-h-[460px] flex flex-col justify-between p-8 md:p-10"
              style={{ background: `linear-gradient(145deg, ${accentColor}, ${accentColor}BB)` }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
              <div className="absolute -bottom-14 -left-14 w-40 h-40 rounded-full" style={{ background: "rgba(255,255,255,0.03)" }} />
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 flex flex-col h-full justify-between"
                >
                  <div>
                    {/* Badge + Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-xs font-bold text-white/90 tracking-wider uppercase">
                          Step {activeStep.step} of {String(steps.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Animated icon */}
                    <motion.div
                      className="mb-5 w-16 h-16 rounded-2xl flex items-center justify-center bg-white/15 border border-white/20 backdrop-blur-sm"
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      <ActiveIcon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                      {activeStep.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-lg mb-6">
                      {activeStep.description}
                    </p>

                    {/* Highlight bullets */}
                    {activeStep.highlights && activeStep.highlights.length > 0 && (
                      <div className="space-y-2.5">
                        {activeStep.highlights.map((hl, hIdx) => (
                          <motion.div
                            key={hIdx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.08 * hIdx }}
                          >
                            <div className="mt-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <span className="text-sm text-white/80 font-medium leading-relaxed">{hl}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom nav */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {steps.map((_, i) => (
                        <motion.button
                          key={i}
                          onClick={() => setActiveIdx(i)}
                          className="h-2 rounded-full cursor-pointer"
                          style={{
                            width: i === activeIdx ? 28 : 8,
                            background: i === activeIdx ? "#fff" : "rgba(255,255,255,0.3)",
                          }}
                          layout
                          transition={{ duration: 0.3 }}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveIdx((prev) => (prev - 1 + steps.length) % steps.length)}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/15 border border-white/20 backdrop-blur-sm hover:bg-white/25 transition-all"
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M10 3L5 8l5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setActiveIdx((prev) => (prev + 1) % steps.length)}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/25 border border-white/30 backdrop-blur-sm hover:bg-white/35 transition-all"
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M6 3l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
