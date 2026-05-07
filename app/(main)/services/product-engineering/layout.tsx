import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Engineering Services - End-to-End Product Development",
  description:
    "Cloud Nexus offers end-to-end product engineering services. From ideation to launch and beyond, we handle architecture, development, testing, deployment, and continuous improvement.",
  alternates: { canonical: "/services/product-engineering" },
  openGraph: {
    title: "Product Engineering Services - End-to-End Product Development",
    description:
      "Cloud Nexus offers end-to-end product engineering services. From ideation to launch and beyond, we handle architecture, development, testing, deployment, and continuous improvement.",
    url: "https://cloudnexus.in/services/product-engineering",
  },
};

export default function ProductEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
