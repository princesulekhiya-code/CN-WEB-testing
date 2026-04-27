"use client";

import { BarChart3, Layers } from "lucide-react";
import {
  HeroSection,
  ServiceOfferingsSection,
  ProcessSection,
  TechStackSection,
  WhyChooseSection,
  CTASection,
} from "@/components/sections/service-page";
import {
  heroProps,
  servicesHeading,
  processHeading,
  techHeading,
  ctaProps,
  services,
  processSteps,
  techCategories,
  whyChoose,
} from "./data";

export default function CloudImplementationStrategyPage() {
  const hero = {
    ...heroProps,
    topBadge: { ...heroProps.topBadge, icon: <Layers className="w-4 h-4 text-[#4EB3E8]" /> },
    bottomBadge: {
      ...heroProps.bottomBadge,
      icon: <BarChart3 className="w-4 h-4 text-emerald-500" />,
    },
  };

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <HeroSection {...hero} />
      <ServiceOfferingsSection heading={servicesHeading} services={services} />
      <ProcessSection heading={processHeading} steps={processSteps} />
      <TechStackSection heading={techHeading} categories={techCategories} />
      <WhyChooseSection items={whyChoose} />
      <CTASection {...ctaProps} />
    </section>
  );
}
