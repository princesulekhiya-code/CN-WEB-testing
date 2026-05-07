import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Benefits - Why Work at Cloud Nexus",
  description:
    "Discover the perks of working at Cloud Nexus - competitive benefits, growth opportunities, team events, and a vibrant work culture in Bhopal.",
  alternates: { canonical: "/company/career-benefits" },
  openGraph: {
    title: "Career Benefits - Why Work at Cloud Nexus",
    description:
      "Discover the perks of working at Cloud Nexus - competitive benefits, growth opportunities, team events, and a vibrant work culture in Bhopal.",
    url: "https://cloudnexus.in/company/career-benefits",
  },
};

export default function CareerBenefitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
