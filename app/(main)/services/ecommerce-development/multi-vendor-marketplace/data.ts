import { Users, Wallet, LayoutGrid, Star, Route, BarChart3, Compass, Boxes, Code2, CreditCard, TestTube2, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ecommerce-development",
  backLabel: "Back to eCommerce Development",
  titleTop: "Multi-Vendor",
  titleBottom: "Marketplace",
  description: "Reliable multi-vendor marketplaces with streamlined experiences for buyers and sellers with multiple payment gateways.",
  heroImage: "/images/stock/stock-6483454b17.jpg",
  heroImageAlt: "Multi-Vendor Marketplace",
  topBadge: { icon: null as any, title: "Multi-Vendor", subtitle: "Marketplace", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "10K+ Sellers", subtitle: "Platform scale", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 180, suffix: "+", label: "Stores Built" },
  { value: 35, suffix: "%", label: "Conversion Lift" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Merchants Served" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Multi-Vendor Marketplace", headingWhite: "Services", subtitle: "Operator tools, seller experiences, and payments engineered for trust and scale." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "Strategy through scale — how we launch dependable multi-vendor marketplaces." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Commerce cores, marketplace payments, search, infra, and analytics wired for operators and sellers." };
export const ctaProps: CTAProps = { headingTop: "Scale Your", headingBottom: "Marketplace", description: "Launch a multi-vendor platform buyers and sellers trust — with payouts, search, and analytics built in." };

export const services: ServiceOffering[] = [{ icon: Users, title: "Vendor Management Portal", description: "Onboarding, contracts, and performance dashboards so operators can govern seller quality at scale.", features: ["Seller KYC", "Policies", "Performance"] },
  { icon: Wallet, title: "Commission & Payout System", description: "Configurable fees, holds, and payout schedules with audit trails and dispute hooks.", features: ["Tiered fees", "Payout rails", "Audit logs"] },
  { icon: LayoutGrid, title: "Product Listing Engine", description: "Bulk uploads, moderation queues, and deduplication to keep catalogs clean across vendors.", features: ["Bulk tools", "Moderation", "Dedup rules"] },
  { icon: Star, title: "Review & Rating System", description: "Verified purchases, helpfulness signals, and moderation to protect buyer trust.", features: ["Verified reviews", "Moderation", "Seller replies"] },
  { icon: Route, title: "Order Routing & Fulfillment", description: "Split shipments, SLA tracking, and carrier integrations across multi-vendor carts.", features: ["Split orders", "SLAs", "Tracking"] },
  { icon: BarChart3, title: "Analytics Dashboard", description: "Executive and vendor views for GMV, cohorts, and category performance.", features: ["GMV & AOV", "Cohorts", "Exports"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Marketplace Strategy", description: "Business model, fee structure, and policies aligned to your category and region.", icon: Compass },
  { step: "02", title: "Vendor Architecture", description: "Data model for sellers, catalogs, payouts, and permissions across channels.", icon: Boxes },
  { step: "03", title: "Development", description: "Iterative build with sandbox payments and vendor test accounts.", icon: Code2 },
  { step: "04", title: "Payment Setup", description: "Connect, escrow, or split flows validated end-to-end in production-like environments.", icon: CreditCard },
  { step: "05", title: "Testing", description: "Load, fraud, and reconciliation testing before opening the marketplace.", icon: TestTube2 },
  { step: "06", title: "Launch & Scale", description: "Phased seller acquisition, monitoring, and capacity planning as volume grows.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Platforms", items: [
      { name: "Magento", logo: `${DEVICON}/magento/magento-original.svg` },
      { name: "Shopify Plus", logo: `${DEVICON}/shopifyplus/shopifyplus-original.svg` },
      { name: "WooCommerce", logo: `${DEVICON}/woocommerce/woocommerce-original.svg` },
      { name: "Custom", logo: `${DEVICON}/custom/custom-original.svg` },
      { name: "Medusa", logo: `${DEVICON}/medusa/medusa-original.svg` }
    ] },
  { label: "Payments", items: [
      { name: "Stripe Connect", logo: `${DEVICON}/stripeconnect/stripeconnect-original.svg` },
      { name: "PayPal", logo: `${DEVICON}/paypal/paypal-original.svg` },
      { name: "Razorpay", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Escrow", logo: `${DEVICON}/escrow/escrow-original.svg` },
      { name: "Split Payments", logo: `${DEVICON}/splitpayments/splitpayments-original.svg` }
    ] },
  { label: "Search", items: [
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
      { name: "Algolia", logo: `${DEVICON}/algolia/algolia-original.svg` },
      { name: "MeiliSearch", logo: `${DEVICON}/meilisearch/meilisearch-original.svg` },
      { name: "Typesense", logo: `${DEVICON}/typesense/typesense-original.svg` },
      { name: "Solr", logo: `${DEVICON}/solr/solr-original.svg` }
    ] },
  { label: "Infrastructure", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "CDN", logo: `${DEVICON}/cdn/cdn-original.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "GA4", logo: `${DEVICON}/ga4/ga4-original.svg` },
      { name: "Segment", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Metabase", logo: `${DEVICON}/metabase/metabase-original.svg` },
      { name: "Looker", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Agile Development", description: "Rapid development and deployment with agile methodology, advanced tools, and high-quality products within deadline." },
  { icon: TrendingUp, title: "Customer-Centric", description: "Client feedback as priority — customer-centric approach leading to quality delivery within timelines." },
  { icon: Zap, title: "NDA & Security", description: "Client data confidentiality with standard NDA policies maintaining sensitivity and secrecy of shared details." },
  { icon: HeartHandshake, title: "Flexible Approach", description: "Multiple development methodologies under a flexible approach — every project gets unique tactics and tech stack." },];
