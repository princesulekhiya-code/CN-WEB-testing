import { RefreshCcw, Workflow, Bot, Database, Cloud, BarChart3, Settings, Code2, ShieldCheck, Rocket, Zap, Award, TrendingUp, HeartHandshake, Stethoscope, ShoppingCart, CreditCard, Truck, GraduationCap, Building2, Gamepad2, Factory, ClipboardList, Palette, Layers } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Back to Services",
  titleTop: "Digital Modernization",
  titleBottom: "& Transformation",
  description: "Automate, reinvent, and modernize enterprise workflows through our digital modernization and transformation services to deliver greater value to your customers.",
  heroImage: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Digital transformation strategy",
  topBadge: { icon: null as any, title: "360° Digital", subtitle: "Full transformation", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "40% Faster", subtitle: "Time-to-market", colorClass: "bg-emerald-500/10" },
  stats: [{ label: "Transformation Programs", value: 200, suffix: "+" },
  { label: "Client Retention Rate", value: 96, suffix: "%" },
  { label: "Delivery Acceleration", value: 3, suffix: "x" },
  { label: "Realized Cost Savings", value: 40, suffix: "%" },],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Full-spectrum capabilities aligned precisely with your business priorities." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A proven methodology that safeguards quality, full transparency, and dependable on-time delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Engineered on a", headingWhite: "Modern Stack", subtitle: "Best-in-class platforms and frameworks underpinning every solution we ship." };
export const ctaProps: CTAProps = { headingTop: "Ready to Transform", headingBottom: "Your Business?", description: "Unlock the impact of digital transformation with a complimentary consultation led by our senior technology advisors." };

export const services: ServiceOffering[] = [
  { icon: RefreshCcw, title: "Architecture Modernization", description: "Establish clear goals and implement microservices, cloud-native design, and monolith-to-microservices transitions to engineer systems ready for what comes next.", features: ["Microservices", "Cloud-native", "Migration"], href: "/services/digital-transformation/architecture-modernization" , logos: ["docker/docker-original.svg", "kubernetes/kubernetes-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg"], accent: "#2496ED"},
  { icon: Code2, title: "Technology Modernization", description: "Engineer micro-frontends, cloud-native development, JavaScript modernization into PWA and SPA experiences, and server-side renewal with today's strongest stacks.", features: ["Micro-frontends", "PWA/SPA", "Server-side"], href: "/services/digital-transformation/technology-modernization" , logos: ["react/react-original.svg", "nodejs/nodejs-original.svg", "typescript/typescript-original.svg"], accent: "#3178C6"},
  { icon: Palette, title: "UI/UX Modernization", description: "Apply contemporary design patterns and experiences to shape compelling products that deepen engagement and strengthen business outcomes.", features: ["Design trends", "User engagement", "Modern UX"], href: "/services/digital-transformation/ui-ux-modernization" , logos: ["figma/figma-original.svg", "react/react-original.svg", "css3/css3-original.svg"], accent: "#F24E1E"},
  { icon: Workflow, title: "Integration Modernization", description: "Advance enterprise connectivity through protocol harmonization, third-party applications, and API and SDK integration for a cohesive, tailored experience.", features: ["API/SDK", "Third-party", "Protocols"], href: "/services/digital-transformation/integration-modernization" , logos: ["nodejs/nodejs-original.svg", "graphql/graphql-plain.svg", "docker/docker-original.svg"], accent: "#E10098"},
  { icon: Bot, title: "Data Engineering & AI", description: "Power real-time decisions with AI-led data architecture that accelerates data modernization and refines product customization.", features: ["AI-powered", "Real-time data", "ML pipelines"], href: "/services/digital-transformation/data-engineering-ai" , logos: ["tensorflow/tensorflow-original.svg", "python/python-original.svg", "apachespark/apachespark-original.svg"], accent: "#FF6F00"},
  { icon: Settings, title: "Product Re-engineering", description: "Elevate legacy products with new capabilities, performance tuning, and a faster path to market through disciplined re-engineering.", features: ["Legacy upgrade", "Performance", "Speed-to-market"], href: "/services/digital-transformation/product-re-engineering" , logos: ["react/react-original.svg", "typescript/typescript-original.svg", "nextjs/nextjs-original.svg"], accent: "#4EB3E8"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Discover", description: "Map business priorities, sharpen modernization objectives, and align on transparent, measurable business outcomes.", icon: ClipboardList },
  { step: "02", title: "Elaborate", description: "Shape the optimal approach to application modernization and orchestrate the teams and resources the initiative requires.", icon: Settings },
  { step: "03", title: "Strategy", description: "Produce a digital transformation roadmap with expert-led strategy that defines how delivery will proceed.", icon: BarChart3 },
  { step: "04", title: "Build", description: "Execute the roadmap through agile delivery, CI/CD automation, and mature DevOps practices.", icon: Code2 },
  { step: "05", title: "Operate", description: "Modernize legacy applications, move confidently into production, and sustain the operational support you rely on.", icon: ShieldCheck },
  { step: "06", title: "Evolve", description: "Maintain momentum through continuous improvement, emerging technology adoption, user insight, and responsiveness to market shifts.", icon: Rocket },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Minimal Operational Disruption", description: "Leave existing assets and legacy code unaltered for the full duration of the migration." },
  { icon: TrendingUp, title: "Compressed Time-to-Market", description: "Responsive, expertly managed cloud services that heighten agility and shorten the path to value." },
  { icon: Zap, title: "Precision Refactoring", description: "Lower risk by refactoring applications in carefully scoped cohorts with exacting control." },
  { icon: HeartHandshake, title: "Reliable On-Time Delivery", description: "Flexible, scalable tooling that pairs speed-to-value with leaner ongoing operating expense." },];
