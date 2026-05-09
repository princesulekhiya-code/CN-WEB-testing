"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { IndustryServicesProps } from "./types";

export function IndustryServicesSection({
  heading: rawHeading,
  subtitle: rawSubtitle,
  services: rawServices,
  accentColor = "#4EB3E8",
}: IndustryServicesProps) {
  const heading = useTranslatedData(rawHeading);
  const subtitle = useTranslatedData(rawSubtitle);
  const services = useTranslatedData(rawServices);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (!services || services.length === 0) return null;

  return (
    <div ref={ref} className="border-b border-black/[0.04] dark:border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="text-center mb-14"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="group relative rounded-2xl border border-black/[0.08] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.02] p-6 cursor-pointer overflow-hidden min-h-[200px] shadow-sm shadow-black/[0.04] dark:shadow-none transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 hover:-translate-y-1 hover:border-transparent"
              >
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}E6, ${accentColor}CC)`,
                  }}
                />

                {/* Left accent bar - visible in default, hides on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-60 group-hover:opacity-0 transition-opacity duration-500"
                  style={{ background: accentColor }}
                />

                {/* Watermark icon on hover */}
                <Icon
                  className="absolute bottom-3 right-3 w-20 h-20 opacity-0 group-hover:opacity-[0.15] transition-all duration-500 group-hover:scale-110 text-white"
                  strokeWidth={0.8}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/30"
                    style={{ background: `${accentColor}15`, borderColor: `${accentColor}30` }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-500 group-hover:text-white"
                      style={{ color: accentColor }}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3
                    className="text-lg font-semibold tracking-tight mb-2 transition-colors duration-500 text-black dark:text-white group-hover:text-white"
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-black/50 dark:text-white/45 leading-relaxed transition-colors duration-500 group-hover:text-white/85">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
