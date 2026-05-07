import { Layers, TrendingUp, Users, Globe, ClipboardList, Cpu, Gauge, UsersRound, Sprout, Award, ShieldCheck, Zap, LineChart, Search, Box, Activity, Rocket } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mvp-development",
  backLabel: "Back to MVP Development",
  titleTop: "MVP to /",
  titleBottom: "Full-Scale Product",
  description: "Audit, upgrade, tune, and grow — a disciplined path from MVP traction to enterprise readiness.",
  heroImage: "/images/stock/stock-dc982244ba.jpg",
  heroImageAlt: "MVP to Full Scale Product",
  topBadge: { icon: null as any, title: "Scale Up", subtitle: "MVP to product", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Production", subtitle: "Enterprise-grade", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "MVPs Launched" },
  { value: 6, suffix: " wk", label: "Avg Launch Time" },
  { value: 85, suffix: "%", label: "Funding Success" },
  { value: 40, suffix: "+", label: "Startup Clients" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Tools We", headingWhite: "Use", subtitle: "Audit, upgrade, tune, and grow — a disciplined path from MVP traction to enterprise readiness." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Scaling", headingWhite: "Process", subtitle: "Audit, upgrade, tune, and grow — a disciplined path from MVP traction to enterprise readiness." };
export const techHeading: ServicePageSectionProps = { headingGray: "Tools We", headingWhite: "Use", subtitle: "Turn traction into a durable platform — architecture, performance, and growth systems that scale." };
export const ctaProps: CTAProps = { headingTop: "", headingBottom: "", description: "" };

export const services: ServiceOffering[] = [{ icon: Search, title: "Product Analysis & Audit", description: "Deep dive on architecture, bottlenecks, and product-market signals to plan a safe scaling path.", features: ["Code review", "Risk register", "Priorities"] },
  { icon: Layers, title: "Architecture Scaling", description: "Evolve services, boundaries, and data flows to handle more users, teams, and integrations.", features: ["Service boundaries", "Caching", "Resilience"] },
  { icon: Sprout, title: "Feature Expansion", description: "Grow the roadmap responsibly with modular releases that protect stability for existing users.", features: ["Roadmap", "Feature flags", "Rollouts"] },
  { icon: Gauge, title: "Performance Optimization", description: "Latency, throughput, and cost improvements tuned to your real traffic patterns and SLAs.", features: ["Profiling", "Load tests", "Cost tuning"] },
  { icon: UsersRound, title: "Team & Process Scaling", description: "Engineering practices, ownership models, and delivery workflows that scale with headcount.", features: ["SDLC", "Ownership", "Quality gates"] },
  { icon: LineChart, title: "Growth Engineering", description: "Instrument funnels, experiments, and retention loops that compound as the product matures.", features: ["Funnels", "Experiments", "Retention"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Product Audit", description: "Inventory systems, dependencies, and customer pain points to anchor the scaling plan.", icon: ClipboardList },
  { step: "02", title: "Scaling Strategy", description: "Define target architecture, milestones, and guardrails for zero-surprise migrations.", icon: TrendingUp },
  { step: "03", title: "Architecture Upgrade", description: "Implement infrastructure and platform changes with rollback paths and observability.", icon: Cpu },
  { step: "04", title: "Feature Roadmap", description: "Sequence high-impact capabilities that unlock new segments without destabilizing core flows.", icon: Box },
  { step: "05", title: "Performance Tuning", description: "Optimize hot paths, databases, and caches until the product meets your performance bar.", icon: Activity },
  { step: "06", title: "Growth & Optimization", description: "Close the loop with analytics, experimentation, and continuous improvement cadences.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Scaling", items: [
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Load Balancers", logo: `${DEVICON}/loadbalancers/loadbalancers-original.svg` }
    ] },
  { label: "Monitoring", items: [
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "New Relic", logo: `${DEVICON}/newrelic/newrelic-original.svg` },
      { name: "Sentry", logo: `${DEVICON}/sentry/sentry-original.svg` },
      { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` },
      { name: "PagerDuty", logo: `${DEVICON}/pagerduty/pagerduty-original.svg` }
    ] },
  { label: "Database", items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` }
    ] },
  { label: "CI/CD", items: [
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "Jenkins", logo: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "ArgoCD", logo: `${DEVICON}/argocd/argocd-original.svg` },
      { name: "CircleCI", logo: `${DEVICON}/circleci/circleci-plain.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Scaling Experts", description: "Battle-tested patterns for traffic spikes, data growth, and multi-team engineering at scale." },
  { icon: ShieldCheck, title: "Zero-Downtime Migration", description: "Blue/green releases, feature flags, and careful sequencing to protect revenue and trust." },
  { icon: Zap, title: "Performance Engineering", description: "Profiling-driven improvements with measurable before/after impact on latency and cost." },
  { icon: Globe, title: "Growth-Ready Architecture", description: "Platforms designed for international expansion, compliance, and evolving product surface area." },];
