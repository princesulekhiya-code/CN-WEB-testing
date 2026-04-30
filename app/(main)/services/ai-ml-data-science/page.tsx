"use client";

import { Brain, TrendingUp } from "lucide-react";
import { HeroSection, ServiceOfferingsSection, ProcessSection, TechStackSection, WhyNeedSection, WhyChooseSection, CTASection } from "@/components/sections/service-page";
import { CaseStudiesSection } from "@/components/sections/industry-page";
import { heroProps, servicesHeading, processHeading, techHeading, ctaProps, services, processSteps, techCategories, whyNeedProps, whyChoose , caseStudyProjects } from "./data";

export default function AiMlDataSciencePage() {
  const hero = {
    ...heroProps,
    topBadge: { ...heroProps.topBadge, icon: <Brain className="w-4 h-4 text-[#4EB3E8]" /> },
    bottomBadge: { ...heroProps.bottomBadge, icon: <TrendingUp className="w-4 h-4 text-emerald-500" /> },
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
