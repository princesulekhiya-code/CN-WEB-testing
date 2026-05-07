import { Store, Boxes, FileText, Puzzle, Smartphone, Share2, Compass, Code2, Palette, Gauge, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ecommerce-development",
  backLabel: "Back to eCommerce Development",
  titleTop: "Headless",
  titleBottom: "Commerce",
  description: "Decoupled front and back-end architecture for ultimate flexibility — plug any backend to any frontend without impact.",
  heroImage: "/images/stock/stock-a41ee3d1d8.jpg",
  heroImageAlt: "Headless Commerce API",
  topBadge: { icon: null as any, title: "Headless API", subtitle: "Composable stack", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Sub-2s Load", subtitle: "Blazing fast", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 180, suffix: "+", label: "Stores Built" },
  { value: 35, suffix: "%", label: "Conversion Lift" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Merchants Served" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Headless Commerce", headingWhite: "Services", subtitle: "Composable storefronts, APIs, and content orchestration for flexible, future-proof digital commerce." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "From architecture to launch — a structured path for headless and composable commerce." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Headless CMS, commerce APIs, modern frontends, and edge-ready infrastructure." };
export const ctaProps: CTAProps = { headingTop: "Go Headless With", headingBottom: "Composable Commerce", description: "Decouple your stack and ship faster with APIs, CMS, and storefronts built for change." };

export const services: ServiceOffering[] = [{ icon: Store, title: "Headless Storefront", description: "Fast, composable storefronts that consume commerce APIs and render on your framework of choice.", features: ["SSR/SSG", "Edge-ready", "Design systems"] },
  { icon: Boxes, title: "API Commerce Layer", description: "Cart, catalog, pricing, and checkout exposed through stable GraphQL or REST contracts.", features: ["GraphQL/REST", "Webhooks", "Versioning"] },
  { icon: FileText, title: "CMS Integration", description: "Editorial content, merchandising zones, and preview workflows wired to your commerce data.", features: ["Preview", "Locales", "Scheduling"] },
  { icon: Puzzle, title: "Composable Commerce", description: "Best-of-breed services orchestrated with clear boundaries, contracts, and observability.", features: ["Modular services", "Event bus", "Observability"] },
  { icon: Smartphone, title: "Progressive Web App", description: "Installable, offline-tolerant experiences with push and app-shell performance budgets.", features: ["Installable", "Offline", "Push"] },
  { icon: Share2, title: "Omnichannel Experience", description: "Unified inventory, pricing, and fulfillment signals across web, mobile, and in-store endpoints.", features: ["Unified data", "POS hooks", "Real-time sync"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Architecture Design", description: "Domain boundaries, API contracts, and hosting topology for decoupled commerce.", icon: Compass },
  { step: "02", title: "API Layer Development", description: "Implement commerce services, integrations, and eventing with staging parity.", icon: Code2 },
  { step: "03", title: "Frontend Build", description: "Framework-specific UI with performance budgets, accessibility, and SEO foundations.", icon: Palette },
  { step: "04", title: "CMS Integration", description: "Connect content models, preview, and localization to storefront routes.", icon: FileText },
  { step: "05", title: "Performance Optimization", description: "Caching, image pipelines, and edge delivery tuned for Core Web Vitals.", icon: Gauge },
  { step: "06", title: "Launch", description: "Progressive rollout, monitoring, and runbooks for API and frontend releases.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Headless CMS", items: [
      { name: "Contentful", logo: `${DEVICON}/contentful/contentful-original.svg` },
      { name: "Strapi", logo: `${DEVICON}/strapi/strapi-original.svg` },
      { name: "Sanity", logo: `${DEVICON}/sanity/sanity-original.svg` },
      { name: "Prismic", logo: `${DEVICON}/prismic/prismic-original.svg` },
      { name: "Hygraph", logo: `${DEVICON}/hygraph/hygraph-original.svg` }
    ] },
  { label: "Commerce API", items: [
      { name: "Medusa", logo: `${DEVICON}/medusa/medusa-original.svg` },
      { name: "Saleor", logo: `${DEVICON}/saleor/saleor-original.svg` },
      { name: "commercetools", logo: `${DEVICON}/commercetools/commercetools-original.svg` },
      { name: "Shopify Storefront", logo: `${DEVICON}/shopifystorefront/shopifystorefront-original.svg` },
      { name: "BigCommerce", logo: `${DEVICON}/bigcommerce/bigcommerce-original.svg` }
    ] },
  { label: "Frontend", items: [
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Remix", logo: `${DEVICON}/remix/remix-original.svg` },
      { name: "Nuxt", logo: `${DEVICON}/nuxtjs/nuxtjs-original.svg` },
      { name: "Astro", logo: `${DEVICON}/astro/astro-original.svg` },
      { name: "SvelteKit", logo: `${DEVICON}/sveltekit/sveltekit-original.svg` }
    ] },
  { label: "API", items: [
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "REST", logo: `${DEVICON}/rest/rest-original.svg` },
      { name: "tRPC", logo: `${DEVICON}/trpc/trpc-original.svg` },
      { name: "gRPC", logo: `${DEVICON}/grpc/grpc-original.svg` },
      { name: "OpenAPI", logo: `${DEVICON}/openapi/openapi-original.svg` }
    ] },
  { label: "Infrastructure", items: [
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` },
      { name: "Netlify", logo: `${DEVICON}/netlify/netlify-original.svg` },
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Cloudflare Workers", logo: `${DEVICON}/cloudflareworkers/cloudflareworkers-original.svg` },
      { name: "Edge Functions", logo: `${DEVICON}/edgefunctions/edgefunctions-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Agile Development", description: "Rapid development and deployment with agile methodology, advanced tools, and high-quality products within deadline." },
  { icon: TrendingUp, title: "Customer-Centric", description: "Client feedback as priority — customer-centric approach leading to quality delivery within timelines." },
  { icon: Zap, title: "NDA & Security", description: "Client data confidentiality with standard NDA policies maintaining sensitivity and secrecy of shared details." },
  { icon: HeartHandshake, title: "Flexible Approach", description: "Multiple development methodologies under a flexible approach — every project gets unique tactics and tech stack." },];
