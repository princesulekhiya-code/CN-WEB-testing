import {
  Blocks,
  Cloud,
  SlidersHorizontal,
  ScanSearch,
  Globe,
  ShieldCheck,
  Target,
  FileCode,
  Plug,
  RefreshCw,
  Scale,
  Rocket,
  Award,
  TrendingUp,
  Zap,
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
  titleTop: "Infrastructure",
  titleBottom: "as Code",
  description:
    "Treat infrastructure like application code — reviewed, tested, and versioned — so every environment is reproducible and auditable.",
  heroImage: "/images/stock/stock-2c1ef39379.jpg",
  heroImageAlt: "Infrastructure as Code",
  topBadge: {
    icon: null as any,
    title: "Terraform",
    subtitle: "IaC automation",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "Multi-Cloud",
    subtitle: "Infra provisioning",
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
  headingGray: "Service",
  headingWhite: "Offerings",
  subtitle:
    "Six focused capabilities covering modules, provisioning, configuration, state, multi-cloud strategy, and validation.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our",
  headingWhite: "Process",
  subtitle: "Six phases on an alternating vertical timeline.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Technology",
  headingWhite: "Stack",
  subtitle: "Representative tools by category.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Codify Your",
  headingBottom: "Infrastructure?",
  description:
    "Partner with us to make infrastructure changes reviewable, testable, and boringly reliable across teams and clouds.",
};

export const services: ServiceOffering[] = [
  {
    icon: Blocks,
    title: "Terraform Module Development",
    description:
      "Composable modules with clear interfaces, versioning, and documentation so teams reuse infrastructure safely.",
    features: ["Module registry", "Contract tests", "Upgrade paths"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Provisioning",
    description: "Repeatable environments across accounts and regions with guardrails for networking, identity, and data.",
    features: ["Landing zones", "Policy as code", "Cost tags"],
  },
  {
    icon: SlidersHorizontal,
    title: "Configuration Management",
    description:
      "Drift-resistant configuration for VMs, Kubernetes add-ons, and hybrid estates where imperative still matters.",
    features: ["Idempotent runs", "Inventory", "Secrets integration"],
  },
  {
    icon: ScanSearch,
    title: "State Management & Drift Detection",
    description:
      "Remote state, locking, and proactive drift detection so changes never surprise production on a Friday.",
    features: ["State hygiene", "Drift alerts", "Run auditing"],
  },
  {
    icon: Globe,
    title: "Multi-Cloud IaC Strategy",
    description: "Abstractions and workflows that reduce lock-in while staying pragmatic about cloud-native primitives.",
    features: ["Reference arch", "Shared modules", "Cloud adapters"],
  },
  {
    icon: ShieldCheck,
    title: "IaC Testing & Validation",
    description:
      "Static analysis, policy checks, and integration tests that catch issues before `apply` touches shared environments.",
    features: ["Policy gates", "Plan reviews", "Test harnesses"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Inventory & Goals",
    description: "Document existing resources, blast radius, compliance needs, and the outcomes you want from codification.",
    icon: Target,
  },
  {
    step: "02",
    title: "IaC Blueprint",
    description: "Pick toolchain, module boundaries, state strategy, and CI patterns for plan/apply with approvals.",
    icon: FileCode,
  },
  {
    step: "03",
    title: "Build & Migrate",
    description: "Implement modules, import legacy resources where needed, and validate parity with careful cutovers.",
    icon: Plug,
  },
  {
    step: "04",
    title: "Testing & Policy",
    description: "Wire scanners, OPA/Sentinel policies, and automated plan checks into every pull request.",
    icon: RefreshCw,
  },
  {
    step: "05",
    title: "Operational Model",
    description: "Define ownership, access, break-glass, and observability for infrastructure changes at scale.",
    icon: Scale,
  },
  {
    step: "06",
    title: "Enablement",
    description: "Train teams, publish patterns, and iterate on developer experience so IaC stays the default path.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "IaC Tools",
    items: [
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "Pulumi", logo: `${DEVICON}/pulumi/pulumi-original.svg` },
      { name: "CDK", logo: `${DEVICON}/cdk/cdk-original.svg` },
      { name: "CloudFormation", logo: `${DEVICON}/cloudformation/cloudformation-original.svg` },
      { name: "Bicep", logo: `${DEVICON}/bicep/bicep-original.svg` },
    ],
  },
  {
    label: "Config Management",
    items: [
      { name: "Ansible", logo: `${DEVICON}/ansible/ansible-original.svg` },
      { name: "Chef", logo: `${DEVICON}/chef/chef-original.svg` },
      { name: "Puppet", logo: `${DEVICON}/puppet/puppet-original.svg` },
      { name: "Salt", logo: `${DEVICON}/salt/salt-original.svg` },
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "Terratest", logo: `${DEVICON}/terratest/terratest-original.svg` },
      { name: "Checkov", logo: `${DEVICON}/checkov/checkov-original.svg` },
      { name: "tfsec", logo: `${DEVICON}/tfsec/tfsec-original.svg` },
      { name: "OPA", logo: `${DEVICON}/opa/opa-original.svg` },
      { name: "Sentinel", logo: `${DEVICON}/sentinel/sentinel-original.svg` },
    ],
  },
  {
    label: "State & Registry",
    items: [
      { name: "Terraform Cloud", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "S3/DynamoDB", logo: `${DEVICON}/s3dynamodb/s3dynamodb-original.svg` },
      { name: "Spacelift", logo: `${DEVICON}/spacelift/spacelift-original.svg` },
      { name: "env0", logo: `${DEVICON}/env0/env0-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "Quality Solutions",
    description:
      "Advanced features and functionalities that improve overall business operations and efficiency.",
  },
  {
    icon: TrendingUp,
    title: "CI/CD Approach",
    description:
      "Agile delivery with automated pipelines — ship smaller changes with confidence and measurable lead time.",
  },
  {
    icon: Zap,
    title: "Data Security",
    description:
      "Standard practices to keep secrets, artifacts, and environments protected at every stage of delivery.",
  },
  {
    icon: HeartHandshake,
    title: "Knowledge Transfer",
    description:
      "Runbooks, templates, and team enablement so your engineers own and extend infrastructure code long term.",
  },
];
