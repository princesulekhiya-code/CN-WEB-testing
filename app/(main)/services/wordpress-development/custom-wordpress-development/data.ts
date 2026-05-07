import { Code2, Palette, Globe, Gauge, Database, Layers, Layout, Monitor, ListChecks, ClipboardCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/wordpress-development",
  backLabel: "Back to WordPress Development",
  titleTop: "Custom WordPress",
  titleBottom: "Development",
  description: "From creative and responsive web development to conversion-focused WordPress websites that maximize ROI and drive business growth.",
  heroImage: "/images/stock/stock-9bc46cc9cc.jpg",
  heroImageAlt: "Custom WordPress Development",
  topBadge: { icon: null as any, title: "Custom WP", subtitle: "Bespoke themes", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Fast & Light", subtitle: "Optimized code", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "WP Sites Built" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Custom WordPress Development", headingWhite: "Services", subtitle: "Themes, data models, blocks, and admin experiences — engineered for conversions, clarity, and long-term maintainability." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Custom WordPress Development", headingWhite: "Process", subtitle: "Requirements through launch — with design fidelity, disciplined development, and testing that protects revenue-critical flows." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Core WordPress stack, modern frontends, build tooling, hosting, and QA platforms we trust for production-grade sites." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "Custom WordPress Site?", description: "Share your goals and integrations — we will propose a WordPress architecture that scales with your roadmap." };

export const services: ServiceOffering[] = [{
    icon: Palette,
    title: "Custom Theme Development",
    description:
      "Bespoke WordPress themes built around your brand system — not off-the-shelf templates with cosmetic tweaks. We implement component libraries, design tokens, and maintainable PHP so future updates stay fast and predictable.",
    features: ["Brand-aligned UI", "Reusable blocks", "Clean theme layer", "Performance budgets"],
  },
  {
    icon: Database,
    title: "Custom Post Types & Taxonomies",
    description:
      "Structured content types for portfolios, locations, events, or products — whatever your business model demands. Relationships, archive templates, and admin UX are designed so editors never fight the CMS.",
    features: ["Schema design", "Archive routing", "Admin labels", "REST-ready structures"],
  },
  {
    icon: Layers,
    title: "Advanced Custom Fields",
    description:
      "Flexible field groups, conditional logic, and repeater patterns that keep complex pages manageable. We avoid field sprawl by grouping intelligently and documenting editor workflows for handoff.",
    features: ["ACF Pro patterns", "Conditional UI", "JSON sync", "Safe migrations"],
  },
  {
    icon: Layout,
    title: "Gutenberg Block Development",
    description:
      "Native blocks with editor previews, alignment controls, and accessibility baked in. Block variations and patterns empower marketing while developers retain a single source of truth for styling.",
    features: ["React block editor", "InnerBlocks", "Block patterns", "Deprecation strategy"],
  },
  {
    icon: Monitor,
    title: "Custom Dashboard Development",
    description:
      "Streamlined wp-admin experiences for non-technical users — hiding noise, surfacing KPIs, and connecting to external APIs when needed. Role-specific views reduce mistakes and support tickets.",
    features: ["Role menus", "Custom widgets", "API dashboards", "Audit-friendly actions"],
  },
  {
    icon: Globe,
    title: "WordPress Multisite",
    description:
      "Network architecture for franchises, multilingual rollouts, or multi-brand portals with shared plugins and centralized updates. We plan domain mapping, quotas, and governance so the network stays healthy at scale.",
    features: ["Network provisioning", "Shared plugins", "Per-site branding", "Security isolation"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Requirements",
    description:
      "Discovery workshops capture audiences, conversion goals, integrations, and editorial workflows. Technical constraints and hosting realities are surfaced early so estimates stay honest.",
    icon: ListChecks,
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes evolve into high-fidelity UI with responsive breakpoints and component specs. Developers receive assets and interaction notes aligned with WordPress block capabilities.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Theme Development",
    description:
      "Theme scaffolding, template hierarchy, and asset pipelines are implemented with coding standards and automated checks. Staging environments mirror production for faithful QA.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Custom Features",
    description:
      "Plugins, APIs, and bespoke PHP extend core behavior without monolithic forks. Features ship behind flags when needed so you can stage rollouts safely.",
    icon: Monitor,
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Cross-browser checks, accessibility passes, and performance profiling run against realistic content. Regression suites catch breaking changes before they reach editors.",
    icon: ClipboardCheck,
  },
  {
    step: "06",
    title: "Launch",
    description:
      "DNS, SSL, caching, and monitoring are verified during cutover. Documentation and training ensure your team owns day-two operations confidently.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{
    label: "WordPress",
    items: [
      { name: "PHP 8+", logo: `${DEVICON}/php/php-original.svg` },
      { name: "WordPress API", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "WP CLI", logo: `${DEVICON}/wpcli/wpcli-original.svg` },
      { name: "Gutenberg", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "ACF Pro", logo: `${DEVICON}/acfpro/acfpro-original.svg` }
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "HTML5", logo: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS3", logo: `${DEVICON}/css3/css3-original.svg` },
      { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "jQuery", logo: `${DEVICON}/jquery/jquery-original.svg` },
      { name: "React", logo: `${DEVICON}/react/react-original.svg` }
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Webpack", logo: `${DEVICON}/webpack/webpack-original.svg` },
      { name: "Vite", logo: `${DEVICON}/vitejs/vitejs-original.svg` },
      { name: "SASS", logo: `${DEVICON}/sass/sass-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "Git", logo: `${DEVICON}/git/git-original.svg` }
    ],
  },
  {
    label: "Hosting",
    items: [
      { name: "WP Engine", logo: `${DEVICON}/wpengine/wpengine-original.svg` },
      { name: "Kinsta", logo: `${DEVICON}/kinsta/kinsta-original.svg` },
      { name: "SiteGround", logo: `${DEVICON}/siteground/siteground-original.svg` },
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Cloudflare", logo: `${DEVICON}/cloudflare/cloudflare-original.svg` }
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "PHPUnit", logo: `${DEVICON}/phpunit/phpunit-original.svg` },
      { name: "Cypress", logo: `${DEVICON}/cypressio/cypressio-original.svg` },
      { name: "BrowserStack", logo: `${DEVICON}/browserstack/browserstack-original.svg` },
      { name: "GTmetrix", logo: `${DEVICON}/gtmetrix/gtmetrix-original.svg` }
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "WordPress Mastery",
    description:
      "Deep experience across themes, plugins, and performance tuning — we know where WordPress shines and where it needs careful engineering.",
  },
  {
    icon: TrendingUp,
    title: "Performance-Focused",
    description:
      "Caching, asset strategy, and database hygiene are planned from sprint one — not patched in after launch when traffic spikes.",
  },
  {
    icon: Zap,
    title: "Pixel-Perfect",
    description:
      "Design fidelity across breakpoints with attention to typography, spacing, and motion — without sacrificing load times.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description:
      "Roadmaps for updates, security, and feature iterations so your WordPress investment compounds instead of decaying.",
  },];
