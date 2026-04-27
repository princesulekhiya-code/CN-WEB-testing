import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Travel & Hospitality",
  subtitle: "Booking platforms and hotel management systems with AI-powered dynamic pricing.",
};

export const introProps: IndustryIntroProps = {
  heading: "Elevating Travel Experiences",
  descriptionLeft: "We build travel booking platforms and hotel management systems that handle millions of bookings with AI-powered dynamic pricing, multi-supplier inventory aggregation, and seamless guest experiences from search to checkout.",
  descriptionRight: "Our hospitality solutions include property management systems, digital check-in with mobile keys, revenue management across OTA channels, and staff coordination tools. We help hotels and travel companies maximize revenue while delivering exceptional guest experiences.",
  highlights: [
      {
          "value": "1M+",
          "label": "Annual bookings"
      },
      {
          "value": "150+",
          "label": "Properties managed"
      },
      {
          "value": "20%",
          "label": "Revenue increase"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Travel & Hospitality",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your travel & hospitality needs.",
};

export const projects: Project[] = [
  {
    id: "bookwise",
    tag: "Booking Platform",
    tagColor: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    company: "BookWise",
    industry: "Travel & Hospitality",
    headline: "AI-powered travel booking platform with dynamic pricing serving 1M+ bookings annually.",
    challenge: "Aggregating inventory from 200+ suppliers. Dynamic pricing in real-time. Handling peak load during holiday seasons.",
    solution: "Multi-source inventory aggregation with smart caching. ML-based dynamic pricing engine. Auto-scaling infrastructure handling 10x traffic spikes.",
    duration: "90 days",
    accentColor: "#0ea5e9",
    metrics: [
      { value: 1, suffix: "M+", label: "Annual bookings" },
      { value: 200, suffix: "+", label: "Supplier integrations" },
      { value: 15, suffix: "%", label: "Revenue uplift" },
    ],
    timeline: [
      { phase: "Supplier Integration", detail: "200+ API connections, rate normalization" },
      { phase: "Dynamic Pricing", detail: "ML-based demand forecasting, price optimization" },
      { phase: "Search & UX", detail: "Sub-second search, filters, comparison views" },
      { phase: "Scale & Resilience", detail: "Auto-scaling, circuit breakers, CDN" },
    ],
  },
  {
    id: "hotelops",
    tag: "Hotel Management",
    tagColor: "bg-teal-500/15 text-teal-400 border-teal-500/30",
    company: "HotelOps",
    industry: "Travel & Hospitality",
    headline: "Smart hotel management system automating operations across 150+ properties.",
    challenge: "Manual check-in/check-out processes. Revenue management across multiple channels. Staff coordination across shifts.",
    solution: "Digital check-in with mobile keys. AI revenue management optimizing room pricing. Staff management with shift scheduling and task tracking.",
    duration: "70 days",
    accentColor: "#14b8a6",
    metrics: [
      { value: 150, suffix: "+", label: "Properties managed" },
      { value: 20, suffix: "%", label: "Revenue increase" },
      { value: 50, suffix: "%", label: "Faster check-in" },
    ],
    timeline: [
      { phase: "PMS Core", detail: "Reservation management, room inventory" },
      { phase: "Digital Guest Journey", detail: "Mobile check-in, digital keys, requests" },
      { phase: "Revenue Management", detail: "Dynamic pricing across OTA channels" },
      { phase: "Staff Operations", detail: "Shift scheduling, task management, reporting" },
    ],
  },
];
