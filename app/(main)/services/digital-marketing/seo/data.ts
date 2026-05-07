import {
  Wrench,
  FileText,
  Link2,
  MapPinned,
  ShoppingBag,
  ClipboardList,
  Clipboard,
  KeyRound,
  PenLine,
  Activity,
  Users,
  ShieldCheck,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/digital-marketing",
  backLabel: "Back to Digital Marketing",
  titleTop: "Search Engine",
  titleBottom: "Optimization",
  description:
    "Grow qualified organic traffic with technical excellence, intent-led content, and ethical link building — measured against the KPIs that matter to your business.",
  heroImage: "/images/stock/stock-096e5f6a26.jpg",
  heroImageAlt: "SEO Search Engine Optimization",
  topBadge: { icon: null as any, title: "Page 1 Rank", subtitle: "Google results", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Technical SEO", subtitle: "Full audit", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 250, suffix: "+", label: "Campaigns Run" },
    { value: 3, suffix: "x", label: "Avg ROI" },
    { value: 95, suffix: "%", label: "Client Retention" },
    { value: 80, suffix: "+", label: "Brands Served" },
  ],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Search Engine Optimization",
  headingWhite: "Services",
  subtitle:
    "Full-funnel SEO — from crawl budget to conversion paths — so organic search becomes a dependable acquisition channel.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our SEO",
  headingWhite: "Process",
  subtitle:
    "A repeatable delivery model — audit, prioritize, ship, measure — so improvements stack month over month.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "SEO Tools &",
  headingWhite: "Platforms",
  subtitle:
    "Industry-standard analytics, research, and technical tooling — combined with disciplined processes — for transparent, repeatable outcomes.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Grow Your",
  headingBottom: "Organic Search Presence?",
  description:
    "Book a consultation to review your site, competitors, and opportunity — and leave with a prioritized SEO roadmap you can act on.",
};

export const services: ServiceOffering[] = [
  {
    icon: Wrench,
    title: "Technical SEO",
    description:
      "Crawlability, indexation, site architecture, and Core Web Vitals tuned so search engines can access, understand, and rank your pages reliably.",
    features: ["Crawl & index fixes", "Structured data", "Performance audits"],
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description:
      "Title tags, headings, intent-aligned copy, and internal linking that strengthen relevance signals and improve click-through from the SERPs.",
    features: ["Keyword mapping", "Content optimization", "Meta & snippets"],
  },
  {
    icon: Link2,
    title: "Off-Page SEO & Link Building",
    description:
      "Earned outreach, digital PR, and relationship-based placements that build authority safely — no spammy networks or risky shortcuts.",
    features: ["Outreach & PR", "Quality backlinks", "Brand mentions"],
  },
  {
    icon: MapPinned,
    title: "Local SEO",
    description:
      "Google Business Profile, citations, reviews, and geo-targeted landing pages so nearby customers find you when it matters most.",
    features: ["GBP optimization", "Local landing pages", "Citation hygiene"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce SEO",
    description:
      "Category and product page strategy, faceted navigation guidance, and schema that help large catalogs rank without cannibalizing themselves.",
    features: ["Product SEO", "Faceted nav", "Collection structure"],
  },
  {
    icon: ClipboardList,
    title: "SEO Auditing & Reporting",
    description:
      "Baseline audits, prioritized roadmaps, and executive-ready reporting so stakeholders see impact, not just rankings in a vacuum.",
    features: ["Technical audits", "KPI dashboards", "Action roadmaps"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "Business goals, competitive landscape, and a full technical and content audit to establish priorities and quick wins.",
    icon: Clipboard,
  },
  {
    step: "02",
    title: "Keyword Research",
    description:
      "Intent mapping, topic clusters, and opportunity scoring so every page targets queries that actually drive pipeline.",
    icon: KeyRound,
  },
  {
    step: "03",
    title: "Technical Optimization",
    description:
      "Fix crawl issues, improve speed and UX signals, implement schema, and align IA with how users and bots navigate the site.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Content Strategy",
    description:
      "Editorial calendars, on-page briefs, and refresh plans that compound authority while staying true to your brand voice.",
    icon: PenLine,
  },
  {
    step: "05",
    title: "Link Building",
    description:
      "Prospecting, outreach, and partnerships that earn links from relevant, trustworthy sources aligned to your vertical.",
    icon: Link2,
  },
  {
    step: "06",
    title: "Monitoring & Reporting",
    description:
      "Rankings, traffic, conversions, and technical health tracked in one narrative — with clear next steps every cycle.",
    icon: Activity,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Analytics",
    items: [
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Search Console", logo: `${DEVICON}/searchconsole/searchconsole-original.svg` },
      { name: "GA4", logo: `${DEVICON}/ga4/ga4-original.svg` },
      { name: "Semrush", logo: `${DEVICON}/semrush/semrush-original.svg` },
      { name: "Ahrefs", logo: `${DEVICON}/javascript/javascript-original.svg` },
    ],
  },
  {
    label: "On-Page",
    items: [
      { name: "Yoast", logo: `${DEVICON}/yoast/yoast-original.svg` },
      { name: "SurferSEO", logo: `${DEVICON}/surferseo/surferseo-original.svg` },
      { name: "Clearscope", logo: `${DEVICON}/clearscope/clearscope-original.svg` },
      { name: "Schema Pro", logo: `${DEVICON}/schemapro/schemapro-original.svg` },
    ],
  },
  {
    label: "Technical",
    items: [
      { name: "Screaming Frog", logo: `${DEVICON}/screamingfrog/screamingfrog-original.svg` },
      { name: "GTmetrix", logo: `${DEVICON}/gtmetrix/gtmetrix-original.svg` },
      { name: "PageSpeed Insights", logo: `${DEVICON}/pagespeedinsights/pagespeedinsights-original.svg` },
      { name: "Lighthouse", logo: `${DEVICON}/google/google-original.svg` },
    ],
  },
  {
    label: "Link Building",
    items: [
      { name: "Ahrefs", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Moz", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "BuzzStream", logo: `${DEVICON}/buzzstream/buzzstream-original.svg` },
      { name: "Hunter.io", logo: `${DEVICON}/hunterio/hunterio-original.svg` },
    ],
  },
  {
    label: "Local SEO",
    items: [
      { name: "Google Business", logo: `${DEVICON}/google/google-original.svg` },
      { name: "BrightLocal", logo: `${DEVICON}/brightlocal/brightlocal-original.svg` },
      { name: "Moz Local", logo: `${DEVICON}/mozlocal/mozlocal-original.svg` },
      { name: "Whitespark", logo: `${DEVICON}/whitespark/whitespark-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Expert SEO Team",
    description:
      "Specialists across technical, content, and off-site SEO working as one pod — so strategy and execution stay aligned.",
  },
  {
    icon: ShieldCheck,
    title: "White-Hat Practices",
    description:
      "Guidelines-first tactics that protect your domain reputation and compound safely over years, not weeks of volatility.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    description:
      "Decisions grounded in analytics, Search Console, and competitive intelligence — not guesswork or vanity metrics alone.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description:
      "Roadmaps built for durable organic demand: authority, topical depth, and technical resilience as your site scales.",
  },
];
