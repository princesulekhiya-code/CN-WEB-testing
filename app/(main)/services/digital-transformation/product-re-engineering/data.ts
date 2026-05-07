import {
  Code2,
  Gauge,
  Sparkles,
  Layers,
  Database,
  ShieldCheck,
  ClipboardList,
  Map,
  Hammer,
  TestTube2,
  Activity,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import type {
  ServiceOffering,
  ProcessStep,
  TechCategory,
  WhyChooseItem,
  ServicePageHeroProps,
  ServicePageSectionProps,
  CTAProps,
} from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/digital-transformation",
  backLabel: "Back to Digital Transformation",
  titleTop: "Product",
  titleBottom: "Re-engineering",
  description:
    "Enhance legacy products with new features, performance optimization, and faster speed-to-market through comprehensive re-engineering.",
  heroImage: "/images/stock/stock-158022e349.jpg",
  heroImageAlt: "Product Re-Engineering",
  topBadge: {
    icon: null as any,
    title: "Re-Engineer",
    subtitle: "Product rebuild",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "2x Faster",
    subtitle: "Performance gain",
    colorClass: "bg-emerald-500/10",
  },
  stats: [
    { value: 120, suffix: "+", label: "Transformations" },
    { value: 45, suffix: "%", label: "Efficiency Gain" },
    { value: 98, suffix: "%", label: "Success Rate" },
    { value: 60, suffix: "+", label: "Enterprise Clients" },
  ],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Product Re-engineering",
  headingWhite: "Services",
  subtitle:
    "Modernize legacy products with disciplined refactoring, performance work, and secure delivery practices.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Product Re-engineering",
  headingWhite: "Process",
  subtitle: "Assessment through release — structured delivery that balances velocity with stability.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Technologies We",
  headingWhite: "Use",
  subtitle:
    "Languages, frameworks, data stores, testing, and DevOps aligned to maintainable product delivery.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Re-engineer Your",
  headingBottom: "Product?",
  description: "Ship faster on a cleaner codebase with performance and security baked into every release.",
};

export const services: ServiceOffering[] = [
  {
    icon: Code2,
    title: "Code Refactoring",
    description:
      "Reduce complexity, remove dead paths, and align modules with domain boundaries for safer change.",
    features: ["Modularization", "Test seams", "Tech debt backlog"],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Profile hot paths, tune queries and caches, and right-size infrastructure for latency and cost.",
    features: ["Profiling", "Caching", "Query tuning"],
  },
  {
    icon: Sparkles,
    title: "Feature Enhancement",
    description:
      "Ship new capabilities on a stable core with flags, incremental rollout, and telemetry-backed validation.",
    features: ["Feature flags", "Telemetry", "Rollouts"],
  },
  {
    icon: Layers,
    title: "Tech Stack Upgrade",
    description: "Framework and runtime upgrades with compatibility shims, codemods, and staged adoption.",
    features: ["Codemods", "Dual-run", "Upgrade playbooks"],
  },
  {
    icon: Database,
    title: "Database Re-engineering",
    description: "Schema evolution, indexing strategy, and migration paths that protect data and uptime.",
    features: ["Schema migrations", "Indexing", "Replication"],
  },
  {
    icon: ShieldCheck,
    title: "Security Hardening",
    description: "Threat modeling, dependency hygiene, secrets management, and secure SDLC integration.",
    features: ["SAST/DAST", "Secrets", "Patch cadence"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Product Assessment",
    description: "Understand user pain, code health, and operational risk to prioritize re-engineering bets.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Re-engineering Strategy",
    description: "Define target architecture, milestones, and interfaces that minimize disruption.",
    icon: Map,
  },
  {
    step: "03",
    title: "Code Refactoring",
    description:
      "Incremental refactors behind stable APIs with tests and observability to catch regressions early.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Feature Development",
    description: "Build and ship enhancements on the modernized foundation with CI/CD guardrails.",
    icon: Hammer,
  },
  {
    step: "05",
    title: "Testing & QA",
    description:
      "Automated unit, integration, and performance testing plus exploratory QA for critical journeys.",
    icon: TestTube2,
  },
  {
    step: "06",
    title: "Release & Monitor",
    description: "Progressive delivery with dashboards, alerts, and rollback-ready releases.",
    icon: Activity,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: "Rust", logo: `${DEVICON}/rust/rust-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Django", logo: `${DEVICON}/django/django-plain.svg` },
      { name: "Spring Boot", logo: `${DEVICON}/spring/spring-original.svg` },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
      { name: "Neo4j", logo: `${DEVICON}/neo4j/neo4j-original.svg` },
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "Jest", logo: `${DEVICON}/jest/jest-plain.svg` },
      { name: "Cypress", logo: `${DEVICON}/cypressio/cypressio-original.svg` },
      { name: "Playwright", logo: `${DEVICON}/playwright/playwright-original.svg` },
      { name: "JMeter", logo: `${DEVICON}/jmeter/jmeter-original.svg` },
      { name: "k6", logo: `${DEVICON}/k6/k6-original.svg` },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "ArgoCD", logo: `${DEVICON}/argocd/argocd-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Shield,
    title: "Minimal Disruption",
    description:
      "Phased delivery, parallel runs, and feature flags so users keep working while systems improve.",
  },
  {
    icon: TrendingUp,
    title: "Performance Gains",
    description: "Measurable improvements to latency, throughput, and cost after each milestone.",
  },
  {
    icon: Layers,
    title: "Modern Codebase",
    description: "Readable structure, automated tests, and conventions your team can extend with confidence.",
  },
  {
    icon: Zap,
    title: "Faster Releases",
    description: "CI/CD, smaller batches, and observability that shrink cycle time from commit to production.",
  },
];
