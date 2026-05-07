import { BarChart3, Box, Building2, Clock, CreditCard, Factory, Gamepad2, GitBranch, GraduationCap, HeartHandshake, Layers, Rocket, Server, Settings, Shield, ShoppingCart, Stethoscope, TrendingUp, Truck, Users, Wrench, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps, WhyNeedProps,} from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to services",
  titleTop: "DevOps & Cloud",
  titleBottom: "Automation",
  description: "Architect resilient CI/CD pipelines, container-orchestrated deployments, and self-healing infrastructure — so your engineering team ships faster with fewer incidents and full confidence.",
  heroImage: "/images/stock/stock-355399787b.jpg",
  heroImageAlt: "DevOps and cloud automation",
  topBadge: { icon: null as any, title: "CI/CD", subtitle: "Fully automated", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "10x Deploy", subtitle: "Faster releases", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Comprehensive solutions tailored to your business needs." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A repeatable, engineer-proven framework that ensures quality, transparency, and on-time delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built with", headingWhite: "Modern Tools", subtitle: "Industry-leading tools and frameworks powering our solutions." };
export const ctaProps: CTAProps = { headingTop: "Ship Faster,", headingBottom: "Sleep Better", description: "Let us automate your infrastructure and build deployment pipelines that your team will love — faster releases, fewer failures, lower costs." };

