import { Store, ShoppingBag, CreditCard, Truck, BarChart3, ShieldCheck, Smartphone, Globe, Layers, Settings, Code2, Rocket, Zap, Award, TrendingUp, HeartHandshake, Stethoscope, ShoppingCart, GraduationCap, Building2, Gamepad2, Factory, ClipboardList, Palette } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps, WhyNeedProps,} from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Back to Services",
  titleTop: "eCommerce Software",
  titleBottom: "Development Services",
  description: "Setting new benchmarks in transforming the shopping experience with custom eCommerce software solutions.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "E-commerce development",
  topBadge: { icon: null as any, title: "30+ Stores", subtitle: "Built & scaled", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "3x Revenue", subtitle: "Avg client growth", colorClass: "bg-emerald-500/10" },
  stats: [{ label: "Stores Built", value: 350, suffix: "+" },
  { label: "Revenue Generated", value: 50, suffix: "M+" },
  { label: "Platforms Supported", value: 12, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "State-of-the-art technologies with user-centric elements for an exceptional digital commerce experience." };
export const processHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "Custom requirements delivered at each phase of the eCommerce marketplace development process." };
export const techHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "Advanced eCommerce platforms, payment gateways, and scalable infrastructure." };
export const ctaProps: CTAProps = { headingTop: "Want To Build", headingBottom: "eCommerce Solutions?", description: "Hire our eCommerce web and mobile app development professionals to elevate your business." };

export const services: ServiceOffering[] = [
  { icon: Store, title: "eCommerce Online Platform", description: "High-performance B2B and B2C storefronts built on modern stacks — purpose-designed for rich catalogues, custom workflows, and growth at scale.", features: ["B2B/B2C", "Scalable", "Custom"], href: "/services/ecommerce-development/ecommerce-platform" , logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "mongodb/mongodb-original.svg"], accent: "#96BF48"},
  { icon: Smartphone, title: "eCommerce Mobile App", description: "Omnichannel mobile shopping experiences that meet customers wherever they are — driving conversions and deepening brand loyalty on every device.", features: ["Omnichannel", "iOS & Android", "On-the-go"], href: "/services/ecommerce-development/ecommerce-mobile-app" , logos: ["flutter/flutter-original.svg", "react/react-original.svg", "swift/swift-original.svg"], accent: "#02569B"},
  { icon: Layers, title: "Multi-Vendor Marketplace", description: "Robust marketplace platforms with frictionless buyer and seller journeys, multi-gateway payments, and built-in vendor management tools.", features: ["Multi-vendor", "Payment gateways", "Buyer/Seller"], href: "/services/ecommerce-development/multi-vendor-marketplace" , logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "postgresql/postgresql-original.svg"], accent: "#FF6B35"},
  { icon: CreditCard, title: "Payment & Checkout", description: "Stripe, PayPal, and regional gateways with intelligent retries, real-time fraud scoring, and mobile-optimized one-tap checkout flows.", features: ["Stripe/PayPal", "Fraud detection", "One-page checkout"], href: "/services/ecommerce-development/payment-checkout" , logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "typescript/typescript-original.svg"], accent: "#635BFF"},
  { icon: Globe, title: "Headless Commerce", description: "API-first, composable architecture — swap or evolve any frontend independently while the commerce engine runs uninterrupted underneath.", features: ["Decoupled", "API-first", "Flexible frontend"], href: "/services/ecommerce-development/headless-commerce" , logos: ["nextjs/nextjs-original.svg", "react/react-original.svg", "graphql/graphql-plain.svg"], accent: "#000000"},
  { icon: ShieldCheck, title: "eCommerce Enterprise Software", description: "SEO-optimized enterprise portals that simplify complex operations and deliver a polished, conversion-focused shopping experience.", features: ["Enterprise-grade", "SEO-friendly", "Management tools"], href: "/services/ecommerce-development/enterprise-ecommerce" , logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "docker/docker-original.svg"], accent: "#4EB3E8"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Analysis", description: "Deep-dive into your business model, catalogue structure, and customer journeys to define the ideal commerce architecture.", icon: ClipboardList },
  { step: "02", title: "Wireframing & Design", description: "Conversion-focused wireframes and mobile-first layouts that guide shoppers effortlessly from browse to buy.", icon: Palette },
  { step: "03", title: "Tech-Stack Selection", description: "Platform and stack recommendations matched to your scale, budget, and integration needs — signed off before a line of code.", icon: Settings },
  { step: "04", title: "Development", description: "Sprint-based builds with modular releases — every feature tested in isolation before merging into the production codebase.", icon: Code2 },
  { step: "05", title: "Testing", description: "Automated regression, payment-flow verification, load stress tests, and cross-device QA for a defect-free launch.", icon: ShieldCheck },
  { step: "06", title: "Deployment", description: "Zero-downtime go-live on hosting infrastructure and app stores — with monitoring, CDN, and rollback readiness in place.", icon: Rocket },];

