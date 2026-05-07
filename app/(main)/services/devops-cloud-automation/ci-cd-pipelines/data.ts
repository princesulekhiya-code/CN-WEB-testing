import {
  Workflow,
  FlaskConical,
  SplitSquareVertical,
  Tag,
  Layers,
  Gauge,
  GitBranch,
  Target,
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
  titleTop: "CI/CD Pipeline",
  titleBottom: "Engineering",
  description:
    "Design and operate build-test-deploy pipelines with strong gates, progressive delivery, and observability so every release is boring — in the best way.",
  heroImage: "/images/stock/stock-a41ee3d1d8.jpg",
  heroImageAlt: "CI/CD Pipeline Automation",
  topBadge: {
    icon: null as any,
    title: "CI/CD Ready",
    subtitle: "Automated builds",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "10x Faster",
    subtitle: "Deploy frequency",
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
    "Six focused capabilities covering pipeline design, testing automation, progressive delivery, and performance.",
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
  headingTop: "Ready to Automate Your",
  headingBottom: "Delivery Pipeline?",
  description:
    "Partner with us to build pipelines that are fast, safe, and fully owned by your team — from first commit to production.",
};

export const services: ServiceOffering[] = [
  {
    icon: Workflow,
    title: "Pipeline Architecture Design",
    description:
      "End-to-end delivery design with quality gates, environments, and rollback paths aligned to your risk profile.",
    features: ["Stage modeling", "Promotion rules", "Rollback design"],
  },
  {
    icon: FlaskConical,
    title: "Automated Testing Integration",
    description:
      "Unit, contract, integration, and performance checks wired into the pipeline so regressions never reach production.",
    features: ["Test parallelization", "Flake detection", "Quality metrics"],
  },
  {
    icon: SplitSquareVertical,
    title: "Blue-Green & Canary Deployments",
    description:
      "Progressive delivery patterns that limit blast radius while giving fast feedback on real traffic.",
    features: ["Traffic shifting", "Health probes", "Auto-promote/abort"],
  },
  {
    icon: Tag,
    title: "Release Management & Versioning",
    description:
      "Semantic versioning, changelogs, and release trains that keep engineering, support, and compliance aligned.",
    features: ["Release notes", "Artifact pinning", "Hotfix paths"],
  },
  {
    icon: Layers,
    title: "Multi-Environment Orchestration",
    description:
      "Consistent dev, staging, and prod flows with secrets separation and configuration that stays auditable.",
    features: ["Env parity", "Secret hygiene", "Drift alerts"],
  },
  {
    icon: Gauge,
    title: "Pipeline Performance Optimization",
    description:
      "Cache strategy, build graph tuning, and runner sizing to cut minutes off every commit without sacrificing safety.",
    features: ["Build caching", "Sharding jobs", "Cost visibility"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Delivery Assessment",
    description:
      "Map your current toolchain, lead times, failure modes, and compliance needs to define the target pipeline.",
    icon: Target,
  },
  {
    step: "02",
    title: "Pipeline Blueprint",
    description: "Design stages, approvals, testing tiers, and deployment strategies matched to your architecture.",
    icon: GitBranch,
  },
  {
    step: "03",
    title: "Implementation",
    description: "Build workflows, reusable actions, and integrations across SCM, registries, and runtime targets.",
    icon: Plug,
  },
  {
    step: "04",
    title: "Hardening & Testing",
    description: "Load realistic scenarios, failure injections, and rollback drills before production traffic.",
    icon: RefreshCw,
  },
  {
    step: "05",
    title: "Governance",
    description: "Add policy checks, audit trails, and access controls so pipelines stay secure as they scale.",
    icon: Scale,
  },
  {
    step: "06",
    title: "Launch & Tune",
    description: "Roll out with observability, then iterate on speed, reliability, and developer experience.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "CI/CD",
    items: [
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "Jenkins", logo: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "GitLab CI", logo: `${DEVICON}/gitlab/gitlab-original.svg` },
      { name: "CircleCI", logo: `${DEVICON}/circleci/circleci-plain.svg` },
      { name: "Azure Pipelines", logo: `${DEVICON}/azure/azure-original.svg` },
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "Jest", logo: `${DEVICON}/jest/jest-plain.svg` },
      { name: "Cypress", logo: `${DEVICON}/cypressio/cypressio-original.svg` },
      { name: "Selenium", logo: `${DEVICON}/selenium/selenium-original.svg` },
      { name: "k6", logo: `${DEVICON}/k6/k6-original.svg` },
      { name: "Artillery", logo: `${DEVICON}/artillery/artillery-original.svg` },
    ],
  },
  {
    label: "Deployment",
    items: [
      { name: "ArgoCD", logo: `${DEVICON}/argocd/argocd-original.svg` },
      { name: "Spinnaker", logo: `${DEVICON}/spinnaker/spinnaker-original.svg` },
      { name: "Flux", logo: `${DEVICON}/flux/flux-original.svg` },
      { name: "Octopus Deploy", logo: `${DEVICON}/octopusdeploy/octopusdeploy-original.svg` },
    ],
  },
  {
    label: "Artifacts",
    items: [
      { name: "Docker Hub", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "ECR", logo: `${DEVICON}/ecr/ecr-original.svg` },
      { name: "GCR", logo: `${DEVICON}/gcr/gcr-original.svg` },
      { name: "Artifactory", logo: `${DEVICON}/artifactory/artifactory-original.svg` },
      { name: "Nexus", logo: `${DEVICON}/nexus/nexus-original.svg` },
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
      "Runbooks, templates, and team enablement so your engineers own and extend the pipeline long term.",
  },
];
