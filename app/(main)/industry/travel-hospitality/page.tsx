"use client";

import {
  IndustryHeroSection,
  IndustryIntroSection,
  IndustryServicesSection,
  IndustrySolutionsSection,
  IndustryProcessSection,
  IndustryWhyChooseSection,
  IndustryTechSection,
  CaseStudiesSection,
  IndustryCTASection,
  ProductShowcaseSection,
  ExpertiseAccordionSection,
} from "@/components/sections/industry-page";
import {
  heroProps,
  introProps,
  servicesProps,
  solutionsProps,
  processProps,
  whyChooseProps,
  techProps,
  ctaProps,
  projects,
  productShowcaseProps,
  expertiseProps,
} from "./data";

export default function TravelHospitalityPage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <IndustryHeroSection {...heroProps} />
      <IndustryIntroSection {...introProps} />
      <IndustryServicesSection {...servicesProps} />
      <IndustrySolutionsSection {...solutionsProps} />
      <ExpertiseAccordionSection {...expertiseProps} />
      <ProductShowcaseSection {...productShowcaseProps} />
      <IndustryProcessSection {...processProps} />
      <IndustryWhyChooseSection {...whyChooseProps} />
      <IndustryTechSection {...techProps} />
      <CaseStudiesSection projects={projects} />
      <IndustryCTASection {...ctaProps} />
    </section>
  );
}
