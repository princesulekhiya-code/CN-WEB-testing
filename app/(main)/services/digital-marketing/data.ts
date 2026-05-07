import { BarChart3, Building2, Clock, CreditCard, Factory, Gamepad2, GraduationCap, HeartHandshake, Layers, Mail, Palette, Rocket, Search, Settings, Share2, ShoppingCart, Stethoscope, Target, TrendingUp, Truck, Users, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps, WhyNeedProps,} from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to services",
  titleTop: "Digital",
  titleBottom: "Marketing",
  description: "Fuel sustainable growth with analytics-led digital marketing. From organic search to precision-targeted campaigns, our specialists deliver measurable outcomes that move the revenue needle.",
  heroImage: "/images/stock/stock-964cb15f7d.jpg",
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

export const techCategories: TechCategory[] = [
  { label: "Analytics", items: [
    { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` },
    { name: "Mixpanel", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Hotjar", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Tableau", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
  ] },
  { label: "Advertising", items: [
    { name: "Google Ads", logo: `${DEVICON}/google/google-original.svg` },
    { name: "Meta Ads", logo: `${DEVICON}/facebook/facebook-original.svg` },
    { name: "LinkedIn Ads", logo: `${DEVICON}/linkedin/linkedin-original.svg` },
  ] },
  { label: "SEO", items: [
    { name: "SEMrush", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Ahrefs", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Moz", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Google Search Console", logo: `${DEVICON}/google/google-original.svg` },
  ] },
  { label: "Email & Automation", items: [
    { name: "Mailchimp", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "HubSpot", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "SendGrid", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
  ] },
  { label: "CMS & Design", items: [
    { name: "WordPress", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
    { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
    { name: "Canva", logo: `${DEVICON}/canva/canva-original.svg` },
  ] },
];


export const whyNeedProps: WhyNeedProps = {
  heading: "Digital Marketing Can Be",
  headingHighlight: "Growth-Defining",
  subtitle: "Data-driven marketing strategies that attract, engage, and convert your ideal customers across every digital touchpoint.",
  image: "/images/stock/stock-2fc5e686cd.jpg",
  imageAlt: "Digital marketing analytics dashboard",
  items: [
    { title: "Measurable ROI on Every Dollar", description: "Unlike traditional marketing, every digital campaign is trackable. Know exactly which channels, ads, and keywords generate revenue — and optimize spend in real time." },
    { title: "Targeted Audience Reach", description: "Reach your ideal customers based on demographics, interests, behavior, and intent. No more broadcasting to masses — speak directly to people ready to buy." },
    { title: "Organic Traffic That Compounds", description: "SEO-driven content creates assets that generate traffic for years. Unlike paid ads that stop when budget runs out, organic rankings build compound returns." },
    { title: "Multi-Channel Presence", description: "Search, social, email, content, and paid ads working together in a unified strategy. Meet your customers wherever they spend their digital time." },
    { title: "Real-Time Campaign Optimization", description: "Adjust messaging, targeting, and budgets instantly based on performance data. Traditional marketing takes months to pivot — digital marketing takes minutes." },
    { title: "Brand Authority Building", description: "Consistent content, thought leadership, and social proof establish your brand as an industry authority. Trust drives conversions more than any ad campaign." },
  ],
};

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Certified Marketing Experts", description: "Google, Meta, and HubSpot certified specialists with 5+ years average experience in performance marketing." },
  { icon: Clock, title: "Data-Driven Approach", description: "Every decision backed by analytics — real-time dashboards, A/B tests, and attribution modeling for measurable ROI." },
  { icon: TrendingUp, title: "Omnichannel Strategy", description: "Seamless campaigns across search, social, email, and content channels for maximum reach and engagement." },
  { icon: HeartHandshake, title: "Transparent Reporting", description: "Weekly updates, monthly deep-dives, and always-on dashboards so you know exactly where your budget goes." },];

export const caseStudyProjects: Project[] = [
  {
    id: "edtech-dm",
    tag: "Growth Marketing",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    company: "EdTech",
    industry: "Education Technology",
    headline: "Digital marketing strategy driving 10K+ active students to AI-powered e-learning platform.",
    challenge: "Low brand awareness in competitive edtech market. High customer acquisition cost.",
    solution: "SEO-driven content strategy, social media campaigns, and performance marketing achieving 10K+ active users.",
    duration: "60 days",
    metrics: [
      {
        value: 10,
        suffix: "K+",
        label: "Active students"
      },
      {
        value: 3,
        suffix: "x",
        label: "Organic traffic"
      },
      {
        value: 45,
        suffix: "%",
        label: "Lower CAC"
      }
    ],
    timeline: [
      {
        phase: "Market Research",
        detail: "Competitor analysis, audience segmentation"
      },
      {
        phase: "Content Strategy",
        detail: "SEO content, blog, social media"
      },
      {
        phase: "Paid Campaigns",
        detail: "Google Ads, social media ads"
      },
      {
        phase: "Optimization",
        detail: "A/B testing, conversion tuning"
      }
    ],
    accentColor: "#8b5cf6"
  }
];
