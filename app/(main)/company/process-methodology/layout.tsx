import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process & Methodology - How Cloud Nexus Delivers",
  description:
    "Learn about Cloud Nexus's agile development process and methodology - from discovery to deployment, ensuring quality and timely delivery.",
  alternates: { canonical: "/company/process-methodology" },
  openGraph: {
    title: "Our Process & Methodology - How Cloud Nexus Delivers",
    description:
      "Learn about Cloud Nexus's agile development process and methodology - from discovery to deployment, ensuring quality and timely delivery.",
    url: "https://cloudnexus.in/company/process-methodology",
  },
};

export default function ProcessMethodologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
