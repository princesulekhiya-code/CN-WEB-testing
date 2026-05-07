import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Cloud Nexus Technologies",
  description:
    "Learn about Cloud Nexus Technologies - our journey, vision, and dedication to delivering world-class software solutions from Bhopal, India.",
  alternates: { canonical: "/company/about-us" },
  openGraph: {
    title: "About Us - Cloud Nexus Technologies",
    description:
      "Learn about Cloud Nexus Technologies - our journey, vision, and dedication to delivering world-class software solutions from Bhopal, India.",
    url: "https://cloudnexus.in/company/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
