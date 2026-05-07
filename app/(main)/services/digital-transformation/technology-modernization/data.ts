import {
  Monitor,
  Server,
  Database,
  Cloud,
  GitBranch,
  Plug,
  ClipboardList,
  Layers,
  Map,
  Code2,
  TestTube2,
  Rocket,
  TrendingUp,
  Shield,
  Headphones,
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
  titleTop: "Technology",
  titleBottom: "Modernization",
  description:
    "Micro-frontends, cloud development, JavaScript migration to PWA/SPA, and server-side modernization with cutting-edge technologies.",
  heroImage: "/images/stock/stock-2c1ef39379.jpg",
  heroImageAlt: "Technology Modernization",
  topBadge: {
    icon: null as any,
    title: "Modernize",
    subtitle: "Legacy to cloud",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "40% Faster",
    subtitle: "Time to market",
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
  headingGray: "Technology Modernization",
  headingWhite: "Services",
  subtitle:
    "End-to-end modernization across frontend, backend, data, cloud, DevOps, and APIs — delivered with clear milestones.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Technology Modernization",
  headingWhite: "Process",
  subtitle:
    "From assessment to go-live — a phased approach that keeps systems stable while you modernize.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Technology",
  headingWhite: "Stack",
  subtitle: "Modern frontend, backend, data, cloud, and DevOps tooling for resilient product delivery.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Modernize Your",
  headingBottom: "Technology Stack?",
  description:
    "Move from legacy stacks to modern platforms with a phased plan that protects uptime and data.",
};

export const services: ServiceOffering[] = [
  {
    icon: Monitor,
    title: "Frontend Modernization",
    description:
      "Migrate legacy UIs to modern frameworks with micro-frontends, design systems, and performance-first delivery.",
    features: ["Micro-frontends", "Component libraries", "PWA/SPA"],
  },
  {
    icon: Server,
    title: "Backend Re-platforming",
    description:
      "Move critical services to scalable runtimes and APIs without breaking contracts your clients depend on.",
    features: ["API parity", "Strangler cuts", "Observability"],
  },
  {
    icon: Database,
    title: "Database Migration",
    description: "Plan and execute schema and data moves with validation, replication, and rollback paths.",
    features: ["Zero-loss patterns", "Dual-write", "Cutover playbooks"],
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Lift-and-shift or refactor workloads onto AWS, Azure, or GCP with landing zones and guardrails.",
    features: ["Landing zones", "IAM & networking", "Cost controls"],
  },
  {
    icon: GitBranch,
    title: "DevOps Transformation",
    description: "Automate builds, tests, and releases with pipelines, IaC, and GitOps for predictable delivery.",
    features: ["CI/CD", "IaC", "GitOps"],
  },
  {
    icon: Plug,
    title: "API Modernization",
    description: "Expose stable REST, GraphQL, or gRPC surfaces with versioning, docs, and gateway policies.",
    features: ["Versioning", "Gateway", "Developer portals"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Tech Assessment",
    description:
      "Inventory languages, frameworks, dependencies, and operational pain points to prioritize modernization.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Stack Selection",
    description: "Choose target stacks aligned to team skills, performance needs, and long-term vendor fit.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Migration Planning",
    description: "Define phases, interfaces, data movement, and risk mitigations for incremental delivery.",
    icon: Map,
  },
  {
    step: "04",
    title: "Implementation",
    description: "Execute refactors and migrations with feature flags, parallel runs, and tight feedback loops.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Testing & QA",
    description: "Automated regression, contract, and performance testing before each milestone go-live.",
    icon: TestTube2,
  },
  {
    step: "06",
    title: "Go-Live",
    description: "Controlled launches with monitoring, rollback readiness, and post-release tuning.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: ".NET Core", logo: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` },
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
    ],
  },
  {
    label: "Cloud",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` },
      { name: "Netlify", logo: `${DEVICON}/netlify/netlify-original.svg` },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "ArgoCD", logo: `${DEVICON}/argocd/argocd-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Layers,
    title: "Modern Stack",
    description:
      "Current frameworks and platforms chosen for maintainability, hiring, and ecosystem momentum.",
  },
  {
    icon: Shield,
    title: "Zero Data Loss",
    description: "Validation, backups, and phased cutovers designed to protect critical business data.",
  },
  {
    icon: TrendingUp,
    title: "Phased Approach",
    description: "Incremental milestones that de-risk delivery while keeping teams productive.",
  },
  {
    icon: Headphones,
    title: "Long-term Support",
    description:
      "Runbooks, training, and follow-on optimization so your team owns the new stack confidently.",
  },
];
