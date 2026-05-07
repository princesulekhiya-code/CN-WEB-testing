import { Gauge, TrendingUp, Target, Zap, Palette, BarChart3, Settings, Users, ShieldCheck, Award, HeartHandshake, ClipboardList, Rocket, Layers } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mvp-development",
  backLabel: "Back to MVP Development",
  titleTop: "MVP",
  titleBottom: "Improvement",
  description: "Data-driven improvement cycles that compound gains and accelerate product-market fit.",
  heroImage: "/images/stock/stock-096e5f6a26.jpg",
  heroImageAlt: "MVP Improvement & Iteration",
  topBadge: { icon: null as any, title: "Iterate Fast", subtitle: "User feedback", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "V2 Ready", subtitle: "Scale-up plan", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "MVPs Launched" },
  { value: 6, suffix: " wk", label: "Avg Launch Time" },
  { value: 85, suffix: "%", label: "Funding Success" },
  { value: 40, suffix: "+", label: "Startup Clients" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Tools We", headingWhite: "Use", subtitle: "Data-driven improvement cycles that compound gains and accelerate product-market fit." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our MVP Improvement", headingWhite: "Process", subtitle: "Data-driven improvement cycles that compound gains and accelerate product-market fit." };
export const techHeading: ServicePageSectionProps = { headingGray: "Tools We", headingWhite: "Use", subtitle: "Comprehensive post-launch optimization from UX refinement to performance tuning and growth engineering." };
export const ctaProps: CTAProps = { headingTop: "", headingBottom: "", description: "" };

export const services: ServiceOffering[] = [{ icon: Palette, title: "UX/UI Refinement", description: "Redesign user flows, improve visual hierarchy, and polish interactions based on real usage data and user feedback.", features: ["Flow optimization", "Visual polish", "Interaction design"] },
  { icon: Layers, title: "Feature Enhancement", description: "Prioritize and build the next wave of features based on user demand, analytics data, and competitive benchmarks.", features: ["Feature prioritization", "User-requested", "Competitive edge"] },
  { icon: Zap, title: "Performance Optimization", description: "Speed up load times, optimize database queries, reduce bundle sizes, and improve Core Web Vitals scores.", features: ["Load time reduction", "Query optimization", "Bundle analysis"] },
  { icon: BarChart3, title: "Analytics & KPI Setup", description: "Implement event tracking, build custom dashboards, and define KPIs that connect product metrics to business goals.", features: ["Event tracking", "Custom dashboards", "KPI frameworks"] },
  { icon: Users, title: "User Retention Strategy", description: "Onboarding improvements, engagement loops, push notifications, and re-engagement campaigns to reduce churn.", features: ["Onboarding flows", "Engagement loops", "Churn reduction"] },
  { icon: Settings, title: "Technical Debt Reduction", description: "Refactor critical paths, upgrade dependencies, improve test coverage, and modernize architecture incrementally.", features: ["Code refactoring", "Test coverage", "Dependency updates"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Performance Audit", description: "Analyze current product performance, user behavior, conversion funnels, and technical health.", icon: ClipboardList },
  { step: "02", title: "User Research", description: "Gather qualitative and quantitative feedback through surveys, interviews, and analytics review.", icon: Users },
  { step: "03", title: "Prioritize Improvements", description: "Rank improvements by impact and effort using data-driven frameworks like RICE or ICE scoring.", icon: Target },
  { step: "04", title: "Implement Changes", description: "Agile sprints focused on high-impact improvements with feature flags for safe rollouts.", icon: Rocket },
  { step: "05", title: "Measure Impact", description: "A/B test changes, track KPIs, and validate that improvements deliver measurable business results.", icon: BarChart3 },
  { step: "06", title: "Iterate & Improve", description: "Continuous improvement cycles — learning from each release to inform the next round of optimizations.", icon: TrendingUp },];

export const techCategories: TechCategory[] = [{ label: "Analytics", items: [
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Amplitude", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "FullStory", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` }
    ] },
  { label: "A/B Testing", items: [
      { name: "Optimizely", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "LaunchDarkly", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Statsig", logo: `${DEVICON}/statsig/statsig-original.svg` },
      { name: "GrowthBook", logo: `${DEVICON}/growthbook/growthbook-original.svg` }
    ] },
  { label: "Performance", items: [
      { name: "Lighthouse", logo: `${DEVICON}/google/google-original.svg` },
      { name: "WebPageTest", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Sentry", logo: `${DEVICON}/sentry/sentry-original.svg` },
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "Vercel Analytics", logo: `${DEVICON}/vercel/vercel-original.svg` }
    ] },
  { label: "UX Research", items: [
      { name: "UserTesting", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Maze", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lookback", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar Surveys", logo: `${DEVICON}/hotjarsurveys/hotjarsurveys-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: BarChart3, title: "Data-Driven Improvements", description: "Every change backed by analytics, user research, and measurable business impact." },
  { icon: Users, title: "User-Centric Approach", description: "Improvements prioritized by real user needs, not assumptions or internal opinions." },
  { icon: TrendingUp, title: "Continuous Optimization", description: "Iterative improvement cycles that compound gains and accelerate product-market fit." },
  { icon: HeartHandshake, title: "Measurable Results", description: "Clear before-after metrics for every improvement with transparent ROI tracking." },];
