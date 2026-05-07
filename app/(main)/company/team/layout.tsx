import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Meet the Cloud Nexus Experts",
  description:
    "Meet the talented engineers, designers, and strategists at Cloud Nexus. Our 90+ member team drives innovation and delivers exceptional software solutions.",
  alternates: { canonical: "/company/team" },
  openGraph: {
    title: "Our Team - Meet the Cloud Nexus Experts",
    description:
      "Meet the talented engineers, designers, and strategists at Cloud Nexus. Our 90+ member team drives innovation and delivers exceptional software solutions.",
    url: "https://cloudnexus.in/company/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
