import { Lightbulb, Target, Rocket, ShieldCheck, RefreshCcw, Settings, Palette, Code2, BarChart3, Zap, Award, Stethoscope, ShoppingCart, CreditCard, Truck, GraduationCap, Building2, Gamepad2, Factory, Layers } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to services",
  titleTop: "Product",
  titleBottom: "Engineering",
  description: "We design and develop digital solutions that comply with your industry standards and\r\n                accelerate your business operations — from ideation to market release and beyond.",
  heroImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Product engineering and development",
  topBadge: { icon: null as any, title: "Full Lifecycle", subtitle: "Concept to scale", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "3x Faster", subtitle: "Market delivery", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Comprehensive solutions tailored to your business needs." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A proven, field-tested methodology that ensures quality, transparency, and on-time delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built with", headingWhite: "Modern Tools", subtitle: "Industry-leading tools and frameworks powering our solutions." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "Digital Product?", description: "Partner with a product-minded engineering team that owns outcomes from discovery through\r\n          scale." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Product Ideation",
    description:
      "Identify the strategic inflection points in your business, crystallize your brand differentiators, and map expected customer impact.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Transform raw concepts into structured projects — defining use cases, feature sets, a phased roadmap, and an MVP blueprint.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Product Development",
    description:
      "Designs come alive — selecting the optimal stack and integrating features sprint by sprint to deliver a cohesive, launch-ready product.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Comprehensive test coverage — functional, security, and performance — to ensure stable, defect-free releases every time.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Deployment & Support",
    description:
      "Seamless deployment to target platforms with optimized metadata, store compliance, and real-time performance monitoring from day one.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Product Sustenance",
    description:
      "Continuous evolution — rolling out new capabilities, security patches, and performance enhancements without disrupting live operations.",
    icon: RefreshCcw,
  },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "AI & ML Integration",
    description:
      "Weave AI and machine learning into your product DNA for sharper decisions, adaptive workflows, and personalized user journeys.",
  },
  {
    icon: Zap,
    title: "DevOps Excellence",
    description:
      "Mature DevOps practices that streamline builds, automate testing, and keep maintenance and support running like clockwork.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description:
      "Embedded analytics dashboards that surface real-time system health and user behavior — so every decision is data-informed.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Approach",
    description:
      "Security woven into every phase of the lifecycle — from threat modeling and code review through deployment hardening and ongoing monitoring.",
  },];
