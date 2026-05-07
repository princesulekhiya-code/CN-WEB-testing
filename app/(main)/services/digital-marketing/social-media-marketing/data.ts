import {
  Map,
  Palette,
  MessagesSquare,
  Sparkles,
  Megaphone,
  BarChart3,
  Search,
  Settings,
  Calendar,
  Rocket,
  Users,
  Layers,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/digital-marketing",
  backLabel: "Back to Digital Marketing",
  titleTop: "Social Media",
  titleBottom: "Marketing",
  description:
    "Grow awareness, engagement, and conversions with channel-native creative, disciplined community care, and paid social that compounds.",
  heroImage: "/images/stock/stock-336fe3437f.jpg",
  heroImageAlt: "Social Media Marketing",
  topBadge: { icon: null as any, title: "5x Engagement", subtitle: "Social growth", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Multi-Platform", subtitle: "All channels", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Social Media Marketing",
  headingWhite: "Offerings",
  subtitle:
    "End-to-end programs covering strategy, creative, community, creators, paid social, and analytics—built for brands that want durable growth.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Social Media",
  headingWhite: "Process",
  subtitle:
    "A six-step timeline from discovery through optimization—transparent, iterative, and aligned to business outcomes.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Tools &",
  headingWhite: "Platforms",
  subtitle:
    "The publishing, design, analytics, and ads stack we use to keep programs organized, on-brand, and measurable.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Dominate",
  headingBottom: "Social Media?",
  description:
    "Partner with us for channel-native strategy, standout creative, and community programs that compound—not just campaign spikes.",
};

export const services: ServiceOffering[] = [
  {
    icon: Map,
    title: "Social Media Strategy & Planning",
    description:
      "Channel mix, positioning, and quarterly roadmaps aligned to funnel goals, creative capacity, and measurable KPIs.",
    features: ["Audience personas", "Channel roadmap", "KPI framework"],
  },
  {
    icon: Palette,
    title: "Content Creation & Management",
    description:
      "On-brand visuals, short-form video, copy, and reusable templates with editorial workflows and asset libraries.",
    features: ["Creative production", "Editorial calendar", "Brand guidelines"],
  },
  {
    icon: MessagesSquare,
    title: "Community Management & Engagement",
    description:
      "Inbox triage, moderation, proactive outreach, and escalation paths so followers feel heard and protected.",
    features: ["Response SLAs", "Moderation playbooks", "Crisis watch"],
  },
  {
    icon: Sparkles,
    title: "Influencer Marketing",
    description:
      "Vetting, contracting, briefs, and performance tracking for creators who match your tone and conversion goals.",
    features: ["Creator vetting", "Campaign briefs", "ROI tracking"],
  },
  {
    icon: Megaphone,
    title: "Social Media Advertising",
    description:
      "Full-funnel paid social with testing matrices, audience experiments, and creative refresh cadences.",
    features: ["Audience testing", "Creative rotation", "Attribution"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Tracking",
    description:
      "Unified reporting across organic and paid with benchmarks, cohort views, and actionable next steps.",
    features: ["Dashboards", "Benchmarking", "Insight reviews"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Brand Audit",
    description: "Channel health check, competitor snapshots, audience signals, and quick wins versus structural gaps.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Objectives, messaging pillars, channel roles, and resource plans tied to revenue and retention outcomes.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Content Calendar",
    description: "Rhythm of posts, hooks, formats, and approvals mapped to launches, seasons, and cultural moments.",
    icon: Calendar,
  },
  {
    step: "04",
    title: "Campaign Execution",
    description: "Publishing, paid boosts, UTM hygiene, and creative iterations executed with quality gates.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Community Engagement",
    description:
      "Daily conversations, advocate nurturing, and social listening triggers that keep momentum authentic.",
    icon: Users,
  },
  {
    step: "06",
    title: "Performance Analysis",
    description:
      "Weekly readouts, experiment results, and roadmap updates based on what moved reach and conversion.",
    icon: BarChart3,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Management",
    items: [
      { name: "Hootsuite", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Buffer", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Sprout Social", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Later", logo: `${DEVICON}/later/later-original.svg` },
    ],
  },
  {
    label: "Design",
    items: [
      { name: "Canva", logo: `${DEVICON}/canva/canva-original.svg` },
      { name: "Adobe Creative Suite", logo: `${DEVICON}/adobecreativesuite/adobecreativesuite-original.svg` },
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "CapCut", logo: `${DEVICON}/capcut/capcut-original.svg` },
    ],
  },
  {
    label: "Analytics",
    items: [
      { name: "Sprout Social", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Socialbakers", logo: `${DEVICON}/socialbakers/socialbakers-original.svg` },
      { name: "Brandwatch", logo: `${DEVICON}/brandwatch/brandwatch-original.svg` },
      { name: "Native Analytics", logo: `${DEVICON}/nativeanalytics/nativeanalytics-original.svg` },
    ],
  },
  {
    label: "Advertising",
    items: [
      { name: "Meta Business Suite", logo: `${DEVICON}/metabusinesssuite/metabusinesssuite-original.svg` },
      { name: "TikTok Ads Manager", logo: `${DEVICON}/tiktokadsmanager/tiktokadsmanager-original.svg` },
      { name: "LinkedIn Campaign Manager", logo: `${DEVICON}/linkedin/linkedin-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Layers,
    title: "Platform Experts",
    description: "Hands-on experience across major networks with up-to-date formats, policies, and ad surfaces.",
  },
  {
    icon: Palette,
    title: "Creative Content Team",
    description:
      "Designers and copywriters who translate brand voice into thumb-stopping creative without losing clarity.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Growth",
    description:
      "Testing discipline, cohort insights, and reporting that connects social activity to pipeline and revenue.",
  },
  {
    icon: HeartHandshake,
    title: "Community-First Approach",
    description:
      "Human moderation, transparent tone, and engagement models that build trust—not just impressions.",
  },
];
