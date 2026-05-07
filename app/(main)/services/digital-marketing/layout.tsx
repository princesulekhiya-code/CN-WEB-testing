import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services - SEO, PPC & Growth Marketing",
  description:
    "Grow your business with Cloud Nexus digital marketing services. We deliver SEO, PPC, content marketing, social media strategy, and data-driven campaigns for measurable ROI.",
  alternates: { canonical: "/services/digital-marketing" },
  openGraph: {
    title: "Digital Marketing Services - SEO, PPC & Growth Marketing",
    description:
      "Grow your business with Cloud Nexus digital marketing services. We deliver SEO, PPC, content marketing, social media strategy, and data-driven campaigns for measurable ROI.",
    url: "https://cloudnexus.in/services/digital-marketing",
  },
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
