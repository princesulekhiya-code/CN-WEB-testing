import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "E-Commerce Solutions",
  subtitle: "Scalable online retail platforms with AI-powered recommendations and seamless checkout.",
};

export const introProps: IndustryIntroProps = {
  heading: "Powering E-Commerce at Scale",
  descriptionLeft: "We design and build high-performance e-commerce platforms that drive conversions and revenue growth. From headless commerce architectures to AI-powered product recommendations, our solutions handle millions of transactions with sub-second response times.",
  descriptionRight: "Our e-commerce expertise spans multi-vendor marketplaces, payment gateway integrations, inventory management systems, and personalization engines. We leverage technologies like Next.js, Node.js, Redis, and TensorFlow to deliver seamless shopping experiences across all channels.",
  highlights: [
      {
          "value": "10K+",
          "label": "Sellers onboarded"
      },
      {
          "value": "38%",
          "label": "Avg AOV increase"
      },
      {
          "value": "18ms",
          "label": "Inference latency"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a E-Commerce Solutions",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your e-commerce solutions needs.",
};

export const projects: Project[] = [
  {
    id: "cartflow-ecom",
    tag: "Headless Commerce",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    company: "CartFlow",
    industry: "E-Commerce",
    headline: "AI-powered headless commerce platform driving 38% increase in average order value.",
    challenge:
      "Generic product suggestions leading to 71% cart abandonment. No real-time ML infrastructure for personalization.",
    solution:
      "Built a headless commerce platform with real-time ML recommendation engine using TensorFlow Serving. Multi-currency support and dynamic pricing.",
    duration: "60 days",
    accentColor: "#8b5cf6",
    metrics: [
      { value: 38, suffix: "%", label: "AOV increase" },
      { value: 22, suffix: "%", label: "Abandonment drop" },
      { value: 18, suffix: "ms", label: "Inference latency" },
    ],
    timeline: [
      { phase: "Data Pipeline", detail: "Kafka streams for clickstream and purchase history" },
      { phase: "ML Model Training", detail: "Collaborative filtering + content-based hybrid" },
      { phase: "API & Caching Layer", detail: "Spring Boot serving TF models with Redis caching" },
      { phase: "Rollout & Tuning", detail: "Canary at 5% → 100% with feature-flag control" },
    ],
  },
  {
    id: "shopnest-marketplace",
    tag: "Multi-Vendor Marketplace",
    tagColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    company: "ShopNest",
    industry: "E-Commerce",
    headline: "Scalable multi-vendor marketplace supporting 10K+ sellers with real-time inventory.",
    challenge:
      "Managing inventory across thousands of vendors. Payment splitting and commission tracking. Real-time order synchronization.",
    solution:
      "Microservices-based marketplace with event-driven inventory management. Automated payment splitting with Stripe Connect and real-time order tracking.",
    duration: "75 days",
    accentColor: "#a855f7",
    metrics: [
      { value: 10, suffix: "K+", label: "Active sellers" },
      { value: 99.5, suffix: "%", label: "Order accuracy" },
      { value: 2, suffix: "s", label: "Sync latency" },
    ],
    timeline: [
      { phase: "Marketplace Architecture", detail: "Multi-tenant design, vendor onboarding flow" },
      { phase: "Inventory Engine", detail: "Event-driven stock management across vendors" },
      { phase: "Payments & Splits", detail: "Stripe Connect integration, automated commissions" },
      { phase: "Launch & Scale", detail: "Load testing, CDN setup, monitoring dashboards" },
    ],
  },
];
