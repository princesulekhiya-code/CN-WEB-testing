import { Server, Shield, Cloud, Layers, Boxes, Database, Gauge, ClipboardList, Settings, Code2, Palette, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/product-engineering",
  backLabel: "Back to Product Engineering",
  titleTop: "Software Product",
  titleBottom: "Architecting",
  description: "Experts analyze your IT infrastructure and needs, utilizing advanced tools and technologies to build scalable, robust software that offers smooth performance.",
  heroImage: "/images/stock/stock-6355372f4e.jpg",
  heroImageAlt: "Software Architecture & Infrastructure",
  topBadge: { icon: null as any, title: "Scalable Arch", subtitle: "Microservices", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Future-Proof", subtitle: "Extensible design", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Products Shipped" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "%", label: "On-Time Delivery" },
  { value: 12, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Software Product Architecting", headingWhite: "Services", subtitle: "End-to-end architecture — from system and cloud design to security, data, and performance — engineered for reliability and growth." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Architecting", headingWhite: "Process", subtitle: "From audit and planning through blueprint and validation — a disciplined path to architectures your teams can build and operate with confidence." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Cloud platforms, architectural styles, proven backend stacks, data stores, and DevOps tooling — aligned to your scale, compliance, and team strengths." };
export const ctaProps: CTAProps = { headingTop: "Ready to Architect Your", headingBottom: "Software Product?", description: "Get a blueprint your engineers can ship against — secure, scalable, and grounded in how your organization actually operates." };

export const services: ServiceOffering[] = [{
    icon: Server,
    title: "System Architecture Design",
    description:
      "We define services, boundaries, and integration patterns so your product can grow without constant rewrites. The design encodes reliability, observability, and clear ownership across teams.",
    features: ["Service boundaries", "Integration patterns", "Reliability model"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Landing zones, networking, identity, and cost guardrails are shaped for your compliance and scale targets. We align cloud choices with operational maturity — not buzzwords.",
    features: ["Landing zones", "Identity & IAM", "Cost controls"],
  },
  {
    icon: Boxes,
    title: "Microservices Design",
    description:
      "When decomposition makes sense, we model domains, contracts, and event flows so teams ship independently without fragile coupling. Where monoliths fit better, we say so plainly.",
    features: ["Domain boundaries", "Async contracts", "Team topology"],
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Data models, replication, caching, and consistency trade-offs are chosen for your access patterns and growth curve. We prevent performance cliffs before they reach production.",
    features: ["Data modeling", "Caching strategy", "Consistency model"],
  },
  {
    icon: Shield,
    title: "Security Architecture",
    description:
      "Threat modeling, least privilege, secrets handling, and secure SDLC practices are baked into the blueprint. Security becomes structural — not a late-stage scramble.",
    features: ["Threat modeling", "Least privilege", "Secure SDLC"],
  },
  {
    icon: Gauge,
    title: "Performance Architecture",
    description:
      "Latency budgets, capacity planning, and profiling strategies ensure the system feels fast under real load. We design for measurable SLOs your stakeholders can trust.",
    features: ["Latency budgets", "Capacity planning", "SLO design"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Infrastructure Audit",
    description:
      "We inventory systems, dependencies, and operational pain points across environments. The audit highlights risks, bottlenecks, and quick wins before major design commitments.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Architecture Planning",
    description:
      "Target-state capabilities are mapped to components, interfaces, and phased migrations. Planning balances delivery speed with architectural integrity across releases.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Technology Selection",
    description:
      "Languages, runtimes, and platforms are evaluated against your team skills, licensing, and long-term support. Decisions are documented with explicit trade-offs and exit paths.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Blueprint Design",
    description:
      "Diagrams, ADRs, and interface contracts give engineering a shared source of truth. The blueprint is detailed enough to estimate work — yet flexible enough to evolve.",
    icon: Palette,
  },
  {
    step: "05",
    title: "Validation & Review",
    description:
      "Architecture reviews with security, platform, and engineering stakeholders catch gaps early. We iterate until risks are understood and mitigation paths are owned.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Implementation Support",
    description:
      "We stay close during build — answering questions, refining interfaces, and guarding principles as realities emerge. Support reduces drift between blueprint and shipped code.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{ label: "Cloud", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Digital Ocean", logo: `${DEVICON}/digitalocean/digitalocean-original.svg` },
      { name: "Heroku", logo: `${DEVICON}/heroku/heroku-original.svg` }
    ] },
  { label: "Architecture", items: [
      { name: "Microservices", logo: `${DEVICON}/microservices/microservices-original.svg` },
      { name: "Event-Driven", logo: `${DEVICON}/eventdriven/eventdriven-original.svg` },
      { name: "CQRS", logo: `${DEVICON}/cqrs/cqrs-original.svg` },
      { name: "Serverless", logo: `${DEVICON}/serverless/serverless-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: ".NET", logo: `${DEVICON}/dot-net/dot-net-original.svg` },
      { name: "Java Spring", logo: `${DEVICON}/java/java-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` }
    ] },
  { label: "Database", items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` },
      { name: "Cassandra", logo: `${DEVICON}/cassandra/cassandra-original.svg` }
    ] },
  { label: "DevOps", items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "Jenkins", logo: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Architecture Excellence",
    description:
      "Seasoned architects who have operated large systems — bringing patterns that work in production, not only on diagrams.",
  },
  {
    icon: TrendingUp,
    title: "Scalable by Design",
    description:
      "Capacity, tenancy, and data growth are first-class concerns so your platform can expand without surprise re-platforming.",
  },
  {
    icon: Zap,
    title: "Future-Proof Solutions",
    description:
      "We favor evolvable boundaries and clear contracts so you can adopt new channels, regions, and features without cascading rewrites.",
  },
  {
    icon: HeartHandshake,
    title: "Implementation Support",
    description:
      "Hands-on guidance through delivery — from spike reviews to production readiness — so architectural intent survives implementation.",
  },];
