"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { useTranslatedData } from "@/lib/i18n/translate-data";
import type { ServiceOffering, ServicePageSectionProps } from "./types";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export function ServiceOfferingsSection({
  heading: rawHeading,
  services: rawServices,
}: { heading: ServicePageSectionProps; services: ServiceOffering[] }) {
  const heading = useTranslatedData(rawHeading);
  const services = useTranslatedData(rawServices);
  const { ref, visible } = useInView(0.1);

  if (services.length === 0) return null;

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
            {heading.headingGray} <span className="text-black dark:text-white">{heading.headingWhite}</span>
            {heading.headingTail != null && heading.headingTail !== "" ? <> {heading.headingTail}</> : null}
          </h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            {heading.subtitle}
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

  const hasLogos = service.logos && service.logos.length >= 3 && service.accent;

  const cardContent = (
    <div className="group relative h-full rounded-2xl border border-black/[0.06] bg-white/80 dark:bg-white/[0.02] p-6 hover:border-[#4EB3E8]/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-500 dark:border-white/[0.06] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-[#4EB3E8]/[0.04] overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {hasLogos ? (
          <div className="relative w-full h-40 mb-4">
            <ServiceCardIllustration logos={service.logos!} accent={service.accent!} />
          </div>
        ) : (
          <div className="flex items-start justify-between mb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#4EB3E8]/30 group-hover:bg-[#4EB3E8]/10 transition-all duration-500">
              <Icon
                className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-500"
                strokeWidth={1.5}
              />
            </div>
            {service.href && (
              <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/20 group-hover:text-[#4EB3E8] group-hover:translate-x-1 transition-all duration-300" />
            )}
          </div>
        )}

        <h3
          className={
            service.titleRest != null && service.titleEmphasis != null
              ? "text-lg font-semibold tracking-tight text-[#4EB3E8] group-hover:text-[#4EB3E8] transition-colors duration-300"
              : "text-lg font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300"
          }
        >
          {service.titleRest != null && service.titleEmphasis != null ? (
            <>
              <span className="text-[#4EB3E8] group-hover:text-inherit">{service.titleRest} </span>
              <span className="text-black dark:text-white group-hover:text-inherit">{service.titleEmphasis}</span>
            </>
          ) : (
            service.title
          )}
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
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
    >
      {service.href ? (
        <Link href={service.href} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

function ServiceCardIllustration({ logos, accent }: { logos: string[]; accent: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
          <Image src={`${DEVICON}/${logos[0]}`} alt="" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 object-contain" unoptimized />
        </div>
      </div>
      <div className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-dashed opacity-20 group-hover:opacity-40 group-hover:rotate-[30deg] transition-all duration-1000" style={{ borderColor: accent }} />
      <div className="absolute top-2 right-8 md:top-3 md:right-12 z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-white/10 shadow-md shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
          <Image src={`${DEVICON}/${logos[1]}`} alt="" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 object-contain" unoptimized />
        </div>
      </div>
      <div className="absolute bottom-2 left-8 md:bottom-3 md:left-12 z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-white/10 shadow-md shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-500">
          <Image src={`${DEVICON}/${logos[2]}`} alt="" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 object-contain" unoptimized />
        </div>
      </div>
      <div className="absolute top-5 left-14 w-2 h-2 rounded-full opacity-20 group-hover:opacity-50 transition-opacity duration-500" style={{ backgroundColor: accent }} />
      <div className="absolute bottom-8 right-14 w-1.5 h-1.5 rounded-full opacity-15 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundColor: accent }} />
      <div className="absolute top-12 left-6 w-1 h-1 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundColor: accent }} />
      <div className="absolute w-24 h-24 rounded-full blur-2xl opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500" style={{ backgroundColor: accent }} />
    </div>
  );
}
