import { BarChart3, Box, Building2, Clock, CreditCard, Factory, Gamepad2, GitBranch, GraduationCap, HeartHandshake, Layers, Rocket, Server, Settings, Shield, ShoppingCart, Stethoscope, TrendingUp, Truck, Users, Wrench, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to services",
  titleTop: "DevOps & Cloud",
  titleBottom: "Automation",
  description: "Architect resilient CI/CD pipelines, container-orchestrated deployments, and self-healing infrastructure — so your engineering team ships faster with fewer incidents and full confidence.",
  heroImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop&q=80",
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

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Certified DevOps Engineers", description: "AWS, Azure, and Kubernetes certified engineers with hands-on experience building production-grade pipelines for high-scale systems." },
  { icon: Wrench, title: "Production-Proven Practices", description: "Battle-tested patterns from 200+ deployments — we bring real-world experience, not just theoretical best practices." },
  { icon: TrendingUp, title: "10x Faster Delivery", description: "Teams we work with ship 10x faster with 90% fewer deployment failures and 50%+ reduction in infrastructure costs." },
  { icon: HeartHandshake, title: "Knowledge Transfer", description: "We don't just build — we upskill your team with documentation, training, and pair programming so you own your infrastructure." },];
