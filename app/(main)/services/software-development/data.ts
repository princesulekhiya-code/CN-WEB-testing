import { BarChart3, Braces, Briefcase, Building2, Clock, Code, Code2, Cpu, CreditCard, Factory, GitBranch, GraduationCap, HeartHandshake, Layers, Package, Palette, Rocket, Settings, ShieldCheck, ShoppingCart, Stethoscope, Terminal, Truck, Users, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "Software",
  titleBottom: "Development",
  description: "Deliver technology-forward, resilient, and scalable digital products. From bespoke enterprise systems through data analytics, we own the complete delivery lifecycle with distinguished engineering and proven industry standards.",
  heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Custom software development",
  topBadge: { icon: null as any, title: "Enterprise Scale", subtitle: "Production-grade", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "99.9% Uptime", subtitle: "SLA guaranteed", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Full-spectrum capabilities shaped around how your organization operates." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A proven operating model that safeguards quality, keeps stakeholders informed, and honors committed timelines." };
export const techHeading: ServicePageSectionProps = { headingGray: "Engineered with", headingWhite: "Contemporary Tooling", subtitle: "Best-in-class platforms and frameworks underpinning every solution we ship." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build", headingBottom: "Your Software?", description: "Engage our software specialists to translate your vision into working software. Outline workflows, integrations, and target dates—we execute against them." };

export const services: ServiceOffering[] = [
  { icon: GitBranch, title: "Legacy System Modernization", description: "Refresh aging IT estates through cloud adoption, structural redesign, and stack modernization so performance stays dependable for the long run.", features: ["Cloud migration", "Re-architecture", "Tech stack upgrade"], href: "/services/software-development/legacy-system-modernization" , logos: ["dotnetcore/dotnetcore-original.svg", "react/react-original.svg", "docker/docker-original.svg"], accent: "#512BD4"},
  { icon: Code, title: "Custom Software", description: "Bespoke applications that streamline operations, grow with demand, surface live intelligence, and sustain nimble innovation across the organization.", features: ["Process automation", "Real-time analytics", "Scalable architecture"], href: "/services/software-development/custom-software" , logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "typescript/typescript-original.svg"], accent: "#3178C6"},
  { icon: Braces, title: "Enterprise Software", description: "Workflows governed by role, defensible audit history, and ERP/CRM connectivity engineered for mission-critical uptime and sustained maintainability.", features: ["ERP/CRM integration", "Role-based access", "Audit trails"], href: "/services/software-development/enterprise-software" , logos: ["java/java-original.svg", "dotnetcore/dotnetcore-original.svg", "react/react-original.svg"], accent: "#5382A1"},
  { icon: Users, title: "Custom CRM Development", description: "CRM platforms crafted to fit your model—feature modules, migration support, mobile surfaces, data layers, and cloud hosting suited to diverse sectors.", features: ["CRM modules", "Data migration", "Cloud-native CRM"], href: "/services/software-development/custom-crm-development" , logos: ["react/react-original.svg", "nodejs/nodejs-original.svg", "postgresql/postgresql-original.svg"], accent: "#61DAFB"},
  { icon: Package, title: "Software Product Development", description: "A single partner from requirements and experience design through build, QA, release, and the care that follows launch.", features: ["Full lifecycle", "Product strategy", "Go-to-market"], href: "/services/software-development/software-product-development" , logos: ["react/react-original.svg", "nodejs/nodejs-original.svg", "docker/docker-original.svg"], accent: "#4EB3E8"},
  { icon: BarChart3, title: "Data Analytics & Information", description: "Seasoned stewardship of data—ingestion, modernization, and analysis—so leadership sees clear signals and shapes strategy with confidence.", features: ["Data pipelines", "BI dashboards", "Predictive analytics"], href: "/services/software-development/data-analytics" , logos: ["python/python-original.svg", "postgresql/postgresql-original.svg", "grafana/grafana-original.svg"], accent: "#3776AB"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Discovery & Analysis", description: "We immerse in how the business operates, shape recommendations, align the core team, and anchor scope and investment to your stated objectives.", icon: Settings },
  { step: "02", title: "Designing & Strategizing", description: "Designers shape mockups and wireframes; engineering leadership then defines the delivery roadmap so outputs arrive on the expected cadence.", icon: Palette },
  { step: "03", title: "Development & Testing", description: "Engineers author release-ready software with the agreed stack, while verification runs continuously beside construction—not only at the end.", icon: Cpu },
  { step: "04", title: "Deployment & Maintenance", description: "Iterative delivery practices keep releases predictable, collaboration elevated, and production care strong from go-live through steady-state operations.", icon: Rocket },
  { step: "05", title: "Security & Performance", description: "Thorough control review, capacity validation, and live-operations visibility calibrated for dependable performance under real workloads.", icon: ShieldCheck },
  { step: "06", title: "Sustain & Evolve", description: "Priorities stay honest through backlog refinement and product telemetry, so improvements track observed usage rather than guesswork—ongoing maturation by design.", icon: BarChart3 },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Cpu, title: "Engineering Excellence", description: "Specialists who pair deep domain fluency with disciplined, product-led technical planning on every engagement." },
  { icon: Rocket, title: "Future-Ready Solutions", description: "Architectures that leverage cloud-native services, IoT, AR/VR, AI/ML, and analytics so capabilities stay ahead of demand." },
  { icon: Clock, title: "Timely Delivery", description: "Mature build and go-to-market rhythms that keep launches aligned with the dates we commit to together." },
  { icon: Zap, title: "Smart Solutions", description: "Modern tooling applied to mirror operational reality and elevate the experience for every user cohort." },];
