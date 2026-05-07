import {
  CloudCog,
  Shield,
  BarChart3,
  RefreshCw,
  ClipboardList,
  Settings,
  Rocket,
  Gauge,
  Zap,
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
  titleTop: "Cloud Management",
  titleBottom: "Services",
  description:
    "Forecast reporting, disaster recovery, automation, and DevOps that protect your cloud assets against downtime and keep costs predictable.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "Cloud Management Monitoring Dashboard",
  topBadge: {
    icon: null as any,
    title: "Managed Cloud",
    subtitle: "24/7 operations",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "Proactive",
    subtitle: "Monitoring & alerts",
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
  headingGray: "Management",
  headingWhite: "Services",
  subtitle:
    "Comprehensive cloud management — from 24/7 operations to FinOps and compliance — so your team focuses on product, not infrastructure.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Management",
  headingWhite: "Process",
  subtitle:
    "Structured operational excellence — assess, automate, secure, optimize, and continuously improve.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Management Tools &",
  headingWhite: "Platforms",
  subtitle:
    "Enterprise-grade monitoring, automation, and FinOps tooling for full cloud lifecycle management.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready for Worry-Free",
  headingBottom: "Cloud Operations?",
  description:
    "Let our ops team take the burden off your shoulders — book a review of your current cloud environment.",
};

export const services: ServiceOffering[] = [
  {
    icon: CloudCog,
    title: "Cloud Operations Management",
    description:
      "24/7 monitoring, incident management, and operational runbooks that keep your cloud environment healthy and performant.",
    features: ["24/7 monitoring", "Incident mgmt", "Runbooks"],
  },
  {
    icon: Shield,
    title: "Disaster Recovery & Backup",
    description:
      "Automated backup schedules, cross-region replication, and tested DR plans that meet your RPO/RTO requirements.",
    features: ["Auto backups", "Cross-region DR", "RPO/RTO compliance"],
  },
  {
    icon: BarChart3,
    title: "Cost Management & FinOps",
    description:
      "Budget tracking, waste detection, reserved instance planning, and monthly cost reviews to keep cloud spend predictable.",
    features: ["Budget alerts", "Waste detection", "RI planning"],
  },
  {
    icon: Zap,
    title: "Automation & DevOps Integration",
    description:
      "Infrastructure as code, automated patching, and self-healing workflows that reduce manual toil and human error.",
    features: ["IaC pipelines", "Auto-patching", "Self-healing"],
  },
  {
    icon: Gauge,
    title: "Performance & Capacity Planning",
    description:
      "Trend analysis, rightsize recommendations, and capacity forecasting so infrastructure scales ahead of demand.",
    features: ["Trend reporting", "Rightsizing", "Forecasting"],
  },
  {
    icon: RefreshCw,
    title: "Compliance & Audit Management",
    description:
      "Continuous compliance monitoring, audit trail management, and remediation workflows for regulated industries.",
    features: ["Continuous audit", "Policy enforcement", "Remediation"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Environment Assessment",
    description:
      "Baseline current cloud environment health, security posture, and cost efficiency metrics.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Management Framework",
    description:
      "Define monitoring, alerting, escalation, and governance policies tailored to your org.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Automation Setup",
    description:
      "Implement IaC, auto-scaling, backup automation, and self-healing infrastructure patterns.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Security Hardening",
    description:
      "Baseline security controls, patch management, and compliance pipeline configuration.",
    icon: Shield,
  },
  {
    step: "05",
    title: "Optimization Cycle",
    description:
      "Monthly rightsizing, cost reviews, and performance tuning based on real usage data.",
    icon: Gauge,
  },
  {
    step: "06",
    title: "Continuous Improvement",
    description:
      "Quarterly reviews, DR testing, and roadmap updates to evolve with your business needs.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Monitoring",
    items: [
      { name: "CloudWatch", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure Monitor", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Stackdriver", logo: `${DEVICON}/stackdriver/stackdriver-original.svg` },
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "PagerDuty", logo: `${DEVICON}/pagerduty/pagerduty-original.svg` },
    ],
  },
  {
    label: "Automation",
    items: [
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "Ansible", logo: `${DEVICON}/ansible/ansible-original.svg` },
      { name: "AWS Systems Manager", logo: `${DEVICON}/awssystemsmanager/awssystemsmanager-original.svg` },
      { name: "Azure Automation", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Puppet", logo: `${DEVICON}/puppet/puppet-original.svg` },
    ],
  },
  {
    label: "Backup & DR",
    items: [
      { name: "AWS Backup", logo: `${DEVICON}/awsbackup/awsbackup-original.svg` },
      { name: "Azure Site Recovery", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Veeam", logo: `${DEVICON}/veeam/veeam-original.svg` },
      { name: "Commvault", logo: `${DEVICON}/commvault/commvault-original.svg` },
      { name: "Zerto", logo: `${DEVICON}/zerto/zerto-original.svg` },
    ],
  },
  {
    label: "FinOps",
    items: [
      { name: "AWS Cost Explorer", logo: `${DEVICON}/awscostexplorer/awscostexplorer-original.svg` },
      { name: "Azure Cost Management", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "CloudHealth", logo: `${DEVICON}/cloudhealth/cloudhealth-original.svg` },
      { name: "Spot.io", logo: `${DEVICON}/spotio/spotio-original.svg` },
    ],
  },
  {
    label: "Security",
    items: [
      { name: "GuardDuty", logo: `${DEVICON}/guardduty/guardduty-original.svg` },
      { name: "Security Hub", logo: `${DEVICON}/securityhub/securityhub-original.svg` },
      { name: "Defender for Cloud", logo: `${DEVICON}/defenderforcloud/defenderforcloud-original.svg` },
      { name: "Prisma Cloud", logo: `${DEVICON}/prisma/prisma-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Dedicated Cloud Ops Team",
    description:
      "A named team that knows your environment — not a rotating helpdesk with ticket queues.",
  },
  {
    icon: Clock,
    title: "24/7 Proactive Monitoring",
    description:
      "Issues detected and resolved before they impact users — not just alerts that pile up.",
  },
  {
    icon: Award,
    title: "99.9% Uptime Track Record",
    description:
      "Proven operational excellence with SLA-backed availability across production workloads.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Reporting",
    description:
      "Monthly executive reports covering uptime, cost trends, security posture, and improvement roadmap.",
  },
];
