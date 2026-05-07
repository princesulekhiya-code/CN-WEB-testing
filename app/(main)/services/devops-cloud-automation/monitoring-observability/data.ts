import { BarChart3, Activity, Eye, Bell, Server, Gauge, Share2, ScrollText, LayoutDashboard, BellRing, Settings, Radio, BookOpen, TrendingUp, Rocket, Users, Clock, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/devops-cloud-automation",
  backLabel: "Back to DevOps & Cloud Automation",
  titleTop: "Monitoring &",
  titleBottom: "Observability",
  description: "Metrics, traces, and logs engineered as one system—so your team sees production clearly, responds faster, and ships with confidence.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "Monitoring & Observability Dashboard",
  topBadge: { icon: null as any, title: "Observability", subtitle: "Full-stack", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Real-Time", subtitle: "Alert & respond", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Pipelines Built" },
  { value: 70, suffix: "%", label: "Deploy Faster" },
  { value: 99, suffix: "%", label: "Uptime Achieved" },
  { value: 40, suffix: "+", label: "Teams Enabled" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Monitoring & Observability", headingWhite: "Services", subtitle: "Full-stack visibility—from infrastructure health to user-perceived latency—with alerting that teams can trust." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Observability", headingWhite: "Process", subtitle: "A practical path from baseline telemetry to production-grade monitoring, tracing, and logging." };
export const techHeading: ServicePageSectionProps = { headingGray: "Observability Technology", headingWhite: "Stack", subtitle: "Metrics, tracing, logging, and alerting platforms we implement and operationalize for production teams." };
export const ctaProps: CTAProps = { headingTop: "Ready for Full-Stack", headingBottom: "Observability?", description: "Let us instrument your stack, unify signals, and build alerting your team will actually trust at 3 a.m." };

export const services: ServiceOffering[] = [{
    icon: Server,
    title: "Infrastructure Monitoring",
    description: "Health checks, resource utilization, and dependency mapping across VMs, containers, and managed services with SLO-aligned golden signals.",
    features: ["Golden signals", "Dependency maps", "SLO dashboards"],
  },
  {
    icon: Gauge,
    title: "Application Performance Monitoring (APM)",
    description: "End-user experience, service topology, and deep transaction traces to pinpoint latency, errors, and regressions before customers notice.",
    features: ["Real user monitoring", "Service maps", "Error budgets"],
  },
  {
    icon: Share2,
    title: "Distributed Tracing",
    description: "Correlate requests across microservices with consistent trace IDs, baggage, and tail-based sampling for high-cardinality production traffic.",
    features: ["W3C trace context", "Tail sampling", "Service graphs"],
  },
  {
    icon: ScrollText,
    title: "Log Management & Aggregation",
    description: "Structured logging pipelines, retention policies, and fast search across clusters with parsers, enrichers, and sensitive-field redaction.",
    features: ["Structured logs", "Parsers & enrichers", "PII redaction"],
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards & Visualization",
    description: "Executive and engineering views with templated boards, variables, and drill-downs that connect metrics, traces, and logs in one place.",
    features: ["Templated boards", "Variables", "Cross-signal drill-down"],
  },
  {
    icon: BellRing,
    title: "Alerting & Incident Management",
    description: "Noise-aware alerting, on-call rotations, escalation policies, and runbook links integrated with chat and ticketing for faster resolution.",
    features: ["Alert routing", "On-call schedules", "Runbook links"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Telemetry Baseline",
    description: "Inventory services, data flows, and compliance constraints to define what to measure, where to sample, and which SLOs matter most.",
    icon: Settings,
  },
  {
    step: "02",
    title: "Instrumentation Plan",
    description: "Standardize metrics, logs, and traces with OpenTelemetry SDKs, exporters, and service naming so signals stay consistent at scale.",
    icon: Radio,
  },
  {
    step: "03",
    title: "Dashboards & SLOs",
    description: "Build role-specific dashboards, error budgets, and burn-rate alerts that connect customer experience to backend reliability.",
    icon: LayoutDashboard,
  },
  {
    step: "04",
    title: "Alerting & Noise Control",
    description: "Tune thresholds, aggregation windows, and suppression rules so teams respond to real incidents—not pager storms.",
    icon: Bell,
  },
  {
    step: "05",
    title: "Incident Response Hooks",
    description: "Wire alerts to on-call tools, chat channels, and post-incident templates with ownership maps and escalation paths.",
    icon: BookOpen,
  },
  {
    step: "06",
    title: "Continuous Improvement",
    description: "Review missed signals, refine SLOs, and expand coverage as architecture evolves—keeping observability aligned with releases.",
    icon: TrendingUp,
  },];

export const techCategories: TechCategory[] = [{ label: "Metrics", items: [
      { name: "Prometheus", logo: `${DEVICON}/prometheus/prometheus-original.svg` },
      { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` },
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "New Relic", logo: `${DEVICON}/newrelic/newrelic-original.svg` },
      { name: "CloudWatch", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` }
    ] },
  { label: "Tracing", items: [
      { name: "Jaeger", logo: `${DEVICON}/jaeger/jaeger-original.svg` },
      { name: "Zipkin", logo: `${DEVICON}/zipkin/zipkin-original.svg` },
      { name: "OpenTelemetry", logo: `${DEVICON}/opentelemetry/opentelemetry-original.svg` },
      { name: "AWS X-Ray", logo: `${DEVICON}/awsxray/awsxray-original.svg` }
    ] },
  { label: "Logging", items: [
      { name: "ELK Stack", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
      { name: "Loki", logo: `${DEVICON}/loki/loki-original.svg` },
      { name: "Fluentd", logo: `${DEVICON}/fluentd/fluentd-original.svg` },
      { name: "Splunk", logo: `${DEVICON}/splunk/splunk-original-wordmark.svg` },
      { name: "Papertrail", logo: `${DEVICON}/papertrail/papertrail-original.svg` }
    ] },
  { label: "Alerting", items: [
      { name: "PagerDuty", logo: `${DEVICON}/pagerduty/pagerduty-original.svg` },
      { name: "Opsgenie", logo: `${DEVICON}/opsgenie/opsgenie-original.svg` },
      { name: "Alertmanager", logo: `${DEVICON}/alertmanager/alertmanager-original.svg` },
      { name: "VictorOps", logo: `${DEVICON}/victorops/victorops-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Users,
    title: "SRE-Style Observability",
    description: "Engineers who design for SLOs, error budgets, and actionable alerts—not vanity metrics or noisy dashboards.",
  },
  {
    icon: Clock,
    title: "Faster Mean Time to Detect",
    description: "Correlated metrics, traces, and logs reduce guesswork so on-call engineers isolate root causes in minutes.",
  },
  {
    icon: TrendingUp,
    title: "Scale-Ready Telemetry",
    description: "Sampling, cardinality controls, and cost-aware retention keep observability sustainable as traffic grows.",
  },
  {
    icon: HeartHandshake,
    title: "Runbooks & Knowledge Transfer",
    description: "We leave you with dashboards, alert playbooks, and team training so observability improves long after launch.",
  },];
