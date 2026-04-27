import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Fintech",
  subtitle: "Financial technology solutions with payment gateways and AI-powered investment platforms.",
};

export const introProps: IndustryIntroProps = {
  heading: "Financial Technology at Scale",
  descriptionLeft: "We build payment infrastructure and investment platforms that process billions in transactions with 99.99% uptime. From multi-acquirer payment gateways to robo-advisory platforms with AI portfolio optimization, our fintech solutions are built for security, compliance, and performance.",
  descriptionRight: "Our expertise includes PCI-DSS Level 1 certified payment systems, smart routing with fallback logic, AI-driven portfolio rebalancing, automated tax-loss harvesting, and multi-jurisdiction regulatory compliance engines that serve global financial markets.",
  highlights: [
      {
          "value": "$500M+",
          "label": "Annual volume"
      },
      {
          "value": "99.99%",
          "label": "Uptime"
      },
      {
          "value": "$200M+",
          "label": "AUM managed"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Fintech",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your fintech needs.",
};

export const projects: Project[] = [
  {
    id: "paybridge",
    tag: "Payment Gateway",
    tagColor: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
    company: "PayBridge",
    industry: "Fintech",
    headline: "Unified payment gateway processing $500M+ annually with 99.99% uptime.",
    challenge: "Supporting 50+ payment methods across regions. PCI-DSS Level 1 compliance. Sub-200ms transaction processing.",
    solution: "Multi-acquirer routing for optimal success rates. PCI-DSS Level 1 certified infrastructure. Smart retry logic with fallback routing.",
    duration: "100 days",
    accentColor: "#6366f1",
    metrics: [
      { value: 500, suffix: "M+", label: "Annual volume ($)" },
      { value: 99.99, suffix: "%", label: "Uptime" },
      { value: 150, suffix: "ms", label: "Avg latency" },
    ],
    timeline: [
      { phase: "Gateway Architecture", detail: "Multi-acquirer routing, tokenization" },
      { phase: "PCI Compliance", detail: "Level 1 certification, encryption, audits" },
      { phase: "Smart Routing", detail: "Success rate optimization, retry logic" },
      { phase: "Merchant Dashboard", detail: "Real-time analytics, settlement tracking" },
    ],
  },
  {
    id: "wealthwise",
    tag: "Investment Platform",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    company: "WealthWise",
    industry: "Fintech",
    headline: "Robo-advisory investment platform managing $200M+ AUM with AI portfolio optimization.",
    challenge: "Automated portfolio rebalancing at scale. Regulatory compliance across jurisdictions. Tax-loss harvesting complexity.",
    solution: "AI-driven portfolio allocation with risk profiling. Automated tax-loss harvesting. Multi-jurisdiction regulatory compliance engine.",
    duration: "90 days",
    accentColor: "#10b981",
    metrics: [
      { value: 200, suffix: "M+", label: "AUM ($)" },
      { value: 12, suffix: "%", label: "Avg annual return" },
      { value: 100, suffix: "%", label: "Compliant" },
    ],
    timeline: [
      { phase: "Risk Profiling", detail: "User questionnaire, risk score algorithm" },
      { phase: "Portfolio Engine", detail: "AI allocation, automated rebalancing" },
      { phase: "Tax Optimization", detail: "Tax-loss harvesting, gain deferral" },
      { phase: "Compliance & Reporting", detail: "Regulatory engine, investor reports" },
    ],
  },
];
