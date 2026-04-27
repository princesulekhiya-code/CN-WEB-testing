import { Award, BarChart3, Building2, Code2, CreditCard, Factory, Gamepad2, GraduationCap, Layers, Lightbulb, Palette, RefreshCcw, Rocket, Settings, ShieldCheck, ShoppingCart, Stethoscope, Target, Truck, Zap } from "lucide-react";
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

export const services: ServiceOffering[] = [
  { icon: Lightbulb, title: "Digital Product Consultation", description: "Our strategists immerse in your operations to uncover growth levers and chart a technology roadmap that accelerates every initiative.", features: ["Business analysis", "Strategy formulation", "Tech advisory"], href: "/services/product-engineering/digital-product-consultation" , logos: ["figma/figma-original.svg", "react/react-original.svg", "nodejs/nodejs-original.svg"], accent: "#F24E1E"},
  { icon: Settings, title: "Software Product Architecting", description: "Seasoned architects evaluate your infrastructure landscape and leverage modern tooling to design resilient, high-performance systems built for scale.", features: ["System design", "Scalable architecture", "Tech stack selection"], href: "/services/product-engineering/software-product-architecting" , logos: ["docker/docker-original.svg", "kubernetes/kubernetes-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg"], accent: "#2496ED"},
  { icon: Palette, title: "Product Experience Design", description: "Design specialists translate business context and emerging patterns into intuitive interaction flows and responsive, brand-aligned interfaces.", features: ["User research", "Interaction design", "Responsive UX"], href: "/services/product-engineering/product-experience-design" , logos: ["figma/figma-original.svg", "sketch/sketch-original.svg", "css3/css3-original.svg"], accent: "#F24E1E"},
  { icon: Target, title: "Product Prototyping", description: "Grounded in market intelligence and user research, we craft interactive prototypes — test assumptions early, iterate rapidly, and refine until every requirement lands.", features: ["Rapid prototyping", "User validation", "Iterative testing"], href: "/services/product-engineering/product-prototyping" , logos: ["react/react-original.svg", "figma/figma-original.svg", "typescript/typescript-original.svg"], accent: "#61DAFB"},
  { icon: Rocket, title: "Digital Product Development", description: "Engineers harness cutting-edge stacks to construct everything from lean MVPs to feature-rich platforms — then scale them into market-leading products.", features: ["Full-stack development", "MVP to scale", "Cloud-native"], href: "/services/product-engineering/digital-product-development" , logos: ["react/react-original.svg", "nodejs/nodejs-original.svg", "typescript/typescript-original.svg"], accent: "#3178C6"},
  { icon: ShieldCheck, title: "Quality Engineering", description: "Disciplined QA embedded from day one — automated regression, performance profiling, and security sweeps so your product ships battle-ready.", features: ["Automated testing", "Performance QA", "Security testing"], href: "/services/product-engineering/quality-engineering" , logos: ["python/python-original.svg", "jest/jest-plain.svg", "nodejs/nodejs-original.svg"], accent: "#4EB3E8"},
];

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
