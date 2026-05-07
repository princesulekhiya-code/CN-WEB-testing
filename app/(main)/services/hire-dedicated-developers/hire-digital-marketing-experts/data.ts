import { Megaphone, Search, Target, BarChart3, PenTool, Share2, ClipboardList, Settings, Palette, Code2, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/hire-dedicated-developers",
  backLabel: "Back to Hire Dedicated Developers",
  titleTop: "Hire Digital Marketing",
  titleBottom: "Experts",
  description: "Accelerate growth with AI-driven digital marketers specializing in SEO, PPC, social media, content marketing, and performance analytics for measurable ROI.",
  heroImage: "/images/stock/stock-096e5f6a26.jpg",
  heroImageAlt: "Digital Marketing Analytics",
  topBadge: { icon: null as any, title: "Growth Team", subtitle: "SEO & PPC", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Certified", subtitle: "Google & Meta", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 500, suffix: "+", label: "Developers Placed" },
  { value: 80, suffix: "+", label: "Active Teams" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 30, suffix: "+", label: "Technologies" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Digital Marketing Experts for", headingWhite: "Hire", subtitle: "Specialists across every digital marketing channel — from organic search to paid advertising and social media growth." };
export const processHeading: ServicePageSectionProps = { headingGray: "How to Hire Marketing", headingWhite: "Experts", subtitle: "A streamlined process to get certified digital marketers driving results for your business." };
export const techHeading: ServicePageSectionProps = { headingGray: "Marketing Tools &", headingWhite: "Platforms", subtitle: "Industry-leading SEO, advertising, analytics, and social media tools our marketers work with." };
export const ctaProps: CTAProps = { headingTop: "Ready to Hire", headingBottom: "Marketing Experts?", description: "Get certified SEO, PPC, and social media marketers driving measurable results within 48 hours." };

export const services: ServiceOffering[] = [{ icon: Search, title: "SEO Specialists", description: "Technical SEO experts who optimize site architecture, content strategy, and link building for sustained organic growth and visibility.", features: ["Technical SEO", "Content strategy", "Link building"] },
  { icon: Target, title: "PPC & Paid Ads Experts", description: "Google Ads, Meta Ads, and LinkedIn campaign managers who maximize ROI through data-driven bidding and audience targeting.", features: ["Google Ads", "Meta Ads", "ROI optimization"] },
  { icon: Share2, title: "Social Media Marketers", description: "Platform-specific strategists who build engaged communities, create viral content, and drive measurable social media growth.", features: ["Community building", "Content creation", "Platform strategy"] },
  { icon: PenTool, title: "Content Marketing Experts", description: "Content strategists and writers who produce SEO-optimized blogs, whitepapers, case studies, and thought leadership content.", features: ["Blog & articles", "Whitepapers", "SEO content"] },
  { icon: BarChart3, title: "Analytics & CRO Specialists", description: "Data analysts who set up tracking, build dashboards, run A/B tests, and optimize conversion funnels for measurable growth.", features: ["GA4 & analytics", "A/B testing", "CRO"] },
  { icon: Megaphone, title: "ASO & App Marketing", description: "App Store Optimization experts who boost app visibility, downloads, and retention through keyword optimization and creative testing.", features: ["App Store SEO", "Creative testing", "Retention strategy"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Define Marketing Goals", description: "Share your business objectives, target audience, channels, and KPIs for precise marketing talent matching.", icon: ClipboardList },
  { step: "02", title: "Review Expert Profiles", description: "Receive portfolios with campaign results, ROI metrics, and industry experience from vetted digital marketers.", icon: Settings },
  { step: "03", title: "Strategy Interview", description: "Evaluate strategic thinking, platform expertise, and analytical depth through marketing case study discussions.", icon: Palette },
  { step: "04", title: "Rapid Onboarding", description: "Marketing experts access your analytics, ad accounts, and brand guidelines within 48 hours.", icon: Rocket },
  { step: "05", title: "Campaign Execution", description: "Data-driven campaign launches with weekly reporting, optimization cycles, and transparent performance tracking.", icon: Code2 },
  { step: "06", title: "Scale & Optimize", description: "Expand channels, add specialists, or shift strategy as your marketing maturity and budget grow.", icon: ShieldCheck },];

export const techCategories: TechCategory[] = [{ label: "SEO Tools", items: [
      { name: "Ahrefs", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "SEMrush", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Moz", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Screaming Frog", logo: `${DEVICON}/screamingfrog/screamingfrog-original.svg` },
      { name: "Google Search Console", logo: `${DEVICON}/google/google-original.svg` }
    ] },
  { label: "Advertising", items: [
      { name: "Google Ads", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Meta Ads", logo: `${DEVICON}/facebook/facebook-original.svg` },
      { name: "LinkedIn Ads", logo: `${DEVICON}/linkedin/linkedin-original.svg` },
      { name: "TikTok Ads", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Programmatic", logo: `${DEVICON}/programmatic/programmatic-original.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "GA4", logo: `${DEVICON}/ga4/ga4-original.svg` },
      { name: "Google Tag Manager", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Looker Studio", logo: `${DEVICON}/lookerstudio/lookerstudio-original.svg` }
    ] },
  { label: "Social Media", items: [
      { name: "Hootsuite", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Buffer", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Sprout Social", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Later", logo: `${DEVICON}/later/later-original.svg` },
      { name: "Canva", logo: `${DEVICON}/canva/canva-original.svg` }
    ] },
  { label: "CRM & Email", items: [
      { name: "HubSpot", logo: `${DEVICON}/hubspot/hubspot-original.svg` },
      { name: "Mailchimp", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Klaviyo", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "ActiveCampaign", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "SendGrid", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Certified Marketers", description: "Google, Meta, and HubSpot certified professionals with proven track records across industries." },
  { icon: TrendingUp, title: "Data-Driven Results", description: "Every campaign decision backed by analytics — delivering measurable ROI, not vanity metrics." },
  { icon: Zap, title: "48-Hour Onboarding", description: "From profile approval to campaign access in under 48 hours — start driving results immediately." },
  { icon: HeartHandshake, title: "Transparent Reporting", description: "Weekly performance dashboards, optimization recommendations, and clear communication at every stage." },];
