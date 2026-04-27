import { Code, Code2, Braces, Terminal, Package, Cpu, GitBranch, BarChart3, Settings, Palette, ShieldCheck, Rocket, Layers, Users, Clock, HeartHandshake, Zap, Stethoscope, ShoppingCart, CreditCard, Truck, GraduationCap, Building2, Factory, Briefcase } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "Software",
  titleBottom: "Development",
  description: "Deliver technology-forward, resilient, and scalable digital products. From bespoke enterprise systems through data analytics, we own the complete delivery lifecycle with distinguished engineering and proven industry standards.",
  heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Custom software development",
  topBadge: { icon: null as any, title: "Enterprise Scale", subtitle: "Production-grade", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "99.9% Uptime", subtitle: "SLA guaranteed", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Full-spectrum capabilities shaped around how your organization operates." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A proven operating model that safeguards quality, keeps stakeholders informed, and honors committed timelines." };
export const techHeading: ServicePageSectionProps = { headingGray: "Engineered with", headingWhite: "Contemporary Tooling", subtitle: "Best-in-class platforms and frameworks underpinning every solution we ship." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build", headingBottom: "Your Software?", description: "Engage our software specialists to translate your vision into working software. Outline workflows, integrations, and target dates—we execute against them." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Discovery & Analysis", description: "We immerse in how the business operates, shape recommendations, align the core team, and anchor scope and investment to your stated objectives.", icon: Settings },
  { step: "02", title: "Designing & Strategizing", description: "Designers shape mockups and wireframes; engineering leadership then defines the delivery roadmap so outputs arrive on the expected cadence.", icon: Palette },
  { step: "03", title: "Development & Testing", description: "Engineers author release-ready software with the agreed stack, while verification runs continuously beside construction—not only at the end.", icon: Cpu },
  { step: "04", title: "Deployment & Maintenance", description: "Iterative delivery practices keep releases predictable, collaboration elevated, and production care strong from go-live through steady-state operations.", icon: Rocket },
  { step: "05", title: "Security & Performance", description: "Thorough control review, capacity validation, and live-operations visibility calibrated for dependable performance under real workloads.", icon: ShieldCheck },
  { step: "06", title: "Sustain & Evolve", description: "Priorities stay honest through backlog refinement and product telemetry, so improvements track observed usage rather than guesswork—ongoing maturation by design.", icon: BarChart3 },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Cpu, title: "Engineering Excellence", description: "Specialists who pair deep domain fluency with disciplined, product-led technical planning on every engagement." },
  { icon: Rocket, title: "Future-Ready Solutions", description: "Architectures that leverage cloud-native services, IoT, AR/VR, AI/ML, and analytics so capabilities stay ahead of demand." },
  { icon: Clock, title: "Timely Delivery", description: "Mature build and go-to-market rhythms that keep launches aligned with the dates we commit to together." },
  { icon: Zap, title: "Smart Solutions", description: "Modern tooling applied to mirror operational reality and elevate the experience for every user cohort." },];
