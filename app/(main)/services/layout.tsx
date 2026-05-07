import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Software Development, Cloud, AI & IT Solutions",
  description:
    "Explore Cloud Nexus services: custom software development, cloud computing, AI & ML, mobile apps, web development, DevOps, and IT consulting for businesses worldwide.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services - Software Development, Cloud, AI & IT Solutions",
    description:
      "Explore Cloud Nexus services: custom software development, cloud computing, AI & ML, mobile apps, web development, DevOps, and IT consulting for businesses worldwide.",
    url: "https://cloudnexus.in/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
