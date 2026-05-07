import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Software Development Solutions",
  description:
    "Cloud Nexus develops real estate platforms with property listings, 3D virtual tours, CRM integration, lead management, and tenant management portal solutions.",
  alternates: { canonical: "/industry/real-estate" },
  openGraph: {
    title: "Real Estate Software Development Solutions",
    description:
      "Cloud Nexus develops real estate platforms with property listings, 3D virtual tours, CRM integration, lead management, and tenant management portal solutions.",
    url: "https://cloudnexus.in/industry/real-estate",
  },
};

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
