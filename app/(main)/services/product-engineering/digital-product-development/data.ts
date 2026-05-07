import { Code2, Cloud, Smartphone, Globe, Terminal, Rocket, TrendingUp, ClipboardList, Settings, ShieldCheck, BarChart3, Award, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/product-engineering",
  backLabel: "Back to Product Engineering",
  titleTop: "Digital Product",
  titleBottom: "Development",
  description: "Our developers leverage the latest technologies to build basic to advanced digital products and scale MVPs to full-fledged solutions.",
  heroImage: "/images/stock/stock-1e05b0d347.jpg",
  heroImageAlt: "Digital Product Development",
  topBadge: { icon: null as any, title: "Full-Cycle", subtitle: "Idea to launch", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "50+ Products", subtitle: "Shipped globally", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Products Shipped" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "%", label: "On-Time Delivery" },
  { value: 12, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Digital Product Development", headingWhite: "Services", subtitle: "Web and mobile engineering, APIs, cloud-native delivery, MVPs, and scaling — built with modern stacks and operational discipline." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "From requirements and architecture through agile build, testing, deployment, and scaling — engineered for reliability and continuous improvement." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Popular front-end frameworks, polyglot backends, mobile stacks, cloud platforms, and data stores — selected for your product constraints and team skills." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "Digital Product?", description: "Ship reliable software faster — with architecture, delivery practices, and support that scale alongside your traction." };

export const services: ServiceOffering[] = [{
    icon: Globe,
    title: "Full-Stack Web Development",
    description:
      "We build responsive web apps with clean architecture — SSR/SSG where it helps, APIs that scale, and frontends that stay maintainable as features accumulate.",
    features: ["Modern stacks", "API-first", "Maintainable UI"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps with polished UX, offline-aware flows, and store-ready release discipline. Performance and battery matter — not only feature count.",
    features: ["Cross-platform", "Offline-aware", "Store releases"],
  },
  {
    icon: Cloud,
    title: "Cloud-Native Products",
    description:
      "Containers, managed services, and IaC patterns make deployments repeatable and environments consistent. We design for elasticity and safe rollouts from day one.",
    features: ["Containers & IaC", "Elastic scale", "Safe releases"],
  },
  {
    icon: Terminal,
    title: "API & Integration Development",
    description:
      "Stable contracts, versioning, and observability connect your product to partners and internal systems. Integrations are treated as products — not one-off scripts.",
    features: ["Stable contracts", "Versioning", "Partner-ready APIs"],
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "We ship the smallest valuable slice with instrumentation and foundations that won’t trap you in throwaway code. MVPs are built to evolve — not to be discarded wholesale.",
    features: ["Lean scope", "Instrumentation", "Evolvable codebase"],
  },
  {
    icon: TrendingUp,
    title: "Product Scaling",
    description:
      "When traction arrives, we harden performance, data paths, and team workflows — profiling hot spots, tightening SLOs, and removing scaling bottlenecks systematically.",
    features: ["Performance tuning", "Data scaling", "SLO hardening"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Requirement Analysis",
    description:
      "We translate goals into user stories, non-functional requirements, and acceptance criteria — aligning stakeholders before engineering commits dates.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Architecture Design",
    description:
      "Services, data models, and integration boundaries are defined for clarity and testability. The architecture anticipates growth without speculative over-engineering.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Sprint Development",
    description:
      "Iterative delivery with demos, code review, and CI checks keeps quality high while maintaining momentum. Scope adjusts transparently as learning happens.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Integration & Testing",
    description:
      "Automated tests, contract tests, and staging environments catch regressions early. Integrations are verified against realistic data and failure modes.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Blue/green or progressive strategies reduce rollout risk with observability and rollback paths. Launch readiness includes runbooks and on-call expectations.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Scaling & Optimization",
    description:
      "Post-launch profiling informs caching, query tuning, and infrastructure right-sizing. Optimization targets user-visible latency and cost — not vanity metrics.",
    icon: BarChart3,
  },];

export const techCategories: TechCategory[] = [{ label: "Frontend", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: ".NET", logo: `${DEVICON}/dot-net/dot-net-original.svg` }
    ] },
  { label: "Mobile", items: [
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` }
    ] },
  { label: "Cloud", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` }
    ] },
  { label: "Database", items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Full-Cycle Expertise",
    description:
      "One partner from discovery through scaling — reducing handoff friction and preserving product context across releases.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Patterns and platforms chosen for growth — so success doesn’t force an emergency rewrite when traffic spikes.",
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description:
      "Transparent sprints, demos, and measurable increments — so priorities stay aligned and risk stays visible.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Launch Support",
    description:
      "Operational support, enhancements, and reliability work after go-live — keeping your product competitive as markets shift.",
  },];
