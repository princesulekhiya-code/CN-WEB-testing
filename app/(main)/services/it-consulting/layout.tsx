import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Consulting Services - Strategic Technology Advisory",
  description:
    "Get strategic IT consulting from Cloud Nexus. We provide technology roadmaps, system architecture reviews, digital strategy, and vendor selection guidance to align IT with business goals.",
  alternates: { canonical: "/services/it-consulting" },
  openGraph: {
    title: "IT Consulting Services - Strategic Technology Advisory",
    description:
      "Get strategic IT consulting from Cloud Nexus. We provide technology roadmaps, system architecture reviews, digital strategy, and vendor selection guidance to align IT with business goals.",
    url: "https://cloudnexus.in/services/it-consulting",
  },
};

export default function ItConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
