import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Cloud Nexus - Join Our Growing Team",
  description:
    "Explore exciting career opportunities at Cloud Nexus. Join our team of engineers, designers, and innovators building cutting-edge software solutions worldwide.",
  alternates: { canonical: "/resources/career" },
  openGraph: {
    title: "Careers at Cloud Nexus - Join Our Growing Team",
    description:
      "Explore exciting career opportunities at Cloud Nexus. Join our team of engineers, designers, and innovators building cutting-edge software solutions worldwide.",
    url: "https://cloudnexus.in/resources/career",
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
