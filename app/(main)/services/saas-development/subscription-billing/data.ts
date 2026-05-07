import { Repeat, Gauge, Receipt, RefreshCw, PieChart, Coins, Target, CreditCard, Plug, Scale, Rocket, Server, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/saas-development",
  backLabel: "Back to SaaS Development",
  titleTop: "Subscription",
  titleBottom: "& Billing",
  description: "Stripe Billing or custom ledgers for trials, proration, usage meters, and dunning workflows that finance teams can audit.",
  heroImage: "/images/stock/stock-91acafd5b2.jpg",
  heroImageAlt: "Subscription & Billing System",
  topBadge: { icon: null as any, title: "Billing Engine", subtitle: "Stripe & more", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "MRR Growth", subtitle: "Revenue metrics", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 80, suffix: "+", label: "SaaS Products" },
  { value: 99, suffix: "%", label: "Platform Uptime" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Service", headingWhite: "Offerings", subtitle: "Six focused capabilities covering strategy, build, and operations." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Process", subtitle: "Six phases on an alternating vertical timeline." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Representative tools by category." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "SaaS Product?", description: "Don&apos;t let your idea remain just an idea. Partner with us to transform it into a revenue-generating SaaS reality." };

export const services: ServiceOffering[] = [{ icon: Repeat, title: "Subscription Management", description: "Plans, trials, upgrades, and lifecycle events with clear customer-facing copy and ops tooling.", features: ["Plan tiers", "Trials & coupons", "Self-serve changes"] },
  { icon: Gauge, title: "Usage-Based Billing", description: "Meter ingestion, rating, and invoicing for seats, API calls, storage, or custom units.", features: ["Usage meters", "Rating engine", "Transparent invoices"] },
  { icon: Receipt, title: "Invoice & Tax Automation", description: "PDF invoices, credit notes, and tax logic aligned to regions you sell into.", features: ["Tax engines", "Invoice PDFs", "Credit notes"] },
  { icon: RefreshCw, title: "Dunning Management", description: "Smart retries, customer emails, and grace periods to recover failed payments.", features: ["Retry logic", "Email sequences", "Account states"] },
  { icon: PieChart, title: "Revenue Analytics", description: "MRR/ARR, churn, and cohort views for finance and product leadership.", features: ["MRR bridges", "Churn views", "Exports"] },
  { icon: Coins, title: "Multi-Currency Support", description: "Presentment and settlement currencies with FX-aware reporting where required.", features: ["FX handling", "Regional pricing", "Settlement reports"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Billing Strategy", description: "Define packaging, metering, tax posture, and finance reporting needs up front.", icon: Target },
  { step: "02", title: "Payment Architecture", description: "Choose processors, webhooks, idempotency, and ledger patterns for accuracy.", icon: CreditCard },
  { step: "03", title: "Integration Development", description: "Implement billing APIs, customer portal hooks, and internal admin workflows.", icon: Plug },
  { step: "04", title: "Testing & Reconciliation", description: "Sandbox scenarios, payout reconciliation, and edge cases like proration and refunds.", icon: RefreshCw },
  { step: "05", title: "Compliance Review", description: "Validate PCI scope, data handling, and audit trails for finance sign-off.", icon: Scale },
  { step: "06", title: "Go-Live", description: "Phased rollout, monitoring, and runbooks for billing incidents and support.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Billing", items: [
      { name: "Stripe Billing", logo: `${DEVICON}/stripebilling/stripebilling-original.svg` },
      { name: "Chargebee", logo: `${DEVICON}/chargebee/chargebee-original.svg` },
      { name: "Recurly", logo: `${DEVICON}/recurly/recurly-original.svg` },
      { name: "Paddle", logo: `${DEVICON}/paddle/paddle-original.svg` },
      { name: "Zuora", logo: `${DEVICON}/zuora/zuora-original.svg` }
    ] },
  { label: "Payments", items: [
      { name: "Stripe", logo: `${DEVICON}/stripe/stripe-original.svg` },
      { name: "PayPal", logo: `${DEVICON}/paypal/paypal-original.svg` },
      { name: "Braintree", logo: `${DEVICON}/braintree/braintree-original.svg` },
      { name: "Adyen", logo: `${DEVICON}/adyen/adyen-original.svg` },
      { name: "GoCardless", logo: `${DEVICON}/gocardless/gocardless-original.svg` }
    ] },
  { label: "Tax", items: [
      { name: "Avalara", logo: `${DEVICON}/avalara/avalara-original.svg` },
      { name: "TaxJar", logo: `${DEVICON}/taxjar/taxjar-original.svg` },
      { name: "Stripe Tax", logo: `${DEVICON}/stripetax/stripetax-original.svg` },
      { name: "Anrok", logo: `${DEVICON}/anrok/anrok-original.svg` },
      { name: "Paddle Tax", logo: `${DEVICON}/paddletax/paddletax-original.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "Baremetrics", logo: `${DEVICON}/baremetrics/baremetrics-original.svg` },
      { name: "ChartMogul", logo: `${DEVICON}/chartmogul/chartmogul-original.svg` },
      { name: "ProfitWell", logo: `${DEVICON}/profitwell/profitwell-original.svg` },
      { name: "Stripe Dashboard", logo: `${DEVICON}/stripedashboard/stripedashboard-original.svg` },
      { name: "Custom BI", logo: `${DEVICON}/custombi/custombi-original.svg` }
    ] },
  { label: "Infrastructure", items: [
      { name: "Webhooks", logo: `${DEVICON}/webhooks/webhooks-original.svg` },
      { name: "Idempotency", logo: `${DEVICON}/idempotency/idempotency-original.svg` },
      { name: "Event Sourcing", logo: `${DEVICON}/eventsourcing/eventsourcing-original.svg` },
      { name: "CQRS", logo: `${DEVICON}/cqrs/cqrs-original.svg` },
      { name: "Audit Logs", logo: `${DEVICON}/auditlogs/auditlogs-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Quality Solutions", description: "Advanced features and functionalities that improve overall business operations and efficiency." },
  { icon: TrendingUp, title: "CI/CD Approach", description: "Agile SaaS development process with CI/CD and DevOps — release updates every 2-3 weeks." },
  { icon: Zap, title: "Data Security", description: "Standard practices to keep data secure with maintained security features at every stage." },
  { icon: HeartHandshake, title: "Geo-Specific Hosting", description: "Geo-specific hosting in deployment and maintenance ensuring the app stays responsive across markets." },];
