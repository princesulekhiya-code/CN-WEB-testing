"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Handshake, BrainCircuit, ArrowRight, Award, Target, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    Icon: Award,
    title: "Global Recognition",
    description:
      "Featured as a LinkedIn Top 20 Company (2023, 2024) and part of the Google AI Accelerator Batch (2024).",
    stat: "Top 20",
    statLabel: "LinkedIn Ranking",
  },
  {
    Icon: Handshake,
    title: "Elite Partnerships",
    description:
      "Worked with Y Combinator, Tiger Global, Accel-backed ventures, and Fortune 500 giants like Adani and Apollo Hospitals.",
    stat: "Fortune 500",
    statLabel: "Client Portfolio",
  },
  {
    Icon: BrainCircuit,
    title: "Precision Talent Matching",
    description:
      "AI-powered sourcing ensures a 98% joining rate with reduced turnover.",
    stat: "98%",
    statLabel: "Joining Rate",
  },
  {
    Icon: Globe,
    title: "Global Delivery",
    description:
      "Seamless delivery across time zones with dedicated teams in India, US, and Europe.",
    stat: "3+",
    statLabel: "Global Regions",
  },
  {
    Icon: Target,
    title: "Result-Driven Approach",
    description:
      "Every engagement is backed by measurable KPIs and transparent reporting from day one.",
    stat: "100%",
    statLabel: "Transparency",
  },
  {
    Icon: Users,
    title: "Scalable Teams",
    description:
      "Rapidly scale from a single developer to a full 50+ member engineering pod within weeks.",
    stat: "50+",
    statLabel: "Engineers On-Demand",
  },
];

export function WhyCloudNexus() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={sectionRef} className="relative w-full py-20 md:py-28 bg-white dark:bg-black overflow-hidden">
      <motion.div style={{ y: orbY1 }} className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#4EB3E8]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <motion.div style={{ y: orbY2 }} className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-indigo-500/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]"
            >
              Your Partner for Scalable,
              <br className="hidden sm:block" />
              <span className="text-black dark:text-white">Efficient, and Transparent Hiring</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto"
            >
              For over a decade, CloudNexus has helped enterprises hire smarter,
              scale seamlessly, and reduce costs.
            </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
              }}
              className="group relative rounded-2xl bg-[#D9EAFD] dark:bg-[#121212] border border-[#4EB3E8]/10 dark:border-[#2e2e2e] hover:border-[#4EB3E8]/25 dark:hover:border-[#4EB3E8]/50 hover:bg-[#cde3fc] dark:hover:bg-[#161616] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] transition-all duration-500 p-6 sm:p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4EB3E8]/[0.03] rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#4EB3E8]/20 dark:border-[#2e2e2e] bg-white dark:bg-[#1a1a1a] text-[#4EB3E8] dark:text-[#ededed] group-hover:text-[#4EB3E8] group-hover:border-[#4EB3E8]/30 transition-colors duration-500">
                  <feature.Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                <h3 className="text-lg font-medium text-black/85 dark:text-[#ededed] mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-black/50 dark:text-[#8b8b8b] leading-relaxed mb-6 font-medium">
                  {feature.description}
                </p>

                <div className="pt-4 border-t border-[#4EB3E8]/10 dark:border-[#2e2e2e] group-hover:border-[#4EB3E8]/20 transition-colors duration-500">
                  <span className="text-2xl font-bold text-black dark:text-white tabular-nums">
                    {feature.stat}
                  </span>
                  <p className="text-[11px] text-black/35 dark:text-[#555] mt-0.5 uppercase tracking-wider font-medium">
                    {feature.statLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/company/about-us"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-300"
          >
            Learn more about us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
