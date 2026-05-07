import {
  KeyRound,
  AlignLeft,
  ImageIcon,
  MessageSquareQuote,
  Users,
  Split,
  ClipboardCheck,
  Search,
  Tags,
  Palette,
  Rocket,
  RefreshCw,
  Award,
  BarChart3,
  Layers,
  Zap,
} from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/digital-marketing",
  backLabel: "Back to Digital Marketing",
  titleTop: "App Store",
  titleBottom: "Optimization",
  description: "Improve app visibility and downloads through ASO",
  heroImage: "/images/stock/stock-be6b0ed7f1.jpg",
  heroImageAlt: "App Store Optimization",
  topBadge: { icon: null as any, title: "Top Rankings", subtitle: "App store SEO", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "5x Downloads", subtitle: "Organic growth", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Service",
  headingWhite: "Offerings",
  subtitle: "Six focused capabilities covering research, creative, reputation, and experimentation.",
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
  headingTop: "Ready to Boost Your",
  headingBottom: "App Downloads?",
  description:
    "Pair disciplined keyword strategy with standout creatives and testing so every store visit has a better chance to convert.",
};

export const services: ServiceOffering[] = [
  {
    icon: KeyRound,
    title: "Keyword Research & Optimization",
    description: "Discover high-intent search terms and align your listing metadata with how users actually find apps like yours.",
    features: ["Search demand maps", "Semantic clusters", "Localization"],
  },
  {
    icon: AlignLeft,
    title: "App Title & Description Optimization",
    description: "Craft compelling titles, subtitles, and long descriptions that convert browsers into installers while staying policy-safe.",
    features: ["Character limits", "Value props", "Store guidelines"],
  },
  {
    icon: ImageIcon,
    title: "Visual Asset Optimization (icons, screenshots, videos)",
    description: "Elevate first impressions with on-brand icons, screenshot narratives, preview videos, and seasonal refreshes.",
    features: ["Screenshot funnels", "Preview video", "Seasonal sets"],
  },
  {
    icon: MessageSquareQuote,
    title: "Rating & Review Management",
    description: "Improve sentiment and velocity with response playbooks, prompt timing, and insights from user feedback.",
    features: ["Reply templates", "Review mining", "Prompt strategy"],
  },
  {
    icon: Users,
    title: "Competitor Analysis & Benchmarking",
    description: "Track category leaders, creative trends, and keyword overlap so you can out-position similar apps.",
    features: ["Share of voice", "Creative teardowns", "Gap analysis"],
  },
  {
    icon: Split,
    title: "A/B Testing & Conversion Optimization",
    description: "Run structured experiments on icons, screenshots, and metadata to lift install rate with statistical confidence.",
    features: ["Experiment design", "Lift measurement", "Rollout plans"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "App Audit",
    description: "Baseline your listing health, category fit, creative quality, and technical signals affecting discoverability.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Keyword Research",
    description: "Build a prioritized keyword matrix across core, long-tail, and localized terms with difficulty scoring.",
    icon: Search,
  },
  {
    step: "03",
    title: "Metadata Optimization",
    description: "Refine title, subtitle, keyword fields, and descriptions for relevance, conversion, and compliance.",
    icon: Tags,
  },
  {
    step: "04",
    title: "Visual Enhancement",
    description: "Ship cohesive icon, screenshot, and video storylines that communicate value in the first scroll.",
    icon: Palette,
  },
  {
    step: "05",
    title: "Launch & Monitor",
    description: "Coordinate releases, watch rank and conversion dashboards, and respond quickly to algorithm shifts.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Iterate & Improve",
    description: "Close the loop with A/B tests, seasonal updates, and continuous tuning as competition evolves.",
    icon: RefreshCw,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "ASO Tools",
    items: [
      { name: "App Annie", logo: `${DEVICON}/appannie/appannie-original.svg` },
      { name: "Sensor Tower", logo: `${DEVICON}/sensortower/sensortower-original.svg` },
      { name: "AppTweak", logo: `${DEVICON}/apptweak/apptweak-original.svg` },
      { name: "Mobile Action", logo: `${DEVICON}/mobileaction/mobileaction-original.svg` },
    ],
  },
  {
    label: "Analytics",
    items: [
      { name: "App Store Connect", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "Google Play Console", logo: `${DEVICON}/android/android-original.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
    ],
  },
  {
    label: "Design",
    items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Canva", logo: `${DEVICON}/canva/canva-original.svg` },
      { name: "Adobe Photoshop", logo: `${DEVICON}/photoshop/photoshop-original.svg` },
      { name: "After Effects", logo: `${DEVICON}/aftereffects/aftereffects-original.svg` },
    ],
  },
  {
    label: "A/B Testing",
    items: [
      { name: "SplitMetrics", logo: `${DEVICON}/splitmetrics/splitmetrics-original.svg` },
      { name: "StoreMaven", logo: `${DEVICON}/storemaven/storemaven-original.svg` },
      { name: "Google Experiments", logo: `${DEVICON}/google/google-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "ASO Specialists",
    description: "Dedicated practitioners who live in store consoles, ASO platforms, and creative iteration—not generic marketers.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    description: "Decisions grounded in search volume, conversion data, and experiment readouts instead of guesswork.",
  },
  {
    icon: Layers,
    title: "Cross-Platform Expertise",
    description: "Aligned strategies for Apple App Store and Google Play with platform-specific nuances handled end to end.",
  },
  {
    icon: Zap,
    title: "Continuous Optimization",
    description: "Ongoing monitoring, seasonal refreshes, and testing cadences so listings keep compounding gains.",
  },
];
