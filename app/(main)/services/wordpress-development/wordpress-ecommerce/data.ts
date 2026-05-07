import { ShoppingCart, CreditCard, Package, Truck, Users, BarChart3, ClipboardList, Palette, ClipboardCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/wordpress-development",
  backLabel: "Back to WordPress Development",
  titleTop: "WordPress",
  titleBottom: "eCommerce",
  description: "Powered with thousands of cross-functional plugins, our eCommerce development makes your online web store feature-rich, engaging, and profitable.",
  heroImage: "/images/stock/stock-91acafd5b2.jpg",
  heroImageAlt: "WordPress Ecommerce & WooCommerce",
  topBadge: { icon: null as any, title: "WooCommerce", subtitle: "Full setup", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "200+ Stores", subtitle: "Live & earning", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "WP Sites Built" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "WordPress eCommerce", headingWhite: "Services", subtitle: "WooCommerce-first builds with payments, catalog, logistics, memberships, and analytics orchestrated for sustainable growth." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our WordPress eCommerce", headingWhite: "Process", subtitle: "Store planning through launch and optimization — structured to protect revenue during migration and scale." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Commerce platforms, payment processors, frontends, APIs, and analytics stacks we integrate for WordPress storefronts." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "Online Store?", description: "Tell us about your catalog, markets, and fulfillment model — we will chart a WooCommerce path that scales with demand." };

export const services: ServiceOffering[] = [{
    icon: ShoppingCart,
    title: "WooCommerce Development",
    description:
      "Store architecture tailored to your catalog complexity — variable products, bundles, B2B pricing, and marketplace patterns when needed. Checkout flows are optimized for trust signals, speed, and mobile-first behavior.",
    features: ["Catalog modeling", "Cart & checkout UX", "Inventory rules", "Email automation hooks"],
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description:
      "Stripe, PayPal, regional wallets, and subscription engines wired with webhooks, idempotency, and reconciliation reporting. Failed payment recovery and SCA compliance are handled without surprising customers at checkout.",
    features: ["Tokenization", "Webhook reliability", "Refunds & disputes", "PCI-aware patterns"],
  },
  {
    icon: Package,
    title: "Product Catalog Management",
    description:
      "Bulk import pipelines, rich media, faceted filters, and SEO-friendly product URLs. Merchandising tools empower teams to run promos without developer bottlenecks.",
    features: ["CSV & API sync", "Attribute facets", "Structured data", "Preview on staging"],
  },
  {
    icon: Truck,
    title: "Shipping & Tax Configuration",
    description:
      "Carrier accounts, live rates, dimensional weight, and tax nexus rules configured with audit trails. International duties and label printing integrate where your fulfillment stack requires.",
    features: ["Multi-carrier", "Zones & classes", "Tax services", "Fulfillment webhooks"],
  },
  {
    icon: Users,
    title: "Subscription & Membership",
    description:
      "Recurring billing, member-only content, and tiered access aligned with your retention strategy. Dunning workflows and proration policies are documented for finance and support teams.",
    features: ["Woo Subscriptions", "Member portals", "Content gating", "Churn analytics hooks"],
  },
  {
    icon: BarChart3,
    title: "eCommerce Analytics",
    description:
      "Event tracking, funnel dashboards, and cohort views that connect ad spend to revenue. Server-side tagging options improve accuracy while respecting privacy expectations.",
    features: ["GA4 & pixels", "Server events", "Product-level ROI", "CRO experiments"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Store Planning",
    description:
      "SKU strategy, audience segments, and operational constraints shape technical choices early. We align on KPIs, catalog size, and peak traffic assumptions before wireframes begin.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Design",
    description:
      "Product listing templates, PDP storytelling, and checkout ergonomics are designed for conversion while staying on brand. Mobile journeys receive explicit attention — most revenue touches small screens first.",
    icon: Palette,
  },
  {
    step: "03",
    title: "WooCommerce Setup",
    description:
      "Core store configuration, payment profiles, shipping matrices, and email templates are implemented with staging parity. Data migrations run with checksums and sampling before go-live.",
    icon: ShoppingCart,
  },
  {
    step: "04",
    title: "Payment Integration",
    description:
      "Gateways are tested against edge cases — partial captures, refunds, and subscription renewals. Monitoring hooks alert your team when transaction health drifts from baseline.",
    icon: CreditCard,
  },
  {
    step: "05",
    title: "Testing",
    description:
      "End-to-end purchase paths, load tests on checkout, and accessibility reviews protect revenue during campaigns. Fraud rules tuned with realistic order samples reduce false positives.",
    icon: ClipboardCheck,
  },
  {
    step: "06",
    title: "Launch & Optimization",
    description:
      "Progressive rollout, observability, and post-launch experiments iterate toward stronger AOV and conversion. Playbooks capture runbooks for peak sales events.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{
    label: "eCommerce",
    items: [
      { name: "WooCommerce", logo: `${DEVICON}/woocommerce/woocommerce-original.svg` },
      { name: "Shopify", logo: `${DEVICON}/shopify/shopify-original.svg` },
      { name: "Magento", logo: `${DEVICON}/magento/magento-original.svg` },
      { name: "BigCommerce", logo: `${DEVICON}/bigcommerce/bigcommerce-original.svg` }
    ],
  },
  {
    label: "Payments",
    items: [
      { name: "Stripe", logo: `${DEVICON}/stripe/stripe-original.svg` },
      { name: "PayPal", logo: `${DEVICON}/paypal/paypal-original.svg` },
      { name: "Square", logo: `${DEVICON}/square/square-original.svg` },
      { name: "Razorpay", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Elementor", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "Custom themes", logo: `${DEVICON}/customthemes/customthemes-original.svg` }
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
      { name: "WordPress REST API", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` }
    ],
  },
  {
    label: "Analytics",
    items: [
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "WooCommerce Analytics", logo: `${DEVICON}/woocommerce/woocommerce-original.svg` }
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "eCommerce Expertise",
    description:
      "Practitioners who have shipped high-volume WooCommerce stacks — we understand carts, caches, and checkout edge cases deeply.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Focused",
    description:
      "UX, performance, and measurement designed around revenue — not vanity traffic metrics that mask funnel leaks.",
  },
  {
    icon: Zap,
    title: "Fast Store Setup",
    description:
      "Opinionated scaffolding and reusable integrations accelerate time-to-revenue while leaving room for custom differentiation.",
  },
  {
    icon: HeartHandshake,
    title: "Revenue Growth Partner",
    description:
      "Ongoing experiments, merchandising support, and reliability care aligned with your quarterly targets.",
  },];
