import { ShoppingCart, Globe, Palette, CreditCard, Package, Plug, ClipboardList, Settings, Code2, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/hire-dedicated-developers",
  backLabel: "Back to Hire Dedicated Developers",
  titleTop: "Hire eCommerce &",
  titleBottom: "CMS Experts",
  description: "Modernize your online presence with experts in WordPress, Shopify, Magento, and custom CMS platforms. Build conversion-focused storefronts with seamless integrations and performance-driven development.",
  heroImage: "/images/stock/stock-91acafd5b2.jpg",
  heroImageAlt: "E-Commerce Platform",
  topBadge: { icon: null as any, title: "E-Com Experts", subtitle: "Shopify & WP", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "300+ Stores", subtitle: "Launched", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 500, suffix: "+", label: "Developers Placed" },
  { value: 80, suffix: "+", label: "Active Teams" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 30, suffix: "+", label: "Technologies" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "eCommerce & CMS Experts for", headingWhite: "Hire", subtitle: "Platform-certified developers for Shopify, Magento, WordPress, WooCommerce, and headless CMS architectures." };
export const processHeading: ServicePageSectionProps = { headingGray: "How to Hire eCommerce", headingWhite: "Experts", subtitle: "From platform assessment to conversion optimization — a streamlined hiring process for eCommerce talent." };
export const techHeading: ServicePageSectionProps = { headingGray: "eCommerce & CMS", headingWhite: "Technologies", subtitle: "Platforms, payment systems, and tools our eCommerce and CMS developers work with daily." };
export const ctaProps: CTAProps = { headingTop: "Ready to Hire", headingBottom: "eCommerce Experts?", description: "Get certified Shopify, Magento, and WordPress developers building your digital storefront within 48 hours." };

export const services: ServiceOffering[] = [{ icon: ShoppingCart, title: "Shopify Developers", description: "Custom Shopify themes, apps, and Liquid template experts building conversion-focused storefronts with seamless checkout flows.", features: ["Custom themes", "Shopify Apps", "Liquid templates"] },
  { icon: Package, title: "Magento Developers", description: "Adobe Commerce and Magento 2 specialists building enterprise eCommerce with multi-store, B2B, and complex catalog capabilities.", features: ["Magento 2", "B2B commerce", "Multi-store"] },
  { icon: Globe, title: "WordPress Developers", description: "Custom themes, plugins, and headless WordPress experts building performant, SEO-optimized content management solutions.", features: ["Custom themes", "Plugin development", "Headless CMS"] },
  { icon: CreditCard, title: "WooCommerce Developers", description: "WooCommerce specialists extending WordPress into full-featured eCommerce platforms with payment gateways and inventory management.", features: ["WooCommerce", "Payment gateways", "Inventory mgmt"] },
  { icon: Palette, title: "Custom CMS Developers", description: "Strapi, Contentful, and Sanity experts building headless CMS architectures with custom content models and API-first delivery.", features: ["Strapi & Contentful", "Headless architecture", "Custom models"] },
  { icon: Plug, title: "eCommerce Integration Specialists", description: "ERP, payment, shipping, and marketing tool integrations connecting your eCommerce stack for automated, unified operations.", features: ["ERP integration", "Payment APIs", "Shipping sync"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Define eCommerce Needs", description: "Share your platform preference, product catalog complexity, integration requirements, and growth targets.", icon: ClipboardList },
  { step: "02", title: "Review Expert Profiles", description: "Receive portfolios with live store examples, conversion metrics, and platform-specific certifications.", icon: Settings },
  { step: "03", title: "Platform Assessment", description: "Evaluate platform expertise, customization depth, and performance optimization skills through technical discussions.", icon: Palette },
  { step: "04", title: "Rapid Onboarding", description: "eCommerce developers set up with your store access, staging environments, and CI pipelines within 48 hours.", icon: Rocket },
  { step: "05", title: "Agile Development", description: "Theme customization, app development, and integration work delivered in transparent agile sprints.", icon: Code2 },
  { step: "06", title: "Scale & Optimize", description: "Add specialists for SEO, performance, or new platform migrations as your digital storefront evolves.", icon: ShieldCheck },];

export const techCategories: TechCategory[] = [{ label: "eCommerce", items: [
      { name: "Shopify", logo: `${DEVICON}/shopify/shopify-original.svg` },
      { name: "Magento 2", logo: `${DEVICON}/magento/magento-original.svg` },
      { name: "WooCommerce", logo: `${DEVICON}/woocommerce/woocommerce-original.svg` },
      { name: "BigCommerce", logo: `${DEVICON}/bigcommerce/bigcommerce-original.svg` },
      { name: "PrestaShop", logo: `${DEVICON}/prestashop/prestashop-original.svg` }
    ] },
  { label: "CMS Platforms", items: [
      { name: "WordPress", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "Strapi", logo: `${DEVICON}/strapi/strapi-original.svg` },
      { name: "Contentful", logo: `${DEVICON}/contentful/contentful-original.svg` },
      { name: "Sanity", logo: `${DEVICON}/sanity/sanity-original.svg` },
      { name: "Ghost", logo: `${DEVICON}/ghost/ghost-original.svg` },
      { name: "Drupal", logo: `${DEVICON}/drupal/drupal-original.svg` }
    ] },
  { label: "Frontend", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Liquid", logo: `${DEVICON}/liquid/liquid-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` }
    ] },
  { label: "Payments", items: [
      { name: "Stripe", logo: `${DEVICON}/stripe/stripe-original.svg` },
      { name: "PayPal", logo: `${DEVICON}/paypal/paypal-original.svg` },
      { name: "Razorpay", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Square", logo: `${DEVICON}/square/square-original.svg` },
      { name: "Braintree", logo: `${DEVICON}/braintree/braintree-original.svg` },
      { name: "Apple Pay", logo: `${DEVICON}/apple/apple-original.svg` }
    ] },
  { label: "Tools", items: [
      { name: "Klaviyo", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Yotpo", logo: `${DEVICON}/yotpo/yotpo-original.svg` },
      { name: "ShipStation", logo: `${DEVICON}/shipstation/shipstation-original.svg` },
      { name: "Zapier", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Algolia", logo: `${DEVICON}/algolia/algolia-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Certified Platform Experts", description: "Shopify Partners, Magento Certified, and WordPress specialists with proven eCommerce portfolios." },
  { icon: TrendingUp, title: "Conversion-Focused", description: "Developers who optimize for conversions — fast load times, smooth checkouts, and mobile-first storefronts." },
  { icon: Zap, title: "48-Hour Onboarding", description: "From profile approval to productive store development in under 48 hours with staging access." },
  { icon: HeartHandshake, title: "Full-Stack eCommerce", description: "Beyond templates — backend logic, payment integration, inventory sync, and analytics setup included." },];
