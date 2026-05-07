import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Cloud Nexus Customer Support & Help",
  description:
    "Get help from Cloud Nexus support via live chat, email, or phone. Access our knowledge base, FAQs, and self-service resources for quick issue resolution.",
  alternates: { canonical: "/resources/support" },
  openGraph: {
    title: "Support - Cloud Nexus Customer Support & Help",
    description:
      "Get help from Cloud Nexus support via live chat, email, or phone. Access our knowledge base, FAQs, and self-service resources for quick issue resolution.",
    url: "https://cloudnexus.in/resources/support",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
