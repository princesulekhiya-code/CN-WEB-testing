import { BarChart3, Brain, Building2, Clock, Cpu, CreditCard, Database, Factory, Gamepad2, Glasses, GraduationCap, HeartHandshake, Layers, MessageSquare, Monitor, Rocket, Settings, ShieldCheck, ShoppingCart, Stethoscope, TrendingUp, Truck, Users } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to services",
  titleTop: "Technology",
  titleBottom: "Consulting",
  description: "Technology sets the pace for today's enterprises. We help leaders design ambitious, resilient roadmaps that accelerate growth and deepen return on investment.",
  heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Technology consulting services",
  topBadge: { icon: null as any, title: "CTO-Level", subtitle: "Strategic guidance", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "50+ Audits", subtitle: "Completed yearly", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "End-to-end capabilities shaped precisely to the priorities of your organization." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our delivery", headingWhite: "methodology", subtitle: "A proven framework that safeguards quality, transparency, and punctual delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built with", headingWhite: "today's leading tools", subtitle: "Best-in-class platforms and frameworks form the foundation of every solution we deliver." };
export const ctaProps: CTAProps = { headingTop: "Move from technical uncertainty", headingBottom: "to a plan you can stand behind", description: "Whether you are modernizing a monolith or scaling a platform team, we help you stage the right investments at the right moment." };

export const services: ServiceOffering[] = [
  { icon: Database, title: "Big Data Consulting", description: "Locate vast, intricate data estates, sharpen your data roadmap, and surface intelligence you can trust when it is time to decide.", features: ["Data platform architecture", "ETL pipelines", "Analytics and insights strategy"], href: "/services/technology-consulting/big-data-consulting" , logos: ["apachespark/apachespark-original.svg", "python/python-original.svg", "apachekafka/apachekafka-original.svg"], accent: "#E25A1C"},
  { icon: Monitor, title: "Digital Experience Consulting", description: "Shape strategies for digital products built to convert—pairing immersive journeys with experiences that pull audiences in and build lasting loyalty.", features: ["UX strategy", "Conversion rate optimization", "Digital product roadmap"], href: "/services/technology-consulting/digital-experience-consulting" , logos: ["figma/figma-original.svg", "react/react-original.svg", "nodejs/nodejs-original.svg"], accent: "#F24E1E"},
  { icon: Brain, title: "AI & Data Science Consulting", description: "Put advanced models, forecasting, and intelligent automation into production to move innovation faster and sustain a lasting competitive edge.", features: ["Machine learning models", "Predictive analytics", "Intelligent automation"], href: "/services/technology-consulting/ai-data-science-consulting" , logos: ["tensorflow/tensorflow-original.svg", "python/python-original.svg", "pytorch/pytorch-original.svg"], accent: "#FF6F00"},
  { icon: MessageSquare, title: "Chatbot Consulting", description: "Design tailored conversational assistants that strengthen support, raise conversion, and personalize every touchpoint while simplifying day-to-day operations.", features: ["Custom conversational agents", "NLP integration", "Conversation design"], href: "/services/technology-consulting/chatbot-consulting" , logos: ["python/python-original.svg", "nodejs/nodejs-original.svg", "react/react-original.svg"], accent: "#4EB3E8"},
  { icon: Cpu, title: "IoT Consulting", description: "Sharpen operations and decisions by guiding you through connected ecosystems—from architecture and device strategy through analytics at the edge and core.", features: ["IoT solution architecture", "Edge computing", "Connected device management"], href: "/services/technology-consulting/iot-consulting" , logos: ["raspberrypi/raspberrypi-original.svg", "arduino/arduino-original.svg", "python/python-original.svg"], accent: "#C51A4A"},
  { icon: Glasses, title: "Augmented Reality Consulting", description: "Pair leading AR craft with strategic counsel to launch experiences that engage users and elevate how your teams collaborate.", features: ["Immersive AR experiences", "3D visualization", "Spatial computing"], href: "/services/technology-consulting/augmented-reality-consulting" , logos: ["unity/unity-original.svg", "unrealengine/unrealengine-original.svg", "threejs/threejs-original.svg"], accent: "#000000"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Assessment & Discovery", description: "A thorough review of your needs, challenges, goals, and the technology environment you operate in today.", icon: BarChart3 },
  { step: "02", title: "Strategic Planning", description: "Crafting a tailored technology blueprint with prioritized recommendations tied directly to your business outcomes.", icon: Settings },
  { step: "03", title: "Solution Design", description: "Designing end-to-end solutions across hardware, software, and UX/UI aligned with your product and brand vision.", icon: Layers },
  { step: "04", title: "Implementation", description: "Controlled integration through custom engineering, ecosystem connectivity, and careful data migration.", icon: Rocket },
  { step: "05", title: "Testing & QA", description: "Comprehensive validation so capabilities perform as expected—catching issues early and strengthening reliability.", icon: ShieldCheck },
  { step: "06", title: "Ongoing Support", description: "Proactive maintenance, observability, and continuous improvement so your technology keeps performing at its best.", icon: HeartHandshake },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Accomplished technology strategists", description: "Trusted advisors who untangle complexity with depth across industries and today's technology stacks." },
  { icon: Clock, title: "A client-first partnership", description: "We anchor every decision in your objectives—working side by side until the outcomes you expect are realized." },
  { icon: ShieldCheck, title: "Full-lifecycle partnership", description: "From discovery and planning through delivery and long-term stewardship—we stay with you at every stage." },
  { icon: HeartHandshake, title: "Value-led engagement models", description: "Advisory shaped for measurable impact—raising ROI while keeping technical depth uncompromised." },];
