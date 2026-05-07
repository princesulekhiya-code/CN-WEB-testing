import { Target, Zap, BarChart3, Rocket, Code2, MessageSquare, ScanSearch, Gauge, Award, ShieldCheck, HeartHandshake, PiggyBank, Search, ClipboardList, Users, LineChart, RefreshCw } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mvp-development",
  backLabel: "Back to MVP Development",
  titleTop: "Single Feature /",
  titleBottom: "MVP",
  description: "From feature pick to evidence-backed iteration — structured for fast learning.",
  heroImage: "/images/stock/stock-a41ee3d1d8.jpg",
  heroImageAlt: "Single Feature MVP",
  topBadge: { icon: null as any, title: "One Feature", subtitle: "Laser focused", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "4-Week Ship", subtitle: "Rapid delivery", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "MVPs Launched" },
  { value: 6, suffix: " wk", label: "Avg Launch Time" },
  { value: 85, suffix: "%", label: "Funding Success" },
  { value: 40, suffix: "+", label: "Startup Clients" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Tools We", headingWhite: "Use", subtitle: "From feature pick to evidence-backed iteration — structured for fast learning." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Single Feature MVP", headingWhite: "Process", subtitle: "From feature pick to evidence-backed iteration — structured for fast learning." };
export const techHeading: ServicePageSectionProps = { headingGray: "Tools We", headingWhite: "Use", subtitle: "One killer feature, one learning loop — validate viability before you scale scope." };
export const ctaProps: CTAProps = { headingTop: "", headingBottom: "", description: "" };

export const services: ServiceOffering[] = [{ icon: Code2, title: "Core Feature Development", description: "Engineering focused on one high-impact capability so you can ship fast and learn from real usage.", features: ["Scope lock", "Clean architecture", "Ship-ready code"] },
  { icon: BarChart3, title: "Market Validation", description: "Structured experiments and metrics to prove demand before you invest in a broader roadmap.", features: ["Hypothesis tests", "Success metrics", "Signal vs noise"] },
  { icon: MessageSquare, title: "User Feedback Integration", description: "Capture qualitative and quantitative feedback loops that directly inform the next iteration.", features: ["In-app feedback", "Interview scripts", "Insight synthesis"] },
  { icon: ScanSearch, title: "Competitive Analysis", description: "Positioning and differentiation analysis so your single feature stands out in the market.", features: ["Landscape scan", "Gap mapping", "Positioning"] },
  { icon: Gauge, title: "Performance Optimization", description: "Fast, reliable experiences for the one flow that matters most to your early adopters.", features: ["Profiling", "Latency wins", "Reliability"] },
  { icon: Rocket, title: "Launch Strategy", description: "Channel, messaging, and rollout planning to get your MVP in front of the right users quickly.", features: ["Launch checklist", "Channel plan", "Iteration cadence"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Feature Identification", description: "Align on the one capability that unlocks learning and de-risks the broader product bet.", icon: Search },
  { step: "02", title: "Market Research", description: "Validate assumptions with competitors, substitutes, and early customer signals.", icon: ClipboardList },
  { step: "03", title: "Rapid Build", description: "Ship a focused build with tight scope, clear acceptance criteria, and measurable outcomes.", icon: Code2 },
  { step: "04", title: "User Testing", description: "Run structured sessions to observe behavior, capture friction, and prioritize fixes.", icon: Users },
  { step: "05", title: "Data Analysis", description: "Turn usage and feedback into decisions — what to keep, change, or kill next.", icon: LineChart },
  { step: "06", title: "Iterate & Pivot", description: "Plan the next cycle based on evidence, whether doubling down or adjusting direction.", icon: RefreshCw },];

export const techCategories: TechCategory[] = [{ label: "Frontend", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Supabase", logo: `${DEVICON}/supabase/supabase-original.svg` }
    ] },
  { label: "Testing", items: [
      { name: "Jest", logo: `${DEVICON}/jest/jest-plain.svg` },
      { name: "Cypress", logo: `${DEVICON}/cypressio/cypressio-original.svg` },
      { name: "TestFlight", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Amplitude", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "GA4", logo: `${DEVICON}/ga4/ga4-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Target, title: "Laser Focus", description: "One feature, one narrative — less scope creep and faster clarity on what actually matters." },
  { icon: Zap, title: "Speed to Market", description: "Lean delivery designed to get a testable artifact live while momentum is still high." },
  { icon: BarChart3, title: "Data-Driven Validation", description: "Instrumentation and research baked in so decisions are grounded in evidence, not opinions." },
  { icon: PiggyBank, title: "Cost Efficiency", description: "Validate viability without funding a full product build before you have proof it resonates." },];
