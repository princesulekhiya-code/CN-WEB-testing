import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud & SaaS Solutions - Scalable Cloud Applications",
  description:
    "Build scalable cloud and SaaS applications with Cloud Nexus. We design multi-tenant architectures, cloud-native platforms, and subscription-based software solutions for growth.",
  alternates: { canonical: "/services/cloud-saas-solutions" },
  openGraph: {
    title: "Cloud & SaaS Solutions - Scalable Cloud Applications",
    description:
      "Build scalable cloud and SaaS applications with Cloud Nexus. We design multi-tenant architectures, cloud-native platforms, and subscription-based software solutions for growth.",
    url: "https://cloudnexus.in/services/cloud-saas-solutions",
  },
};

export default function CloudSaasSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
