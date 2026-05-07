import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel & Hospitality Software Solutions",
  description:
    "Cloud Nexus builds travel and hospitality software including booking engines, hotel management systems, dynamic pricing, and AI-powered travel recommendations.",
  alternates: { canonical: "/industry/travel-hospitality" },
  openGraph: {
    title: "Travel & Hospitality Software Solutions",
    description:
      "Cloud Nexus builds travel and hospitality software including booking engines, hotel management systems, dynamic pricing, and AI-powered travel recommendations.",
    url: "https://cloudnexus.in/industry/travel-hospitality",
  },
};

export default function TravelHospitalityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
