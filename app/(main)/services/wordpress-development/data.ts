import { Award, BarChart3, Building2, ClipboardList, Clock, Code2, CreditCard, Factory, Gamepad2, Globe, GraduationCap, HeartHandshake, Layout, Palette, Puzzle, RefreshCcw, Rocket, Settings, ShieldCheck, ShoppingCart, Stethoscope, Truck, Zap } from "lucide-react";
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

export const services: ServiceOffering[] = [
  { icon: Layout, title: "CMS Development", description: "Empower your editorial teams with intuitive CMS solutions — designed, built, and deployed for effortless content orchestration at scale.", features: ["Content management", "User-friendly", "SEO-ready"], href: "/services/wordpress-development/cms-development" , logos: ["wordpress/wordpress-original.svg", "php/php-original.svg", "mysql/mysql-original.svg"], accent: "#21759B"},
  { icon: Code2, title: "Custom WordPress Web Development", description: "Bespoke WordPress builds from concept through pixel-perfect execution — engineered to convert visitors and deliver measurable returns.", features: ["Custom themes", "Responsive design", "High conversion"], href: "/services/wordpress-development/custom-wordpress-development" , logos: ["wordpress/wordpress-original.svg", "html5/html5-original.svg", "css3/css3-original.svg"], accent: "#21759B"},
  { icon: ShoppingCart, title: "WordPress eCommerce Development", description: "WooCommerce storefronts supercharged with premium plugins — feature-rich, visually engaging, and optimized for revenue growth.", features: ["WooCommerce", "Payment gateways", "Product catalog"], href: "/services/wordpress-development/wordpress-ecommerce" , logos: ["woocommerce/woocommerce-original.svg", "wordpress/wordpress-original.svg", "php/php-original.svg"], accent: "#96588A"},
  { icon: Puzzle, title: "WordPress Plugin Development", description: "Lightweight, secure, and SEO-aware custom plugins — built for seamless integration, intuitive admin controls, and long-term maintainability.", features: ["Custom plugins", "API hooks", "Security-first"], href: "/services/wordpress-development/wordpress-plugin-development" , logos: ["php/php-original.svg", "wordpress/wordpress-original.svg", "javascript/javascript-original.svg"], accent: "#777BB4"},
  { icon: Palette, title: "Responsive Theme Development", description: "Design-thinking-led themes that adapt beautifully across every breakpoint — reinforcing your brand identity with every scroll.", features: ["Design thinking", "Mobile-first", "Brand identity"], href: "/services/wordpress-development/responsive-theme-development" , logos: ["css3/css3-original.svg", "html5/html5-original.svg", "wordpress/wordpress-original.svg"], accent: "#E34F26"},
  { icon: RefreshCcw, title: "WordPress Migration & Maintenance", description: "Comprehensive site stewardship — core upgrades, vulnerability patching, and zero-downtime platform migrations handled end to end.", features: ["Core updates", "Security patches", "Zero-downtime migration"], href: "/services/wordpress-development/wordpress-migration-maintenance" , logos: ["wordpress/wordpress-original.svg", "docker/docker-original.svg", "git/git-original.svg"], accent: "#4EB3E8"},
];

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
