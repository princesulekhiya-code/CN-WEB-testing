import {
  Code2,
  Globe,
  Box,
  KeyRound,
  ScrollText,
  GitBranch,
  Search,
  Shield,
  Puzzle,
  FileCheck,
  TestTube2,
  RefreshCw,
  Users,
  Clock,
  TrendingUp,
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
  titleTop: "Dev",
  titleBottom: "SecOps",
  description:
    "Security embedded in every commit—scanning, secrets, compliance checks, and guardrails that keep velocity high and risk low.",
  heroImage: "/images/stock/stock-bec6bc3726.jpg",
  heroImageAlt: "DevSecOps Security",
  topBadge: {
    icon: null as any,
    title: "DevSecOps",
    subtitle: "Security-first CI",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "Shift Left",
    subtitle: "Early detection",
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
  headingGray: "DevSecOps",
  headingWhite: "Services",
  subtitle:
    "From code to cluster—automated checks, hardened secrets, and compliance evidence built into your delivery pipeline.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our DevSecOps",
  headingWhite: "Process",
  subtitle:
    "A phased rollout from discovery to continuous hardening—so security automation sticks with your teams.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "DevSecOps Technology",
  headingWhite: "Stack",
  subtitle:
    "Representative scanners, policy engines, and secret platforms we integrate into modern CI/CD workflows.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Secure Your",
  headingBottom: "Pipeline?",
  description:
    "We will help you integrate scanning, secrets, and policy checks without turning releases into bottlenecks.",
};

export const services: ServiceOffering[] = [
  {
    icon: Code2,
    title: "SAST & Code Security Analysis",
    description:
      "Static analysis integrated into PR workflows to catch injection risks, unsafe dependencies, and policy violations before merge.",
    features: ["PR gates", "Policy packs", "Secret detection"],
  },
  {
    icon: Globe,
    title: "DAST & Runtime Security Testing",
    description:
      "Authenticated scanning and runtime probes that validate OWASP-style risks against staging environments that mirror production.",
    features: ["Auth flows", "API coverage", "Risk scoring"],
  },
  {
    icon: Box,
    title: "Container Image Scanning",
    description:
      "CVE and misconfiguration checks in registries and CI with SBOM generation, base-image pinning, and remediation guidance.",
    features: ["SBOMs", "CVE triage", "Base-image policy"],
  },
  {
    icon: KeyRound,
    title: "Secrets Management",
    description:
      "Centralized secret distribution, rotation, and least-privilege access patterns for apps, pipelines, and Kubernetes workloads.",
    features: ["Dynamic secrets", "Rotation", "K8s integration"],
  },
  {
    icon: ScrollText,
    title: "Compliance-as-Code",
    description:
      "Automated guardrails and evidence collection mapped to frameworks—so audits become continuous checks, not fire drills.",
    features: ["Policy libraries", "Evidence exports", "Drift detection"],
  },
  {
    icon: GitBranch,
    title: "Security Pipeline Integration",
    description:
      "Unified DevSecOps stages with quality gates, approvals, and telemetry so security signals are visible to dev and security teams.",
    features: ["Quality gates", "Approvals", "Audit trails"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Threat & Control Mapping",
    description:
      "Align pipelines to your risk profile, regulatory obligations, and release cadence so controls are proportional—not blocking.",
    icon: Search,
  },
  {
    step: "02",
    title: "Secure Pipeline Design",
    description:
      "Define stages for SAST, SCA, DAST, container scanning, and signing with clear pass/fail criteria and override workflows.",
    icon: Shield,
  },
  {
    step: "03",
    title: "Tooling Integration",
    description:
      "Wire scanners, vaults, and policy engines into CI/CD with fast feedback loops and developer-friendly remediation links.",
    icon: Puzzle,
  },
  {
    step: "04",
    title: "Policy-as-Code Rollout",
    description:
      "Implement OPA/Sentinel-style checks for infrastructure and Kubernetes with versioned policies and staged enforcement.",
    icon: FileCheck,
  },
  {
    step: "05",
    title: "Validation & Purple-Team Drills",
    description:
      "Exercise pipelines with representative attacks, misconfigurations, and dependency scenarios to prove controls work end-to-end.",
    icon: TestTube2,
  },
  {
    step: "06",
    title: "Continuous Hardening",
    description:
      "Tune rules, reduce false positives, and expand coverage as new services ship—keeping security automation maintainable.",
    icon: RefreshCw,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Code Analysis",
    items: [
      { name: "SonarQube", logo: `${DEVICON}/sonarqube/sonarqube-original.svg` },
      { name: "Snyk", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Checkmarx", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Semgrep", logo: `${DEVICON}/semgrep/semgrep-original.svg` },
      { name: "CodeQL", logo: `${DEVICON}/codeql/codeql-original.svg` },
    ],
  },
  {
    label: "Container Security",
    items: [
      { name: "Trivy", logo: `${DEVICON}/trivy/trivy-original.svg` },
      { name: "Aqua", logo: `${DEVICON}/aqua/aqua-original.svg` },
      { name: "Twistlock", logo: `${DEVICON}/twistlock/twistlock-original.svg` },
      { name: "Grype", logo: `${DEVICON}/grype/grype-original.svg` },
      { name: "Anchore", logo: `${DEVICON}/anchore/anchore-original.svg` },
    ],
  },
  {
    label: "Secrets",
    items: [
      { name: "HashiCorp Vault", logo: `${DEVICON}/vault/vault-original.svg` },
      { name: "AWS Secrets Manager", logo: `${DEVICON}/awssecretsmanager/awssecretsmanager-original.svg` },
      { name: "Azure Key Vault", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "SOPS", logo: `${DEVICON}/sops/sops-original.svg` },
    ],
  },
  {
    label: "Compliance",
    items: [
      { name: "OPA", logo: `${DEVICON}/opa/opa-original.svg` },
      { name: "Sentinel", logo: `${DEVICON}/sentinel/sentinel-original.svg` },
      { name: "Checkov", logo: `${DEVICON}/checkov/checkov-original.svg` },
      { name: "kube-bench", logo: `${DEVICON}/kubebench/kubebench-original.svg` },
      { name: "Falco", logo: `${DEVICON}/falco/falco-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Security + Delivery Mindset",
    description:
      "We design controls developers can live with—fast feedback, clear fixes, and guardrails that scale across teams.",
  },
  {
    icon: Clock,
    title: "Shift-Left Without Slowdowns",
    description:
      "Parallel scans, caching, and risk-based gating keep pipelines quick while still catching critical issues early.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Risk Reduction",
    description:
      "Dashboards for vulnerability aging, policy violations, and pipeline health so leadership sees progress—not guesswork.",
  },
  {
    icon: HeartHandshake,
    title: "Playbooks Teams Actually Use",
    description:
      "Runbooks for exceptions, rotations, and incident hooks so security automation stays operable after handover.",
  },
];
