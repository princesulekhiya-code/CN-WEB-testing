import { FileCode2, Layers, Settings, Zap, Wrench, ClipboardList, Palette, ShieldCheck, Rocket, Code2, Award, TrendingUp, HeartHandshake, Globe, RefreshCw } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/web-development",
  backLabel: "Back to Web Development",
  titleTop: "CMS Website",
  titleBottom: "Development",
  description: "Content management systems on WordPress, Strapi, Sanity, or headless CMS platforms for easy\r\n                content updates.",
  heroImage: "/images/stock/stock-510db88401.jpg",
  heroImageAlt: "CMS dashboard and content management interface",
  topBadge: { icon: null as any, title: "CMS Expert", subtitle: "Content-first", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "200+ Sites", subtitle: "Live & managed", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "CMS Projects" },
  { value: 40, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Uptime SLA" },
  { value: 60, suffix: "%", label: "Faster Publishing" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "CMS", headingWhite: "Website Development", subtitle: "WordPress, Strapi, Sanity, and headless stacks — built for editors, engineered for performance and SEO." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "CMS Website Development", subtitle: "From audit to launch — a deliberate path that protects SEO, editors, and integrations." };
export const techHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "Technologies", subtitle: "CMS platforms, frontends, APIs, databases, and editor tooling we use to ship maintainable content systems." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "CMS Website?", description: "Partner with us for editor-friendly CMS builds, SEO-conscious migrations, and dependable support after\r\n          launch." };

export const services: ServiceOffering[] = [{
    icon: FileCode2,
    title: "WordPress Development",
    description:
      "Custom themes, performance tuning, and enterprise-grade WordPress builds with clean, maintainable PHP and modern tooling.",
    features: ["Custom themes", "Performance", "Gutenberg blocks"],
  },
  {
    icon: Globe,
    title: "Headless CMS Development",
    description:
      "Decoupled frontends with a CMS as the content hub — fast pages, flexible models, and omnichannel publishing.",
    features: ["Next.js frontends", "Preview & drafts", "CDN-friendly"],
  },
  {
    icon: Layers,
    title: "Strapi Development",
    description:
      "Self-hosted or cloud Strapi with roles, workflows, and APIs tailored to your editorial and engineering teams.",
    features: ["Roles & permissions", "Plugins", "GraphQL/REST"],
  },
  {
    icon: RefreshCw,
    title: "CMS Migration",
    description:
      "Content mapping, URL preservation, SEO continuity, and validation scripts so migrations finish without surprises.",
    features: ["URL mapping", "Redirects", "QA checkpoints"],
  },
  {
    icon: Code2,
    title: "Custom Plugin Development",
    description:
      "Plugins and modules for WordPress, Strapi, and PHP/Node ecosystems — secure, versioned, and documented.",
    features: ["Secure coding", "Versioning", "Docs & handoff"],
  },
  {
    icon: Wrench,
    title: "CMS Maintenance & Support",
    description:
      "Updates, backups, uptime monitoring, and editorial support so your CMS stays fast, safe, and easy to use.",
    features: ["Patch cadence", "Backups", "Editor support"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Audit",
    description:
      "Inventory content types, integrations, SEO footprint, and editorial pain points to guide the rebuild.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "CMS Selection",
    description:
      "Pick WordPress, Strapi, Sanity, or headless stacks based on workflows, scale, and total cost of ownership.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Design",
    description:
      "Information architecture, templates, and component libraries that keep publishing consistent and on-brand.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Development",
    description: "Implement schemas, frontends, and integrations with staging, previews, and automated tests in the loop.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Content Migration",
    description: "ETL scripts, manual QA, and redirect plans so traffic, rankings, and assets land in the right place.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch",
    description: "Cutover, monitoring, training, and a hypercare window so editors feel confident on day one.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{
    label: "CMS Platforms",
    items: [
      { name: "WordPress", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "Strapi", logo: `${DEVICON}/strapi/strapi-original.svg` },
      { name: "Sanity", logo: `${DEVICON}/sanity/sanity-original.svg` },
      { name: "Contentful", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "Ghost", logo: `${DEVICON}/ghost/ghost-original.svg` },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
      { name: "Twig", logo: `${DEVICON}/php/php-original.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "REST APIs", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "ACF", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "Elementor", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "WPBakery", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "Yoast SEO", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "CMS Specialists",
    description:
      "Teams that ship editorial-friendly systems — not generic sites — with workflows that match how you work.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimized",
    description:
      "Structured data, clean URLs, redirects, and performance budgets aligned with search best practices.",
  },
  {
    icon: Zap,
    title: "Easy Management",
    description: "Clear roles, previews, and guardrails so marketing can move fast without breaking production.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "Training, SLAs, and iterative improvements as your content program grows.",
  },];
