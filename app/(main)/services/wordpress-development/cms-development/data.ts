import { Layout, Database, Users, Cloud, RefreshCcw, Terminal, Shield, Search, Layers, Code2, ClipboardCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/wordpress-development",
  backLabel: "Back to WordPress Development",
  titleTop: "CMS",
  titleBottom: "Development",
  description: "Streamline your digital content effortlessly with our CMS development services. We design, develop, and deploy user-friendly systems for seamless content control.",
  heroImage: "/images/stock/stock-8e7f372d7d.jpg",
  heroImageAlt: "CMS Content Management Platform",
  topBadge: { icon: null as any, title: "CMS Platform", subtitle: "WordPress + more", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "100+ Sites", subtitle: "Live & managed", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "WP Sites Built" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "CMS Development", headingWhite: "Services", subtitle: "From editorial workflows to APIs and migrations — we build content systems that stay intuitive for creators and dependable for engineering." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our CMS Development", headingWhite: "Process", subtitle: "Research, architecture, development, migration, testing, and launch — structured to reduce risk while keeping stakeholders aligned." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "CMS platforms, backends, frontends, databases, and DevOps tooling we combine to ship resilient content platforms." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "CMS Platform?", description: "Tell us about your content goals and integration landscape — we will map a pragmatic path from discovery to launch." };

export const services: ServiceOffering[] = [{
    icon: Layout,
    title: "Custom CMS Architecture",
    description:
      "We blueprint content structures, permissions, and publishing flows before a single line of production code ships. That means predictable scaling when your catalog, locales, and teams grow — without brittle one-off hacks or surprise refactors six months later.",
    features: ["Information architecture", "Role-based access", "Extensible modules", "Documentation for editors"],
  },
  {
    icon: Database,
    title: "Content Modeling",
    description:
      "Fields, relationships, validations, and preview rules are modeled so marketing can move fast while engineering keeps data clean. We align schemas with analytics, personalization, and search — so content stays structured instead of turning into unstructured blobs.",
    features: ["Reusable content types", "Validation rules", "Preview workflows", "SEO-friendly URLs"],
  },
  {
    icon: Users,
    title: "Multi-User Workflows",
    description:
      "Draft, review, approve, and publish paths mirror how your organization actually works — including notifications, audit trails, and rollback-friendly revisions. The goal is zero ambiguity about who can change what, and when it goes live.",
    features: ["Editorial states", "Approval chains", "Activity history", "Training-friendly UI"],
  },
  {
    icon: Cloud,
    title: "Headless CMS Solutions",
    description:
      "Decouple the presentation layer from the content hub to power web, mobile, and partner surfaces from one source of truth. We wire GraphQL or REST with caching, webhooks, and preview so your frontends stay fast without sacrificing editorial velocity.",
    features: ["API-first delivery", "Edge-friendly caching", "Preview & staging", "Omnichannel reuse"],
  },
  {
    icon: RefreshCcw,
    title: "CMS Migration",
    description:
      "We map legacy content to new models, preserve URLs and redirects, and run scripted imports with QA checkpoints. Search rankings, analytics continuity, and media integrity stay protected through cutover — with a rollback plan if anything unexpected appears.",
    features: ["URL & redirect mapping", "Bulk import tooling", "Content QA", "Post-launch monitoring"],
  },
  {
    icon: Terminal,
    title: "CMS API Development",
    description:
      "Custom endpoints, secure authentication, and rate-aware integrations connect your CMS to CRM, ERP, and marketing automation. We document contracts, version thoughtfully, and test edge cases so partner teams can integrate without breaking production.",
    features: ["REST & GraphQL", "Auth & scopes", "Webhooks", "Developer documentation"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Research",
    description:
      "Stakeholder interviews, content audits, and competitive analysis reveal how teams publish today — and where friction hides. We document success metrics, compliance needs, and integration touchpoints so architecture decisions stay grounded in reality.",
    icon: Search,
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "We define hosting topology, caching strategy, editorial workflows, and security boundaries. Technical spikes validate risky integrations early, and diagrams give everyone a shared picture before build velocity ramps up.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Iterative delivery in staging environments with automated checks keeps quality high. Components, templates, and APIs are built with maintainability in mind — so future enhancements do not require rewriting the foundation.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Content Migration",
    description:
      "Structured transforms move assets and copy with checksums and sampling tests. Editors review representative pages while engineers monitor logs — closing gaps before traffic hits the new system.",
    icon: RefreshCcw,
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Functional, accessibility, performance, and security testing run against realistic data volumes. Load tests mimic peak publishing, and UAT sessions capture editor feedback while there is still room to adjust.",
    icon: ClipboardCheck,
  },
  {
    step: "06",
    title: "Launch",
    description:
      "Cutover windows, DNS updates, and hypercare support ensure a calm go-live. Training materials and office hours help teams adopt the new CMS confidently from day one.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{
    label: "CMS",
    items: [
      { name: "WordPress", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "Strapi", logo: `${DEVICON}/strapi/strapi-original.svg` },
      { name: "Contentful", logo: `${DEVICON}/contentful/contentful-original.svg` },
      { name: "Sanity", logo: `${DEVICON}/sanity/sanity-original.svg` },
      { name: "Ghost", logo: `${DEVICON}/ghost/ghost-original.svg` }
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "REST", logo: `${DEVICON}/rest/rest-original.svg` }
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "Tailwind", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` }
    ],
  },
  {
    label: "Database",
    items: [
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` }
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Cloudflare", logo: `${DEVICON}/cloudflare/cloudflare-original.svg` },
      { name: "CI/CD", logo: `${DEVICON}/cicd/cicd-original.svg` }
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "CMS Expertise",
    description:
      "Dedicated practitioners across WordPress and modern headless stacks — not generic web generalists — so your build matches platform strengths instead of fighting them.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Content",
    description:
      "Models and infrastructure grow with traffic, catalogs, and locales. Performance budgets and caching plans are part of the design — not an afterthought at launch.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "Automation, reusable patterns, and clear milestones keep momentum high. You get predictable releases instead of endless scope drift.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "Post-launch care plans cover updates, monitoring, and iterative improvements as your content program evolves.",
  },];
