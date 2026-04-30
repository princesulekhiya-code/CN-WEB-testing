"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { services } from "../data";
import type { ServiceOffering } from "../data";

export function ServiceOfferingsSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4EB3E8]/[0.02] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#4EB3E8]">
            Service <span className="text-black dark:text-white">Offerings</span>
          </h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            Six focused capabilities covering forecasting, risk, and operational intelligence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  index,
  visible,
}: {
  service: ServiceOffering;
  index: number;
  visible: boolean;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
    >
      <div className="group relative h-full rounded-2xl border border-black/[0.06] bg-white/80 dark:bg-white/[0.02] p-6 hover:border-[#4EB3E8]/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-500 dark:border-white/[0.06] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-[#4EB3E8]/[0.04] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#4EB3E8]/30 group-hover:bg-[#4EB3E8]/10 transition-all duration-500">
            <Icon
              className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-500"
              strokeWidth={1.5}
            />
          </div>

          <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">
            {service.title}
          </h3>

          <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">
            {service.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {service.features.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#4EB3E8]/70 group-hover:bg-[#4EB3E8]/5 transition-all duration-500"
              >
                <CheckCircle2 className="w-3 h-3" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
