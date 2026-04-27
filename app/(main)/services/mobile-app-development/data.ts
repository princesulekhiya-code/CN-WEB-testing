import { Smartphone, Cpu, Palette, Cloud, ShieldCheck, BarChart3, Apple, TabletSmartphone, Layers, Zap, Rocket, Settings, Users, Clock, HeartHandshake, Code2, Globe, CreditCard, Stethoscope, ShoppingCart, GraduationCap, Truck, Building2, Gamepad2, Utensils, MessageCircle, Factory } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Back to all services",
  titleTop: "Mobile App",
  titleBottom: "Development",
  description: "We build iOS and Android experiences people return to daily. From first concept through App Store launch, our mobile practice ships refined, high-performing products with fluid UX, dependable backends, and architecture built to scale.",
  heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Mobile app development",
  topBadge: { icon: null as any, title: "iOS + Android", subtitle: "One codebase", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "4.8★ Avg", subtitle: "App Store rating", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Mobile app", headingWhite: "development services", subtitle: "Full-lifecycle mobile engineering across every surface—native iOS and Android, cross-platform stacks, and progressive web experiences." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our development", headingWhite: "process", subtitle: "A proven six-stage framework that safeguards quality, keeps stakeholders informed, and lands releases on schedule." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built with", headingWhite: "leading tools", subtitle: "Best-in-class frameworks and platforms across the complete mobile delivery lifecycle." };
export const ctaProps: CTAProps = { headingTop: "Ready to build your", headingBottom: "next mobile app?", description: "Let&apos;s translate your concept into a refined experience your audience reaches for daily. Reserve a complimentary strategy session with our mobile specialists." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Strategy & Research", description: "Market and competitive insight, user personas, and a sharpened product vision paired with a prioritized feature roadmap.", icon: BarChart3 },
  { step: "02", title: "Analysis & Planning", description: "Risk review, technical feasibility, systems architecture, and granular decomposition of work into sprint-ready tasks.", icon: Settings },
  { step: "03", title: "UI/UX Design", description: "Information architecture, wireframes, interactive prototypes, and production-grade visuals that honor each platform’s guidelines.", icon: Palette },
  { step: "04", title: "App Development", description: "Iterative sprints with CI/CD pipelines, peer code review, and continuous integration to accelerate dependable releases.", icon: Cpu },
  { step: "05", title: "QA & Testing", description: "Functional, performance, security, and device-matrix validation across 100+ physical handsets and OS releases.", icon: ShieldCheck },
  { step: "06", title: "Deployment & Support", description: "Store submissions, ASO, post-launch observability, performance tuning, and continuous feature evolution.", icon: Rocket },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Senior Mobile Engineers", description: "Dedicated squads of iOS and Android experts averaging more than five years in production mobile work." },
  { icon: Clock, title: "Rapid Time-to-Market", description: "Agile cadence in two-week increments—move from concept to App Store readiness in as few as eight weeks." },
  { icon: ShieldCheck, title: "Enterprise-Grade Security", description: "Encryption in transit and at rest, biometric authentication, hardened storage, and adherence to HIPAA and PCI-DSS." },
  { icon: HeartHandshake, title: "Post-Launch Partnership", description: "Sustained maintenance, crash analytics, performance refinement, and thoughtful expansion of the product roadmap." },];
