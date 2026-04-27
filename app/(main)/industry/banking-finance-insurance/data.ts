import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Banking, Finance & Insurance",
  subtitle: "Secure fintech solutions with AI-powered fraud detection and automated claims processing.",
};

export const introProps: IndustryIntroProps = {
  heading: "Securing Financial Futures",
  descriptionLeft: "We develop fintech solutions with bank-grade security, AI-powered fraud detection, and automated claims processing. Our platforms handle sensitive financial data with PCI-DSS compliance, biometric authentication, and end-to-end encryption.",
  descriptionRight: "From AI-driven spending analysis and anomaly detection to OCR-powered document processing and automated insurance workflows, we help financial institutions modernize operations, reduce risk, and serve customers faster.",
  highlights: [
      {
          "value": "95%",
          "label": "Fraud detection rate"
      },
      {
          "value": "48hrs",
          "label": "Avg claim settlement"
      },
      {
          "value": "100%",
          "label": "PCI-DSS compliant"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Banking, Finance & Insurance",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your banking, finance & insurance needs.",
};

export const projects: Project[] = [
  {
    id: "finsmart",
    tag: "AI-Powered Finance",
    tagColor: "bg-[#4EB3E8]/15 text-[#4a7db8] border-[#4EB3E8]/30",
    company: "FinSmart",
    industry: "Banking & Finance",
    headline: "AI-powered financial management app with fraud detection and smart budgeting.",
    challenge: "Secure handling of sensitive financial data. Building accurate AI models for fraud detection.",
    solution: "Cross-platform app with bank-grade encryption, biometric auth. ML algorithms for spending analysis and anomaly detection. Seamless digital wallet integration.",
    duration: "80 days",
    accentColor: "#4EB3E8",
    metrics: [
      { value: 95, suffix: "%", label: "Fraud detection rate" },
      { value: 40, suffix: "%", label: "Better money mgmt" },
      { value: 100, suffix: "%", label: "Data encryption" },
    ],
    timeline: [
      { phase: "Security Architecture", detail: "Bank-grade encryption, biometric auth" },
      { phase: "AI Model Training", detail: "Spending analysis, anomaly detection" },
      { phase: "Payment Integration", detail: "Digital wallets, payment gateways" },
      { phase: "Launch & Monitor", detail: "Cross-platform release, fraud monitoring" },
    ],
  },
  {
    id: "claimfast",
    tag: "InsurTech",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    company: "ClaimFast",
    industry: "Insurance",
    headline: "Automated insurance claims processing reducing settlement time from 30 days to 48 hours.",
    challenge: "Manual claims processing causing month-long delays. Document verification bottlenecks. Fraudulent claims costing millions.",
    solution: "AI-powered document extraction with OCR. Automated fraud scoring with ML. Digital-first claims journey with real-time status tracking.",
    duration: "65 days",
    accentColor: "#10b981",
    metrics: [
      { value: 97, suffix: "%", label: "Processing automated" },
      { value: 48, suffix: " hrs", label: "Avg settlement" },
      { value: 85, suffix: "%", label: "Fraud caught" },
    ],
    timeline: [
      { phase: "OCR Pipeline", detail: "Document extraction, classification, validation" },
      { phase: "Fraud Detection", detail: "ML scoring model, pattern recognition" },
      { phase: "Claims Workflow", detail: "Digital-first journey, automated approvals" },
      { phase: "Integration & Launch", detail: "Core insurance system connectors" },
    ],
  },
];
