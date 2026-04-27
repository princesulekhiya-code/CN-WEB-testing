import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Real Estate",
  subtitle: "Property tech platforms with AI valuations, virtual tours, and automated management.",
};

export const introProps: IndustryIntroProps = {
  heading: "Digitizing Real Estate",
  descriptionLeft: "We build property technology platforms that automate valuations, enable virtual tours, and streamline property management. Our AI-powered solutions help real estate companies list, manage, and transact properties faster and more efficiently.",
  descriptionRight: "Our PropTech solutions include AI-based property valuation engines, 360° virtual tour integrations, automated tenant screening, digital lease signing, and centralized maintenance management systems. We help property managers go fully digital with zero paperwork.",
  highlights: [
      {
          "value": "25K+",
          "label": "Listings managed"
      },
      {
          "value": "15K+",
          "label": "Units automated"
      },
      {
          "value": "45%",
          "label": "Faster valuations"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Real Estate",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your real estate needs.",
};

export const projects: Project[] = [
  {
    id: "propview",
    tag: "PropTech Platform",
    tagColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    company: "PropView",
    industry: "Real Estate",
    headline: "AI-powered property listing platform with virtual tours and smart valuation.",
    challenge:
      "Manual property valuation processes. No virtual viewing capability. Scattered listing data across multiple platforms.",
    solution:
      "Unified listing aggregation with AI-based property valuation. 360° virtual tour integration. Smart search with neighborhood analytics.",
    duration: "70 days",
    accentColor: "#f59e0b",
    metrics: [
      { value: 45, suffix: "%", label: "Faster valuations" },
      { value: 25, suffix: "K+", label: "Listings managed" },
      { value: 3, suffix: "x", label: "Lead conversion" },
    ],
    timeline: [
      { phase: "Data Aggregation", detail: "Multi-source listing ingestion, normalization" },
      { phase: "AI Valuation Engine", detail: "ML models for property price prediction" },
      { phase: "Virtual Tours", detail: "360° media upload, WebGL-based viewer" },
      { phase: "Smart Search", detail: "Neighborhood analytics, commute scoring" },
    ],
  },
  {
    id: "rentease",
    tag: "Property Management",
    tagColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    company: "RentEase",
    industry: "Real Estate",
    headline: "Automated property management platform handling 15K+ rental units with zero paperwork.",
    challenge:
      "Manual rent collection and lease management. Maintenance request tracking chaos. Tenant screening bottlenecks.",
    solution:
      "Automated rent collection with ACH/card payments. Digital lease signing. AI-based tenant screening and maintenance ticketing system.",
    duration: "55 days",
    accentColor: "#f97316",
    metrics: [
      { value: 15, suffix: "K+", label: "Units managed" },
      { value: 95, suffix: "%", label: "On-time rent" },
      { value: 0, suffix: " paper", label: "Fully digital" },
    ],
    timeline: [
      { phase: "Payment Automation", detail: "ACH, card processing, automated reminders" },
      { phase: "Lease Management", detail: "Digital signing, renewal workflows" },
      { phase: "Maintenance System", detail: "Ticketing, vendor dispatch, photo uploads" },
      { phase: "Tenant Screening", detail: "AI-based credit and background checks" },
    ],
  },
];
