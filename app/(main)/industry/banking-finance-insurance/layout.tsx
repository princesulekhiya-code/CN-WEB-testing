import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banking, Finance & Insurance Software Solutions",
  description:
    "Cloud Nexus delivers digital banking, finance, and insurance solutions with AI fraud detection, automated claims processing, and PCI-DSS compliant platforms.",
  alternates: { canonical: "/industry/banking-finance-insurance" },
  openGraph: {
    title: "Banking, Finance & Insurance Software Solutions",
    description:
      "Cloud Nexus delivers digital banking, finance, and insurance solutions with AI fraud detection, automated claims processing, and PCI-DSS compliant platforms.",
    url: "https://cloudnexus.in/industry/banking-finance-insurance",
  },
};

export default function BankingFinanceInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
