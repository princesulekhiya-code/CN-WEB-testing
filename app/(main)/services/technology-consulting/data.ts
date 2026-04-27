import { Database, Monitor, Brain, MessageSquare, Cpu, Glasses, Layers, Settings, Rocket, Users, Clock, HeartHandshake, ShieldCheck, BarChart3, TrendingUp, ShoppingCart, CreditCard, Stethoscope, GraduationCap, Truck, Building2, Factory, Gamepad2 } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to services",
  titleTop: "Technology",
  titleBottom: "Consulting",
  description: "Technology sets the pace for today's enterprises. We help leaders design ambitious, resilient roadmaps that accelerate growth and deepen return on investment.",
  heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Technology consulting services",
  topBadge: { icon: null as any, title: "CTO-Level", subtitle: "Strategic guidance", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "50+ Audits", subtitle: "Completed yearly", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "End-to-end capabilities shaped precisely to the priorities of your organization." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our delivery", headingWhite: "methodology", subtitle: "A proven framework that safeguards quality, transparency, and punctual delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built with", headingWhite: "today's leading tools", subtitle: "Best-in-class platforms and frameworks form the foundation of every solution we deliver." };
export const ctaProps: CTAProps = { headingTop: "Move from technical uncertainty", headingBottom: "to a plan you can stand behind", description: "Whether you are modernizing a monolith or scaling a platform team, we help you stage the right investments at the right moment." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Assessment & Discovery", description: "A thorough review of your needs, challenges, goals, and the technology environment you operate in today.", icon: BarChart3 },
  { step: "02", title: "Strategic Planning", description: "Crafting a tailored technology blueprint with prioritized recommendations tied directly to your business outcomes.", icon: Settings },
  { step: "03", title: "Solution Design", description: "Designing end-to-end solutions across hardware, software, and UX/UI aligned with your product and brand vision.", icon: Layers },
  { step: "04", title: "Implementation", description: "Controlled integration through custom engineering, ecosystem connectivity, and careful data migration.", icon: Rocket },
  { step: "05", title: "Testing & QA", description: "Comprehensive validation so capabilities perform as expected—catching issues early and strengthening reliability.", icon: ShieldCheck },
  { step: "06", title: "Ongoing Support", description: "Proactive maintenance, observability, and continuous improvement so your technology keeps performing at its best.", icon: HeartHandshake },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Accomplished technology strategists", description: "Trusted advisors who untangle complexity with depth across industries and today's technology stacks." },
  { icon: Clock, title: "A client-first partnership", description: "We anchor every decision in your objectives—working side by side until the outcomes you expect are realized." },
  { icon: ShieldCheck, title: "Full-lifecycle partnership", description: "From discovery and planning through delivery and long-term stewardship—we stay with you at every stage." },
  { icon: HeartHandshake, title: "Value-led engagement models", description: "Advisory shaped for measurable impact—raising ROI while keeping technical depth uncompromised." },];
