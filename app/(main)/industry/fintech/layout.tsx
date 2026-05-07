import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fintech Software Development Solutions",
  description:
    "Cloud Nexus develops secure fintech solutions including digital wallets, payment gateways, lending platforms, robo-advisory tools, and PCI-DSS compliant systems.",
  alternates: { canonical: "/industry/fintech" },
  openGraph: {
    title: "Fintech Software Development Solutions",
    description:
      "Cloud Nexus develops secure fintech solutions including digital wallets, payment gateways, lending platforms, robo-advisory tools, and PCI-DSS compliant systems.",
    url: "https://cloudnexus.in/industry/fintech",
  },
};

export default function FintechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
