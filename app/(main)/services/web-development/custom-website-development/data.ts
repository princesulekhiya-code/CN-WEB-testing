import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Code2, Layers, Globe, Zap, Wrench, ClipboardList, ShieldCheck, Rocket, Award, HeartHandshake, LayoutDashboard, Package } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/web-development",
  backLabel: "Back to Web Development",
  titleTop: "Custom Website",
  titleBottom: "Development",
  description: "Bespoke high-performance websites tailored to exact business requirements with 3rd party integrations and custom features.",
  heroImage: "/images/stock/stock-1e05b0d347.jpg",
  heroImageAlt: "Developer coding a custom website on laptop",
  topBadge: { icon: null as any, title: "Custom Build", subtitle: "Tailored websites", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Full-Stack", subtitle: "Modern tech", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 200, suffix: "+", label: "Websites Shipped" },
  { value: 50, suffix: "+", label: "Trusted Clients" },
  { value: 99, suffix: "%", label: "Uptime Commitment" },
  { value: 95, suffix: "+", label: "Lighthouse Score" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "End-to-end builds for bespoke sites and web apps — integrations, custom features, and performance tuned to your goals." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Custom Website", headingWhite: "Development Process", subtitle: "From requirements to deployment — structured delivery with clear checkpoints and measurable quality." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Modern stacks across frontend, backend, data, cloud, and delivery tooling for reliable custom web products." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "Custom Website?", description: "Partner with us for bespoke builds, deep integrations, and long-term performance — from first sketch to production\r\n          operations." };

export const services: ServiceOffering[] = [{
    icon: LayoutDashboard,
    title: "Enterprise Web Apps",
    description: "Large-scale web applications with role-based access, integrations, and reliability engineered for mission-critical workflows.",
    features: ["Scalable architecture", "RBAC & SSO", "Audit-ready ops"],
  },
  {
    icon: Code2,
    title: "API Development & Integration",
    description: "REST and GraphQL APIs, webhooks, and third-party integrations that connect your stack securely and predictably.",
    features: ["REST & GraphQL", "Webhooks", "Partner integrations"],
  },
  {
    icon: Layers,
    title: "Custom CMS Solutions",
    description: "Editor-friendly content models, workflows, and publishing pipelines tailored to your teams and governance needs.",
    features: ["Flexible schemas", "Workflows", "Preview & staging"],
  },
  {
    icon: Globe,
    title: "Web Portal Development",
    description: "Customer, vendor, and employee portals with dashboards, notifications, and self-service flows that reduce support load.",
    features: ["Self-service", "Dashboards", "Notifications"],
  },
  {
    icon: Package,
    title: "Legacy System Modernization",
    description: "Strangler-fig migrations, API layers, and UI refresh paths that de-risk modernization without freezing the business.",
    features: ["Incremental migration", "Interop layers", "Zero-downtime cuts"],
  },
  {
    icon: Wrench,
    title: "Web App Maintenance",
    description: "SLA-backed upkeep — security patches, dependency updates, performance tuning, and roadmap delivery after launch.",
    features: ["Patch cadence", "Observability", "Roadmap delivery"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Requirements",
    description: "Discovery workshops, user journeys, integrations inventory, and a prioritized backlog aligned to outcomes.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Architecture",
    description: "System design, data modeling, API contracts, and non-functional requirements for performance and security.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Development",
    description: "Iterative sprints with code reviews, automated tests, and CI/CD so quality stays high as velocity increases.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Integration",
    description: "Connect payments, CRM, ERP, analytics, and third-party services with observability and graceful failure modes.",
    icon: Globe,
  },
  {
    step: "05",
    title: "Testing",
    description: "Automated and exploratory testing across browsers and devices — load, security, and accessibility checks included.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Deployment",
    description: "Blue/green or canary releases, monitoring, runbooks, and handoff so launches are calm and reversible.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: ".NET", logo: `${DEVICON}/dot-net/dot-net-original.svg` },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
    ],
  },
  {
    label: "Cloud",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", logo: `${DEVICON}/git/git-original.svg` },
      { name: "Jira", logo: `${DEVICON}/jira/jira-original.svg` },
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Postman", logo: `${DEVICON}/postman/postman-original.svg` },
      { name: "Swagger", logo: `${DEVICON}/swagger/swagger-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Full-Stack Experts",
    description: "Product-minded engineers across frontend, backend, and DevOps — one team accountable for delivery.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Patterns and reviews that keep complexity under control as traffic, data, and integrations grow.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First",
    description: "Threat modeling, secure SDLC practices, and hardening baked in — not bolted on after launch.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Clear owners, proactive communication, and post-launch care that matches how your business operates.",
  },];
