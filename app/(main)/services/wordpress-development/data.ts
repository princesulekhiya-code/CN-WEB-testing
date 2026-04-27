import { Layout, Code2, ShoppingCart, Puzzle, Palette, RefreshCcw, ClipboardList, Settings, ShieldCheck, Rocket, Award, Zap, HeartHandshake, Clock, Stethoscope, CreditCard, GraduationCap, Building2, Gamepad2, Factory, Globe, Truck, BarChart3 } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to services",
  titleTop: "WordPress",
  titleBottom: "Development",
  description: "Reinvent your business by developing responsive, fully-functional WordPress websites. From custom themes to headless architectures, we deliver enterprise-grade WordPress solutions.",
  heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "WordPress development services",
  topBadge: { icon: null as any, title: "WordPress VIP", subtitle: "Enterprise-grade", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Sub-2s Load", subtitle: "Optimized speed", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Comprehensive solutions tailored to your business needs." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A streamlined, quality-first approach that ensures quality, transparency, and on-time delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built with", headingWhite: "Modern Tools", subtitle: "Industry-leading tools and frameworks powering our solutions." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "WordPress Site?", description: "Tell us about your catalog, editorial team, or headless goals — we&apos;ll map a build that&apos;s fast, secure, and easy to operate." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Research & Analysis",
    description:
      "Map your business objectives, audience, and content strategy to define the ideal WordPress architecture.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "UI/UX Designing",
    description:
      "Interactive prototypes and detailed wireframes that align stakeholders before any development begins.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Optimal stack selection followed by feature-by-feature builds with plugin and API integrations baked in.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Thorough manual and automated testing — cross-browser, responsive, and functional — for a polished, defect-free launch.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Production deployment on optimized hosting with CDN configuration, caching layers, and SSL for a fast, secure go-live.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Maintenance",
    description:
      "Proactive care — scheduled core updates, vulnerability patching, uptime monitoring, and performance tuning month over month.",
    icon: Settings,
  },];

export const techCategories: TechCategory[] = [{
    label: "WordPress Core",
    items: [
      { name: "WordPress", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "PHP 8+", logo: `${DEVICON}/php/php-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "REST API", logo: `${DEVICON}/restapi/restapi-original.svg` },
      { name: "WP CLI", logo: `${DEVICON}/wpcli/wpcli-original.svg` },
      { name: "Gutenberg", logo: `${DEVICON}/wordpress/wordpress-original.svg` }
    ],
  },
  {
    label: "Themes & Builders",
    items: [
      { name: "Elementor", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "Divi", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "ACF Pro", logo: `${DEVICON}/acfpro/acfpro-original.svg` },
      { name: "Custom Themes", logo: `${DEVICON}/customthemes/customthemes-original.svg` },
      { name: "Block Editor", logo: `${DEVICON}/blockeditor/blockeditor-original.svg` }
    ],
  },
  {
    label: "eCommerce",
    items: [
      { name: "WooCommerce", logo: `${DEVICON}/woocommerce/woocommerce-original.svg` },
      { name: "Shopify", logo: `${DEVICON}/shopify/shopify-original.svg` },
      { name: "Magento", logo: `${DEVICON}/magento/magento-original.svg` },
      { name: "Payment Gateways", logo: `${DEVICON}/paymentgateways/paymentgateways-original.svg` },
      { name: "Subscriptions", logo: `${DEVICON}/subscriptions/subscriptions-original.svg` }
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "HTML5", logo: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS3", logo: `${DEVICON}/css3/css3-original.svg` },
      { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` }
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Cloudflare", logo: `${DEVICON}/cloudflare/cloudflare-original.svg` },
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "cPanel", logo: `${DEVICON}/cpanel/cpanel-original.svg` },
      { name: "Git", logo: `${DEVICON}/git/git-original.svg` },
      { name: "CI/CD", logo: `${DEVICON}/cicd/cicd-original.svg` }
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Proven WordPress Experts",
    description:
      "A tight-knit squad of seasoned WordPress engineers with deep expertise across themes, plugins, and WooCommerce.",
  },
  {
    icon: Palette,
    title: "Striking Designs",
    description:
      "Premium-grade design at accessible pricing — every site balances visual polish with usability and brand coherence.",
  },
  {
    icon: Zap,
    title: "Demand Driven Development",
    description:
      "Performance-obsessed WordPress builds following industry best practices — optimized for Core Web Vitals and SEO from day one.",
  },
  {
    icon: HeartHandshake,
    title: "Full Customer Satisfaction",
    description:
      "We go beyond the brief — custom themes, purpose-built plugins, and responsive support that keeps your site thriving long after launch.",
  },];
