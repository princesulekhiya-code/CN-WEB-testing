import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Services - Tailored Solutions",
  description:
    "Cloud Nexus delivers custom software development tailored to your business. From enterprise applications to bespoke platforms, we build scalable, secure, and efficient solutions.",
  alternates: { canonical: "/services/custom-software-development" },
  openGraph: {
    title: "Custom Software Development Services - Tailored Solutions",
    description:
      "Cloud Nexus delivers custom software development tailored to your business. From enterprise applications to bespoke platforms, we build scalable, secure, and efficient solutions.",
    url: "https://cloudnexus.in/services/custom-software-development",
  },
};

export default function CustomSoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
