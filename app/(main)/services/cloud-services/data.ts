import { BarChart3, Building2, Clock, Cloud, CloudCog, CreditCard, Database, Factory, Gamepad2, Globe, GraduationCap, HeartHandshake, Layers, Rocket, Server, Settings, Shield, ShieldCheck, ShoppingCart, Stethoscope, Truck, Users, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to services",
  titleTop: "Cloud Computing",
  titleBottom: "Services",
  description: "Accelerate enterprise agility with elastic, cost-optimized cloud infrastructure — simplifying operations, strengthening resilience, and unlocking new efficiencies.",
  heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Cloud computing infrastructure",
  topBadge: { icon: null as any, title: "Multi-Cloud", subtitle: "AWS, Azure, GCP", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "99.99%", subtitle: "Uptime SLA", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Comprehensive solutions tailored to your business needs." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A proven cloud methodology that ensures quality, transparency, and on-time delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built with", headingWhite: "Modern Tools", subtitle: "Industry-leading tools and frameworks powering our solutions." };
export const ctaProps: CTAProps = { headingTop: "Ready to Move to the", headingBottom: "Cloud With Confidence?", description: "Bring your current footprint and target dates — we&apos;ll sketch migration waves, tooling, and governance in one working session." };

export const services: ServiceOffering[] = [
  { icon: Layers, title: "Cloud Implementation Strategy", description: "End-to-end strategic guidance — from initial cloud assessment through governance design — ensuring your migration delivers lasting value and robust security.", features: ["Cloud advisory", "Security planning", "Architecture design"], href: "/services/cloud-services/cloud-implementation-strategy" , logos: ["amazonwebservices/amazonwebservices-plain-wordmark.svg", "googlecloud/googlecloud-original.svg", "azure/azure-original.svg"], accent: "#FF9900"},
  { icon: Cloud, title: "Cloud Application Services", description: "Seamless application migration, ongoing management, and proactive monitoring on IaaS and PaaS — maximizing flexibility and operational uptime.", features: ["App migration", "PaaS management", "Monitoring"], href: "/services/cloud-services/cloud-application-services" , logos: ["docker/docker-original.svg", "kubernetes/kubernetes-original.svg", "react/react-original.svg"], accent: "#2496ED"},
  { icon: CloudCog, title: "Cloud Management Services", description: "Predictive capacity planning, rehearsed disaster recovery, and DevOps automation that safeguard your cloud workloads around the clock.", features: ["Trend reporting", "Disaster recovery", "Automation"], href: "/services/cloud-services/cloud-management-services" , logos: ["terraform/terraform-original.svg", "ansible/ansible-original.svg", "grafana/grafana-original.svg"], accent: "#7B42BC"},
  { icon: Settings, title: "DevOps As A Service", description: "Boost velocity and reliability with managed CI/CD pipelines, infrastructure as code, and self-healing delivery workflows that raise ROI.", features: ["CI/CD pipelines", "IaC", "Release automation"], href: "/services/cloud-services/devops-as-a-service" , logos: ["githubactions/githubactions-original.svg", "jenkins/jenkins-original.svg", "docker/docker-original.svg"], accent: "#2088FF"},
  { icon: Globe, title: "Cloud Migration Services", description: "Low-risk, cost-efficient migrations to AWS, Azure, or GCP — executed in rehearsed waves so your operations never skip a beat.", features: ["Lift & shift", "Re-platforming", "Zero-downtime"], href: "/services/cloud-services/cloud-migration-services" , logos: ["amazonwebservices/amazonwebservices-plain-wordmark.svg", "docker/docker-original.svg", "kubernetes/kubernetes-original.svg"], accent: "#FF9900"},
  { icon: Server, title: "Cloud Infrastructure & Implementation", description: "Tailored cloud foundations — from greenfield infrastructure and hybrid architectures to data-centre design — shaped for your workloads and growth curve.", features: ["IaC automation", "Data centre design", "Hybrid cloud"], href: "/services/cloud-services/cloud-infrastructure" , logos: ["terraform/terraform-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg", "azure/azure-original.svg"], accent: "#4EB3E8"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Discovery & TCO Analysis", description: "Inventory workloads, dependencies, and licensing to model realistic migration costs and recurring run rates.", icon: BarChart3 },
  { step: "02", title: "Landing Zone Design", description: "Accounts, networking, IAM boundaries, and shared services that scale as more teams onboard.", icon: Layers },
  { step: "03", title: "Migration Waves", description: "Low-risk apps first to prove pipelines, then progressively critical systems with rehearsed cutovers.", icon: Rocket },
  { step: "04", title: "Optimization Pass", description: "Rightsizing, reserved capacity where justified, and observability to catch waste early.", icon: Settings },
  { step: "05", title: "Operational Hardening", description: "Backups, patching automation, incident response hooks, and chaos drills appropriate to your maturity.", icon: Shield },
  { step: "06", title: "FinOps Cadence", description: "Monthly reviews tying usage trends to product releases so cloud spend stays explainable to finance.", icon: Database },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Certified Cloud Engineers", description: "AWS, Azure, and GCP certified architects with 5+ years average experience in enterprise cloud transformation." },
  { icon: Clock, title: "Faster Time-to-Cloud", description: "Proven migration waves with rehearsed cutovers — typical enterprise migration completed in 8-12 weeks." },
  { icon: ShieldCheck, title: "Security-First Approach", description: "Landing zones, encryption defaults, and compliance pipelines built in from day one — not bolted on after." },
  { icon: HeartHandshake, title: "Ongoing FinOps Partnership", description: "Monthly cost reviews, rightsize recommendations, and waste detection so cloud spend stays predictable." },];
