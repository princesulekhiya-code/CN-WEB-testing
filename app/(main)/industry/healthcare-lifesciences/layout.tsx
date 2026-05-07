import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare & Life Sciences Software Solutions",
  description:
    "Cloud Nexus builds HIPAA-compliant healthcare software including telemedicine platforms, EHR systems, patient portals, and clinical data management solutions.",
  alternates: { canonical: "/industry/healthcare-lifesciences" },
  openGraph: {
    title: "Healthcare & Life Sciences Software Solutions",
    description:
      "Cloud Nexus builds HIPAA-compliant healthcare software including telemedicine platforms, EHR systems, patient portals, and clinical data management solutions.",
    url: "https://cloudnexus.in/industry/healthcare-lifesciences",
  },
};

export default function HealthcareLifesciencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
