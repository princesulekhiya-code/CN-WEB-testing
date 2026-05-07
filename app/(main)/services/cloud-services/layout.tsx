import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Computing Services - AWS, Azure & GCP Solutions",
  description:
    "Cloud Nexus provides expert cloud computing services on AWS, Azure, and GCP. We offer cloud migration, infrastructure management, serverless architecture, and cost optimization.",
  alternates: { canonical: "/services/cloud-services" },
  openGraph: {
    title: "Cloud Computing Services - AWS, Azure & GCP Solutions",
    description:
      "Cloud Nexus provides expert cloud computing services on AWS, Azure, and GCP. We offer cloud migration, infrastructure management, serverless architecture, and cost optimization.",
    url: "https://cloudnexus.in/services/cloud-services",
  },
};

export default function CloudServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
