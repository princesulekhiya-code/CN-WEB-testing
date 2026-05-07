import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life at Cloud Nexus - Culture, Events & Team Moments",
  description:
    "Experience life at Cloud Nexus - team celebrations, fun Fridays, hackathons, cricket leagues, and the vibrant culture that makes us unique.",
  alternates: { canonical: "/company/life-at-cloud-nexus" },
  openGraph: {
    title: "Life at Cloud Nexus - Culture, Events & Team Moments",
    description:
      "Experience life at Cloud Nexus - team celebrations, fun Fridays, hackathons, cricket leagues, and the vibrant culture that makes us unique.",
    url: "https://cloudnexus.in/company/life-at-cloud-nexus",
  },
};

export default function LifeAtCloudNexusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
