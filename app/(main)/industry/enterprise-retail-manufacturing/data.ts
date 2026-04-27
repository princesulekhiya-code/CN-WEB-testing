import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Enterprise Retail & Manufacturing",
  subtitle: "IoT-powered smart factory platforms and omnichannel retail solutions.",
};

export const introProps: IndustryIntroProps = {
  heading: "Smart Manufacturing & Retail",
  descriptionLeft: "We build IoT-powered smart factory platforms and omnichannel retail solutions that give enterprises complete visibility over production lines, inventory, and customer touchpoints. Our solutions reduce downtime, optimize operations, and unify sales channels.",
  descriptionRight: "From 1000+ IoT sensor deployments with predictive maintenance to unified POS systems connecting 500+ retail stores, we help manufacturers and retailers leverage technology for operational excellence and competitive advantage.",
  highlights: [
      {
          "value": "1000+",
          "label": "IoT sensors deployed"
      },
      {
          "value": "500+",
          "label": "Stores unified"
      },
      {
          "value": "45%",
          "label": "Downtime reduced"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Enterprise Retail & Manufacturing",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your enterprise retail & manufacturing needs.",
};

export const projects: Project[] = [
  {
    id: "factoryiq",
    tag: "Smart Factory",
    tagColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    company: "FactoryIQ",
    industry: "Manufacturing",
    headline: "IoT-powered smart factory platform reducing downtime by 45% across 12 production lines.",
    challenge: "Unplanned equipment downtime costing millions. No predictive maintenance capability. Siloed production data.",
    solution: "1000+ IoT sensors for real-time machine monitoring. ML-based predictive maintenance models. Unified production dashboard with OEE tracking.",
    duration: "100 days",
    accentColor: "#f97316",
    metrics: [
      { value: 45, suffix: "%", label: "Downtime reduced" },
      { value: 1000, suffix: "+", label: "IoT sensors" },
      { value: 30, suffix: "%", label: "OEE improvement" },
    ],
    timeline: [
      { phase: "IoT Infrastructure", detail: "Sensor deployment, edge computing setup" },
      { phase: "Data Platform", detail: "Time-series DB, real-time streaming pipeline" },
      { phase: "Predictive Models", detail: "Equipment failure prediction, anomaly detection" },
      { phase: "Dashboard & Alerts", detail: "OEE tracking, automated maintenance alerts" },
    ],
  },
  {
    id: "retailedge",
    tag: "Retail POS",
    tagColor: "bg-red-500/15 text-red-400 border-red-500/30",
    company: "RetailEdge",
    industry: "Retail",
    headline: "Omnichannel POS system unifying 500+ retail stores with real-time inventory.",
    challenge: "Disconnected online and offline sales channels. Inventory discrepancies across stores. Slow checkout experience.",
    solution: "Unified omnichannel POS with offline-first architecture. Real-time inventory sync across all channels. Mobile POS for queue-busting during peak hours.",
    duration: "75 days",
    accentColor: "#ef4444",
    metrics: [
      { value: 500, suffix: "+", label: "Stores unified" },
      { value: 99, suffix: "%", label: "Inventory accuracy" },
      { value: 40, suffix: "%", label: "Faster checkout" },
    ],
    timeline: [
      { phase: "POS Architecture", detail: "Offline-first, multi-store, cloud sync" },
      { phase: "Inventory Engine", detail: "Real-time stock across all channels" },
      { phase: "Omnichannel Integration", detail: "Online, in-store, mobile unification" },
      { phase: "Store Rollout", detail: "Phased deployment, staff training, support" },
    ],
  },
];
