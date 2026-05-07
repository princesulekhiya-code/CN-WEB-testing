import { ShieldCheck, Shield, Bug, Gauge, Lock, Terminal, Smartphone, Code2, RefreshCcw, ClipboardList, Settings, Rocket, BarChart3, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/product-engineering",
  backLabel: "Back to Product Engineering",
  titleTop: "Quality",
  titleBottom: "Engineering",
  description: "Rigorous quality engineering to eliminate any last-minute issues and equip the product to face competitors in the early phase with confidence.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "Quality Engineering & Testing",
  topBadge: { icon: null as any, title: "QA Expert", subtitle: "Zero defect goal", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Automated", subtitle: "Test coverage", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Products Shipped" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "%", label: "On-Time Delivery" },
  { value: 12, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Quality Engineering", headingWhite: "Services", subtitle: "Automation, performance, security, mobile, API, and continuous QA — integrated into your delivery pipeline for predictable, confident releases." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Quality Engineering", headingWhite: "Process", subtitle: "Strategy through planning, automation, execution, defect management, and reporting — designed to raise quality systematically release after release." };
export const techHeading: ServicePageSectionProps = { headingGray: "QA &amp; Observability", headingWhite: "Tools", subtitle: "Industry-standard automation, performance and security tooling, CI platforms, and production monitoring — wired into pipelines and incident feedback loops." };
export const ctaProps: CTAProps = { headingTop: "Ready to Ensure", headingBottom: "Product Quality?", description: "Ship with confidence — automated pipelines, performance proof, and security signal that protect users and your reputation at launch and beyond." };

export const services: ServiceOffering[] = [{
    icon: Terminal,
    title: "Automated Testing",
    description:
      "Pyramids of unit, integration, and end-to-end tests run in CI to catch regressions early. Automation targets high-value paths first — maximizing confidence per minute of execution.",
    features: ["CI integration", "Regression safety", "Fast feedback"],
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    description:
      "Load, stress, and soak tests validate latency and throughput under realistic traffic mixes. Bottlenecks are traced to code, queries, or infrastructure with clear remediation owners.",
    features: ["Load profiles", "Latency tracing", "Capacity proof"],
  },
  {
    icon: Shield,
    title: "Security Testing",
    description:
      "SAST/DAST, dependency scanning, and targeted penetration-style exercises surface vulnerabilities before attackers do. Findings are prioritized by exploitability and blast radius.",
    features: ["Vuln scanning", "Dependency risk", "Prioritized fixes"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Testing",
    description:
      "Device labs and real-network scenarios cover fragmentation, permissions, and background behaviors. Releases ship with confidence across OS versions and hardware profiles.",
    features: ["Device coverage", "Real-network cases", "Store readiness"],
  },
  {
    icon: Code2,
    title: "API Testing",
    description:
      "Contract tests, negative cases, and schema validation keep APIs stable for consumers. Breaking changes are caught in pipelines — not in production integrations.",
    features: ["Contract tests", "Negative paths", "Schema checks"],
  },
  {
    icon: RefreshCcw,
    title: "Continuous QA",
    description:
      "Quality is embedded in every increment — test plans evolve with features, and quality gates protect mainline health. QA partners with engineering rather than blocking at the end.",
    features: ["Shift-left QA", "Quality gates", "Living test plans"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Test Strategy",
    description:
      "Risk-based strategy aligns coverage with business impact — defining environments, data, and tooling before execution begins. Strategy prevents random testing and duplicate effort.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Test Planning",
    description:
      "Traceability maps requirements to cases and owners. Plans include entry/exit criteria so releases are objectively ready — not merely hoped for.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Test Development",
    description:
      "Automated suites and datasets are built for maintainability — stable selectors, factories, and fixtures reduce flaky noise that erodes trust in CI.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Test Execution",
    description:
      "Runs happen in consistent environments with captured logs and artifacts. Failures are triaged quickly with enough context for developers to reproduce and fix.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Defect Management",
    description:
      "Defects are logged with severity, reproduction steps, and environment detail — then tracked to closure with regression checks on fixes.",
    icon: Bug,
  },
  {
    step: "06",
    title: "Reporting & Optimization",
    description:
      "Dashboards communicate quality trends, escaped defects, and test debt. Insights feed process improvements — faster suites, better coverage, fewer repeats.",
    icon: BarChart3,
  },];

export const techCategories: TechCategory[] = [{ label: "Automation", items: [
      { name: "Selenium", logo: `${DEVICON}/selenium/selenium-original.svg` },
      { name: "Cypress", logo: `${DEVICON}/cypressio/cypressio-original.svg` },
      { name: "Playwright", logo: `${DEVICON}/playwright/playwright-original.svg` },
      { name: "Appium", logo: `${DEVICON}/appium/appium-original.svg` },
      { name: "Jest", logo: `${DEVICON}/jest/jest-plain.svg` }
    ] },
  { label: "Performance", items: [
      { name: "JMeter", logo: `${DEVICON}/jmeter/jmeter-original.svg` },
      { name: "Gatling", logo: `${DEVICON}/gatling/gatling-original.svg` },
      { name: "LoadRunner", logo: `${DEVICON}/loadrunner/loadrunner-original.svg` },
      { name: "k6", logo: `${DEVICON}/k6/k6-original.svg` }
    ] },
  { label: "Security", items: [
      { name: "OWASP ZAP", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Burp Suite", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "SonarQube", logo: `${DEVICON}/sonarqube/sonarqube-original.svg` },
      { name: "Snyk", logo: `${DEVICON}/linux/linux-original.svg` }
    ] },
  { label: "CI/CD", items: [
      { name: "Jenkins", logo: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "GitLab CI", logo: `${DEVICON}/gitlab/gitlab-original.svg` },
      { name: "CircleCI", logo: `${DEVICON}/circleci/circleci-plain.svg` }
    ] },
  { label: "Monitoring", items: [
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "Sentry", logo: `${DEVICON}/sentry/sentry-original.svg` },
      { name: "New Relic", logo: `${DEVICON}/newrelic/newrelic-original.svg` },
      { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "QA Excellence",
    description:
      "Practiced quality engineers who design measurable programs — not checkbox testing — raising confidence at every release.",
  },
  {
    icon: TrendingUp,
    title: "Zero-Defect Goal",
    description:
      "Rigorous prioritization and prevention reduce escaped defects — protecting users, brand, and revenue in competitive launches.",
  },
  {
    icon: Zap,
    title: "Shift-Left Testing",
    description:
      "Quality starts in design and development — catching issues when fixes are cheap and schedules still have slack.",
  },
  {
    icon: HeartHandshake,
    title: "Continuous Quality",
    description:
      "Ongoing partnership — tuning suites, monitoring signals, and quality culture — so quality compounds instead of decaying over time.",
  },];
