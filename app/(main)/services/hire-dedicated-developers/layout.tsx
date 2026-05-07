import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Dedicated Developers - Flexible Team Augmentation",
  description:
    "Hire dedicated developers from Cloud Nexus for flexible team augmentation. Get skilled React, Node.js, Python, and cloud engineers on demand with transparent pricing and fast onboarding.",
  alternates: { canonical: "/services/hire-dedicated-developers" },
  openGraph: {
    title: "Hire Dedicated Developers - Flexible Team Augmentation",
    description:
      "Hire dedicated developers from Cloud Nexus for flexible team augmentation. Get skilled React, Node.js, Python, and cloud engineers on demand with transparent pricing and fast onboarding.",
    url: "https://cloudnexus.in/services/hire-dedicated-developers",
  },
};

export default function HireDedicatedDevelopersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
