"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { ExpertiseAccordionProps } from "./types";

export function ExpertiseAccordionSection({
  heading: rawHeading,
  subtitle: rawSubtitle,
  items: rawItems,
  accentColor = "#4EB3E8",
}: ExpertiseAccordionProps) {
  const heading = useTranslatedData(rawHeading);
  const subtitle = useTranslatedData(rawSubtitle);
  const items = useTranslatedData(rawItems);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIdx, setOpenIdx] = useState<number | null>(1);

  if (!items || items.length === 0) return null;

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

        {/* Accordion list */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-xl text-left transition-all duration-300 border ${
                    isOpen
                      ? "bg-[#fafafa] dark:bg-white/[0.04] border-black/[0.06] dark:border-white/[0.08]"
                      : "bg-transparent border-black/[0.04] dark:border-white/[0.04] hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                  }`}
                  style={{
                    borderLeftWidth: "3px",
                    borderLeftColor: isOpen ? accentColor : "transparent",
                  }}
                >
                  <span
                    className={`text-[15px] font-semibold transition-colors duration-300 ${
                      isOpen
                        ? "text-black dark:text-white"
                        : "text-black/60 dark:text-white/50"
                    }`}
                  >
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "text-black/60 dark:text-white/60 rotate-180"
                        : "text-black/30 dark:text-white/30"
                    }`}
                    style={isOpen ? { color: accentColor } : undefined}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 pt-3 pb-5 text-[14px] font-medium text-black/50 dark:text-white/45 leading-relaxed"
                        style={{ marginLeft: "3px" }}
                      >
                        {item.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
