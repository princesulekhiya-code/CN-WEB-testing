import {
  Globe,
  Database,
  Server,
  Rocket,
  ClipboardList,
  Settings,
  Shield,
  Layers,
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
  titleTop: "Cloud Migration",
  titleBottom: "Services",
  description:
    "Faster, cost-effective transitions to cloud without impacting your business — partnering with leading public cloud providers for seamless migrations.",
  heroImage: "/images/stock/stock-82e21f8d76.jpg",
  heroImageAlt: "Cloud Migration & Data Transfer",
  topBadge: {
    icon: null as any,
    title: "Zero Downtime",
    subtitle: "Migration",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "100+ Migrated",
    subtitle: "Enterprise apps",
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
  headingGray: "Migration",
  headingWhite: "Services",
  subtitle:
    "Every migration strategy covered — from lift-and-shift to full refactoring — with data integrity and compliance built in.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Migration",
  headingWhite: "Process",
  subtitle:
    "Proven migration waves — discover, prepare, pilot, execute, validate, optimize — for zero-surprise cloud transitions.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Migration Tools &",
  headingWhite: "Platforms",
  subtitle:
    "Industry-standard migration, database, and validation tools for safe, repeatable cloud transitions.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Migrate to",
  headingBottom: "The Cloud?",
  description:
    "Bring your workload inventory — we'll deliver a migration plan with wave sequencing, timelines, and cost projections.",
};

export const services: ServiceOffering[] = [
  {
    icon: Globe,
    title: "Lift & Shift Migration",
    description:
      "Rapid rehosting of workloads to cloud with minimal changes — ideal for quick wins and meeting compliance deadlines.",
    features: ["Rapid migration", "Minimal rework", "Deadline-driven"],
  },
  {
    icon: Layers,
    title: "Re-Platforming",
    description:
      "Move to managed cloud services with targeted optimizations — better performance and lower ops burden without full re-architecture.",
    features: ["Managed services", "Targeted tuning", "Lower ops cost"],
  },
  {
    icon: Settings,
    title: "Application Refactoring",
    description:
      "Decompose monoliths into cloud-native microservices for maximum scalability, resilience, and deployment velocity.",
    features: ["Microservices", "Cloud-native", "API-first"],
  },
  {
    icon: Database,
    title: "Database Migration",
    description:
      "Migrate on-prem databases to managed cloud databases with zero data loss, minimal downtime, and validated integrity.",
    features: ["Zero data loss", "Schema migration", "Integrity checks"],
  },
  {
    icon: Server,
    title: "Data Centre Exit",
    description:
      "Full data centre decommissioning with phased migration waves, rehearsed cutovers, and rollback plans.",
    features: ["Phased waves", "Rehearsed cutover", "Rollback plans"],
  },
  {
    icon: Shield,
    title: "Compliance-First Migration",
    description:
      "Migrations designed for regulated industries — HIPAA, PCI-DSS, SOC 2, GDPR compliance maintained throughout.",
    features: ["HIPAA/PCI", "SOC 2/GDPR", "Audit trails"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description:
      "Workload inventory, dependency mapping, and migration strategy classification (6 Rs) for every application.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Landing Zone Setup",
    description:
      "Accounts, networking, IAM, security baselines, and shared services provisioned before any workloads move.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Pilot Migration",
    description:
      "Migrate low-risk workloads first to validate tooling, processes, and runbooks before scaling.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Wave Execution",
    description:
      "Phased migration waves with rehearsed cutovers, data sync validation, and stakeholder signoff.",
    icon: Globe,
  },
  {
    step: "05",
    title: "Validation & Testing",
    description:
      "Functional, performance, and security testing of migrated workloads against pre-migration baselines.",
    icon: Shield,
  },
  {
    step: "06",
    title: "Optimization & Handoff",
    description:
      "Rightsizing, cost optimization, and operational runbook handoff to your team or managed services.",
    icon: Settings,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Migration Tools",
    items: [
      { name: "AWS Migration Hub", logo: `${DEVICON}/awsmigrationhub/awsmigrationhub-original.svg` },
      { name: "Azure Migrate", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "CloudEndure", logo: `${DEVICON}/cloudendure/cloudendure-original.svg` },
      { name: "Google Migrate", logo: `${DEVICON}/google/google-original.svg` },
    ],
  },
  {
    label: "Database Migration",
    items: [
      { name: "AWS DMS", logo: `${DEVICON}/awsdms/awsdms-original.svg` },
      { name: "Azure DMS", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "pgLoader", logo: `${DEVICON}/pgloader/pgloader-original.svg` },
      { name: "Flyway", logo: `${DEVICON}/flyway/flyway-original.svg` },
      { name: "Liquibase", logo: `${DEVICON}/liquibase/liquibase-original.svg` },
    ],
  },
  {
    label: "IaC & Automation",
    items: [
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "CloudFormation", logo: `${DEVICON}/cloudformation/cloudformation-original.svg` },
      { name: "Ansible", logo: `${DEVICON}/ansible/ansible-original.svg` },
      { name: "Pulumi", logo: `${DEVICON}/pulumi/pulumi-original.svg` },
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "CloudWatch", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure Monitor", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Lighthouse", logo: `${DEVICON}/google/google-original.svg` },
      { name: "JMeter", logo: `${DEVICON}/jmeter/jmeter-original.svg` },
      { name: "k6", logo: `${DEVICON}/k6/k6-original.svg` },
    ],
  },
  {
    label: "Security",
    items: [
      { name: "AWS Config", logo: `${DEVICON}/awsconfig/awsconfig-original.svg` },
      { name: "Security Hub", logo: `${DEVICON}/securityhub/securityhub-original.svg` },
      { name: "Azure Policy", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Prisma Cloud", logo: `${DEVICON}/prisma/prisma-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Experienced Migration Team",
    description: "100+ migrations completed across AWS, Azure, and GCP with zero data loss.",
  },
  {
    icon: Clock,
    title: "Minimal Downtime",
    description:
      "Rehearsed cutovers and blue-green strategies keep business disruption under 30 minutes.",
  },
  {
    icon: Award,
    title: "Proven Methodology",
    description:
      "Battle-tested 6R framework with templates, checklists, and automation for repeatable success.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Migration Support",
    description:
      "30-day hypercare, optimization pass, and operational handoff included in every engagement.",
  },
];
