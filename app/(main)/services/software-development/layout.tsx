import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services - Enterprise & Custom Solutions",
  description:
    "Cloud Nexus provides enterprise software development services. We build robust, scalable applications with modern architectures, microservices, and agile methodologies for business growth.",
  alternates: { canonical: "/services/software-development" },
  openGraph: {
    title: "Software Development Services - Enterprise & Custom Solutions",
    description:
      "Cloud Nexus provides enterprise software development services. We build robust, scalable applications with modern architectures, microservices, and agile methodologies for business growth.",
    url: "https://cloudnexus.in/services/software-development",
  },
};

export default function SoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
