"use client";

import { motion } from "framer-motion";
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
  return (
    <section className="w-full py-20 md:py-28 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]"
            >
              Your Partner for Scalable,
              <br className="hidden sm:block" />
              <span className="text-black dark:text-white">Efficient, and Transparent Hiring</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto"
            >
              For over a decade, CloudNexus has helped enterprises hire smarter,
              scale seamlessly, and reduce costs.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="group relative rounded-2xl bg-[#D9EAFD] dark:bg-[#121212] border border-[#006ea3]/10 dark:border-[#2e2e2e] hover:border-[#006ea3]/25 dark:hover:border-[#006ea3]/50 hover:bg-[#cde3fc] dark:hover:bg-[#161616] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] transition-all duration-500 p-6 sm:p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#006ea3]/[0.03] rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#006ea3]/20 dark:border-[#2e2e2e] bg-white dark:bg-[#1a1a1a] text-[#006ea3] dark:text-[#ededed] group-hover:text-[#006ea3] group-hover:border-[#006ea3]/30 transition-colors duration-500">
                  <feature.Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                <h3 className="text-lg font-medium text-black/85 dark:text-[#ededed] mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-black/50 dark:text-[#8b8b8b] leading-relaxed mb-6 font-medium">
                  {feature.description}
                </p>

                <div className="pt-4 border-t border-[#006ea3]/10 dark:border-[#2e2e2e] group-hover:border-[#006ea3]/20 transition-colors duration-500">
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
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
