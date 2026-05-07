import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Infrastructure - Cloud Nexus Office & Workspace",
  description:
    "Explore Cloud Nexus's modern office infrastructure in Bhopal - high-performance workstations, enterprise connectivity, and world-class facilities.",
  alternates: { canonical: "/company/infrastructure" },
  openGraph: {
    title: "Our Infrastructure - Cloud Nexus Office & Workspace",
    description:
      "Explore Cloud Nexus's modern office infrastructure in Bhopal - high-performance workstations, enterprise connectivity, and world-class facilities.",
    url: "https://cloudnexus.in/company/infrastructure",
  },
};

export default function InfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
