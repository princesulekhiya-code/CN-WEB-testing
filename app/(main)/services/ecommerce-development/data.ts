import { Store, ShoppingBag, CreditCard, Truck, BarChart3, ShieldCheck, Smartphone, Globe, Layers, Settings, Code2, Rocket, Zap, Award, TrendingUp, HeartHandshake, Stethoscope, ShoppingCart, GraduationCap, Building2, Gamepad2, Factory, ClipboardList, Palette } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Back to Services",
  titleTop: "eCommerce Software",
  titleBottom: "Development Services",
  description: "Setting new benchmarks in transforming the shopping experience with custom eCommerce software solutions.",
  heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "E-commerce development",
  topBadge: { icon: null as any, title: "30+ Stores", subtitle: "Built & scaled", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "3x Revenue", subtitle: "Avg client growth", colorClass: "bg-emerald-500/10" },
  stats: [{ label: "Stores Built", value: 350, suffix: "+" },
  { label: "Revenue Generated", value: 50, suffix: "M+" },
  { label: "Platforms Supported", value: 12, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "State-of-the-art technologies with user-centric elements for an exceptional digital commerce experience." };
export const processHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "Custom requirements delivered at each phase of the eCommerce marketplace development process." };
export const techHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "Advanced eCommerce platforms, payment gateways, and scalable infrastructure." };
export const ctaProps: CTAProps = { headingTop: "Want To Build", headingBottom: "eCommerce Solutions?", description: "Hire our eCommerce web and mobile app development professionals to elevate your business." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Analysis", description: "Deep-dive into your business model, catalogue structure, and customer journeys to define the ideal commerce architecture.", icon: ClipboardList },
  { step: "02", title: "Wireframing & Design", description: "Conversion-focused wireframes and mobile-first layouts that guide shoppers effortlessly from browse to buy.", icon: Palette },
  { step: "03", title: "Tech-Stack Selection", description: "Platform and stack recommendations matched to your scale, budget, and integration needs — signed off before a line of code.", icon: Settings },
  { step: "04", title: "Development", description: "Sprint-based builds with modular releases — every feature tested in isolation before merging into the production codebase.", icon: Code2 },
  { step: "05", title: "Testing", description: "Automated regression, payment-flow verification, load stress tests, and cross-device QA for a defect-free launch.", icon: ShieldCheck },
  { step: "06", title: "Deployment", description: "Zero-downtime go-live on hosting infrastructure and app stores — with monitoring, CDN, and rollback readiness in place.", icon: Rocket },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Agile Development", description: "Sprint-driven delivery with modern toolchains — shipping production-ready features fast without compromising quality." },
  { icon: TrendingUp, title: "Customer-Centric", description: "Your feedback shapes every iteration — we build around real user needs to deliver outcomes that hit the mark." },
  { icon: Zap, title: "NDA & Security", description: "Strict confidentiality from day one — enforceable NDAs and enterprise-grade data handling protect every shared detail." },
  { icon: HeartHandshake, title: "Flexible Approach", description: "No one-size-fits-all — each engagement gets a tailored methodology, tech stack, and team structure." },];
