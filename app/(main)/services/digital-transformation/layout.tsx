import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Transformation Services - Modernize Your Business",
  description:
    "Transform your business with Cloud Nexus digital transformation services. We modernize legacy systems, automate workflows, and implement data-driven strategies for competitive advantage.",
  alternates: { canonical: "/services/digital-transformation" },
  openGraph: {
    title: "Digital Transformation Services - Modernize Your Business",
    description:
      "Transform your business with Cloud Nexus digital transformation services. We modernize legacy systems, automate workflows, and implement data-driven strategies for competitive advantage.",
    url: "https://cloudnexus.in/services/digital-transformation",
  },
};

export default function DigitalTransformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
