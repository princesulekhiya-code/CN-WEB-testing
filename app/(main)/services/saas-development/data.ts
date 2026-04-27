import { Layers, CreditCard, Cloud, Lock, Zap, Database, Smartphone, Settings, Code2, ShieldCheck, Rocket, Award, TrendingUp, HeartHandshake, Stethoscope, ShoppingCart, Truck, GraduationCap, Building2, Gamepad2, Factory, ClipboardList, Palette, BarChart3 } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Back to Services",
  titleTop: "SaaS Application",
  titleBottom: "Development Services",
  description: "Shape a bold concept into a production-grade SaaS product that earns attention, wins trust, and compounds recurring revenue.",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "SaaS platform development",
  topBadge: { icon: null as any, title: "Multi-Tenant", subtitle: "Cloud-native", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "99.99%", subtitle: "Platform uptime", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "Veteran SaaS engineers craft resilient, efficient, and elastic products—each one tailored to your roadmap and operating model." };
export const processHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "A measured, end-to-end framework that keeps SaaS initiatives aligned from discovery through scale." };
export const techHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "A curated stack of proven tools and runtimes for dependable, high-scale SaaS delivery." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "SaaS Product?", description: "Keep your concept from stalling at the whiteboard—work with us to ship a SaaS that earns recurring revenue in market." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Market Research", description: "Deep discovery and structured requirements work so the build targets the right problems—with the stack and architecture that fit.", icon: ClipboardList },
  { step: "02", title: "Build MVP", description: "A lean first release with the essentials—fast time-to-value for users while keeping spend disciplined.", icon: Code2 },
  { step: "03", title: "Technical Planning", description: "Clarify what must evolve technically as the MVP grows, so scaling and roadmap decisions stay coherent over time.", icon: Settings },
  { step: "04", title: "Feature Definition", description: "Prioritize capabilities that match customer expectations and sharpen the positioning that sets you apart.", icon: BarChart3 },
  { step: "05", title: "Development & QA", description: "Engineer on the chosen stack while quality assurance runs in parallel—during build and after each milestone.", icon: ShieldCheck },
  { step: "06", title: "Launch & Feedback", description: "Take the product live in market, then channel user input into measurable improvements and a sharper experience.", icon: Rocket },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Quality Solutions", description: "Sophisticated capabilities that streamline operations, elevate efficiency, and compound business outcomes." },
  { icon: TrendingUp, title: "CI/CD Approach", description: "An agile SaaS delivery model powered by CI/CD and DevOps—shipping meaningful updates every two to three weeks." },
  { icon: Zap, title: "Data Security", description: "Established safeguards and continuous vigilance so data stays protected at every phase of the lifecycle." },
  { icon: HeartHandshake, title: "Geo-Specific Hosting", description: "Region-aware hosting across deployment and operations so performance stays crisp in every market you serve." },];
