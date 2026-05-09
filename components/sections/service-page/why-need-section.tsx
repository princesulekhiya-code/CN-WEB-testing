"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { WhyNeedProps } from "./types";

export function WhyNeedSection(rawProps: WhyNeedProps) {
  const { heading, headingHighlight, subtitle, image, imageAlt, items } = useTranslatedData(rawProps);
  const { ref, visible } = useInView(0.15);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div ref={ref} className="relative overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/[0.03] via-transparent to-[#4EB3E8]/[0.02] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#4EB3E8]">
            {heading} <span className="text-black dark:text-white">{headingHighlight}</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4EB3E8] via-[#4EB3E8]/60 to-transparent" />
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {items.map((item, i) => {
              const isOpen = activeIndex === i;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? -1 : i)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 group ${
                      isOpen
                        ? "bg-[#4EB3E8]/10 dark:bg-[#4EB3E8]/[0.08] border-[#4EB3E8]/30 shadow-md shadow-[#4EB3E8]/5"
                        : "bg-white/60 dark:bg-white/[0.03] border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 hover:bg-[#4EB3E8]/[0.03]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#4EB3E8] text-white"
                            : "bg-black/[0.05] dark:bg-white/[0.06] text-black/40 dark:text-white/40 group-hover:bg-[#4EB3E8]/20 group-hover:text-[#4EB3E8]"
                        }`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className={`text-base md:text-lg font-semibold tracking-tight transition-colors duration-300 ${
                          isOpen ? "text-[#4EB3E8]" : "text-black/80 dark:text-white/80"
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-[#4EB3E8]" : "text-black/30 dark:text-white/30"
                      }`} />
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pl-11">
                            <p className="text-sm md:text-[15px] text-black/55 dark:text-white/55 leading-relaxed font-medium">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
