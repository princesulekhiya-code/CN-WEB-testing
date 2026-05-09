"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { IndustryHeroProps } from "./types";

export function IndustryHeroSection({
  title: rawTitle,
  subtitle: rawSubtitle,
  description: rawDescription,
  heroImage,
  backHref = "/industry",
  backLabel: rawBackLabel = "Back to Industries",
  accentColor = "#4EB3E8",
}: IndustryHeroProps) {
  const title = useTranslatedData(rawTitle);
  const subtitle = useTranslatedData(rawSubtitle);
  const description = useTranslatedData(rawDescription);
  const backLabel = useTranslatedData(rawBackLabel);

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${accentColor}10 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 80% 80%, ${accentColor}08 0%, transparent 40%)`,
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-black/40 dark:text-white/40 hover:text-black/70 dark:hover:text-white/70 transition-colors mb-10"
          >
            <ArrowLeft size={16} /> {backLabel}
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
              style={{
                borderColor: `${accentColor}25`,
                background: `${accentColor}08`,
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: accentColor }}
              />
              <span
                className="text-[12px] font-bold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                {subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
            >
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span style={{ color: accentColor }}>
                {title.split(" ").slice(-1)}
              </span>
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-5 text-[16px] font-medium text-black/50 dark:text-white/45 max-w-lg leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/resources/free-consultation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 shadow-lg hover:opacity-90"
                style={{ background: accentColor }}
              >
                Hire Industry Experts <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {heroImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative hidden lg:block"
            >
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl pointer-events-none opacity-[0.08]"
                style={{ background: accentColor }}
              />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-black/[0.08] dark:border-white/[0.06] shadow-2xl">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div
                  className="absolute inset-0 mix-blend-soft-light opacity-20"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
