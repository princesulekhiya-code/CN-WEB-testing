import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve - Healthcare, Fintech, E-Commerce & More",
  description:
    "Cloud Nexus delivers tailored software solutions across 15+ industries including healthcare, fintech, e-commerce, education, real estate, and media entertainment.",
  alternates: { canonical: "/industry" },
  openGraph: {
    title: "Industries We Serve - Healthcare, Fintech, E-Commerce & More",
    description:
      "Cloud Nexus delivers tailored software solutions across 15+ industries including healthcare, fintech, e-commerce, education, real estate, and media entertainment.",
    url: "https://cloudnexus.in/industry",
  },
};

export default function IndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
