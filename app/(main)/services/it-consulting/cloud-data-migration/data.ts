import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Cloud, Database, Server, HardDrive, RefreshCw, ArrowUpDown, Settings, BarChart3, Layers, Rocket, Users, Clock, HeartHandshake, TrendingUp } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/it-consulting",
  backLabel: "Back to IT Consulting",
  titleTop: "Cloud & Data",
  titleBottom: "Migration Services",
  description: "Choose the right data migration strategy with expert guidance on cloud platform selection, cost analysis, and seamless\r\n                migration execution with minimal business disruption.",
  heroImage: "/images/stock/stock-d2cb4997ca.jpg",
  heroImageAlt: "Cloud & Data Migration",
  topBadge: { icon: null as any, title: "Zero Downtime", subtitle: "Cloud migration", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Data Safe", subtitle: "Full backup", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Migrations Delivered" },
  { value: 5, suffix: "", label: "Cloud Ecosystems" },
  { value: 99, suffix: "%", label: "Data Integrity" },
  { value: 6, suffix: "", label: "Phased Methodology" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "End-to-end migration services from strategy through optimization — ensuring your cloud journey delivers speed, savings, and\r\n            scalability. Cloud &amp; data migration services covering lift-and-shift, modernization, and hybrid setups." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Migration Process", subtitle: "A proven six-phase migration methodology that minimizes risk and ensures successful cloud adoption at every step." };
export const techHeading: ServicePageSectionProps = { headingGray: "Migration", headingWhite: "Technologies", subtitle: "Enterprise-grade cloud platforms, migration tools, and infrastructure-as-code solutions for seamless transitions." };
export const ctaProps: CTAProps = { headingTop: "Ready to Move to", headingBottom: "The Cloud?", description: "Get a free cloud migration assessment. We&apos;ll evaluate your workloads, estimate costs, and build a migration plan tailored\r\n          to your business." };

export const services: ServiceOffering[] = [{
    icon: Cloud,
    title: "Cloud Strategy & Assessment",
    description:
      "Evaluate your workloads, applications, and data to determine the optimal cloud strategy — public, private, hybrid, or multi-cloud — aligned with your business goals.",
    features: ["Workload assessment", "Cloud readiness", "TCO analysis"],
  },
  {
    icon: ArrowUpDown,
    title: "Lift & Shift Migration",
    description:
      "Rapid migration of on-premise workloads to the cloud with minimal changes, optimizing for speed while maintaining application stability and data integrity.",
    features: ["Rapid migration", "Minimal downtime", "Data integrity"],
  },
  {
    icon: RefreshCw,
    title: "Re-Platform & Modernize",
    description:
      "Migrate applications with optimizations — containerization, managed services, and cloud-native patterns — to fully leverage cloud capabilities and cost efficiencies.",
    features: ["Containerization", "Cloud-native", "Service optimization"],
  },
  {
    icon: Database,
    title: "Database Migration",
    description:
      "Migrate databases across platforms — Oracle to PostgreSQL, SQL Server to Aurora, on-prem to cloud-managed — with zero data loss and minimal application downtime.",
    features: ["Cross-platform", "Zero data loss", "Schema conversion"],
  },
  {
    icon: HardDrive,
    title: "Data Lake & Warehouse Migration",
    description:
      "Migrate data warehouses and build modern data lakes on cloud platforms with ETL pipeline redesign, data quality validation, and analytics continuity.",
    features: ["ETL redesign", "Data lake setup", "Analytics continuity"],
  },
  {
    icon: Server,
    title: "Hybrid & Multi-Cloud Setup",
    description:
      "Design and implement hybrid and multi-cloud architectures that optimize cost, performance, and resilience across AWS, Azure, and GCP environments.",
    features: ["Multi-cloud design", "Cost optimization", "Resilience planning"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Discovery & Planning",
    description:
      "Inventory applications, dependencies, and data — then build a migration plan with priorities, timelines, and risk mitigation strategies.",
    icon: Settings,
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Design target cloud architecture with networking, security, IAM, and cost optimization baked in from the start.",
    icon: Cloud,
  },
  {
    step: "03",
    title: "Proof of Concept",
    description:
      "Migrate a pilot workload to validate architecture decisions, performance benchmarks, and operational procedures before full migration.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Migration Execution",
    description:
      "Phased migration with automated tools, data sync, and cutover orchestration — each wave tested and validated before proceeding.",
    icon: ArrowUpDown,
  },
  {
    step: "05",
    title: "Validation & Testing",
    description: "Comprehensive functional, performance, and security testing post-migration to ensure everything works as expected in the cloud.",
    icon: BarChart3,
  },
  {
    step: "06",
    title: "Optimization & Handover",
    description:
      "Right-size resources, implement auto-scaling, and transfer operational knowledge to your team with documentation and training.",
    icon: Layers,
  },];

export const techCategories: TechCategory[] = [{
    label: "Cloud Platforms",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Google Cloud", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Oracle Cloud", logo: `${DEVICON}/oracle/oracle-original.svg` },
      { name: "IBM Cloud", logo: `${DEVICON}/ibm/ibm-original.svg` },
    ],
  },
  {
    label: "Migration Tools",
    items: [
      { name: "AWS Migration Hub", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Azure Migrate", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "CloudEndure", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Carbonite", logo: `${DEVICON}/docker/docker-original.svg` },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "Aurora", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Cloud SQL", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` },
      { name: "Cosmos DB", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "BigQuery", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "CloudFormation", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Pulumi", logo: `${DEVICON}/pulumi/pulumi-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    ],
  },
  {
    label: "Data Pipeline",
    items: [
      { name: "AWS Glue", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Azure Data Factory", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Airflow", logo: `${DEVICON}/apacheairflow/apacheairflow-original.svg` },
      { name: "dbt", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Fivetran", logo: `${DEVICON}/github/github-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Users,
    title: "Certified Cloud Architects",
    description:
      "AWS, Azure, and GCP certified architects with 100+ successful migrations across industries from startups to Fortune 500 enterprises.",
  },
  {
    icon: Clock,
    title: "Minimal Downtime",
    description:
      "Migration methodologies designed for near-zero downtime with parallel run strategies, data sync, and automated rollback capabilities.",
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization Focus",
    description:
      "Every migration plan includes cost analysis, right-sizing recommendations, and reserved instance strategies to maximize cloud ROI from day one.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description:
      "From strategy through post-migration optimization — we stay engaged until your team is fully operational and confident in the cloud.",
  },];
