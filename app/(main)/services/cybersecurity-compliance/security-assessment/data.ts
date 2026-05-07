import {
  Search,
  Bug,
  Swords,
  MailWarning,
  Code2,
  FileCheck,
  ClipboardList,
  Target,
  Layers,
  Shield,
  Settings,
  Users,
  Clock,
  Award,
  HeartHandshake,
} from "lucide-react";
import type {
  ServiceOffering,
  ProcessStep,
  TechCategory,
  WhyChooseItem,
  ServicePageHeroProps,
  ServicePageSectionProps,
  CTAProps,
} from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/cybersecurity-compliance",
  backLabel: "Back to Cybersecurity & Compliance",
  titleTop: "Security Assessment",
  titleBottom: "& Pen Testing",
  description:
    "Vulnerability assessments, penetration testing (network, web, mobile, API), red team exercises, social engineering tests, code security reviews, and compliance-focused testing.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "Security Assessment & Analysis",
  topBadge: { icon: null as any, title: "Deep Audit", subtitle: "Full assessment", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Pen Testing", subtitle: "White-hat team", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 200, suffix: "+", label: "Security Audits" },
    { value: 99, suffix: "%", label: "Threat Detection" },
    { value: 50, suffix: "+", label: "Clients Protected" },
    { value: 15, suffix: "+", label: "Years Expertise" },
  ],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Security Assessment & Pen",
  headingWhite: "Testing",
  subtitle:
    "Offensive security services that pair technical depth with business context — from first scan to validated fixes.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Assessment",
  headingWhite: "Process",
  subtitle:
    "A disciplined engagement model — clear rules, safe execution, and actionable outcomes your teams can ship.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Assessment",
  headingWhite: "Tooling",
  subtitle: "Commercial and open-source tooling selected for coverage, safety, and reporting quality.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Validate Your",
  headingBottom: "Defenses?",
  description:
    "Share your attack surface and compliance drivers — we'll propose a testing plan with clear objectives and timelines.",
};

export const services: ServiceOffering[] = [
  {
    icon: Search,
    title: "Vulnerability Assessments",
    description:
      "Systematic discovery of misconfigurations, missing patches, and unsafe defaults across servers, endpoints, and cloud services.",
    features: ["Asset inventory", "Risk scoring", "Remediation backlog"],
  },
  {
    icon: Bug,
    title: "Penetration Testing",
    description:
      "Authenticated adversary simulation across network, web, mobile, and API surfaces — aligned to OWASP and PTES-style rigor.",
    features: ["Web & API", "Mobile apps", "Internal network"],
  },
  {
    icon: Swords,
    title: "Red Team Exercises",
    description:
      "Multi-stage campaigns that stress people, processes, and detective controls using safe, scoped objectives and clear stop conditions.",
    features: ["Scenario design", "Purple team hooks", "Leadership debrief"],
  },
  {
    icon: MailWarning,
    title: "Social Engineering Tests",
    description:
      "Phishing, vishing, and physical entry simulations with measured reporting — focused on coaching, not blame.",
    features: ["Credential traps", "Callback testing", "Awareness metrics"],
  },
  {
    icon: Code2,
    title: "Code Security Reviews",
    description:
      "Manual and tool-assisted review of high-risk modules — authentication, crypto, file handling, and authorization boundaries.",
    features: ["SAST triage", "Threat modeling", "Secure SDLC hooks"],
  },
  {
    icon: FileCheck,
    title: "Compliance-Focused Testing",
    description:
      "Testing mapped to SOC 2, HIPAA, PCI, and ISO evidence expectations so findings translate directly to control narratives.",
    features: ["Control traceability", "Sample selection", "Auditor-ready"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Kickoff & Rules of Engagement",
    description:
      "Scope, sensitive systems, blackout windows, communication paths, and legal authorizations locked before any testing.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Recon & Threat Model",
    description:
      "Attack surface mapping and priority hypotheses so effort concentrates where compromise would hurt most.",
    icon: Target,
  },
  {
    step: "03",
    title: "Active Testing",
    description:
      "Controlled exploitation attempts with safe rollback paths and continuous coordination with your operations team.",
    icon: Bug,
  },
  {
    step: "04",
    title: "Lateral Movement Analysis",
    description:
      "Where applicable, demonstrate blast radius after initial foothold — validating segmentation and detective coverage.",
    icon: Layers,
  },
  {
    step: "05",
    title: "Findings & Severity",
    description:
      "Clear severity using business context — not just CVSS — with reproduction evidence and affected components.",
    icon: Shield,
  },
  {
    step: "06",
    title: "Remediation Support",
    description:
      "Office hours for engineering teams, retesting windows, and optional fix validation to close the loop.",
    icon: Settings,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Scanners & Platforms",
    items: [
      { name: "Nessus", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Qualys", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "OpenVAS", logo: `${DEVICON}/openvas/openvas-original.svg` },
      { name: "Burp Suite Pro", logo: `${DEVICON}/burpsuitepro/burpsuitepro-original.svg` },
      { name: "Nuclei", logo: `${DEVICON}/nuclei/nuclei-original.svg` },
      { name: "Acunetix", logo: `${DEVICON}/acunetix/acunetix-original.svg` },
    ],
  },
  {
    label: "Network & Wireless",
    items: [
      { name: "nmap", logo: `${DEVICON}/nmap/nmap-original.svg` },
      { name: "masscan", logo: `${DEVICON}/masscan/masscan-original.svg` },
      { name: "Responder", logo: `${DEVICON}/responder/responder-original.svg` },
      { name: "Impacket", logo: `${DEVICON}/impacket/impacket-original.svg` },
      { name: "BloodHound CE", logo: `${DEVICON}/bloodhoundce/bloodhoundce-original.svg` },
    ],
  },
  {
    label: "Mobile & API",
    items: [
      { name: "MobSF", logo: `${DEVICON}/mobsf/mobsf-original.svg` },
      { name: "Postman", logo: `${DEVICON}/postman/postman-original.svg` },
      { name: "OWASP ZAP", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "mitmproxy", logo: `${DEVICON}/mitmproxy/mitmproxy-original.svg` },
      { name: "GraphQL Voyager", logo: `${DEVICON}/graphql/graphql-plain.svg` },
    ],
  },
  {
    label: "Reporting",
    items: [
      { name: "Dradis", logo: `${DEVICON}/dradis/dradis-original.svg` },
      { name: "Ghostwriter", logo: `${DEVICON}/ghostwriter/ghostwriter-original.svg` },
      { name: "DefectDojo", logo: `${DEVICON}/defectdojo/defectdojo-original.svg` },
      { name: "Jira", logo: `${DEVICON}/jira/jira-original.svg` },
      { name: "Confluence", logo: `${DEVICON}/confluence/confluence-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Senior Testers",
    description:
      "Offensive engineers with enterprise and product-company experience — not checklist-only scans.",
  },
  {
    icon: Clock,
    title: "Predictable Windows",
    description:
      "Testing cadences that respect releases and customer-facing peaks with rehearsed communication.",
  },
  {
    icon: Award,
    title: "Audit-Ready Output",
    description:
      "Narratives and artifacts structured for security questionnaires and compliance evidence requests.",
  },
  {
    icon: HeartHandshake,
    title: "Developer-Friendly",
    description:
      "Practical guidance your engineers can ship — prioritized, reproducible, and tied to secure patterns.",
  },
];