export const techCategories: TechCategory[] = [
  { label: "Platforms", items: [
    { name: "Shopify", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Magento", logo: `${DEVICON}/magento/magento-original.svg` },
    { name: "WooCommerce", logo: `${DEVICON}/woocommerce/woocommerce-original.svg` },
    { name: "BigCommerce", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
  ] },
  { label: "Frontend", items: [
    { name: "React", logo: `${DEVICON}/react/react-original.svg` },
    { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
    { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
    { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
    { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  ] },
  { label: "Backend", items: [
    { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
    { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
    { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
  ] },
  { label: "Databases", items: [
    { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
    { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
  ] },
  { label: "Payments & Cloud", items: [
    { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
    { name: "Nginx", logo: `${DEVICON}/nginx/nginx-original.svg` },
  ] },
];


export const whyNeedProps: WhyNeedProps = {
  heading: "E-Commerce Can Be",
  headingHighlight: "Revenue-Multiplying",
  subtitle: "A strategically built e-commerce platform doesn't just sell products — it creates experiences that convert browsers into loyal customers.",
  image: "/images/stock/stock-75001c1471.jpg",
  imageAlt: "E-commerce shopping experience",
  items: [
    { title: "24/7 Global Storefront", description: "Your e-commerce store never closes. Serve customers across time zones with automated inventory, payments, and fulfillment — generating revenue while you sleep." },
    { title: "Higher Average Order Value", description: "AI-powered recommendations, bundle offers, and dynamic upselling increase average cart value by 20-35%. Every visitor becomes a higher-value customer." },
    { title: "Reduced Operational Costs", description: "Automated inventory management, order processing, and customer communication eliminate manual work. Scale from 100 to 100,000 orders without proportional staff increases." },
    { title: "Rich Customer Insights", description: "Track every click, search, and purchase. Understand buying patterns, seasonal trends, and customer segments to make smarter merchandising and marketing decisions." },
    { title: "Omnichannel Selling", description: "Sell on your website, mobile app, social media, and marketplaces from one unified platform. Consistent inventory, pricing, and branding everywhere your customers are." },
    { title: "Personalized Shopping Experience", description: "Dynamic content, personalized search results, and tailored promotions make each visitor feel like the store was built just for them — driving loyalty and repeat purchases." },
  ],
};

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Agile Development", description: "Sprint-driven delivery with modern toolchains — shipping production-ready features fast without compromising quality." },
  { icon: TrendingUp, title: "Customer-Centric", description: "Your feedback shapes every iteration — we build around real user needs to deliver outcomes that hit the mark." },
  { icon: Zap, title: "NDA & Security", description: "Strict confidentiality from day one — enforceable NDAs and enterprise-grade data handling protect every shared detail." },
  { icon: HeartHandshake, title: "Flexible Approach", description: "No one-size-fits-all — each engagement gets a tailored methodology, tech stack, and team structure." },];

export const caseStudyProjects: Project[] = [
  {
    id: "cartflow-ec",
    tag: "Headless Commerce",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    company: "CartFlow",
    industry: "E-Commerce",
    headline: "AI-powered headless commerce platform driving 38% increase in average order value.",
    challenge: "Generic product suggestions leading to 71% cart abandonment. No real-time ML infrastructure.",
    solution: "Headless commerce with real-time ML recommendation engine, multi-currency support, and dynamic pricing.",
    duration: "60 days",
    metrics: [
      {
        value: 38,
        suffix: "%",
        label: "AOV increase"
      },
      {
        value: 22,
        suffix: "%",
        label: "Abandonment drop"
      },
      {
        value: 18,
        suffix: "ms",
        label: "Inference latency"
      }
    ],
    timeline: [
      {
        phase: "Data Pipeline",
        detail: "Kafka streams for clickstream data"
      },
      {
        phase: "ML Recommendations",
        detail: "Hybrid collaborative filtering"
      },
      {
        phase: "Commerce Platform",
        detail: "Headless API with dynamic pricing"
      },
      {
        phase: "Launch & Optimize",
        detail: "Canary rollout with A/B testing"
      }
    ],
    accentColor: "#8b5cf6"
  }
];
