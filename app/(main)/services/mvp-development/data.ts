import { BarChart3, Building2, Clock, CreditCard, Factory, FlaskConical, Gamepad2, Gauge, GraduationCap, HeartHandshake, Layers, Palette, Rocket, Settings, ShieldCheck, ShoppingCart, Stethoscope, Target, TrendingUp, Truck, Users, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "MVP",
  titleBottom: "Development",
  description: "Reach market with disciplined capital use, learn from real users with clarity, and rely on bespoke, full-cycle MVP development—from the first sketch to the first paying customer.",
  heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "MVP development and launch",
  topBadge: { icon: null as any, title: "8 Weeks", subtitle: "Idea to launch", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "90% Success", subtitle: "Funding rate", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "Full-spectrum offerings shaped around your objectives, constraints, and timeline." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A field-tested playbook that pairs rigorous quality, clear communication, and dependable schedules." };
export const techHeading: ServicePageSectionProps = { headingGray: "Shipped on", headingWhite: "Modern Tooling", subtitle: "Proven frameworks and platforms beneath every release we deliver." };
export const ctaProps: CTAProps = { headingTop: "Ship an MVP That Holds Up in", headingBottom: "Your Next Funding Round", description: "Tell us the challenge, your timeline, and the riskiest assumption—we will answer with a delivery plan you can defend to investors and customers alike." };

export const services: ServiceOffering[] = [
  { icon: Palette, title: "Prototype Design / PoC Development", description: "Shape a refined prototype that carries your product vision—credible with customers and compelling for investors.", features: ["Interactive prototypes", "Investor-grade narrative", "Rapid validation cycles"], href: "/services/mvp-development/prototype-design" , logos: ["figma/figma-original.svg", "react/react-original.svg", "nodejs/nodejs-original.svg"], accent: "#F24E1E"},
  { icon: Target, title: "Single Feature MVP", description: "Deliver an experience anchored in one defining capability that addresses the core problem—demonstrating fit with singular clarity.", features: ["Core capability first", "Market validation", "Fast iteration cycles"], href: "/services/mvp-development/single-feature-mvp" , logos: ["react/react-original.svg", "typescript/typescript-original.svg", "firebase/firebase-original.svg"], accent: "#3178C6"},
  { icon: Rocket, title: "MVP Development", description: "A production-ready version 1.0 spanning discovery and planning through build, launch, and ongoing partnership with your team.", features: ["End-to-end delivery", "Agile sprints", "Production-grade quality"], href: "/services/mvp-development/mvp-build" , logos: ["nextjs/nextjs-original.svg", "nodejs/nodejs-original.svg", "postgresql/postgresql-original.svg"], accent: "#000000"},
  { icon: Layers, title: "MVP to Full-Scale Product", description: "Take stock of your position, define how to scale, and graduate into a full product with prioritized pain points and a sequenced roadmap.", features: ["Scaling strategy", "Feature roadmap", "Architecture evolution"], href: "/services/mvp-development/mvp-to-full-scale" , logos: ["react/react-original.svg", "docker/docker-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg"], accent: "#61DAFB"},
  { icon: Gauge, title: "MVP Improvement", description: "After launch, establish a disciplined improvement rhythm—elevate the experience, sharpen the product, instrument KPIs, and move decisively beyond MVP.", features: ["KPI instrumentation", "UX refinement", "Iterative feature work"], href: "/services/mvp-development/mvp-improvement" , logos: ["typescript/typescript-original.svg", "react/react-original.svg", "nodejs/nodejs-original.svg"], accent: "#3178C6"},
  { icon: FlaskConical, title: "MVP Consulting", description: "Senior engineers and analysts help sharpen the concept, sequence must-have scope, and converge on the technology stack that fits.", features: ["Concept validation", "Stack selection", "Go-to-market alignment"], href: "/services/mvp-development/mvp-consulting" , logos: ["figma/figma-original.svg", "nodejs/nodejs-original.svg", "react/react-original.svg"], accent: "#4EB3E8"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Ideation & Research", description: "Frame the concept, draft user stories, isolate the right features, and establish baseline navigation patterns.", icon: FlaskConical },
  { step: "02", title: "Wireframing", description: "Interactive low- and high-fidelity prototypes for alignment and planning—surfacing gaps while changes stay economical.", icon: Palette },
  { step: "03", title: "UI/UX Design", description: "Intentional decisions across color, typography, components, and micro-interactions—all rooted in genuine user empathy.", icon: Settings },
  { step: "04", title: "App Development", description: "Agile delivery in focused sprints (two weeks or less), releasing dependable capability in steady, reviewable increments.", icon: Rocket },
  { step: "05", title: "App Testing", description: "Targeted usability sessions with curated cohorts to surface defects and experience gaps before you go live.", icon: ShieldCheck },
  { step: "06", title: "Deployment & Launch", description: "App Store submission, refined listings, on-brand copy, and optional ASO support to strengthen discoverability.", icon: BarChart3 },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: FlaskConical, title: "Creative Strategists", description: "Strategic UX leadership and growth-oriented partners who design for outcomes—not checkbox features." },
  { icon: Gauge, title: "Scalability at the Core", description: "Lean, adaptable foundations built to mature gracefully as requirements deepen and audiences expand." },
  { icon: Users, title: "Cross-Functional Delivery", description: "Analysts, designers, front- and back-end engineers, project leadership, and QA in one accountable delivery unit." },
  { icon: HeartHandshake, title: "Fuelling Startups", description: "We back founders with real upside—shortening the path from momentum to measurable returns." },];
