import { Monitor, Palette, Users, Zap, Layers, TrendingUp, ShieldCheck, HeartHandshake, Award, Settings, Rocket, ClipboardList, BarChart3 } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/technology-consulting",
  backLabel: "Back to Technology Consulting",
  titleTop: "Digital Experience",
  titleBottom: "Consulting",
  description: "Strategic planning to build conversion-oriented digital solutions with immersive user experiences that attract and retain customers.",
  heroImage: "/images/stock/stock-6f9a39897b.jpg",
  heroImageAlt: "Digital Experience Consulting",
  topBadge: { icon: null as any, title: "DX Expert", subtitle: "Digital experience", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "40% Better", subtitle: "User engagement", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Engagements" },
  { value: 35, suffix: "+", label: "Industries Served" },
  { value: 95, suffix: "%", label: "Satisfaction Rate" },
  { value: 10, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Digital Experience Consulting", headingWhite: "Services", subtitle: "Comprehensive UX strategy and design consulting to create digital experiences that convert and delight." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Digital Experience", headingWhite: "Process", subtitle: "From discovery to optimization — a proven methodology for creating exceptional digital experiences." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Industry-leading UX tools, analytics platforms, and testing frameworks." };
export const ctaProps: CTAProps = { headingTop: "Ready to Transform Your", headingBottom: "Digital Experience?", description: "Let us create a strategic plan that turns your digital presence into a conversion-oriented powerhouse your users will love." };

export const services: ServiceOffering[] = [{ icon: Monitor, title: "UX Strategy & Audit", description: "UX research, heuristic audits, and strategic recommendations to transform your digital presence into a conversion engine.", features: ["Heuristic evaluation", "Usability testing", "UX benchmarking"] },
  { icon: Users, title: "Customer Journey Mapping", description: "End-to-end journey visualization and touchpoint optimization to eliminate friction and delight users at every stage.", features: ["Touchpoint analysis", "Persona development", "Journey orchestration"] },
  { icon: TrendingUp, title: "Conversion Rate Optimization", description: "A/B testing, funnel analysis, and landing page optimization that measurably increase sign-ups, sales, and engagement.", features: ["A/B & multivariate tests", "Funnel analysis", "Landing page optimization"] },
  { icon: Layers, title: "Digital Product Strategy", description: "Product roadmaps, feature prioritization, and competitive positioning to align tech investment with business outcomes.", features: ["Product roadmap", "Feature prioritization", "Market positioning"] },
  { icon: Palette, title: "Design System Consulting", description: "Scalable design systems, component libraries, and brand consistency frameworks that accelerate development velocity.", features: ["Component libraries", "Design tokens", "Brand guidelines"] },
  { icon: ShieldCheck, title: "Accessibility & Compliance", description: "WCAG compliance, accessibility audits, and inclusive design practices that expand your audience and meet regulations.", features: ["WCAG 2.1 AA", "Screen reader testing", "Inclusive design"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Discovery & Research", description: "Stakeholder interviews, analytics review, competitive analysis, and user research to understand the current state.", icon: ClipboardList },
  { step: "02", title: "UX Audit", description: "Heuristic evaluation, usability testing, and accessibility audit to identify issues and quick wins.", icon: Monitor },
  { step: "03", title: "Strategy & Roadmap", description: "Prioritized recommendations, phased roadmap, and success metrics aligned to business goals.", icon: Settings },
  { step: "04", title: "Design & Prototyping", description: "Wireframes, interactive prototypes, and user testing to validate solutions before development.", icon: Palette },
  { step: "05", title: "Implementation Support", description: "Design-dev handoff, component specs, and QA reviews to ensure pixel-perfect implementation.", icon: Rocket },
  { step: "06", title: "Measurement & Optimization", description: "Analytics tracking, A/B testing, and iterative improvements based on real user behavior.", icon: BarChart3 },];

export const techCategories: TechCategory[] = [{ label: "UX Tools", items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "Sketch", logo: `${DEVICON}/sketch/sketch-original.svg` },
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Miro", logo: `${DEVICON}/figma/figma-original.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "FullStory", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Amplitude", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },
  { label: "Testing", items: [
      { name: "Optimizely", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "VWO", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "UserTesting", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Maze", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lookback", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },
  { label: "Development", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "Storybook", logo: `${DEVICON}/storybook/storybook-original.svg` },
      { name: "Chromatic", logo: `${DEVICON}/chromatic/chromatic-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "UX Research Experts", description: "Certified UX researchers and designers with deep expertise in user-centered design methodologies." },
  { icon: BarChart3, title: "Data-Driven Design", description: "Every recommendation backed by analytics, user research, and measurable business impact metrics." },
  { icon: Monitor, title: "Cross-Platform Excellence", description: "Seamless experiences across web, mobile, tablet, and emerging platforms with consistent quality." },
  { icon: HeartHandshake, title: "Measurable Impact", description: "Clear KPIs, before-after metrics, and ROI tracking so you see the value of every improvement." },];
