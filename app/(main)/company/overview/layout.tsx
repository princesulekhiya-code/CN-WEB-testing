import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Overview - Cloud Nexus Technologies",
  description:
    "Get a comprehensive overview of Cloud Nexus Technologies - our services, expertise, team, and commitment to building exceptional software.",
  alternates: { canonical: "/company/overview" },
  openGraph: {
    title: "Company Overview - Cloud Nexus Technologies",
    description:
      "Get a comprehensive overview of Cloud Nexus Technologies - our services, expertise, team, and commitment to building exceptional software.",
    url: "https://cloudnexus.in/company/overview",
  },
};

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
