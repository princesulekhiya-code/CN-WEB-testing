import { BarChart3, Building2, Clock, Code2, CreditCard, Factory, FileCode2, Gamepad2, Globe, GraduationCap, HeartHandshake, Layers, Monitor, Palette, Rocket, Search, Settings, ShieldCheck, ShoppingCart, Smartphone, Stethoscope, Truck, Users, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "All Services",
  titleTop: "Web",
  titleBottom: "Development",
  description: "We engineer responsive, secure, and exceptionally fast web experiences—from refined startup landing pages to sophisticated enterprise platforms—each shaped with performance, accessibility, and SEO excellence top of mind.",
  heroImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Web development",
  topBadge: { icon: null as any, title: "React + Next.js", subtitle: "Full-stack delivery", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "99+ Score", subtitle: "Lighthouse performance", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "End-to-end web capabilities shaped around your objectives, constraints, and trajectory." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A proven, transparent playbook engineered for quality gates, stakeholder visibility, and dependable ship dates." };
export const techHeading: ServicePageSectionProps = { headingGray: "Engineered with", headingWhite: "Leading Tooling", subtitle: "Best-in-class frameworks and platforms underpinning every line of production code we ship." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "Web Platform?", description: "Let&apos;s craft a web experience your audience will return to—reserve a complimentary strategy session with our specialists." };

export const services: ServiceOffering[] = [
  { icon: Code2, title: "Custom Website Development", description: "Purpose-built, high-performance web properties engineered around your precise operational needs, complete with third-party integrations and bespoke capabilities.", features: ["Purpose-built builds", "Third-party APIs", "Architecture that scales"], href: "/services/web-development/custom-website-development" , logos: ["react/react-original.svg", "typescript/typescript-original.svg", "nodejs/nodejs-original.svg"], accent: "#61DAFB"},
  { icon: FileCode2, title: "CMS Website Development", description: "Content management implementations on WordPress, Strapi, or headless CMS stacks so teams can publish, revise, and govern content with minimal friction.", features: ["WordPress & Strapi", "Headless CMS options", "Streamlined editorial workflows"], href: "/services/web-development/cms-website-development" , logos: ["wordpress/wordpress-original.svg", "php/php-original.svg", "mysql/mysql-original.svg"], accent: "#21759B"},
  { icon: Smartphone, title: "Responsive Website Design", description: "Meticulously responsive experiences that render flawlessly from the largest desktop canvases down to tablets and phones.", features: ["Mobile-first execution", "Cross-browser fidelity", "Layouts that adapt fluidly"], href: "/services/web-development/responsive-website-design" , logos: ["html5/html5-original.svg", "css3/css3-original.svg", "tailwindcss/tailwindcss-original.svg"], accent: "#E34F26"},
  { icon: ShoppingCart, title: "E-Commerce Website Development", description: "Growth-ready storefronts featuring trusted payment rails, disciplined inventory workflows, and shopping journeys tuned for conversion.", features: ["Payments & gateways", "Rich product catalogs", "Multi-currency readiness"], href: "/services/web-development/ecommerce-website-development" , logos: ["nodejs/nodejs-original.svg", "mongodb/mongodb-original.svg", "react/react-original.svg"], accent: "#3DDC84"},
  { icon: Zap, title: "Single Page App Development", description: "High-velocity SPAs with fluid routing, minimal perceived latency, and living interfaces crafted for today’s user expectations.", features: ["React & Next.js", "Near-instant transitions", "Live", "data-aware UI"], href: "/services/web-development/single-page-app-development" , logos: ["react/react-original.svg", "nextjs/nextjs-original.svg", "typescript/typescript-original.svg"], accent: "#000000"},
  { icon: Globe, title: "Progressive Web App Development", description: "Add-to-home-screen experiences with offline resilience, push messaging, and native-grade interaction—without navigating an app marketplace.", features: ["Offline resilience", "Push messaging", "Install-from-browser"], href: "/services/web-development/progressive-web-app-development" , logos: ["html5/html5-original.svg", "javascript/javascript-original.svg", "css3/css3-original.svg"], accent: "#5A0FC8"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Strategy & Research", description: "Landscape scans, competitive intelligence, crystallized business objectives, and a sequenced feature roadmap.", icon: BarChart3 },
  { step: "02", title: "Analysis & Planning", description: "Risk posture review, capability mapping, formal SRS authoring, and a clearly bounded MVP.", icon: Settings },
  { step: "03", title: "UI/UX Design", description: "IA definition, low-to-high fidelity wireframes, clickable prototypes, and a cohesive design system.", icon: Palette },
  { step: "04", title: "Website Development", description: "Stack selection paired with disciplined front-end and back-end build-out and automated CI/CD release paths.", icon: Code2 },
  { step: "05", title: "QA & Testing", description: "UX validation, functional coverage, performance benchmarking, security review, and cross-browser assurance.", icon: ShieldCheck },
  { step: "06", title: "Deployment & Support", description: "Cloud go-live, metadata readiness, observability for performance, and dependable post-release care.", icon: Rocket },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Seasoned Engineering Bench", description: "Full-stack practitioners averaging five or more years across React, Next.js, Node.js, and major cloud ecosystems." },
  { icon: Clock, title: "Compressed Launch Windows", description: "Agile cadences with two-week iterations—concept to production-ready in as few as six weeks." },
  { icon: ShieldCheck, title: "Hardened Speed & Safety", description: "OWASP-aligned builds, Core Web Vitals excellence, SSL, CSP, and security practices fit for demanding enterprises." },
  { icon: HeartHandshake, title: "Continuity After Go-Live", description: "Sustained maintenance, observability, analytics, SEO refinement, and roadmap-driven enhancements." },];
