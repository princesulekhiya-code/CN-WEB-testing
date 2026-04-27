import { GitBranch, Box, Server, Zap, BarChart3, Shield, Settings, Rocket, Layers, Users, Clock, HeartHandshake, TrendingUp, Wrench, ShoppingCart, CreditCard, Stethoscope, GraduationCap, Truck, Building2, Factory, Gamepad2 } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to services",
  titleTop: "DevOps & Cloud",
  titleBottom: "Automation",
  description: "Architect resilient CI/CD pipelines, container-orchestrated deployments, and self-healing infrastructure — so your engineering team ships faster with fewer incidents and full confidence.",
  heroImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "DevOps and cloud automation",
  topBadge: { icon: null as any, title: "CI/CD", subtitle: "Fully automated", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "10x Deploy", subtitle: "Faster releases", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Comprehensive solutions tailored to your business needs." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A repeatable, engineer-proven framework that ensures quality, transparency, and on-time delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built with", headingWhite: "Modern Tools", subtitle: "Industry-leading tools and frameworks powering our solutions." };
export const ctaProps: CTAProps = { headingTop: "Ship Faster,", headingBottom: "Sleep Better", description: "Let us automate your infrastructure and build deployment pipelines that your team will love — faster releases, fewer failures, lower costs." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Assessment & Discovery", description: "Audit existing deploy workflows, infrastructure sprawl, tooling gaps, and team pain points to set a clear DevOps transformation baseline.", icon: Settings },
  { step: "02", title: "Pipeline Architecture", description: "Blueprint the CI/CD topology — automated test gates, isolated staging environments, promotion rules, and instant rollback capabilities.", icon: GitBranch },
  { step: "03", title: "Infrastructure Setup", description: "Spin up cloud infrastructure via IaC, stand up container orchestration clusters, and harden networking and access controls.", icon: Server },
  { step: "04", title: "Automation & Integration", description: "Wire deployments, auto-scaling rules, backup schedules, security scans, and alert routing into a single cohesive delivery pipeline.", icon: Rocket },
  { step: "05", title: "Observability Setup", description: "Instrument dashboards, alerting thresholds, centralized logs, distributed traces, and on-call incident-response playbooks.", icon: BarChart3 },
  { step: "06", title: "Optimization & Handover", description: "Iterate on pipeline speed, cost efficiency, and reliability — then transfer ownership with documentation, training, and pair sessions.", icon: TrendingUp },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Certified DevOps Engineers", description: "AWS, Azure, and Kubernetes certified engineers with hands-on experience building production-grade pipelines for high-scale systems." },
  { icon: Wrench, title: "Production-Proven Practices", description: "Battle-tested patterns from 200+ deployments — we bring real-world experience, not just theoretical best practices." },
  { icon: TrendingUp, title: "10x Faster Delivery", description: "Teams we work with ship 10x faster with 90% fewer deployment failures and 50%+ reduction in infrastructure costs." },
  { icon: HeartHandshake, title: "Knowledge Transfer", description: "We don't just build — we upskill your team with documentation, training, and pair programming so you own your infrastructure." },];
