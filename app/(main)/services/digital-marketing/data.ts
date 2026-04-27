import { Search, Target, Share2, Mail, TrendingUp, BarChart3, Zap, Layers, Palette, Settings, Rocket, Users, Clock, HeartHandshake, ShoppingCart, CreditCard, Stethoscope, GraduationCap, Truck, Building2, Factory, Gamepad2 } from "lucide-react";
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

export const services: ServiceOffering[] = [];

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
