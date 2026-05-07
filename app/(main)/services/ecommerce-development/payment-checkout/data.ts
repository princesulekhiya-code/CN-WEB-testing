import { CreditCard, FileStack, RefreshCw, ShieldAlert, Coins, Wallet, ClipboardList, Plug, ShieldCheck, UserCheck, Activity, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ecommerce-development",
  backLabel: "Back to eCommerce Development",
  titleTop: "Payment &",
  titleBottom: "Checkout",
  description: "Stripe, PayPal, and regional gateways with fraud signals and mobile-optimized one-page checkout flows.",
  heroImage: "/images/stock/stock-91acafd5b2.jpg",
  heroImageAlt: "Payment & Checkout System",
  topBadge: { icon: null as any, title: "Secure Pay", subtitle: "Multi-gateway", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "PCI DSS", subtitle: "Level 1 cert", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 180, suffix: "+", label: "Stores Built" },
  { value: 35, suffix: "%", label: "Conversion Lift" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Merchants Served" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Payment & Checkout", headingWhite: "Services", subtitle: "Gateways, wallets, subscriptions, and risk controls engineered for conversion and compliance." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "From audit to live monitoring — a disciplined rollout for payments and checkout." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Processors, wallets, security controls, service backends, and billing platforms for modern commerce." };
export const ctaProps: CTAProps = { headingTop: "Optimize Your", headingBottom: "Checkout", description: "Integrate trusted gateways, reduce fraud, and convert more with a fast, mobile-first payment experience." };

export const services: ServiceOffering[] = [{ icon: Plug, title: "Payment Gateway Integration", description: "Processor-agnostic integrations with webhooks, idempotency, and reconciliation aligned to your ledger.", features: ["Webhooks", "Retries", "Reconciliation"] },
  { icon: FileStack, title: "One-Page Checkout", description: "Single-screen flows with address autocomplete, shipping logic, and express wallet buttons.", features: ["Address API", "Shipping rules", "Wallets"] },
  { icon: RefreshCw, title: "Subscription Billing", description: "Plans, trials, proration, and dunning to maximize LTV while reducing churn.", features: ["Plans & trials", "Proration", "Dunning"] },
  { icon: ShieldAlert, title: "Fraud Detection", description: "Risk scoring, velocity checks, and manual review queues tuned to your vertical.", features: ["Risk scores", "Rules engine", "Review queues"] },
  { icon: Coins, title: "Multi-Currency Support", description: "FX-aware pricing, tax display, and settlement reporting for global buyers.", features: ["FX rates", "Tax display", "Reporting"] },
  { icon: Wallet, title: "Digital Wallet Integration", description: "Apple Pay, Google Pay, and regional wallets with device and domain verification.", features: ["Wallets", "SCA flows", "Domain verify"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Payment Audit", description: "Current flows, decline reasons, and compliance gaps reviewed with stakeholders.", icon: ClipboardList },
  { step: "02", title: "Gateway Selection", description: "Processor fit, fees, coverage, and roadmap for wallets and BNPL.", icon: CreditCard },
  { step: "03", title: "Integration Development", description: "Server and client integrations with sandbox parity and observability.", icon: Plug },
  { step: "04", title: "Security Testing", description: "Pen tests, tokenization review, and 3DS scenarios exercised end-to-end.", icon: ShieldCheck },
  { step: "05", title: "UAT", description: "Business-led test cases across regions, devices, and edge cases.", icon: UserCheck },
  { step: "06", title: "Go-Live & Monitoring", description: "Phased rollout with dashboards, alerts, and runbooks for on-call.", icon: Activity },];

export const techCategories: TechCategory[] = [{ label: "Gateways", items: [
      { name: "Stripe", logo: `${DEVICON}/stripe/stripe-original.svg` },
      { name: "PayPal", logo: `${DEVICON}/paypal/paypal-original.svg` },
      { name: "Braintree", logo: `${DEVICON}/braintree/braintree-original.svg` },
      { name: "Adyen", logo: `${DEVICON}/adyen/adyen-original.svg` },
      { name: "Square", logo: `${DEVICON}/square/square-original.svg` }
    ] },
  { label: "Wallets", items: [
      { name: "Apple Pay", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "Google Pay", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Amazon Pay", logo: `${DEVICON}/amazonpay/amazonpay-original.svg` },
      { name: "Shop Pay", logo: `${DEVICON}/shoppay/shoppay-original.svg` },
      { name: "Samsung Pay", logo: `${DEVICON}/samsungpay/samsungpay-original.svg` }
    ] },
  { label: "Security", items: [
      { name: "PCI DSS", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "3D Secure", logo: `${DEVICON}/3dsecure/3dsecure-original.svg` },
      { name: "Tokenization", logo: `${DEVICON}/tokenization/tokenization-original.svg` },
      { name: "SSL", logo: `${DEVICON}/ssl/ssl-original.svg` },
      { name: "Fraud Detection", logo: `${DEVICON}/frauddetection/frauddetection-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: ".NET", logo: `${DEVICON}/dot-net/dot-net-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` }
    ] },
  { label: "Billing", items: [
      { name: "Stripe Billing", logo: `${DEVICON}/stripebilling/stripebilling-original.svg` },
      { name: "Chargebee", logo: `${DEVICON}/chargebee/chargebee-original.svg` },
      { name: "Recurly", logo: `${DEVICON}/recurly/recurly-original.svg` },
      { name: "Paddle", logo: `${DEVICON}/paddle/paddle-original.svg` },
      { name: "Zuora", logo: `${DEVICON}/zuora/zuora-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Agile Development", description: "Rapid development and deployment with agile methodology, advanced tools, and high-quality products within deadline." },
  { icon: TrendingUp, title: "Customer-Centric", description: "Client feedback as priority — customer-centric approach leading to quality delivery within timelines." },
  { icon: Zap, title: "NDA & Security", description: "Client data confidentiality with standard NDA policies maintaining sensitivity and secrecy of shared details." },
  { icon: HeartHandshake, title: "Flexible Approach", description: "Multiple development methodologies under a flexible approach — every project gets unique tactics and tech stack." },];
