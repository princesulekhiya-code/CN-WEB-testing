import {
  Gauge,
  Cpu,
  Wallet,
  Network,
  Database,
  Boxes,
  LineChart,
  Layers,
  TrendingUp,
  DollarSign,
  Timer,
  Rocket,
  Users,
  Clock,
  HeartHandshake,
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
  backHref: "/services/devops-cloud-automation",
  backLabel: "Back to DevOps & Cloud Automation",
  titleTop: "Cloud Automation",
  titleBottom: "& Auto-Scaling",
  description:
    "Policies, schedulers, and autoscaling that respond to real demand—balancing performance, resilience, and cloud spend.",
  heroImage: "/images/stock/stock-d2cb4997ca.jpg",
  heroImageAlt: "Cloud Automation & Scaling",
  topBadge: {
    icon: null as any,
    title: "Auto-Scale",
    subtitle: "Cloud automation",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "Zero Drift",
    subtitle: "IaC managed",
    colorClass: "bg-emerald-500/10",
  },
  stats: [
    { value: 150, suffix: "+", label: "Pipelines Built" },
    { value: 70, suffix: "%", label: "Deploy Faster" },
    { value: 99, suffix: "%", label: "Uptime Achieved" },
    { value: 40, suffix: "+", label: "Teams Enabled" },
  ],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Cloud Automation & Auto-Scaling",
  headingWhite: "Services",
  subtitle:
    "Elastic capacity, event-driven automation, and FinOps practices that keep cloud operations predictable at scale.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Cloud Automation",
  headingWhite: "Process",
  subtitle:
    "From workload profiling to continuous optimization—automation that stays safe as your systems grow.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Cloud Automation Technology",
  headingWhite: "Stack",
  subtitle:
    "Serverless runtimes, scaling primitives, FinOps tooling, and managed automation services we implement in production.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Automate Your",
  headingBottom: "Cloud?",
  description:
    "Partner with us to implement scaling, serverless workflows, and cost guardrails that keep pace with your roadmap.",
};

export const services: ServiceOffering[] = [
  {
    icon: Gauge,
    title: "Auto-Scaling Architecture",
    description:
      "Predictive and reactive scaling policies across compute and Kubernetes with safe rollouts, warm pools, and capacity buffers.",
    features: ["HPA/VPA patterns", "Warm pools", "Safe rollouts"],
  },
  {
    icon: Cpu,
    title: "Serverless Automation",
    description:
      "Event-driven functions, queues, and schedulers that replace cron boxes with durable workflows and idempotent handlers.",
    features: ["Event-driven design", "Idempotency", "DLQs"],
  },
  {
    icon: Wallet,
    title: "Cost Optimization & FinOps",
    description:
      "Tagging discipline, commitment strategy, rightsizing, and showback reports that tie spend to teams and services.",
    features: ["Tagging", "Commitments", "Showback"],
  },
  {
    icon: Network,
    title: "Load Balancing & Traffic Management",
    description:
      "Blue/green and canary patterns, TLS termination, and intelligent routing that keeps releases smooth under real traffic.",
    features: ["Blue/green", "Canary", "TLS"],
  },
  {
    icon: Database,
    title: "Automated Backup & DR",
    description:
      "Scheduled snapshots, cross-region replication, and tested restore drills so recovery is a procedure—not a panic.",
    features: ["Snapshots", "Cross-region", "Restore drills"],
  },
  {
    icon: Boxes,
    title: "Cloud Resource Lifecycle Management",
    description:
      "Provisioning guardrails, ownership metadata, and automated cleanup for sandboxes, previews, and idle resources.",
    features: ["Guardrails", "Ownership tags", "Idle cleanup"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Workload & Traffic Profile",
    description:
      "Model seasonality, burst patterns, and dependencies to right-size scaling signals and avoid both waste and brownouts.",
    icon: LineChart,
  },
  {
    step: "02",
    title: "Automation Blueprint",
    description: "Design event flows, IaC modules, and policy boundaries for serverless, schedulers, and infrastructure pipelines.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Scaling & Routing Implementation",
    description: "Implement autoscaling groups, cluster scalers, ingress, and progressive delivery hooks aligned to your SLOs.",
    icon: TrendingUp,
  },
  {
    step: "04",
    title: "Cost & FinOps Controls",
    description: "Wire budgets, anomaly detection, and optimization recommendations into weekly operational reviews.",
    icon: DollarSign,
  },
  {
    step: "05",
    title: "Resilience Automation",
    description: "Automate backups, failover rehearsals, and chaos-style validation for the paths that matter most.",
    icon: Timer,
  },
  {
    step: "06",
    title: "Continuous Optimization",
    description: "Tune policies, refine schedules, and expand coverage as new services onboard—keeping automation low-touch.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Serverless",
    items: [
      { name: "AWS Lambda", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure Functions", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Cloud Functions", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Cloudflare Workers", logo: `${DEVICON}/cloudflareworkers/cloudflareworkers-original.svg` },
    ],
  },
  {
    label: "Scaling",
    items: [
      { name: "AWS ASG", logo: `${DEVICON}/awsasg/awsasg-original.svg` },
      { name: "KEDA", logo: `${DEVICON}/keda/keda-original.svg` },
      { name: "Cluster Autoscaler", logo: `${DEVICON}/clusterautoscaler/clusterautoscaler-original.svg` },
      { name: "HPA/VPA", logo: `${DEVICON}/hpavpa/hpavpa-original.svg` },
    ],
  },
  {
    label: "Cost",
    items: [
      { name: "AWS Cost Explorer", logo: `${DEVICON}/awscostexplorer/awscostexplorer-original.svg` },
      { name: "Kubecost", logo: `${DEVICON}/kubecost/kubecost-original.svg` },
      { name: "Infracost", logo: `${DEVICON}/infracost/infracost-original.svg` },
      { name: "Spot.io", logo: `${DEVICON}/spotio/spotio-original.svg` },
    ],
  },
  {
    label: "Automation",
    items: [
      { name: "AWS Systems Manager", logo: `${DEVICON}/awssystemsmanager/awssystemsmanager-original.svg` },
      { name: "Azure Automation", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Cloud Scheduler", logo: `${DEVICON}/cloudscheduler/cloudscheduler-original.svg` },
      { name: "EventBridge", logo: `${DEVICON}/eventbridge/eventbridge-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Cloud Automation Engineers",
    description:
      "Hands-on experience across AWS, Azure, and GCP—shipping scaling policies, serverless workflows, and FinOps guardrails.",
  },
  {
    icon: Clock,
    title: "Reliability First",
    description:
      "Automation designed around safe limits, rollbacks, and observability so changes improve uptime—not risk it.",
  },
  {
    icon: TrendingUp,
    title: "Cost-Aware by Default",
    description: "We pair performance targets with unit economics—so scale matches demand without runaway bills.",
  },
  {
    icon: HeartHandshake,
    title: "Operational Handover",
    description: "Runbooks, dashboards, and training so your team can operate automation confidently after go-live.",
  },
];
