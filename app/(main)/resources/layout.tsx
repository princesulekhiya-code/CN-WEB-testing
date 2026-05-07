import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Blog, Career, Support & Consultation",
  description:
    "Explore Cloud Nexus resources including tech blogs, career opportunities, customer support, free consultation, and contact options to accelerate your business.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources - Blog, Career, Support & Consultation",
    description:
      "Explore Cloud Nexus resources including tech blogs, career opportunities, customer support, free consultation, and contact options to accelerate your business.",
    url: "https://cloudnexus.in/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
