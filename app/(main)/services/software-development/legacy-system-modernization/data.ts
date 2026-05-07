import { Cloud, RefreshCcw, Server, Shield, Wrench, Database, GitBranch, ShieldCheck, ClipboardList, Settings, Palette, Code2, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/software-development",
  backLabel: "Back to Software Development",
  titleTop: "Legacy System",
  titleBottom: "Modernization",
  description: "Transform your outdated IT ecosystem with strategic cloud migration, re-architecture, and technology stack\r\n                upgrades. We analyze your business processes, select the right technologies, and move your applications to\r\n                modern infrastructure.",
  heroImage: "/images/stock/stock-6355372f4e.jpg",
  heroImageAlt: "Modernize",
  topBadge: { icon: null as any, title: "Modernize", subtitle: "Legacy to cloud", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "50% Faster", subtitle: "System perf", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 99, suffix: "%", label: "On-Time Delivery" },
  { value: 15, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Legacy System Modernization", headingWhite: "Services", subtitle: "Cloud migration, re-architecture, platform engineering, and DevOps — a full stack approach to retiring technical debt\r\n          and scaling on modern infrastructure." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Legacy Modernization", headingWhite: "Process", subtitle: "From assessment to optimization — a phased path that minimizes risk while moving your systems forward." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Cloud platforms, containers, languages, databases, and DevOps tooling we use to modernize legacy estates end to end." };
export const ctaProps: CTAProps = { headingTop: "Ready to Modernize Your", headingBottom: "Legacy Systems?", description: "Partner with us to transform your outdated infrastructure into a modern, scalable, and secure technology ecosystem." };

export const services: ServiceOffering[] = [{
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Migrate legacy applications to AWS, Azure, or GCP with zero downtime strategies, data integrity, and optimized cloud-native architecture.",
    features: ["Zero downtime", "Multi-cloud", "Cost optimization"],
  },
  {
    icon: RefreshCcw,
    title: "Application Re-Architecture",
    description:
      "Decompose monolithic systems into microservices, implement event-driven patterns, and modernize data layers for scalability.",
    features: ["Microservices", "Event-driven", "API-first"],
  },
  {
    icon: Wrench,
    title: "Platform Re-Engineering",
    description:
      "Rebuild legacy platforms on modern stacks while preserving business logic, workflows, and critical integrations.",
    features: ["Modern stack", "Business continuity", "Data preservation"],
  },
  {
    icon: Database,
    title: "Database Modernization",
    description:
      "Migrate from legacy databases to cloud-native solutions — PostgreSQL, MongoDB, or managed services with automated scaling.",
    features: ["Schema migration", "Cloud databases", "Auto-scaling"],
  },
  {
    icon: GitBranch,
    title: "DevOps Transformation",
    description:
      "Implement CI/CD pipelines, infrastructure as code, containerization, and monitoring for legacy systems entering modern operations.",
    features: ["CI/CD pipelines", "Containerization", "IaC"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Upgrade",
    description:
      "Modernize security posture with zero-trust architecture, encryption upgrades, and compliance framework implementation.",
    features: ["Zero-trust", "Encryption", "Compliance"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Legacy Assessment",
    description:
      "Comprehensive audit of existing systems, dependencies, technical debt, and business-critical workflows.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Migration Strategy",
    description: "Roadmap definition with phased approach, risk mitigation, and rollback plans for safe transitions.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Architecture Design",
    description:
      "Modern architecture blueprints with microservices, APIs, and cloud-native patterns tailored to your needs.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Incremental Migration",
    description:
      "Phased execution with parallel running, data synchronization, and continuous validation at every step.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Testing & Validation",
    description:
      "Comprehensive testing including regression, performance, security, and user acceptance across all migrated components.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Optimization & Support",
    description:
      "Post-migration monitoring, performance tuning, cost optimization, and ongoing modernization support.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{ label: "Cloud Platforms", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Microsoft Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Google Cloud", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Digital Ocean", logo: `${DEVICON}/digitalocean/digitalocean-original.svg` },
      { name: "Heroku", logo: `${DEVICON}/heroku/heroku-original.svg` }
    ] },
  { label: "Containerization", items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "OpenShift", logo: `${DEVICON}/openshift/openshift-original.svg` },
      { name: "AWS ECS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure AKS", logo: `${DEVICON}/azure/azure-original.svg` }
    ] },
  {
    label: "Modern Languages",
    items: [
      { name: ".NET Core", logo: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
      { name: "Java Spring Boot", logo: `${DEVICON}/java/java-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: "Rust", logo: `${DEVICON}/rust/rust-original.svg` }
    ],
  },
  { label: "Databases", items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` },
      { name: "Cosmos DB", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Aurora", logo: `${DEVICON}/aurora/aurora-original.svg` }
    ] },
  { label: "DevOps Tools", items: [
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "Ansible", logo: `${DEVICON}/ansible/ansible-original.svg` },
      { name: "Jenkins", logo: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Proven Migration Track Record",
    description:
      "Successfully modernized 50+ legacy systems across industries with zero critical data loss.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description:
      "Average 40% reduction in infrastructure costs and 60% improvement in system performance post-migration.",
  },
  {
    icon: Zap,
    title: "Minimal Business Disruption",
    description:
      "Phased migration approach with parallel running ensures your business operations continue uninterrupted.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Modernization Partner",
    description: "Ongoing support, monitoring, and iterative improvements to keep your systems ahead of the curve.",
  },];
