import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Transport & Logistics",
  subtitle: "Fleet management and supply chain solutions with real-time tracking and AI optimization.",
};

export const introProps: IndustryIntroProps = {
  heading: "Revolutionizing Transport & Logistics",
  descriptionLeft: "We build intelligent fleet management and supply chain platforms that give businesses complete visibility over their operations. Using IoT sensors, AI-powered route optimization, and predictive maintenance, we help reduce costs and improve delivery performance.",
  descriptionRight: "Our logistics solutions integrate GPS tracking, real-time geofencing, automated documentation (OCR), and vendor management into unified platforms. We help companies track thousands of vehicles, optimize routes in real-time, and predict equipment failures before they happen.",
  highlights: [
      {
          "value": "2000+",
          "label": "Vehicles tracked"
      },
      {
          "value": "25%",
          "label": "Fuel cost savings"
      },
      {
          "value": "35%",
          "label": "Delay reduction"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Transport & Logistics",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your transport & logistics needs.",
};

export const projects: Project[] = [
  {
    id: "fleettrack",
    tag: "Fleet Management",
    tagColor: "bg-[#4EB3E8]/15 text-[#4a7db8] border-[#4EB3E8]/30",
    company: "FleetTrack",
    industry: "Transport & Logistics",
    headline: "IoT-powered fleet management system reducing fuel costs by 25% across 2000+ vehicles.",
    challenge:
      "No real-time visibility into vehicle locations. Manual route planning causing inefficiency. High fuel costs due to unoptimized routes.",
    solution:
      "GPS + IoT sensor integration for real-time fleet tracking. AI-based route optimization engine. Predictive maintenance alerts reducing breakdowns by 40%.",
    duration: "90 days",
    accentColor: "#4EB3E8",
    metrics: [
      { value: 25, suffix: "%", label: "Fuel cost reduction" },
      { value: 2000, suffix: "+", label: "Vehicles tracked" },
      { value: 40, suffix: "%", label: "Fewer breakdowns" },
    ],
    timeline: [
      { phase: "IoT Integration", detail: "GPS trackers, fuel sensors, OBD-II device setup" },
      { phase: "Tracking Platform", detail: "Real-time dashboard with geofencing and alerts" },
      { phase: "Route Optimization", detail: "AI-based routing engine with traffic data" },
      { phase: "Predictive Maintenance", detail: "ML models for breakdown prediction" },
    ],
  },
  {
    id: "shipwise",
    tag: "Supply Chain",
    tagColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    company: "ShipWise",
    industry: "Transport & Logistics",
    headline: "End-to-end supply chain visibility platform cutting delivery delays by 35%.",
    challenge:
      "Fragmented supply chain with no unified tracking. Manual documentation causing delays. Poor vendor communication.",
    solution:
      "Unified platform connecting warehouses, carriers, and vendors. Automated documentation with OCR. Real-time shipment tracking with ETA predictions.",
    duration: "60 days",
    accentColor: "#06b6d4",
    metrics: [
      { value: 35, suffix: "%", label: "Delay reduction" },
      { value: 90, suffix: "%", label: "Doc automation" },
      { value: 50, suffix: "+", label: "Vendor integrations" },
    ],
    timeline: [
      { phase: "Platform Design", detail: "Unified tracking architecture, API gateway" },
      { phase: "Vendor Integration", detail: "50+ carrier and warehouse API connections" },
      { phase: "Automation Layer", detail: "OCR for documents, automated status updates" },
      { phase: "Analytics Dashboard", detail: "Real-time KPIs, delay prediction models" },
    ],
  },
];
