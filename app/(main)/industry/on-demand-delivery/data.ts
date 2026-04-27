import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "On Demand Delivery",
  subtitle: "Delivery and logistics apps with AI route optimization and real-time tracking.",
};

export const introProps: IndustryIntroProps = {
  heading: "On-Demand Delivery Solutions",
  descriptionLeft: "We build last-mile delivery platforms and quick commerce apps that process tens of thousands of daily orders with AI-powered route optimization, real-time GPS tracking, and dynamic surge pricing. Our solutions are designed for speed, efficiency, and scale.",
  descriptionRight: "From rider allocation algorithms and dark store inventory management to demand prediction models and IoT-based quality monitoring for fresh produce, we help delivery companies achieve faster delivery times while maintaining operational profitability.",
  highlights: [
      {
          "value": "50K+",
          "label": "Daily orders"
      },
      {
          "value": "10min",
          "label": "Avg delivery time"
      },
      {
          "value": "4.8/5",
          "label": "Customer rating"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a On Demand Delivery",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your on demand delivery needs.",
};

export const projects: Project[] = [
  {
    id: "quickdrop",
    tag: "Last-Mile Delivery",
    tagColor: "bg-lime-500/15 text-lime-400 border-lime-500/30",
    company: "QuickDrop",
    industry: "On Demand Delivery",
    headline: "Last-mile delivery platform processing 50K+ daily orders with AI route optimization.",
    challenge: "Inefficient last-mile delivery routes. Real-time tracking for customers and drivers. Peak hour demand management.",
    solution: "AI-powered route optimization cutting delivery time by 30%. Real-time GPS tracking with ETA predictions. Dynamic pricing and surge management.",
    duration: "70 days",
    accentColor: "#84cc16",
    metrics: [
      { value: 50, suffix: "K+", label: "Daily orders" },
      { value: 30, suffix: "%", label: "Faster deliveries" },
      { value: 4.8, suffix: "/5", label: "Customer rating" },
    ],
    timeline: [
      { phase: "Order Management", detail: "Multi-vendor order aggregation, dispatch" },
      { phase: "Route Optimization", detail: "AI routing with traffic and demand data" },
      { phase: "Real-Time Tracking", detail: "GPS tracking, ETA prediction, notifications" },
      { phase: "Surge Management", detail: "Dynamic pricing, demand forecasting" },
    ],
  },
  {
    id: "grocerynow",
    tag: "Grocery Delivery",
    tagColor: "bg-green-500/15 text-green-400 border-green-500/30",
    company: "GroceryNow",
    industry: "On Demand Delivery",
    headline: "10-minute grocery delivery app with dark store management and inventory prediction.",
    challenge: "Ultra-fast delivery promise requiring precise inventory. Dark store operations management. Fresh produce quality control.",
    solution: "AI inventory prediction for dark stores. Batched picking optimization. Quality scoring system for fresh produce with IoT temperature monitoring.",
    duration: "85 days",
    accentColor: "#22c55e",
    metrics: [
      { value: 10, suffix: " min", label: "Avg delivery time" },
      { value: 95, suffix: "%", label: "Inventory accuracy" },
      { value: 20, suffix: "+", label: "Dark stores" },
    ],
    timeline: [
      { phase: "Dark Store Platform", detail: "Inventory management, picking optimization" },
      { phase: "Demand Prediction", detail: "ML-based stock forecasting per location" },
      { phase: "Delivery Engine", detail: "Rider allocation, route optimization" },
      { phase: "Quality Systems", detail: "IoT temp monitoring, freshness scoring" },
    ],
  },
];
