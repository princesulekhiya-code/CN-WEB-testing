import {
  Server,
  Cpu,
  Network,
  Shield,
  ClipboardList,
  Settings,
  Rocket,
  Layers,
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
  titleTop: "Cloud Infrastructure",
  titleBottom: "& Implementation",
  description:
    "From cloud infrastructure to data centre design — build a customized cloud that aligns to your business requirements and growth trajectory.",
  heroImage: "/images/stock/stock-6355372f4e.jpg",
  heroImageAlt: "Cloud Infrastructure & Data Center",
  topBadge: {
    icon: null as any,
    title: "Multi-Cloud",
    subtitle: "AWS, Azure, GCP",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "99.99% SLA",
    subtitle: "Enterprise uptime",
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
  headingGray: "Infrastructure",
  headingWhite: "Services",
  subtitle:
    "Complete cloud infrastructure — from data centre design to edge computing — built for security, scale, and operational efficiency.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Infrastructure",
  headingWhite: "Process",
  subtitle:
    "From requirements through operations — a structured approach to building infrastructure you can trust.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Infrastructure",
  headingWhite: "Technologies",
  subtitle:
    "Enterprise cloud compute, networking, storage, and automation platforms for resilient infrastructure.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Build Your",
  headingBottom: "Cloud Infrastructure?",
  description:
    "Share your workload requirements — we'll design a cloud infrastructure that scales with your business.",
};

export const services: ServiceOffering[] = [
  {
    icon: Server,
    title: "Cloud Data Centre Design",
    description:
      "Virtual data centre architecture with compute, storage, and networking optimized for your workload profiles and growth trajectory.",
    features: ["VPC design", "Compute sizing", "Storage tiers"],
  },
  {
    icon: Network,
    title: "Network Architecture",
    description:
      "VPC design, subnet planning, load balancing, and hybrid connectivity patterns that balance security with performance.",
    features: ["VPC/subnets", "Load balancing", "Hybrid connectivity"],
  },
  {
    icon: Layers,
    title: "Infrastructure as Code",
    description:
      "Terraform and CloudFormation modules that make infrastructure repeatable, versioned, drift-detected, and auditable.",
    features: ["Terraform modules", "Drift detection", "Version control"],
  },
  {
    icon: Shield,
    title: "Security Infrastructure",
    description:
      "Firewalls, WAF, encryption at rest and in transit, IAM policies, and security group architecture for defense in depth.",
    features: ["WAF & firewalls", "Encryption", "IAM hardening"],
  },
  {
    icon: Cpu,
    title: "Hybrid & Multi-Cloud Infrastructure",
    description:
      "Workload portability, shared services, and egress optimization across multiple cloud providers and on-prem environments.",
    features: ["Multi-cloud", "On-prem bridge", "Egress optimization"],
  },
  {
    icon: Zap,
    title: "Edge & CDN Infrastructure",
    description:
      "Global edge locations, CDN configuration, and edge compute for latency-sensitive applications and content delivery.",
    features: ["Global CDN", "Edge compute", "Latency optimization"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Requirements Gathering",
    description:
      "Workload profiles, compliance needs, performance targets, and budget constraints to shape infrastructure design.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Architecture Design",
    description:
      "Multi-AZ, multi-region architecture with network topology, security boundaries, and HA patterns documented.",
    icon: Layers,
  },
  {
    step: "03",
    title: "IaC Development",
    description:
      "Terraform modules, environment templates, and CI/CD pipelines for automated infrastructure provisioning.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Security Hardening",
    description:
      "IAM policies, encryption, network ACLs, WAF rules, and compliance baseline configuration.",
    icon: Shield,
  },
  {
    step: "05",
    title: "Provisioning & Testing",
    description:
      "Infrastructure deployment, connectivity testing, failover drills, and performance validation.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Operations Handoff",
    description:
      "Monitoring setup, runbook documentation, team training, and SLA-backed operational support.",
    icon: Server,
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
    ],
  },
  {
    label: "Compute",
    items: [
      { name: "EC2", logo: `${DEVICON}/ec2/ec2-original.svg` },
      { name: "Azure VMs", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Compute Engine", logo: `${DEVICON}/computeengine/computeengine-original.svg` },
      { name: "Lambda", logo: `${DEVICON}/lambda/lambda-original.svg` },
      { name: "Fargate", logo: `${DEVICON}/fargate/fargate-original.svg` },
      { name: "EKS", logo: `${DEVICON}/eks/eks-original.svg` },
    ],
  },
  {
    label: "Networking",
    items: [
      { name: "VPC", logo: `${DEVICON}/vpc/vpc-original.svg` },
      { name: "Azure VNet", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Cloud Interconnect", logo: `${DEVICON}/cloudinterconnect/cloudinterconnect-original.svg` },
      { name: "Direct Connect", logo: `${DEVICON}/directconnect/directconnect-original.svg` },
      { name: "ExpressRoute", logo: `${DEVICON}/expressroute/expressroute-original.svg` },
    ],
  },
  {
    label: "Storage",
    items: [
      { name: "S3", logo: `${DEVICON}/s3/s3-original.svg` },
      { name: "Azure Blob", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Cloud Storage", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "EBS", logo: `${DEVICON}/ebs/ebs-original.svg` },
      { name: "EFS", logo: `${DEVICON}/efs/efs-original.svg` },
      { name: "Glacier", logo: `${DEVICON}/glacier/glacier-original.svg` },
    ],
  },
  {
    label: "IaC & Automation",
    items: [
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "CloudFormation", logo: `${DEVICON}/cloudformation/cloudformation-original.svg` },
      { name: "Pulumi", logo: `${DEVICON}/pulumi/pulumi-original.svg` },
      { name: "Ansible", logo: `${DEVICON}/ansible/ansible-original.svg` },
      { name: "CDK", logo: `${DEVICON}/cdk/cdk-original.svg` },
    ],
  },
  {
    label: "Security",
    items: [
      { name: "AWS WAF", logo: `${DEVICON}/awswaf/awswaf-original.svg` },
      { name: "Azure Firewall", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Cloud Armor", logo: `${DEVICON}/cloudarmor/cloudarmor-original.svg` },
      { name: "KMS", logo: `${DEVICON}/kms/kms-original.svg` },
      { name: "Secrets Manager", logo: `${DEVICON}/secretsmanager/secretsmanager-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Certified Infrastructure Architects",
    description:
      "AWS, Azure, and GCP certified architects with deep networking and security expertise.",
  },
  {
    icon: Clock,
    title: "Rapid Provisioning",
    description:
      "IaC-first approach means new environments in minutes, not weeks — repeatable and auditable.",
  },
  {
    icon: Award,
    title: "Enterprise-Grade Design",
    description:
      "Multi-AZ, multi-region architectures designed for 99.99% availability and disaster resilience.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Infrastructure Support",
    description:
      "Managed services, patching, scaling, and cost optimization under SLA commitments.",
  },
];
