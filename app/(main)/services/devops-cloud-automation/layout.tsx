import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps & Cloud Automation Services - CI/CD & Infrastructure",
  description:
    "Accelerate delivery with Cloud Nexus DevOps and cloud automation services. We implement CI/CD pipelines, infrastructure as code, container orchestration, and monitoring solutions.",
  alternates: { canonical: "/services/devops-cloud-automation" },
  openGraph: {
    title: "DevOps & Cloud Automation Services - CI/CD & Infrastructure",
    description:
      "Accelerate delivery with Cloud Nexus DevOps and cloud automation services. We implement CI/CD pipelines, infrastructure as code, container orchestration, and monitoring solutions.",
    url: "https://cloudnexus.in/services/devops-cloud-automation",
  },
};

export default function DevopsCloudAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
