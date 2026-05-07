import { Code2, Puzzle, Shield, Zap, Plug, Gauge, RefreshCcw, Terminal, ClipboardList, Settings, Palette, ShieldCheck, Rocket, Award, TrendingUp, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/wordpress-development",
  backLabel: "Back to WordPress Development",
  titleTop: "WordPress Plugin",
  titleBottom: "Development",
  description: "SEO-friendly, secured, and high-potent custom plugins that are scalable, easy-to-integrate, and simple to use for any WordPress site.",
  heroImage: "/images/stock/stock-a41ee3d1d8.jpg",
  heroImageAlt: "WordPress Plugin Development",
  topBadge: { icon: null as any, title: "Custom Plugin", subtitle: "WordPress API", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Secure Code", subtitle: "Best practices", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "WP Sites Built" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Plugin Development", headingWhite: "Services", subtitle: "Custom plugins, security hardening, performance optimization, and API extensions for WordPress." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Plugin Development", headingWhite: "Process", subtitle: "A structured flow from requirements to production-ready, secure WordPress plugins." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "WordPress internals, modern frontend, and security tooling for robust plugin development." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "WordPress Plugin?", description: "From custom functionality to API extensions — let&apos;s build secure, scalable WordPress plugins together." };

export const services: ServiceOffering[] = [{ icon: Code2, title: "Custom Plugin Development", description: "Bespoke WordPress plugins built from scratch with clean architecture, WordPress coding standards, and scalable design patterns.", features: ["Custom logic", "WP standards", "Scalable code"] },
  { icon: Plug, title: "Plugin Integration", description: "Seamless integration of third-party plugins and APIs into your WordPress ecosystem with conflict-free, optimized configuration.", features: ["API integration", "Conflict-free", "Third-party sync"] },
  { icon: Shield, title: "Plugin Security Hardening", description: "Security audits, input sanitization, nonce verification, and OWASP compliance to protect your plugins from vulnerabilities.", features: ["Input sanitization", "Nonce verification", "OWASP compliance"] },
  { icon: Gauge, title: "Plugin Performance Optimization", description: "Database query optimization, caching strategies, and asset loading improvements for plugins that run at peak performance.", features: ["Query optimization", "Caching", "Lazy loading"] },
  { icon: RefreshCcw, title: "Plugin Migration & Updates", description: "Safe migration of plugin data, version upgrades, and compatibility updates for WordPress core and PHP version changes.", features: ["Version upgrades", "Data migration", "Compatibility"] },
  { icon: Terminal, title: "API Plugin Development", description: "REST API and GraphQL endpoint plugins that extend WordPress into a powerful headless backend for custom applications.", features: ["REST API", "GraphQL", "Headless WP"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Requirements Gathering", description: "Define plugin functionality, user stories, integration points, and technical constraints for precise scoping.", icon: ClipboardList },
  { step: "02", title: "Architecture Design", description: "Plugin structure, database schema, hook strategy, and API design following WordPress best practices.", icon: Settings },
  { step: "03", title: "Development", description: "Iterative coding with WordPress coding standards, custom hooks, filters, and admin UI components.", icon: Code2 },
  { step: "04", title: "Security Audit", description: "Comprehensive security review — input validation, output escaping, capability checks, and SQL injection prevention.", icon: ShieldCheck },
  { step: "05", title: "Testing", description: "Unit testing with PHPUnit, integration testing, cross-browser validation, and multisite compatibility checks.", icon: Palette },
  { step: "06", title: "Deployment", description: "Production deployment, WordPress.org submission guidance, documentation, and ongoing version management.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "WordPress", items: [
      { name: "PHP 8+", logo: `${DEVICON}/php/php-original.svg` },
      { name: "Plugin API", logo: `${DEVICON}/pluginapi/pluginapi-original.svg` },
      { name: "Hooks & Filters", logo: `${DEVICON}/hooksfilters/hooksfilters-original.svg` },
      { name: "REST API", logo: `${DEVICON}/restapi/restapi-original.svg` },
      { name: "WP CLI", logo: `${DEVICON}/wpcli/wpcli-original.svg` }
    ] },
  { label: "Frontend", items: [
      { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "jQuery", logo: `${DEVICON}/jquery/jquery-original.svg` },
      { name: "CSS3", logo: `${DEVICON}/css3/css3-original.svg` },
      { name: "Webpack", logo: `${DEVICON}/webpack/webpack-original.svg` }
    ] },
  { label: "Database", items: [
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "Custom Tables", logo: `${DEVICON}/customtables/customtables-original.svg` },
      { name: "wpdb", logo: `${DEVICON}/wpdb/wpdb-original.svg` },
      { name: "Transients API", logo: `${DEVICON}/transientsapi/transientsapi-original.svg` },
      { name: "Options API", logo: `${DEVICON}/optionsapi/optionsapi-original.svg` }
    ] },
  { label: "Security", items: [
      { name: "Nonces", logo: `${DEVICON}/nonces/nonces-original.svg` },
      { name: "Input Sanitization", logo: `${DEVICON}/inputsanitization/inputsanitization-original.svg` },
      { name: "Output Escaping", logo: `${DEVICON}/outputescaping/outputescaping-original.svg` },
      { name: "OWASP", logo: `${DEVICON}/owasp/owasp-original.svg` },
      { name: "Capability Checks", logo: `${DEVICON}/capabilitychecks/capabilitychecks-original.svg` }
    ] },
  { label: "Testing", items: [
      { name: "PHPUnit", logo: `${DEVICON}/phpunit/phpunit-original.svg` },
      { name: "WP_UnitTestCase", logo: `${DEVICON}/wpunittestcase/wpunittestcase-original.svg` },
      { name: "Cypress", logo: `${DEVICON}/cypressio/cypressio-original.svg` },
      { name: "Code Sniffer", logo: `${DEVICON}/codesniffer/codesniffer-original.svg` },
      { name: "PHPCS", logo: `${DEVICON}/phpcs/phpcs-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Plugin Expertise", description: "Senior WordPress engineers with deep expertise in the Plugin API, hooks system, and WordPress internals." },
  { icon: TrendingUp, title: "Scalable Architecture", description: "Plugins designed with clean architecture patterns that scale from single-site to enterprise multisite networks." },
  { icon: Zap, title: "Security-First Development", description: "Every plugin built with security at its core — following WordPress VIP coding standards and OWASP guidelines." },
  { icon: HeartHandshake, title: "Ongoing Maintenance", description: "Long-term plugin support with WordPress core compatibility updates, bug fixes, and feature evolution." },];
