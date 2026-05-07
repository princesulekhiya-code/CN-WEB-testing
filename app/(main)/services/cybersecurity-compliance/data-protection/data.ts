import {
  Tags,
  Map,
  Lock,
  Shield,
  KeyRound,
  Sparkles,
  ClipboardList,
  Layers,
  Settings,
  Eye,
  FileKey,
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
  titleTop: "Data Protection",
  titleBottom: "& Encryption",
  description:
    "Data classification & mapping, encryption at rest/transit, DLP policies, access control & IAM, key management, privacy-by-design implementation.",
  heroImage: "/images/stock/stock-bec6bc3726.jpg",
  heroImageAlt: "Data Protection & Encryption",
  topBadge: { icon: null as any, title: "Encryption", subtitle: "End-to-end", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Zero Breach", subtitle: "Data secured", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 200, suffix: "+", label: "Security Audits" },
    { value: 99, suffix: "%", label: "Threat Detection" },
    { value: 50, suffix: "+", label: "Clients Protected" },
    { value: 15, suffix: "+", label: "Years Expertise" },
  ],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Data Protection &",
  headingWhite: "Encryption",
  subtitle:
    "Protect sensitive information with layered controls — from discovery and classification through cryptographic enforcement and operational guardrails.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Data Protection",
  headingWhite: "Process",
  subtitle:
    "A pragmatic path from visibility to enforcement — with privacy principles embedded in how your product and platforms evolve.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Data Protection",
  headingWhite: "Technologies",
  subtitle: "Platforms commonly integrated for discovery, encryption, DLP, and identity-backed access.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Protect Sensitive",
  headingBottom: "Data at Scale?",
  description:
    "Tell us where data lives today — we'll propose classification, encryption, and access patterns that fit your stack.",
};

export const services: ServiceOffering[] = [
  {
    icon: Tags,
    title: "Data Classification & Mapping",
    description:
      "Discover structured and unstructured data stores, label sensitivity, and document flows across SaaS, databases, and file shares.",
    features: ["Data inventory", "Lineage sketches", "Retention hooks"],
  },
  {
    icon: Lock,
    title: "Encryption at Rest & in Transit",
    description:
      "Apply modern cryptography defaults — TLS policies, database TDE, object storage SSE, and application-layer encryption where warranted.",
    features: ["TLS hardening", "KMS integration", "Field-level crypto"],
  },
  {
    icon: Shield,
    title: "DLP Policies",
    description:
      "Prevent exfiltration with endpoint, email, and cloud DLP tuned to reduce noise while protecting crown-jewel data classes.",
    features: ["Exfil patterns", "Just-in-time access", "Alert tuning"],
  },
  {
    icon: Eye,
    title: "Access Control & IAM",
    description:
      "Role design, separation of duties, privileged access workflows, and periodic access reviews aligned to least privilege.",
    features: ["RBAC/ABAC", "PAM patterns", "Access reviews"],
  },
  {
    icon: KeyRound,
    title: "Key Management",
    description:
      "Centralized key lifecycle, rotation, and segregation of duties between data owners and platform operators.",
    features: ["HSM/KMS", "Rotation policy", "Break-glass"],
  },
  {
    icon: Sparkles,
    title: "Privacy-by-Design",
    description:
      "Embed minimization, purpose limitation, and transparency into product flows — from analytics to customer support tooling.",
    features: ["Consent UX", "PII minimization", "DSAR readiness"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Data Discovery",
    description: "Automated scanning plus stakeholder interviews to locate regulated and confidential data.",
    icon: Map,
  },
  {
    step: "02",
    title: "Classification Scheme",
    description: "Define labels, handling rules, and approved locations per data class.",
    icon: Tags,
  },
  {
    step: "03",
    title: "Control Design",
    description: "Encryption, DLP, IAM, and logging controls mapped to each sensitivity tier.",
    icon: Layers,
  },
  {
    step: "04",
    title: "Implementation",
    description: "Roll out policies with phased enforcement — monitor mode first, then progressive blocking.",
    icon: Settings,
  },
  {
    step: "05",
    title: "Validation",
    description: "Test cases for exfil paths, key rotation, and backup/restore integrity.",
    icon: FileKey,
  },
  {
    step: "06",
    title: "Operational Playbooks",
    description: "Runbooks for incidents involving keys, DLP alerts, and access anomalies.",
    icon: ClipboardList,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Encryption & Keys",
    items: [
      { name: "AWS KMS", logo: `${DEVICON}/awskms/awskms-original.svg` },
      { name: "Azure Key Vault", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP KMS", logo: `${DEVICON}/gcpkms/gcpkms-original.svg` },
      { name: "HashiCorp Vault", logo: `${DEVICON}/vault/vault-original.svg` },
      { name: "CloudHSM", logo: `${DEVICON}/cloudhsm/cloudhsm-original.svg` },
    ],
  },
  {
    label: "DLP & CASB",
    items: [
      { name: "Microsoft Purview", logo: `${DEVICON}/microsoftpurview/microsoftpurview-original.svg` },
      { name: "Symantec DLP", logo: `${DEVICON}/symantecdlp/symantecdlp-original.svg` },
      { name: "Netskope", logo: `${DEVICON}/netskope/netskope-original.svg` },
      { name: "Zscaler", logo: `${DEVICON}/zscaler/zscaler-original.svg` },
      { name: "McAfee MVISION", logo: `${DEVICON}/mcafeemvision/mcafeemvision-original.svg` },
    ],
  },
  {
    label: "IAM",
    items: [
      { name: "Okta", logo: `${DEVICON}/okta/okta-original.svg` },
      { name: "Azure AD", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "AWS IAM", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "SailPoint", logo: `${DEVICON}/sailpoint/sailpoint-original.svg` },
      { name: "Saviynt", logo: `${DEVICON}/saviynt/saviynt-original.svg` },
    ],
  },
  {
    label: "Discovery",
    items: [
      { name: "BigID", logo: `${DEVICON}/bigid/bigid-original.svg` },
      { name: "OneTrust", logo: `${DEVICON}/onetrust/onetrust-original.svg` },
      { name: "Collibra", logo: `${DEVICON}/collibra/collibra-original.svg` },
      { name: "AWS Macie", logo: `${DEVICON}/awsmacie/awsmacie-original.svg` },
      { name: "Microsoft Information Protection", logo: `${DEVICON}/microsoftinformationprotection/microsoftinformationprotection-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Cross-Functional Team",
    description: "Security engineers paired with privacy-minded architects — fewer handoffs, faster decisions.",
  },
  {
    icon: Clock,
    title: "Phased Rollouts",
    description: "Reduce business disruption with staged enforcement and measurable false-positive budgets.",
  },
  {
    icon: Award,
    title: "Framework Alignment",
    description: "Mappings to GDPR, HIPAA, and PCI expectations baked into deliverables.",
  },
  {
    icon: HeartHandshake,
    title: "Engineer-Friendly",
    description: "SDK patterns, IaC snippets, and CI checks your developers can adopt without guesswork.",
  },
];
