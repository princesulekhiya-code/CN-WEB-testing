import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Healthcare & Lifesciences",
  subtitle: "HIPAA-compliant digital health solutions for hospitals, clinics, and pharmaceutical companies.",
};

export const introProps: IndustryIntroProps = {
  heading: "Transforming Healthcare with Technology",
  descriptionLeft: "We build HIPAA-compliant digital health solutions that connect patients, providers, and medical devices. From electronic health records to real-time patient monitoring, our healthcare technology solutions are designed for security, scalability, and regulatory compliance.",
  descriptionRight: "Our team has deep expertise in healthcare interoperability standards (HL7 FHIR, DICOM), medical device integration via BLE and IoT, and building secure architectures that meet the strictest compliance requirements including HIPAA, HITRUST, and SOC 2.",
  highlights: [
      {
          "value": "500+",
          "label": "Healthcare providers served"
      },
      {
          "value": "100%",
          "label": "HIPAA compliance rate"
      },
      {
          "value": "99.9%",
          "label": "System uptime"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Healthcare & Lifesciences",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your healthcare & lifesciences needs.",
};

export const projects: Project[] = [
  {
    id: "chorus-health",
    tag: "Cross-Platform App",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    company: "CHORUS",
    industry: "Healthcare / Google",
    headline: "Cross-platform healthcare app for Google with real-time patient vitals monitoring.",
    challenge:
      "Inconsistent BLE performance across platforms. Real-time data synchronization. Maintaining healthcare-grade data security.",
    solution:
      "Built CHORUS, a scalable cross-platform application (Web, Android, iOS). Tracks live patient vitals such as heart rate and oxygen levels via BLE. Implements secure architecture with SAST, SCA, and rigorous testing.",
    duration: "120 days",
    accentColor: "#10b981",
    metrics: [
      { value: 99.9, suffix: "%", label: "Uptime achieved" },
      { value: 3, suffix: " platforms", label: "Web, Android, iOS" },
      { value: 0, suffix: " breaches", label: "Security incidents" },
    ],
    timeline: [
      { phase: "Platform Architecture", detail: "Cross-platform framework selection, BLE protocol design" },
      { phase: "Vitals Integration", detail: "Real-time heart rate, oxygen level tracking" },
      { phase: "Security Hardening", detail: "SAST, SCA scanning, healthcare-grade encryption" },
      { phase: "Multi-Platform Launch", detail: "Synchronized release across Web, Android, iOS" },
    ],
  },
  {
    id: "medicore-ehr",
    tag: "EHR System",
    tagColor: "bg-teal-500/15 text-teal-400 border-teal-500/30",
    company: "MediCore",
    industry: "Healthcare",
    headline: "HIPAA-compliant electronic health records system for 500+ healthcare providers.",
    challenge:
      "Legacy paper-based records causing delays. Strict HIPAA compliance requirements. Integration with existing hospital systems.",
    solution:
      "Cloud-native EHR with end-to-end encryption, audit logging, and role-based access. Seamless HL7 FHIR integration with lab systems and pharmacies.",
    duration: "90 days",
    accentColor: "#14b8a6",
    metrics: [
      { value: 500, suffix: "+", label: "Providers onboarded" },
      { value: 100, suffix: "%", label: "HIPAA compliance" },
      { value: 60, suffix: "%", label: "Record access time cut" },
    ],
    timeline: [
      { phase: "Compliance Framework", detail: "HIPAA controls, encryption, audit trail design" },
      { phase: "EHR Core Build", detail: "Patient records, prescriptions, lab results modules" },
      { phase: "Integration Layer", detail: "HL7 FHIR APIs, pharmacy & lab system connectors" },
      { phase: "Provider Rollout", detail: "Phased onboarding, training, and 24/7 support" },
    ],
  },
];
