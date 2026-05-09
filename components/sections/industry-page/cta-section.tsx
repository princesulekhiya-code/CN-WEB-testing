"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { IndustryCTAProps } from "./types";

export function IndustryCTASection({
  headingTop: rawHeadingTop,
  headingBottom: rawHeadingBottom,
  description: rawDescription,
  primaryLink = "/resources/free-consultation",
  primaryLabel: primaryLabelProp,
  secondaryLink = "/our-work",
  secondaryLabel: secondaryLabelProp,
  accentColor = "#4EB3E8",
}: IndustryCTAProps) {
  const { t } = useTranslation();
  const headingTop = useTranslatedData(rawHeadingTop);
  const headingBottom = useTranslatedData(rawHeadingBottom);
  const description = useTranslatedData(rawDescription);
  const primaryLabel = primaryLabelProp ?? t("consultation.cta", "Get Free Consultation");
  const secondaryLabel = secondaryLabelProp ?? t("common.viewAll", "View Our Work");
  return (
    <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-10 sm:p-14 text-center overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${accentColor}06 0%, transparent 70%)`,
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/[0.08] dark:border-white/[0.08]"
              style={{ background: `${accentColor}10` }}
            >
              <MessageSquare className="w-6 h-6" style={{ color: accentColor }} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {headingTop}
              <br />
              <span style={{ color: accentColor }}>{headingBottom}</span>
            </h2>

            <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed">
              {description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={primaryLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                {primaryLabel} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={secondaryLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
              >
                {secondaryLabel}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
