"use client";

import { motion } from "framer-motion";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { IndustryIntroProps } from "./types";

export function IndustryIntroSection({
  heading: rawHeading,
  descriptionLeft: rawDescriptionLeft,
  descriptionRight: rawDescriptionRight,
  highlights: rawHighlights,
  accentColor = "#4EB3E8",
}: IndustryIntroProps) {
  const heading = useTranslatedData(rawHeading);
  const descriptionLeft = useTranslatedData(rawDescriptionLeft);
  const descriptionRight = useTranslatedData(rawDescriptionRight);
  const highlights = useTranslatedData(rawHighlights);

  return (
    <div className="w-full px-6 py-20 border-b border-black/[0.06] dark:border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              {heading}
            </h2>
            <p className="text-[15px] font-medium text-black/50 dark:text-white/50 leading-relaxed">
              {descriptionLeft}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-[15px] font-medium text-black/50 dark:text-white/50 leading-relaxed mb-8">
              {descriptionRight}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="group relative p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-opacity-20 hover:-translate-y-0.5"
                  style={{
                    ["--accent" as string]: accentColor,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${accentColor}08, transparent)` }}
                  />
                  <p
                    className="relative text-2xl font-bold transition-colors duration-300"
                    style={{ color: accentColor }}
                  >
                    {h.value}
                  </p>
                  <p className="relative text-[12px] font-medium text-black/40 dark:text-white/40 mt-1 leading-tight">
                    {h.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
