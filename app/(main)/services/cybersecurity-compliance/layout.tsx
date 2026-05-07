import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity & Compliance Services - Secure Your Business",
  description:
    "Protect your business with Cloud Nexus cybersecurity and compliance services. We provide penetration testing, security audits, GDPR/SOC2 compliance, and threat monitoring solutions.",
  alternates: { canonical: "/services/cybersecurity-compliance" },
  openGraph: {
    title: "Cybersecurity & Compliance Services - Secure Your Business",
    description:
      "Protect your business with Cloud Nexus cybersecurity and compliance services. We provide penetration testing, security audits, GDPR/SOC2 compliance, and threat monitoring solutions.",
    url: "https://cloudnexus.in/services/cybersecurity-compliance",
  },
};

export default function CybersecurityComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