export const services: ServiceOffering[] = [
  { icon: GitBranch, title: "CI/CD Pipeline Engineering", description: "End-to-end automated build, test, and release pipelines on GitHub Actions, Jenkins, GitLab CI, and ArgoCD — shipping production-grade code with every merge.", features: ["Automated builds", "Testing gates", "Zero-downtime deploys"], href: "/services/devops-cloud-automation/ci-cd-pipelines" , logos: ["githubactions/githubactions-original.svg", "jenkins/jenkins-original.svg", "gitlab/gitlab-original.svg"], accent: "#2088FF"},
  { icon: Box, title: "Containerization & Orchestration", description: "Docker-packaged workloads orchestrated by Kubernetes — delivering consistent, portable, and elastically scalable deployments across any cloud or on-prem environment.", features: ["Docker & K8s", "Helm charts", "Service mesh"], href: "/services/devops-cloud-automation/containerization" , logos: ["docker/docker-original.svg", "kubernetes/kubernetes-original.svg", "helm/helm-original.svg"], accent: "#2496ED"},
  { icon: Server, title: "Infrastructure as Code (IaC)", description: "Terraform, Pulumi, and CloudFormation blueprints that make infrastructure reproducible, version-tracked, and auditable — provisioning at scale in minutes, not days.", features: ["Terraform", "Pulumi", "Multi-cloud IaC"], href: "/services/devops-cloud-automation/infrastructure-as-code" , logos: ["terraform/terraform-original.svg", "pulumi/pulumi-original.svg", "ansible/ansible-original.svg"], accent: "#7B42BC"},
  { icon: BarChart3, title: "Monitoring & Observability", description: "Full-stack visibility via Prometheus, Grafana, distributed tracing, and centralized log aggregation — so every anomaly surfaces before users notice.", features: ["Prometheus & Grafana", "Distributed tracing", "Log aggregation"], href: "/services/devops-cloud-automation/monitoring-observability" , logos: ["prometheus/prometheus-original.svg", "grafana/grafana-original.svg", "datadog/datadog-original.svg"], accent: "#E6522C"},
  { icon: Shield, title: "DevSecOps", description: "Security woven into the pipeline — SAST, DAST, container image scanning, secrets vaulting, and compliance-as-code that keep every release audit-ready.", features: ["SAST & DAST", "Container scanning", "Compliance-as-code"], href: "/services/devops-cloud-automation/devsecops" , logos: ["python/python-original.svg", "docker/docker-original.svg", "linux/linux-original.svg"], accent: "#38A169"},
  { icon: Zap, title: "Cloud Automation & Auto-Scaling", description: "Intelligent scaling policies, global load balancing, serverless event handlers, and FinOps optimization — peak throughput at the lowest viable cost.", features: ["Auto-scaling", "Serverless", "Cost optimization"], href: "/services/devops-cloud-automation/cloud-automation" , logos: ["amazonwebservices/amazonwebservices-plain-wordmark.svg", "azure/azure-original.svg", "googlecloud/googlecloud-original.svg"], accent: "#FF9900"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Assessment & Discovery", description: "Audit existing deploy workflows, infrastructure sprawl, tooling gaps, and team pain points to set a clear DevOps transformation baseline.", icon: Settings },
  { step: "02", title: "Pipeline Architecture", description: "Blueprint the CI/CD topology — automated test gates, isolated staging environments, promotion rules, and instant rollback capabilities.", icon: GitBranch },
  { step: "03", title: "Infrastructure Setup", description: "Spin up cloud infrastructure via IaC, stand up container orchestration clusters, and harden networking and access controls.", icon: Server },
  { step: "04", title: "Automation & Integration", description: "Wire deployments, auto-scaling rules, backup schedules, security scans, and alert routing into a single cohesive delivery pipeline.", icon: Rocket },
  { step: "05", title: "Observability Setup", description: "Instrument dashboards, alerting thresholds, centralized logs, distributed traces, and on-call incident-response playbooks.", icon: BarChart3 },
  { step: "06", title: "Optimization & Handover", description: "Iterate on pipeline speed, cost efficiency, and reliability — then transfer ownership with documentation, training, and pair sessions.", icon: TrendingUp },];

export const techCategories: TechCategory[] = [
  { label: "CI/CD", items: [
    { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
    { name: "GitLab CI", logo: `${DEVICON}/gitlab/gitlab-original.svg` },
    { name: "Jenkins", logo: `${DEVICON}/jenkins/jenkins-original.svg` },
    { name: "ArgoCD", logo: `${DEVICON}/argocd/argocd-original.svg` },
  ] },
  { label: "Containers", items: [
    { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
    { name: "Helm", logo: `${DEVICON}/helm/helm-original.svg` },
    { name: "Podman", logo: `${DEVICON}/podman/podman-original.svg` },
  ] },
  { label: "IaC", items: [
    { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
    { name: "Ansible", logo: `${DEVICON}/ansible/ansible-original.svg` },
    { name: "Pulumi", logo: `${DEVICON}/pulumi/pulumi-original.svg` },
  ] },
  { label: "Monitoring", items: [
    { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` },
    { name: "Prometheus", logo: `${DEVICON}/prometheus/prometheus-original.svg` },
    { name: "ELK Stack", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
  ] },
  { label: "Cloud", items: [
    { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
    { name: "Google Cloud", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
  ] },
];


export const whyNeedProps: WhyNeedProps = {
  heading: "DevOps Can Be",
  headingHighlight: "Business-Critical",
  subtitle: "DevOps isn't just about tools — it's about shipping faster, recovering quicker, and building the confidence to deploy anytime.",
  image: "/images/stock/stock-5f8a62d35f.jpg",
  imageAlt: "DevOps and cloud infrastructure",
  items: [
    { title: "10x Faster Deployments", description: "CI/CD pipelines, automated testing, and infrastructure as code reduce deployment time from days to minutes. Ship multiple times per day with confidence." },
    { title: "99.99% Uptime Reliability", description: "Auto-scaling, load balancing, health checks, and self-healing infrastructure ensure your applications stay available even during traffic spikes and failures." },
    { title: "40-60% Infrastructure Cost Savings", description: "Right-sized resources, spot instances, reserved capacity, and automated scaling eliminate cloud waste. Pay only for what you actually use." },
    { title: "Faster Incident Recovery", description: "Automated monitoring, alerting, and rollback capabilities reduce mean time to recovery (MTTR) from hours to minutes. Issues get fixed before users notice." },
    { title: "Security by Default", description: "DevSecOps integrates security scanning, vulnerability detection, and compliance checks directly into the pipeline. Catch threats before they reach production." },
    { title: "Team Productivity Boost", description: "Eliminate manual deployments, environment inconsistencies, and configuration drift. Developers focus on building features instead of fighting infrastructure." },
  ],
};

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Certified DevOps Engineers", description: "AWS, Azure, and Kubernetes certified engineers with hands-on experience building production-grade pipelines for high-scale systems." },
  { icon: Wrench, title: "Production-Proven Practices", description: "Battle-tested patterns from 200+ deployments — we bring real-world experience, not just theoretical best practices." },
  { icon: TrendingUp, title: "10x Faster Delivery", description: "Teams we work with ship 10x faster with 90% fewer deployment failures and 50%+ reduction in infrastructure costs." },
  { icon: HeartHandshake, title: "Knowledge Transfer", description: "We don't just build — we upskill your team with documentation, training, and pair programming so you own your infrastructure." },];

export const caseStudyProjects: Project[] = [
  {
    id: "chorus-devops",
    tag: "Healthcare DevOps",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    company: "CHORUS",
    industry: "Healthcare / Google",
    headline: "CI/CD and cloud infrastructure for CHORUS achieving 99.9% uptime across 3 platforms.",
    challenge: "Multi-platform deployment complexity. Healthcare compliance in CI/CD. Zero-downtime releases.",
    solution: "Automated CI/CD pipelines, containerized deployments, health-check monitoring, and security scanning in pipeline.",
    duration: "45 days",
    metrics: [
      {
        value: 99.9,
        suffix: "%",
        label: "Uptime"
      },
      {
        value: 0,
        suffix: " breaches",
        label: "Security incidents"
      },
      {
        value: 10,
        suffix: "x",
        label: "Deploy frequency"
      }
    ],
    timeline: [
      {
        phase: "CI/CD Pipeline",
        detail: "Automated build, test, deploy"
      },
      {
        phase: "Infrastructure as Code",
        detail: "Terraform, Docker, Kubernetes"
      },
      {
        phase: "Security Integration",
        detail: "SAST/SCA in pipeline"
      },
      {
        phase: "Monitoring Setup",
        detail: "Health checks, alerting, dashboards"
      }
    ],
    accentColor: "#10b981"
  }
];
