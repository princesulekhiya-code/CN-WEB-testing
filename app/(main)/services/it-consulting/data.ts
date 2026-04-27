import { Server, Network, ShieldCheck, Cloud, Headphones, Monitor, Settings, Layers, Rocket, BarChart3, TrendingUp, Users, Clock, HeartHandshake, ShoppingCart, CreditCard, Stethoscope, GraduationCap, Truck, Building2, Factory, Briefcase } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "IT",
  titleBottom: "Consulting",
  description: "Apply our specialized technology depth across digital transformation to craft near- and long-range plans that future-proof your organization and maximize return on investment.",
  heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "IT consulting services",
  topBadge: { icon: null as any, title: "IT Strategy", subtitle: "End-to-end", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "ROI Driven", subtitle: "Measurable results", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "End-to-end capabilities shaped around the outcomes your business requires." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A proven operating model that safeguards quality, preserves transparency, and honors committed timelines." };
export const techHeading: ServicePageSectionProps = { headingGray: "Engineered with", headingWhite: "Contemporary Tooling", subtitle: "Best-in-class platforms and frameworks underpinning every engagement we deliver." };
export const ctaProps: CTAProps = { headingTop: "Fortify Your Business for What Comes Next with", headingBottom: "IT Consulting Expertise", description: "Scaling fast yet uncertain which technology route to take? A complimentary IT consultation clarifies digital transformation and surfaces the solutions that align with your objectives." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Analyze", description: "Our analysts diagnose root causes, frame the challenge clearly, and recommend an approach that simplifies automation and improves day-to-day usability for your teams.", icon: Settings },
  { step: "02", title: "Strategies", description: "Teams architect the roadmap for web and application delivery and craft marketing strategies that put modern technology to work for your brand.", icon: Rocket },
  { step: "03", title: "Perform", description: "To uphold quality, specialists scrutinize workflows, maintain visibility into delivery, and address risks early—before they affect outcomes.", icon: BarChart3 },
  { step: "04", title: "Implement", description: "Roll out capabilities in measured phases with rigorous testing and integration validation so adoption proceeds smoothly company-wide.", icon: Layers },
  { step: "05", title: "Monitor", description: "Ongoing observability and performance oversight keep environments running efficiently and interruptions rare.", icon: Network },
  { step: "06", title: "Optimize", description: "Periodic assessments, tuning, and strategic recalibration ensure infrastructure and investments continue to match shifting priorities.", icon: Server },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Quick Project Delivery", description: "Expert consultants distill requirements, deploy the right tools and technologies, and execute efficiently—accelerating delivery without compromising rigor." },
  { icon: Clock, title: "Potential Cost Savings", description: "Veteran practitioners deliver faster with lean staffing—often surpassing in-house outcomes while furnishing greater hands-on expert support." },
  { icon: ShieldCheck, title: "Reduced Security Risks", description: "Experts find and remediate bugs and security weaknesses across systems and networks, backed by deep skill in governing external technical resources." },
  { icon: HeartHandshake, title: "Boost Productivity", description: "We absorb operational technical load so leadership can concentrate on revenue-generating work and longer-range strategy." },];
