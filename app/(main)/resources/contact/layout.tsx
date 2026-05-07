import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Cloud Nexus",
  description:
    "Contact Cloud Nexus for software development inquiries. Reach us via email, phone, or our contact form and get a response within 24 hours from our expert team.",
  alternates: { canonical: "/resources/contact" },
  openGraph: {
    title: "Contact Us - Get in Touch with Cloud Nexus",
    description:
      "Contact Cloud Nexus for software development inquiries. Reach us via email, phone, or our contact form and get a response within 24 hours from our expert team.",
    url: "https://cloudnexus.in/resources/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
