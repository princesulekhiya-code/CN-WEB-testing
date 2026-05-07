import {
  Settings,
  GitMerge,
  Rocket,
  Shield,
  ClipboardList,
  Layers,
  Monitor,
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
  titleTop: "DevOps As",
  titleBottom: "A Service",
  description:
    "Enhance performance, improve efficiency, and increase ROI through CI/CD pipelines, infrastructure as code, and automated delivery workflows designed for velocity.",
  heroImage: "/images/stock/stock-e8282bdf05.jpg",
  heroImageAlt: "DevOps CI/CD Pipeline Automation",
  topBadge: {
    icon: null as any,
    title: "DevOps Team",
    subtitle: "On-demand",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "10x Faster",
    subtitle: "CI/CD automation",
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
  headingGray: "DevOps",
  headingWhite: "Services",
  subtitle:
    "End-to-end DevOps — from pipeline design to observability — so your engineering team ships faster with confidence.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our DevOps",
  headingWhite: "Process",
  subtitle:
    "A structured approach — assess, automate, secure, observe, and enable — so DevOps transforms delivery, not just tooling.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "DevOps Tools &",
  headingWhite: "Platforms",
  subtitle:
    "Industry-leading CI/CD, IaC, container, and observability tools for modern software delivery.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Accelerate Your",
  headingBottom: "Software Delivery?",
  description:
    "Book a DevOps assessment — we'll audit your pipelines and deliver a roadmap for faster, safer releases.",
};

export const services: ServiceOffering[] = [
  {
    icon: GitMerge,
    title: "CI/CD Pipeline Design",
    description:
      "End-to-end continuous integration and delivery pipelines that automate build, test, and deployment workflows for faster releases.",
    features: ["Pipeline design", "Multi-env deploys", "Rollback safety"],
  },
  {
    icon: Layers,
    title: "Infrastructure as Code",
    description:
      "Terraform, CloudFormation, and Pulumi modules that make infrastructure repeatable, versioned, and auditable across environments.",
    features: ["Terraform", "CloudFormation", "Pulumi"],
  },
  {
    icon: Settings,
    title: "Configuration Management",
    description:
      "Ansible, Chef, and Puppet playbooks that enforce consistent server configurations and eliminate configuration drift.",
    features: ["Ansible", "Drift detection", "Idempotent runs"],
  },
  {
    icon: Monitor,
    title: "Monitoring & Observability",
    description:
      "Metrics, logs, and traces unified in a single pane — with alerting and dashboards tuned to your SLOs.",
    features: ["Metrics & logs", "Distributed tracing", "SLO tracking"],
  },
  {
    icon: Shield,
    title: "DevSecOps Integration",
    description:
      "Security scanning, vulnerability management, and compliance checks embedded directly into CI/CD pipelines.",
    features: ["SAST/DAST", "Container scanning", "Policy gates"],
  },
  {
    icon: Rocket,
    title: "Release Engineering",
    description:
      "Blue-green, canary, and feature-flag release strategies that de-risk deployments and enable instant rollback.",
    features: ["Blue-green", "Canary releases", "Feature flags"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Current-State Assessment",
    description:
      "Audit existing build, test, and deployment workflows to identify bottlenecks and manual toil.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Pipeline Architecture",
    description:
      "Design CI/CD topology, branching strategy, environment promotion, and rollback mechanisms.",
    icon: GitMerge,
  },
  {
    step: "03",
    title: "IaC & Automation",
    description:
      "Codify infrastructure, implement configuration management, and automate environment provisioning.",
    icon: Layers,
  },
  {
    step: "04",
    title: "Security Integration",
    description:
      "Embed SAST, DAST, dependency scanning, and policy gates into the delivery pipeline.",
    icon: Shield,
  },
  {
    step: "05",
    title: "Observability Setup",
    description:
      "Instrument applications, configure dashboards, define SLOs, and set up alert routing.",
    icon: Monitor,
  },
  {
    step: "06",
    title: "Team Enablement",
    description:
      "Documentation, runbooks, and hands-on training so your team owns the pipeline confidently.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "CI/CD",
    items: [
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "GitLab CI", logo: `${DEVICON}/gitlab/gitlab-original.svg` },
      { name: "Jenkins", logo: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "CircleCI", logo: `${DEVICON}/circleci/circleci-plain.svg` },
      { name: "ArgoCD", logo: `${DEVICON}/argocd/argocd-original.svg` },
      { name: "Tekton", logo: `${DEVICON}/tekton/tekton-original.svg` },
    ],
  },
  {
    label: "IaC",
    items: [
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "CloudFormation", logo: `${DEVICON}/cloudformation/cloudformation-original.svg` },
      { name: "Pulumi", logo: `${DEVICON}/pulumi/pulumi-original.svg` },
      { name: "Bicep", logo: `${DEVICON}/bicep/bicep-original.svg` },
      { name: "CDK", logo: `${DEVICON}/cdk/cdk-original.svg` },
    ],
  },
  {
    label: "Containers",
    items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Helm", logo: `${DEVICON}/helm/helm-original.svg` },
      { name: "Kustomize", logo: `${DEVICON}/kustomize/kustomize-original.svg` },
      { name: "Skaffold", logo: `${DEVICON}/skaffold/skaffold-original.svg` },
    ],
  },
  {
    label: "Config Management",
    items: [
      { name: "Ansible", logo: `${DEVICON}/ansible/ansible-original.svg` },
      { name: "Chef", logo: `${DEVICON}/chef/chef-original.svg` },
      { name: "Puppet", logo: `${DEVICON}/puppet/puppet-original.svg` },
      { name: "SaltStack", logo: `${DEVICON}/saltstack/saltstack-original.svg` },
    ],
  },
  {
    label: "Observability",
    items: [
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "Prometheus", logo: `${DEVICON}/prometheus/prometheus-original.svg` },
      { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` },
      { name: "ELK Stack", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
      { name: "Jaeger", logo: `${DEVICON}/jaeger/jaeger-original.svg` },
    ],
  },
  {
    label: "Security",
    items: [
      { name: "Snyk", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Trivy", logo: `${DEVICON}/trivy/trivy-original.svg` },
      { name: "SonarQube", logo: `${DEVICON}/sonarqube/sonarqube-original.svg` },
      { name: "Checkov", logo: `${DEVICON}/checkov/checkov-original.svg` },
      { name: "OPA", logo: `${DEVICON}/opa/opa-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Senior DevOps Engineers",
    description:
      "Certified engineers with deep experience across AWS, Azure, GCP, and hybrid environments.",
  },
  {
    icon: Clock,
    title: "Faster Release Cycles",
    description:
      "Reduce deployment lead time from weeks to hours with automated, repeatable pipelines.",
  },
  {
    icon: Award,
    title: "Security-First DevOps",
    description: "DevSecOps embedded from day one — not bolted on as an afterthought.",
  },
  {
    icon: HeartHandshake,
    title: "Knowledge Transfer",
    description:
      "We build pipelines your team can own — with documentation, runbooks, and hands-on training.",
  },
];
