import { Store, Building2, ShoppingBag, Layers, Package, ClipboardList, Boxes, Palette, Code2, TestTube2, Rocket, Gauge, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ecommerce-development",
  backLabel: "Back to eCommerce Development",
  titleTop: "eCommerce",
  titleBottom: "Online Platform",
  description: "Advanced, scalable B2B and B2C eCommerce online stores leveraging the latest tech stack and custom functionalities.",
  heroImage: "/images/stock/stock-096e5f6a26.jpg",
  heroImageAlt: "Ecommerce Platform Development",
  topBadge: { icon: null as any, title: "Full Platform", subtitle: "End-to-end", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "500+ Stores", subtitle: "Launched", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 180, suffix: "+", label: "Stores Built" },
  { value: 35, suffix: "%", label: "Conversion Lift" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Merchants Served" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "eCommerce Online Platform", headingWhite: "Services", subtitle: "End-to-end capabilities to launch and grow B2B and B2C stores with custom workflows and integrations." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "From discovery to launch — a structured path for your eCommerce online platform." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Platforms, frontends, backends, data stores, and cloud foundations we use to ship resilient stores." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "Online Store?", description: "Partner with us to launch a scalable B2B or B2C eCommerce platform tailored to your business." };

export const services: ServiceOffering[] = [{ icon: Store, title: "Custom Store Development", description: "Tailored storefronts with modular features, performance budgets, and integrations aligned to your catalog and fulfillment model.", features: ["Custom themes", "Module extensions", "Performance tuning"] },
  { icon: Building2, title: "B2B Commerce Portal", description: "Account-based pricing, quotes, approvals, and role-based access for wholesale and distributor workflows.", features: ["Contract pricing", "Approval flows", "Bulk ordering"] },
  { icon: ShoppingBag, title: "B2C Shopping Experience", description: "Conversion-focused journeys with search, recommendations, and frictionless paths from browse to purchase.", features: ["Search & filters", "Recommendations", "Guest checkout"] },
  { icon: Layers, title: "Marketplace Integration", description: "Connect sellers, sync inventory, and orchestrate payouts alongside your core storefront operations.", features: ["Seller onboarding", "Inventory sync", "Payout hooks"] },
  { icon: Package, title: "Product Catalog Management", description: "Structured attributes, variants, bundles, and merchandising rules that scale as your assortment grows.", features: ["Variants & bundles", "Merchandising", "Bulk import"] },
  { icon: ClipboardList, title: "Order Management System", description: "End-to-end order lifecycle with status tracking, partial shipments, returns, and customer notifications.", features: ["Order states", "Returns & RMA", "Notifications"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Requirements Analysis", description: "Stakeholder workshops, journey mapping, and success metrics to lock scope and integrations.", icon: ClipboardList },
  { step: "02", title: "Platform Architecture", description: "Solution topology, data model, APIs, and hosting choices documented for build and sign-off.", icon: Boxes },
  { step: "03", title: "UI/UX Design", description: "Wireframes and high-fidelity UI with mobile-first patterns and accessibility considerations.", icon: Palette },
  { step: "04", title: "Development", description: "Iterative implementation with reviews, feature flags, and staging environments for safe rollout.", icon: Code2 },
  { step: "05", title: "QA & Testing", description: "Functional, regression, load, and payment sandbox validation before production.", icon: TestTube2 },
  { step: "06", title: "Launch & Support", description: "Go-live checklist, monitoring, and post-launch enhancements as traffic grows.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Platforms", items: [
      { name: "Shopify", logo: `${DEVICON}/shopify/shopify-original.svg` },
      { name: "Magento", logo: `${DEVICON}/magento/magento-original.svg` },
      { name: "WooCommerce", logo: `${DEVICON}/woocommerce/woocommerce-original.svg` },
      { name: "BigCommerce", logo: `${DEVICON}/bigcommerce/bigcommerce-original.svg` },
      { name: "OpenCart", logo: `${DEVICON}/opencart/opencart-original.svg` }
    ] },
  { label: "Frontend", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Laravel", logo: `${DEVICON}/laravel/laravel-original.svg` },
      { name: "Ruby on Rails", logo: `${DEVICON}/rails/rails-plain.svg` }
    ] },
  { label: "Database", items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` }
    ] },
  { label: "Cloud", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Cloudflare", logo: `${DEVICON}/cloudflare/cloudflare-original.svg` },
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Agile Development", description: "Rapid development and deployment with agile methodology, advanced tools, and high-quality products within deadline." },
  { icon: TrendingUp, title: "Customer-Centric", description: "Client feedback as priority — customer-centric approach leading to quality delivery within timelines." },
  { icon: Zap, title: "NDA & Security", description: "Client data confidentiality with standard NDA policies maintaining sensitivity and secrecy of shared details." },
  { icon: HeartHandshake, title: "Flexible Approach", description: "Multiple development methodologies under a flexible approach — every project gets unique tactics and tech stack." },];
