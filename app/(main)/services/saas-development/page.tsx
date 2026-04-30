"use client";

import { Cloud, BarChart3 } from "lucide-react";
import { HeroSection, ServiceOfferingsSection, ProcessSection, TechStackSection, WhyNeedSection, WhyChooseSection, CTASection } from "@/components/sections/service-page";
import { CaseStudiesSection } from "@/components/sections/industry-page";
import { heroProps, servicesHeading, processHeading, techHeading, ctaProps, services, processSteps, techCategories, whyNeedProps, whyChoose , caseStudyProjects } from "./data";

export default function SaasDevelopmentPage() {
  const hero = {
    ...heroProps,
    topBadge: { ...heroProps.topBadge, icon: <Cloud className="w-4 h-4 text-[#4EB3E8]" /> },
    bottomBadge: { ...heroProps.bottomBadge, icon: <BarChart3 className="w-4 h-4 text-emerald-500" /> },
  };

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <HeroSection {...hero} />
      <ServiceOfferingsSection heading={servicesHeading} services={services} />
      <ProcessSection heading={processHeading} steps={processSteps} />
      <TechStackSection heading={techHeading} categories={techCategories} />
      <WhyNeedSection {...whyNeedProps} />
      <WhyChooseSection items={whyChoose} />
      <CaseStudiesSection projects={caseStudyProjects} />
      <CTASection {...ctaProps} />
    </section>
  );
}
