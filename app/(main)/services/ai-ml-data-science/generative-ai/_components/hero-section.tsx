"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Brain, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { useAnimatedCount } from "@/hooks/use-animated-count";
import { stats } from "../data";

export function HeroSection() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#4EB3E8]/10 via-transparent to-transparent dark:from-[#4EB3E8]/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
        <Link
          href="/services/ai-ml-data-science"
          className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
        >
          <ArrowLeft size={16} /> Back to AI, ML & Data Science
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Generative AI
              <br />
              <span className="text-[#4EB3E8]">& LLMs</span>
            </h1>

            <p
              className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              We build retrieval-grounded assistants, fine-tuned models, and agentic workflows that
              stay on-brand, observable, and ready for enterprise scale.
            </p>

            <div
              className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Link
                href="/resources/free-consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10"
              >
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <HeroImage />
            <HeroStats heroReady={heroReady} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative w-full max-w-md mx-auto aspect-[4/3]"
      initial={{ opacity: 0, scale: 0.92, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 border border-black/[0.06] dark:border-white/[0.06]">
        <Image
          src="/images/stock/stock-b7269deaf9.jpg"
          alt="LLM Powered"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-[#4EB3E8]/10 dark:from-black/50 dark:via-black/10 dark:to-[#4EB3E8]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <FloatingBadge
        icon={<Brain className="w-4 h-4 text-[#4EB3E8]" />}
        title="LLM Powered"
        subtitle="GPT & beyond"
        colorClass="bg-[#4EB3E8]/10"
        className="absolute -top-4 -right-4"
        delay={0.8}
      />

      <FloatingBadge
        icon={<Rocket className="w-4 h-4 text-emerald-500" />}
        title="Custom Models"
        subtitle="Fine-tuned AI"
        colorClass="bg-emerald-500/10"
        className="absolute -bottom-4 -left-4"
        delay={1.0}
      />
    </motion.div>
  );
}

function FloatingBadge({
  icon,
  title,
  subtitle,
  colorClass,
  className,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  colorClass: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`${className} px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30`}
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${colorClass}`}>
          {icon}
        </div>
        <div>
          <div className="text-sm font-bold text-black dark:text-white">{title}</div>
          <div className="text-[10px] font-medium text-black/40 dark:text-white/40">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  );
}

function HeroStats({ heroReady }: { heroReady: boolean }) {
  const { ref, visible } = useInView(0.2);
  const c0 = useAnimatedCount(stats[0].value, visible, 0);
  const c1 = useAnimatedCount(stats[1].value, visible, 100);
  const c2 = useAnimatedCount(stats[2].value, visible, 200);
  const c3 = useAnimatedCount(stats[3].value, visible, 300);
  const counts = [c0, c1, c2, c3];

  return (
    <div ref={ref} className="space-y-8">
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <div className="text-xl md:text-2xl font-bold text-[#4EB3E8] tabular-nums">
              {counts[i]}
              {stat.suffix}
            </div>
            <div className="mt-0.5 text-[10px] md:text-xs font-medium text-black/40 dark:text-white/40 leading-snug">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
