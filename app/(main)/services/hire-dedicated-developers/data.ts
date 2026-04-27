import { Smartphone, Monitor, Server, Database, Megaphone, ShoppingCart, Users, Clock, Briefcase, UserPlus, Headphones, Handshake, ShieldCheck, Rocket, Code2, Settings, Palette, BarChart3, Zap, HeartHandshake, Award, Stethoscope, CreditCard, Truck, GraduationCap, Building2, Factory, Gamepad2, Utensils } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "Hire Dedicated",
  titleBottom: "Developers",
  description: "Scale with engagement models that bend to your priorities, depth you can rely on, and teams that have shipped before. Bring in pre-vetted engineers in as little as 48 hours and trim engineering spend by as much as 40%.",
  heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Hire dedicated developers",
  topBadge: { icon: null as any, title: "150+ Devs", subtitle: "Ready to deploy", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "48 Hours", subtitle: "To first match", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Capabilities We", headingWhite: "Deliver", subtitle: "End-to-end expertise shaped around your operating context and growth priorities." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Delivery", headingWhite: "Process", subtitle: "A proven operating model that safeguards quality, visibility, and dependable release cadence." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built on", headingWhite: "Proven Tooling", subtitle: "Industry-leading frameworks and platforms form the foundation of every engagement we take on." };
export const ctaProps: CTAProps = { headingTop: "Ready to Hire", headingBottom: "Dedicated Developers for Your Stack?", description: "Tell us the roles, technologies, and schedule you require—we will stand up a dedicated squad that delivers at the pace of your internal team. Begin with a seven-day trial at no risk." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Share Requirements", description: "Document your goals, technology choices, and timeline. We review the brief and recommend engineers whose skills match your needs with precision.", icon: Settings },
  { step: "02", title: "Receive Vetted Profiles", description: "Get carefully screened candidate profiles aligned to your scope—each checked for technical strength, domain fit, and clear, professional communication.", icon: Users },
  { step: "03", title: "Interview & Finalize", description: "Speak with shortlisted professionals to confirm fit, problem-solving approach, and conduct before you commit to the right people.", icon: Palette },
  { step: "04", title: "Onboard in 48 Hours", description: "Your engineer starts with tools, access, and structured onboarding in place—delivering real value from day one.", icon: Rocket },
  { step: "05", title: "Sprint Integration", description: "Join your backlog, definition of done, and release rhythm with shared quality standards and the agile practices your team already trusts.", icon: BarChart3 },
  { step: "06", title: "Scale or Transition", description: "Right-size the team, rotate subject-matter experts, or transition with runbooks as the program matures.", icon: ShieldCheck },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Zap, title: "Breadth Across Disciplines", description: "Teams fluent in modern stacks—taking digital products from concept through launch with speed and uncompromising quality." },
  { icon: Clock, title: "Elastic, Right-Sized Capacity", description: "Grow or tighten headcount without heavy overhead. How we work adapts to your roadmap and shifting timelines." },
  { icon: Award, title: "Iterative Delivery, Full Visibility", description: "Transparent sprint rhythm, steady check-ins, and straightforward reporting—so you always know where things stand." },
  { icon: HeartHandshake, title: "Screened for Sector Fit", description: "Professionals selected for technical depth and industry context spanning healthcare, financial services, retail, and related fields." },];
