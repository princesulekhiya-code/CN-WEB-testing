import { Rocket, Layers, Gauge, Target, FlaskConical, Users, Settings, Clock, HeartHandshake, ShieldCheck, BarChart3, Palette, Zap, TrendingUp, ShoppingCart, CreditCard, Stethoscope, GraduationCap, Truck, Building2, Factory, Gamepad2 } from "lucide-react";
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

export const services: ServiceOffering[] = [];

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
