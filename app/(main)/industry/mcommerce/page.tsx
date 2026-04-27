"use client";

import {
  IndustryHeroSection,
  IndustryIntroSection,
  CaseStudiesSection,
  IndustryCTASection,
} from "@/components/sections/industry-page";
import { heroProps, introProps, ctaProps, projects } from "./data";

export default function McommercePage() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <IndustryHeroSection {...heroProps} />
      <IndustryIntroSection {...introProps} />
      <CaseStudiesSection projects={projects} />
      <IndustryCTASection {...ctaProps} />
    </section>
  );
}
