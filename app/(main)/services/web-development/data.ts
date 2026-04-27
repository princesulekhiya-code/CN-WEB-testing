import { Globe, Zap, Search, ShieldCheck, BarChart3, Code2, Layers, Palette, Settings, Rocket, Users, Clock, HeartHandshake, Monitor, FileCode2, Smartphone, ShoppingCart, CreditCard, Stethoscope, GraduationCap, Truck, Building2, Factory, Gamepad2 } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "All Services",
  titleTop: "Web",
  titleBottom: "Development",
  description: "We engineer responsive, secure, and exceptionally fast web experiences—from refined startup landing pages to sophisticated enterprise platforms—each shaped with performance, accessibility, and SEO excellence top of mind.",
  heroImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Web development",
  topBadge: { icon: null as any, title: "React + Next.js", subtitle: "Full-stack delivery", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "99+ Score", subtitle: "Lighthouse performance", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "End-to-end web capabilities shaped around your objectives, constraints, and trajectory." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A proven, transparent playbook engineered for quality gates, stakeholder visibility, and dependable ship dates." };
export const techHeading: ServicePageSectionProps = { headingGray: "Engineered with", headingWhite: "Leading Tooling", subtitle: "Best-in-class frameworks and platforms underpinning every line of production code we ship." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "Web Platform?", description: "Let&apos;s craft a web experience your audience will return to—reserve a complimentary strategy session with our specialists." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Strategy & Research", description: "Landscape scans, competitive intelligence, crystallized business objectives, and a sequenced feature roadmap.", icon: BarChart3 },
  { step: "02", title: "Analysis & Planning", description: "Risk posture review, capability mapping, formal SRS authoring, and a clearly bounded MVP.", icon: Settings },
  { step: "03", title: "UI/UX Design", description: "IA definition, low-to-high fidelity wireframes, clickable prototypes, and a cohesive design system.", icon: Palette },
  { step: "04", title: "Website Development", description: "Stack selection paired with disciplined front-end and back-end build-out and automated CI/CD release paths.", icon: Code2 },
  { step: "05", title: "QA & Testing", description: "UX validation, functional coverage, performance benchmarking, security review, and cross-browser assurance.", icon: ShieldCheck },
  { step: "06", title: "Deployment & Support", description: "Cloud go-live, metadata readiness, observability for performance, and dependable post-release care.", icon: Rocket },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Seasoned Engineering Bench", description: "Full-stack practitioners averaging five or more years across React, Next.js, Node.js, and major cloud ecosystems." },
  { icon: Clock, title: "Compressed Launch Windows", description: "Agile cadences with two-week iterations—concept to production-ready in as few as six weeks." },
  { icon: ShieldCheck, title: "Hardened Speed & Safety", description: "OWASP-aligned builds, Core Web Vitals excellence, SSL, CSP, and security practices fit for demanding enterprises." },
  { icon: HeartHandshake, title: "Continuity After Go-Live", description: "Sustained maintenance, observability, analytics, SEO refinement, and roadmap-driven enhancements." },];
