import { Map, MousePointerClick, Palette, Smartphone, Rocket, TrendingUp, Lightbulb, ListChecks, LayoutTemplate, Code2, FlaskConical, RefreshCw, Clock, Presentation, Layers, BarChart3, Target } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mobile-app-development",
  backLabel: "Back to Mobile App Development",
  titleTop: "MVP",
  titleBottom: "Development",
  description: "Build with lean methodology—ship the smallest product that proves your hypothesis, validate ideas fast with real users, and land investor-ready\r\n                prototypes that show traction, not just slides.",
  heroImage: "/images/stock/stock-3fb6f2550d.jpg",
  heroImageAlt: "MVP product development and prototyping",
  topBadge: { icon: null as any, title: "Lean & Fast", subtitle: "8-week delivery", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Validate First", subtitle: "Ship → Learn → Iterate", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Apps Delivered" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 4.8, suffix: "★", label: "Avg Store Rating" },
  { value: 15, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "" };
export const processHeading: ServicePageSectionProps = { headingGray: "Our MVP", headingWhite: "Process", subtitle: "A six-step path from hypothesis to validated product—structured for speed without skipping the decisions that matter." };
export const techHeading: ServicePageSectionProps = { headingGray: "Tech", headingWhite: "Stack", subtitle: "Modern, proven tooling across mobile, backend, cloud, data, and analytics—chosen to match your MVP and scale with it." };
export const ctaProps: CTAProps = { headingTop: "Ready to Validate", headingBottom: "Your Idea?", description: "Tell us what you need to prove—we&apos;ll map a lean MVP plan, timeline, and stack so you can learn fast and pitch with confidence." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Idea Validation",
    description:
      "Stress-test the problem, target users, and success metrics—so the MVP proves a real need before engineering commits.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Feature Prioritization",
    description:
      "Rank must-haves vs. nice-to-haves with impact vs. effort—scope that fits timeline without hiding critical risks.",
    icon: ListChecks,
  },
  {
    step: "03",
    title: "Prototype",
    description:
      "Interactive flows and key screens to align stakeholders and run early usability checks before build-heavy work.",
    icon: LayoutTemplate,
  },
  {
    step: "04",
    title: "Core Development",
    description:
      "Implement the smallest vertical slice that delivers recurring value—auth, core loop, and instrumentation from day one.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Beta Launch",
    description:
      "Controlled rollout, cohort feedback, and monitoring—learn safely before a wide public release.",
    icon: FlaskConical,
  },
  {
    step: "06",
    title: "Iterate & Scale",
    description:
      "Prioritize the backlog from real usage, harden performance, and extend the product as traction validates the next bets.",
    icon: RefreshCw,
  },];

export const techCategories: TechCategory[] = [{ label: "Frontend", items: [
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Supabase", logo: `${DEVICON}/supabase/supabase-original.svg` }
    ] },
  { label: "Cloud", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` }
    ] },
  { label: "Database", items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Firestore", logo: `${DEVICON}/firebase/firebase-original.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Amplitude", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Clock,
    title: "4–8 Week Delivery",
    description:
      "Tight, milestone-driven sprints—ship a testable MVP on a timeline you can plan around and present with confidence.",
  },
  {
    icon: Presentation,
    title: "Investor-Ready MVPs",
    description:
      "Clear narrative, demo-ready polish on the critical path, and metrics hooks that support fundraising conversations.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Pragmatic patterns and modular boundaries so your MVP grows into a full product without starting from scratch.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Iterations",
    description:
      "Instrumentation and feedback loops baked in—prioritize what users actually do, not what they say they might do.",
  },];
