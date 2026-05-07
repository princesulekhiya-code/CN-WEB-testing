import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Consultation - Discuss Your Project with Cloud Nexus",
  description:
    "Book a free 30-minute strategy session with Cloud Nexus architects. Get a custom project roadmap, technology recommendations, and transparent cost estimates.",
  alternates: { canonical: "/resources/free-consultation" },
  openGraph: {
    title: "Free Consultation - Discuss Your Project with Cloud Nexus",
    description:
      "Book a free 30-minute strategy session with Cloud Nexus architects. Get a custom project roadmap, technology recommendations, and transparent cost estimates.",
    url: "https://cloudnexus.in/resources/free-consultation",
  },
};

export default function FreeConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
