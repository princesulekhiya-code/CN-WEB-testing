import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Oil & Gas",
  subtitle: "Energy sector digital solutions with IoT monitoring and AI-optimized operations.",
};

export const introProps: IndustryIntroProps = {
  heading: "Digital Solutions for Energy",
  descriptionLeft: "We build IoT monitoring platforms and AI-optimized operations systems for the oil and gas industry. Our solutions provide real-time pipeline monitoring, predictive maintenance, and automated compliance reporting for energy companies operating across harsh environments.",
  descriptionRight: "From edge computing with low-latency alerts to ML models that optimize drilling parameters and predict equipment failures, we help energy companies reduce costs, ensure safety, and meet regulatory requirements across all operations.",
  highlights: [
      {
          "value": "500km",
          "label": "Pipeline monitored"
      },
      {
          "value": "30%",
          "label": "Cost reduction"
      },
      {
          "value": "100%",
          "label": "Compliance met"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Oil & Gas",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your oil & gas needs.",
};

export const projects: Project[] = [
  {
    id: "energymon",
    tag: "Energy Monitoring",
    tagColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    company: "EnergyMon",
    industry: "Oil & Gas",
    headline: "Real-time pipeline monitoring system preventing leaks across 500km of infrastructure.",
    challenge: "Manual pipeline inspections causing delayed leak detection. Harsh environment sensor challenges. Regulatory compliance reporting.",
    solution: "IoT sensor network along pipeline routes. AI-based anomaly detection for pressure and flow. Automated compliance reporting dashboards.",
    duration: "120 days",
    accentColor: "#eab308",
    metrics: [
      { value: 500, suffix: "km", label: "Pipeline monitored" },
      { value: 90, suffix: "%", label: "Faster leak detection" },
      { value: 100, suffix: "%", label: "Compliance met" },
    ],
    timeline: [
      { phase: "Sensor Deployment", detail: "Pressure, flow, temperature sensors along pipeline" },
      { phase: "Edge Computing", detail: "On-site data processing, low-latency alerts" },
      { phase: "AI Anomaly Detection", detail: "Pattern recognition for leak prediction" },
      { phase: "Compliance Dashboard", detail: "Automated regulatory reporting" },
    ],
  },
  {
    id: "drillsmart",
    tag: "Drilling Operations",
    tagColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    company: "DrillSmart",
    industry: "Oil & Gas",
    headline: "AI-optimized drilling operations platform reducing costs by 30% per well.",
    challenge: "Suboptimal drilling parameters causing cost overruns. Equipment failures during operations. Data silos across drilling sites.",
    solution: "ML models optimizing drilling speed, weight-on-bit, and mud properties. Predictive equipment maintenance. Unified operations dashboard across all sites.",
    duration: "90 days",
    accentColor: "#f59e0b",
    metrics: [
      { value: 30, suffix: "%", label: "Cost per well reduced" },
      { value: 25, suffix: "%", label: "Faster drilling" },
      { value: 50, suffix: "+", label: "Wells optimized" },
    ],
    timeline: [
      { phase: "Data Unification", detail: "Cross-site data pipeline, standardization" },
      { phase: "Drilling ML Models", detail: "Parameter optimization, ROP prediction" },
      { phase: "Equipment Analytics", detail: "Failure prediction, maintenance scheduling" },
      { phase: "Operations Dashboard", detail: "Real-time KPIs, cross-site comparison" },
    ],
  },
];
