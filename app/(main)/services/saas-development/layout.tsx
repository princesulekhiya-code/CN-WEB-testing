import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Development Services - Build Scalable SaaS Products",
  description:
    "Build scalable SaaS products with Cloud Nexus. We develop multi-tenant platforms, subscription billing systems, and cloud-native SaaS applications designed for rapid growth and reliability.",
  alternates: { canonical: "/services/saas-development" },
  openGraph: {
    title: "SaaS Development Services - Build Scalable SaaS Products",
    description:
      "Build scalable SaaS products with Cloud Nexus. We develop multi-tenant platforms, subscription billing systems, and cloud-native SaaS applications designed for rapid growth and reliability.",
    url: "https://cloudnexus.in/services/saas-development",
  },
};

export default function SaasDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
