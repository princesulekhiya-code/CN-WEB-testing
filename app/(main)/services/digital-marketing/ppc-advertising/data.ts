import {
  Search,
  Share2,
  LayoutGrid,
  ShoppingBag,
  Video,
  MousePointerClick,
  ClipboardList,
  Crosshair,
  Sparkles,
  Rocket,
  FlaskConical,
  LineChart,
  BadgeCheck,
  TrendingUp,
  Wallet,
  Globe2,
} from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/digital-marketing",
  backLabel: "Back to Digital Marketing",
  titleTop: "PPC",
  titleBottom: "Advertising",
  description:
    "Data-driven pay-per-click campaigns across search, social, and display — optimized for conversions, not clicks.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "PPC Advertising & Analytics",
  topBadge: { icon: null as any, title: "300% ROAS", subtitle: "Ad performance", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Data-Driven", subtitle: "Smart bidding", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "PPC Advertising",
  headingWhite: "Services",
  subtitle:
    "End-to-end paid media—from account structure and creatives to landing experiences—so campaigns stay efficient as you grow.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our PPC",
  headingWhite: "Process",
  subtitle:
    "A six-step timeline from audit to scale—built for clarity, testing discipline, and accountable performance.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Technology",
  headingWhite: "Stack",
  subtitle: "Platforms and tooling we use to launch, measure, and optimize paid campaigns across the funnel.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Maximize Your Ad Spend?",
  headingBottom: "ROI?",
  description:
    "Partner with us to turn paid media into predictable pipeline—clear targets, honest reporting, and continuous optimization.",
};

export const services: ServiceOffering[] = [
  {
    icon: Search,
    title: "Google Ads Management",
    description:
      "Search, Performance Max, and Demand Gen campaigns with structured accounts, negative keywords, and conversion-led bidding.",
    features: ["Account structure", "Search & PMax", "Conversion tracking"],
  },
  {
    icon: Share2,
    title: "Social Media Advertising",
    description:
      "Meta, LinkedIn, TikTok, and Twitter/X campaigns with audience testing, creative rotation, and funnel-aligned objectives.",
    features: ["Audience labs", "Creative testing", "Full-funnel goals"],
  },
  {
    icon: LayoutGrid,
    title: "Display & Remarketing",
    description:
      "Programmatic and GDN reach with frequency caps, contextual placements, and remarketing lists that bring warm traffic back.",
    features: ["Remarketing lists", "Frequency management", "Brand-safe placements"],
  },
  {
    icon: ShoppingBag,
    title: "Shopping Campaigns",
    description:
      "Merchant Center hygiene, feed optimization, and Shopping or Performance Max setups tuned for margin and ROAS.",
    features: ["Feed optimization", "Merchant Center", "ROAS targets"],
  },
  {
    icon: Video,
    title: "YouTube & Video Ads",
    description:
      "In-stream, in-feed, and bumper formats with hooks, sequencing, and audience layering built for awareness and demand.",
    features: ["YouTube formats", "Creative sequencing", "Brand lift"],
  },
  {
    icon: MousePointerClick,
    title: "Landing Page Optimization",
    description:
      "Message-match headlines, faster above-the-fold clarity, and structured tests so paid clicks convert instead of leaking.",
    features: ["Message match", "CRO experiments", "Speed & clarity"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Account Audit",
    description: "Review structure, tracking, search terms, and historical performance to find waste and quick wins.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Campaign Strategy",
    description: "Define goals, budgets, audiences, and channel mix with clear KPIs and a testing roadmap.",
    icon: Crosshair,
  },
  {
    step: "03",
    title: "Ad Creation",
    description: "Write copy, build extensions, and produce creative variants aligned to personas and offers.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Launch & Monitor",
    description: "Go live with guardrails, quality checks, and daily pacing so spend stays efficient from day one.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "A/B Testing",
    description: "Iterate headlines, landing pages, bids, and audiences with disciplined experiments and learnings.",
    icon: FlaskConical,
  },
  {
    step: "06",
    title: "Reporting & Scale",
    description: "Transparent dashboards, actionable insights, and a plan to reinvest in what drives pipeline and revenue.",
    icon: LineChart,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Search Ads",
    items: [
      { name: "Google Ads", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Bing Ads", logo: `${DEVICON}/bingads/bingads-original.svg` },
      { name: "Apple Search", logo: `${DEVICON}/apple/apple-original.svg` },
    ],
  },
  {
    label: "Social Ads",
    items: [
      { name: "Meta Ads", logo: `${DEVICON}/facebook/facebook-original.svg` },
      { name: "LinkedIn Ads", logo: `${DEVICON}/linkedin/linkedin-original.svg` },
      { name: "Twitter Ads", logo: `${DEVICON}/twitter/twitter-original.svg` },
      { name: "TikTok Ads", logo: `${DEVICON}/javascript/javascript-original.svg` },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Semrush", logo: `${DEVICON}/semrush/semrush-original.svg` },
      { name: "SpyFu", logo: `${DEVICON}/spyfu/spyfu-original.svg` },
      { name: "Optmyzr", logo: `${DEVICON}/optmyzr/optmyzr-original.svg` },
    ],
  },
  {
    label: "Landing Pages",
    items: [
      { name: "Unbounce", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Instapage", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Leadpages", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "WordPress", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: BadgeCheck,
    title: "Certified Ad Specialists",
    description:
      "Practitioners experienced across search, social, and video platforms with disciplined account governance.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Focused Campaigns",
    description:
      "Bidding, creative, and landing experiences tuned to conversions—not vanity metrics—so budget moves the needle.",
  },
  {
    icon: Wallet,
    title: "Transparent Budget Management",
    description: "Clear pacing, change logs, and spend visibility so you always know where dollars go and why.",
  },
  {
    icon: Globe2,
    title: "Cross-Platform Expertise",
    description:
      "Unified narrative and measurement across Google, Meta, LinkedIn, TikTok, and more without siloed tactics.",
  },
];
