"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import type { IndustryHeroProps } from "./types";

export function IndustryHeroSection({
  title,
  subtitle,
  backHref = "/industry",
  backLabel = "Back to Industries",
  accentColor = "#4EB3E8",
}: IndustryHeroProps) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top center, ${accentColor}12 0%, transparent 60%)`,
        }}
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-[0.04]"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              border: `1px solid ${accentColor}`,
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.04, 0.08, 0.04],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-black/40 dark:text-white/40 hover:text-black/70 dark:hover:text-white/70 transition-colors mb-8"
          >
            <ArrowLeft size={16} /> {backLabel}
          </Link>
        </motion.div>

        <div className="flex items-start gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden sm:flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-black/10 dark:border-white/10 mt-1"
            style={{ background: `${accentColor}10` }}
          >
            <Sparkles className="w-6 h-6" style={{ color: accentColor }} />
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
