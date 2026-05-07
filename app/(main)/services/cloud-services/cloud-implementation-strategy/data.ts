import {
  Layers,
  Target,
  ShieldCheck,
  BarChart3,
  ClipboardList,
  Settings,
  Rocket,
  Globe,
  Award,
  HeartHandshake,
  Users,
  Clock,
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
  titleTop: "Cloud Implementation",
  titleBottom: "Strategy",
  description:
    "From cloud advisory to adoption roadmaps — guiding enterprises toward the best cloud strategy, security posture, and administration model for lasting results.",
  heroImage: "/images/stock/stock-e1f7697fb3.jpg",
  heroImageAlt: "Cloud Implementation Strategy",
  topBadge: {
    icon: null as any,
    title: "Cloud Strategy",
    subtitle: "Implementation",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "40% Savings",
    subtitle: "Cost optimized",
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
  headingGray: "Cloud Strategy",
  headingWhite: "Services",
  subtitle:
    "End-to-end cloud advisory — from readiness assessment to governance framework — so your cloud adoption starts right.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Strategy",
  headingWhite: "Process",
  subtitle:
    "A structured approach — from discovery through enablement — so your cloud strategy is actionable from day one.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Strategy Tools &",
  headingWhite: "Frameworks",
  subtitle:
    "Industry-standard assessment, architecture, and governance tools for data-driven cloud strategy.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Define Your",
  headingBottom: "Cloud Strategy?",
  description:
    "Book a strategy session — we'll assess your current footprint and deliver an actionable cloud roadmap.",
};

export const services: ServiceOffering[] = [
  {
    icon: Target,
    title: "Cloud Readiness Assessment",
    description:
      "Evaluate infrastructure, workloads, and team capabilities to determine the optimal cloud adoption path for your organization.",
    features: ["Infrastructure audit", "Skill gap analysis", "Readiness scoring"],
  },
  {
    icon: Layers,
    title: "Cloud Architecture Design",
    description:
      "Design multi-tier, secure, and scalable cloud architectures aligned to your business goals, compliance needs, and growth trajectory.",
    features: ["Reference architecture", "HA design", "Cost modeling"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Planning",
    description:
      "Build security frameworks, access controls, and compliance pipelines that satisfy regulatory requirements from day one.",
    features: ["IAM design", "Compliance mapping", "Encryption strategy"],
  },
  {
    icon: BarChart3,
    title: "TCO & ROI Analysis",
    description:
      "Model total cost of ownership, compare on-prem vs cloud scenarios, and build business cases stakeholders can act on.",
    features: ["Cost modeling", "Break-even analysis", "ROI projection"],
  },
  {
    icon: Globe,
    title: "Multi-Cloud Strategy",
    description:
      "Workload placement rules, vendor evaluation, and governance models so multi-cloud is deliberate architecture — not accidental sprawl.",
    features: ["Vendor evaluation", "Placement rules", "Governance"],
  },
  {
    icon: Settings,
    title: "Cloud Governance Framework",
    description:
      "Tagging standards, budget policies, and operational guardrails that maintain order as cloud adoption scales across teams.",
    features: ["Policy automation", "Tag standards", "Budget alerts"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery Workshop",
    description:
      "Stakeholder interviews, workload inventory, and business objective mapping to establish priorities.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Assessment & Benchmarking",
    description:
      "Technical audit, dependency mapping, and current-state benchmarking against cloud readiness criteria.",
    icon: BarChart3,
  },
  {
    step: "03",
    title: "Strategy Definition",
    description:
      "Cloud model selection, provider evaluation, and migration wave sequencing aligned to risk appetite.",
    icon: Target,
  },
  {
    step: "04",
    title: "Architecture Blueprint",
    description:
      "Landing zone design, network topology, IAM boundaries, and shared services documentation.",
    icon: Layers,
  },
  {
    step: "05",
    title: "Roadmap & Governance",
    description:
      "Phased execution plan, governance frameworks, and success metrics that keep the program on track.",
    icon: Settings,
  },
  {
    step: "06",
    title: "Enablement & Kickoff",
    description:
      "Team onboarding, tooling setup, and pilot migration to validate the strategy before full-scale execution.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Cloud Providers",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Microsoft Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Google Cloud", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Oracle Cloud", logo: `${DEVICON}/oracle/oracle-original.svg` },
      { name: "IBM Cloud", logo: `${DEVICON}/ibmcloud/ibmcloud-original.svg` },
    ],
  },
  {
    label: "Assessment Tools",
    items: [
      { name: "AWS Migration Hub", logo: `${DEVICON}/awsmigrationhub/awsmigrationhub-original.svg` },
      { name: "Azure Migrate", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "CloudHealth", logo: `${DEVICON}/cloudhealth/cloudhealth-original.svg` },
      { name: "Flexera", logo: `${DEVICON}/flexera/flexera-original.svg` },
    ],
  },
  {
    label: "Architecture",
    items: [
      { name: "Well-Architected Framework", logo: `${DEVICON}/wellarchitectedframework/wellarchitectedframework-original.svg` },
      { name: "Landing Zones", logo: `${DEVICON}/landingzones/landingzones-original.svg` },
      { name: "CAF", logo: `${DEVICON}/caf/caf-original.svg` },
      { name: "TOGAF", logo: `${DEVICON}/togaf/togaf-original.svg` },
    ],
  },
  {
    label: "Governance",
    items: [
      { name: "AWS Organizations", logo: `${DEVICON}/awsorganizations/awsorganizations-original.svg` },
      { name: "Azure Policy", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Terraform Sentinel", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "OPA", logo: `${DEVICON}/opa/opa-original.svg` },
    ],
  },
  {
    label: "Security",
    items: [
      { name: "IAM", logo: `${DEVICON}/iam/iam-original.svg` },
      { name: "GuardDuty", logo: `${DEVICON}/guardduty/guardduty-original.svg` },
      { name: "Security Hub", logo: `${DEVICON}/securityhub/securityhub-original.svg` },
      { name: "Defender for Cloud", logo: `${DEVICON}/defenderforcloud/defenderforcloud-original.svg` },
      { name: "KMS", logo: `${DEVICON}/kms/kms-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Certified Cloud Architects",
    description:
      "AWS, Azure, and GCP certified strategists who have led 100+ cloud adoption programs across industries.",
  },
  {
    icon: Award,
    title: "Vendor-Agnostic Advice",
    description:
      "Recommendations driven by your workload needs, not vendor partnerships — so you get the right fit.",
  },
  {
    icon: Clock,
    title: "Accelerated Planning",
    description: "Strategy-to-roadmap in 4-6 weeks with proven frameworks and reusable templates.",
  },
  {
    icon: HeartHandshake,
    title: "Hands-On Enablement",
    description:
      "We don't just hand over a document — we embed with your team through the first migration wave.",
  },
];
