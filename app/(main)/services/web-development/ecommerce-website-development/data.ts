import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ShoppingCart, CreditCard, Package, TrendingUp, Wrench, ClipboardList, Palette, ShieldCheck, Rocket, Code2, HeartHandshake, Globe, Store } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/web-development",
  backLabel: "Back to Web Development",
  titleTop: "E-Commerce Website",
  titleBottom: "Development",
  description: "Scalable online stores with secure payments, inventory management, and conversion-optimized shopping experiences.",
  heroImage: "/images/stock/stock-91acafd5b2.jpg",
  heroImageAlt: "E-Commerce",
  topBadge: { icon: null as any, title: "E-Commerce", subtitle: "Conversion-focused", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "3x Revenue", subtitle: "Growth-driven", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 120, suffix: "+", label: "Stores Launched" },
  { value: 45, suffix: "+", label: "Happy Merchants" },
  { value: 35, suffix: "%", label: "Avg Conversion Lift" },
  { value: 99, suffix: "%", label: "Uptime Guaranteed" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "Storefronts and marketplaces with payments, inventory, and analytics wired for growth — not just a theme swap." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our E-Commerce", headingWhite: "Development Process", subtitle: "From strategy to launch — structured delivery with payments, inventory, and QA treated as first-class concerns." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Commerce platforms, frontends, APIs, payments, and growth tooling for reliable online retail." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "Online Store?", description: "Partner with us for conversion-focused commerce builds, secure payments, and integrations that scale with your catalog." };

export const services: ServiceOffering[] = [{
    icon: Code2,
    title: "Custom E-Commerce Development",
    description: "Headless or monolith stores with catalog, checkout, and account flows engineered for your catalog complexity.",
    features: ["Custom catalog", "Checkout UX", "Accounts & orders"],
  },
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    description: "Themes, sections, apps, and Shopify Plus workflows — from launch to ongoing conversion optimization.",
    features: ["Liquid & Hydrogen", "Apps & APIs", "Plus features"],
  },
  {
    icon: Globe,
    title: "WooCommerce Development",
    description: "WordPress + WooCommerce builds with subscriptions, memberships, and ERP hooks where needed.",
    features: ["WP ecosystem", "Subscriptions", "ERP hooks"],
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description: "Stripe, PayPal, BNPL, and regional providers with PCI-aware patterns and reconciliation tooling.",
    features: ["Tokenization", "Webhooks", "Reconciliation"],
  },
  {
    icon: Store,
    title: "Marketplace Development",
    description: "Multi-vendor marketplaces with commissions, payouts, disputes, and seller onboarding at scale.",
    features: ["Vendor onboarding", "Payouts", "Trust & safety"],
  },
  {
    icon: Wrench,
    title: "E-Commerce Maintenance",
    description: "Cart health monitoring, security patches, catalog ops support, and seasonal campaign readiness.",
    features: ["Uptime", "Patching", "Campaign support"],
  },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Strategy", description: "Positioning, catalog structure, fulfillment model, and KPIs that shape the storefront and integrations.", icon: ClipboardList },
  { step: "02", title: "Design", description: "Conversion-focused UX, component libraries, and brand systems that hold up across devices.", icon: Palette },
  { step: "03", title: "Development", description: "Store build, ERP/CRM integrations, and feature flags so you can stage risky changes safely.", icon: Code2 },
  { step: "04", title: "Payment Setup", description: "Processor configuration, tax/shipping rules, fraud tooling, and reconciliation dashboards.", icon: CreditCard },
  { step: "05", title: "Testing", description: "Order flows, edge cases, load tests, and payment sandbox drills before traffic arrives.", icon: ShieldCheck },
  { step: "06", title: "Launch", description: "DNS, monitoring, analytics validation, and hypercare through the first revenue week.", icon: Rocket },];

export const techCategories: TechCategory[] = [{
    label: "Platforms",
    items: [
      { name: "WordPress", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "WooCommerce", logo: `${DEVICON}/woocommerce/woocommerce-original.svg` },
      { name: "Magento", logo: `${DEVICON}/magento/magento-original.svg` },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Laravel", logo: `${DEVICON}/laravel/laravel-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{ icon: TrendingUp, title: "Conversion Experts", description: "We optimize funnels, page speed, and trust signals — not just ship templates." },
  { icon: ShieldCheck, title: "Secure Payments", description: "PCI-minded integrations, least-privilege keys, and observability around money-moving paths." },
  { icon: Package, title: "Scalable Architecture", description: "Catalog, inventory, and checkout designed for growth spikes and international expansion." },
  { icon: HeartHandshake, title: "Growth Support", description: "Experimentation, merchandising support, and roadmap delivery after go-live." },];
