import { BarChart3, Building2, Clock, CreditCard, Factory, Gamepad2, GraduationCap, HeartHandshake, Layers, Mail, Palette, Rocket, Search, Settings, Share2, ShoppingCart, Stethoscope, Target, TrendingUp, Truck, Users, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to services",
  titleTop: "Digital",
  titleBottom: "Marketing",
  description: "Fuel sustainable growth with analytics-led digital marketing. From organic search to precision-targeted campaigns, our specialists deliver measurable outcomes that move the revenue needle.",
  heroImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Digital marketing services",
  topBadge: { icon: null as any, title: "300% ROI", subtitle: "Average return", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "10M+ Reach", subtitle: "Monthly impressions", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Comprehensive solutions tailored to your business needs." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A results-driven methodology that ensures quality, transparency, and on-time delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built with", headingWhite: "Modern Tools", subtitle: "Industry-leading tools and frameworks powering our solutions." };
export const ctaProps: CTAProps = { headingTop: "Ready to Boost Your", headingBottom: "Online Presence?", description: "Our team of marketing experts is here to help. We offer a wide range of digital marketing services tailored to meet your specific needs and goals." };

export const services: ServiceOffering[] = [
  { icon: Search, title: "Search Engine Optimization (SEO)", description: "Elevate your organic presence with in-depth technical audits, precision keyword mapping, content-level optimization, and high-authority link acquisition.", features: ["Technical SEO", "Keyword research", "Link building"], href: "/services/digital-marketing/seo" , logos: ["google/google-original.svg", "html5/html5-original.svg", "css3/css3-original.svg"], accent: "#4285F4"},
  { icon: Target, title: "Pay Per Click (PPC) Advertising", description: "High-performance Google, Meta, and LinkedIn campaigns — surgically targeted audiences, algorithmic bid tuning, and relentless A/B testing to squeeze every dollar.", features: ["Google & Meta Ads", "Bid optimization", "A/B testing"], href: "/services/digital-marketing/ppc-advertising" , logos: ["google/google-original.svg", "facebook/facebook-original.svg", "linkedin/linkedin-original.svg"], accent: "#34A853"},
  { icon: Share2, title: "Social Media Marketing (SMM)", description: "Grow brand authority and meaningful engagement through strategic storytelling, proactive community management, and viral-ready growth campaigns.", features: ["Content strategy", "Community management", "Growth campaigns"], href: "/services/digital-marketing/social-media-marketing" , logos: ["facebook/facebook-original.svg", "twitter/twitter-original.svg", "linkedin/linkedin-original.svg"], accent: "#1DA1F2"},
  { icon: Mail, title: "Email Marketing", description: "Behavior-triggered sequences, polished newsletter campaigns, and hyper-personalized drip flows that nurture leads and deepen customer lifetime value.", features: ["Automation flows", "Newsletter design", "List segmentation"], href: "/services/digital-marketing/email-marketing" , logos: ["nodejs/nodejs-original.svg", "html5/html5-original.svg", "css3/css3-original.svg"], accent: "#F4B400"},
  { icon: TrendingUp, title: "Content Writing & Marketing", description: "SEO-rich blog posts, thought-leadership whitepapers, and persuasive web copy that draw your ideal audience and build steady organic momentum.", features: ["Blog & articles", "Copywriting", "Content calendar"], href: "/services/digital-marketing/content-marketing" , logos: ["wordpress/wordpress-original.svg", "html5/html5-original.svg", "figma/figma-original.svg"], accent: "#EA4335"},
  { icon: BarChart3, title: "App Store Optimization (ASO)", description: "Maximize app discoverability and install rates through optimized titles, keyword coverage, compelling screenshots, and proactive review management.", features: ["Keyword optimization", "Visual assets", "Review strategy"], href: "/services/digital-marketing/app-store-optimization" , logos: ["apple/apple-original.svg", "android/android-original.svg", "google/google-original.svg"], accent: "#4EB3E8"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Audit & Discovery", description: "Analyzing your current digital presence, competitors, SEO health, and market opportunities.", icon: Search },
  { step: "02", title: "Strategy & Planning", description: "Building a data-driven marketing plan aligned with your business objectives and target audience.", icon: Settings },
  { step: "03", title: "Content & Creatives", description: "Producing high-quality content, ad creatives, landing pages, and copy for all channels.", icon: Palette },
  { step: "04", title: "Campaign Launch", description: "Deploying campaigns across search, social, email, and paid channels with precise targeting.", icon: Rocket },
  { step: "05", title: "Optimization & Testing", description: "Continuous A/B testing, bid adjustments, funnel analysis, and content iteration for peak performance.", icon: TrendingUp },
  { step: "06", title: "Reporting & Insights", description: "Transparent reporting with clear KPIs, ROI tracking, attribution modeling, and strategic recommendations.", icon: BarChart3 },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Certified Marketing Experts", description: "Google, Meta, and HubSpot certified specialists with 5+ years average experience in performance marketing." },
  { icon: Clock, title: "Data-Driven Approach", description: "Every decision backed by analytics — real-time dashboards, A/B tests, and attribution modeling for measurable ROI." },
  { icon: TrendingUp, title: "Omnichannel Strategy", description: "Seamless campaigns across search, social, email, and content channels for maximum reach and engagement." },
  { icon: HeartHandshake, title: "Transparent Reporting", description: "Weekly updates, monthly deep-dives, and always-on dashboards so you know exactly where your budget goes." },];
