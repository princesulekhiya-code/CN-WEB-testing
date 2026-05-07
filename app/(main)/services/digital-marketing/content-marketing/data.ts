import {
  FileText,
  PenTool,
  BookOpen,
  Share2,
  PenLine,
  Target,
  Search,
  ClipboardCheck,
  BarChart3,
  Users,
  LineChart,
  Microscope,
  CalendarDays,
} from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/digital-marketing",
  backLabel: "Back to Digital Marketing",
  titleTop: "Content Writing &",
  titleBottom: "Marketing",
  description: "Engaging content that attracts target audience and drives traffic",
  heroImage: "/images/stock/stock-8e7f372d7d.jpg",
  heroImageAlt: "Content Marketing & Writing",
  topBadge: { icon: null as any, title: "Content First", subtitle: "SEO-optimized", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "3x Traffic", subtitle: "Organic growth", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Service",
  headingWhite: "Offerings",
  subtitle:
    "End-to-end content capabilities from strategy through distribution—built to grow qualified traffic and pipeline.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our",
  headingWhite: "Process",
  subtitle: "Six phases on an alternating vertical timeline—from discovery through measurable performance.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Technology",
  headingWhite: "Stack",
  subtitle: "Tools we use across writing, SEO, distribution, and analytics.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Elevate Your",
  headingBottom: "Content Strategy?",
  description:
    "Partner with us for content that ranks, resonates, and supports revenue—from first draft to performance review.",
};

export const services: ServiceOffering[] = [
  {
    icon: FileText,
    title: "Blog & Article Writing",
    description: "Long-form articles and pillar content that rank, educate, and move readers toward conversion.",
    features: ["Topic clusters", "Editorial guidelines", "On-page SEO"],
  },
  {
    icon: PenTool,
    title: "Website Copywriting",
    description: "Clear, persuasive copy for landing pages, product pages, and key journeys that reflects your brand voice.",
    features: ["Value propositions", "CTA optimization", "Tone & style guide"],
  },
  {
    icon: BookOpen,
    title: "Whitepaper & Ebook Creation",
    description: "Research-backed assets that establish authority, capture leads, and support sales conversations.",
    features: ["Outline & research", "Design-ready drafts", "Gated download flows"],
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Platform-native posts, carousels, and captions designed for engagement and consistent brand presence.",
    features: ["Channel calendars", "Hashtag strategy", "Creative briefs"],
  },
  {
    icon: PenLine,
    title: "Video Script Writing",
    description: "Scripts for explainers, ads, and social video with pacing, hooks, and clear calls to action.",
    features: ["Story beats", "B-roll notes", "Subtitle-ready copy"],
  },
  {
    icon: Target,
    title: "Content Strategy & Calendar",
    description: "Editorial planning aligned to funnel stages, personas, and measurable business outcomes.",
    features: ["Content audits", "Quarterly themes", "KPI alignment"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Research & Discovery",
    description:
      "Audience interviews, competitor content scans, and keyword intent mapping to anchor every piece in real demand.",
    icon: Search,
  },
  {
    step: "02",
    title: "Content Strategy",
    description: "Themes, formats, and distribution plans tied to funnel stages with clear ownership and success metrics.",
    icon: Target,
  },
  {
    step: "03",
    title: "Content Creation",
    description: "Drafts, visuals briefs, and structured outlines produced to brief with brand voice and SEO guardrails.",
    icon: PenLine,
  },
  {
    step: "04",
    title: "Editorial Review",
    description: "Fact-checking, style consistency, and stakeholder sign-off before anything ships to production.",
    icon: ClipboardCheck,
  },
  {
    step: "05",
    title: "Publishing & Distribution",
    description: "Scheduling, CMS publishing, email and social syndication so content reaches the right channels on time.",
    icon: Share2,
  },
  {
    step: "06",
    title: "Performance Analysis",
    description: "Traffic, engagement, and conversion reporting with recommendations for the next editorial cycle.",
    icon: BarChart3,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Writing",
    items: [
      { name: "Google Docs", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Grammarly", logo: `${DEVICON}/grammarly/grammarly-original.svg` },
      { name: "Hemingway", logo: `${DEVICON}/hemingway/hemingway-original.svg` },
      { name: "Jasper AI", logo: `${DEVICON}/jasperai/jasperai-original.svg` },
    ],
  },
  {
    label: "SEO",
    items: [
      { name: "Semrush", logo: `${DEVICON}/semrush/semrush-original.svg` },
      { name: "Ahrefs", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "SurferSEO", logo: `${DEVICON}/surferseo/surferseo-original.svg` },
      { name: "Clearscope", logo: `${DEVICON}/clearscope/clearscope-original.svg` },
    ],
  },
  {
    label: "Distribution",
    items: [
      { name: "WordPress", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "Medium", logo: `${DEVICON}/medium/medium-original.svg` },
      { name: "LinkedIn", logo: `${DEVICON}/linkedin/linkedin-original.svg` },
      { name: "Social platforms", logo: `${DEVICON}/socialplatforms/socialplatforms-original.svg` },
    ],
  },
  {
    label: "Analytics",
    items: [
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Search Console", logo: `${DEVICON}/searchconsole/searchconsole-original.svg` },
      { name: "BuzzSumo", logo: `${DEVICON}/buzzsumo/buzzsumo-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Expert Content Team",
    description: "Writers, editors, and strategists who have shipped content for B2B and B2C brands across competitive categories.",
  },
  {
    icon: LineChart,
    title: "SEO-Optimized Content",
    description:
      "Briefs grounded in search intent, entity coverage, and readability so pages earn visibility—not just word count.",
  },
  {
    icon: Microscope,
    title: "Industry Research",
    description: "Source-backed insights, SME interviews, and data pulls that make your assets credible with technical buyers.",
  },
  {
    icon: CalendarDays,
    title: "Consistent Publishing",
    description: "Editorial calendars, SLAs, and workflow discipline so your channels stay active without last-minute scrambles.",
  },
];
