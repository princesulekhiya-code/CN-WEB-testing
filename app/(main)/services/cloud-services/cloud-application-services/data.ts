import {
  Cloud,
  Server,
  Database,
  Gauge,
  CheckCircle2,
  ClipboardList,
  Settings,
  Rocket,
  Monitor,
  Zap,
  Award,
  HeartHandshake,
  Users,
  ShieldCheck,
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
  backHref: "/services/cloud-services",
  backLabel: "Back to Cloud Services",
  titleTop: "Cloud Application",
  titleBottom: "Services",
  description:
    "Migrate, manage, and monitor applications on IaaS or PaaS cloud platforms to drive flexibility, efficiency, and operational resilience at scale.",
  heroImage: "/images/stock/stock-b2e21fd8f5.jpg",
  heroImageAlt: "Cloud Application Services",
  topBadge: {
    icon: null as any,
    title: "Cloud Apps",
    subtitle: "SaaS solutions",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "99.9% Uptime",
    subtitle: "Enterprise SLA",
    colorClass: "bg-emerald-500/10",
  },
  stats: [
    { value: 200, suffix: "+", label: "Cloud Migrations" },
    { value: 99, suffix: "%", label: "Uptime SLA" },
    { value: 40, suffix: "%", label: "Cost Reduction" },
    { value: 50, suffix: "+", label: "Clients Served" },
  ],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Application",
  headingWhite: "Services",
  subtitle:
    "Full-lifecycle cloud application services — from greenfield development to legacy modernization and managed operations.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Application",
  headingWhite: "Process",
  subtitle:
    "A proven delivery model — assess, plan, build, deploy, optimize — for cloud applications that perform.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Application Platforms &",
  headingWhite: "Tools",
  subtitle:
    "Cloud-native platforms, container orchestration, and observability tools for resilient applications.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Build Cloud-Native",
  headingBottom: "Applications?",
  description:
    "Let's discuss your application landscape and chart the fastest path to cloud-native delivery.",
};

export const services: ServiceOffering[] = [
  {
    icon: Cloud,
    title: "Cloud-Native App Development",
    description:
      "Build applications designed for the cloud from day one — microservices, containers, and serverless patterns for maximum scalability.",
    features: ["Microservices", "Containers", "Serverless"],
  },
  {
    icon: Server,
    title: "Application Migration to Cloud",
    description:
      "Migrate legacy applications to IaaS or PaaS platforms with minimal downtime, data integrity checks, and rollback plans.",
    features: ["Lift & shift", "Re-platforming", "Zero-downtime"],
  },
  {
    icon: Monitor,
    title: "Application Monitoring & APM",
    description:
      "Real-time performance monitoring, alerting, and distributed tracing to keep cloud applications healthy and responsive.",
    features: ["APM tools", "Distributed tracing", "Alert pipelines"],
  },
  {
    icon: Database,
    title: "Cloud Database Management",
    description:
      "Managed database services, replication, backup strategies, and performance tuning across SQL and NoSQL platforms.",
    features: ["Managed DBs", "Replication", "Auto-scaling"],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Auto-scaling, caching, CDN configuration, and code-level optimizations to ensure cloud apps perform under load.",
    features: ["Auto-scaling", "Caching", "CDN tuning"],
  },
  {
    icon: Settings,
    title: "Application Modernization",
    description:
      "Decompose monoliths into microservices, containerize workloads, and adopt CI/CD for faster, safer releases.",
    features: ["Decomposition", "Containerization", "CI/CD"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Application Assessment",
    description:
      "Inventory applications, map dependencies, and classify workloads by migration strategy.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Architecture Planning",
    description:
      "Target-state architecture, service boundaries, and integration patterns for cloud-native delivery.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Development & Migration",
    description: "Iterative build or migration with automated testing and rehearsed cutovers.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Integration & Testing",
    description: "API integration, load testing, and security validation before production rollout.",
    icon: Zap,
  },
  {
    step: "05",
    title: "Deployment & Monitoring",
    description: "Blue-green or canary deployments with full observability from day one.",
    icon: Monitor,
  },
  {
    step: "06",
    title: "Optimization & Support",
    description:
      "Continuous performance tuning, cost optimization, and SLA-backed operational support.",
    icon: Gauge,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Cloud Platforms",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Microsoft Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Google Cloud", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Oracle Cloud", logo: `${DEVICON}/oracle/oracle-original.svg` },
    ],
  },
  {
    label: "App Platforms",
    items: [
      { name: "Elastic Beanstalk", logo: `${DEVICON}/elasticbeanstalk/elasticbeanstalk-original.svg` },
      { name: "Azure App Service", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Cloud Run", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Heroku", logo: `${DEVICON}/heroku/heroku-original.svg` },
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` },
    ],
  },
  {
    label: "Containers",
    items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "ECS", logo: `${DEVICON}/ecs/ecs-original.svg` },
      { name: "EKS", logo: `${DEVICON}/eks/eks-original.svg` },
      { name: "AKS", logo: `${DEVICON}/aks/aks-original.svg` },
      { name: "Fargate", logo: `${DEVICON}/fargate/fargate-original.svg` },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "RDS", logo: `${DEVICON}/rds/rds-original.svg` },
      { name: "Aurora", logo: `${DEVICON}/aurora/aurora-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` },
      { name: "Cosmos DB", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Cloud SQL", logo: `${DEVICON}/cloudsql/cloudsql-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
    ],
  },
  {
    label: "Monitoring",
    items: [
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "New Relic", logo: `${DEVICON}/newrelic/newrelic-original.svg` },
      { name: "CloudWatch", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Prometheus", logo: `${DEVICON}/prometheus/prometheus-original.svg` },
      { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Full-Stack Cloud Experts",
    description:
      "Engineers proficient across front-end, back-end, and cloud infrastructure for truly integrated solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "Security baked into every layer — encryption, access controls, and compliance from the start.",
  },
  {
    icon: Award,
    title: "Proven Migration Track Record",
    description:
      "100+ successful application migrations with zero data loss and minimal business disruption.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Managed Services",
    description:
      "Post-launch monitoring, patching, scaling, and feature delivery under SLA commitments.",
  },
];
