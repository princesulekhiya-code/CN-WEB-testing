import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVP Development Services - Build & Launch Fast",
  description:
    "Launch your MVP fast with Cloud Nexus. We build minimum viable products with rapid prototyping, lean development, and iterative design to validate your idea and attract investors.",
  alternates: { canonical: "/services/mvp-development" },
  openGraph: {
    title: "MVP Development Services - Build & Launch Fast",
    description:
      "Launch your MVP fast with Cloud Nexus. We build minimum viable products with rapid prototyping, lean development, and iterative design to validate your idea and attract investors.",
    url: "https://cloudnexus.in/services/mvp-development",
  },
};

export default function MvpDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
