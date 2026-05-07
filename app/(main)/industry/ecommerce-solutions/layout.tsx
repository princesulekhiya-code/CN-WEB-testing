import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Software Development Solutions",
  description:
    "Cloud Nexus creates custom e-commerce platforms with AI-driven personalization, multi-vendor marketplaces, headless commerce, and seamless payment integration.",
  alternates: { canonical: "/industry/ecommerce-solutions" },
  openGraph: {
    title: "E-Commerce Software Development Solutions",
    description:
      "Cloud Nexus creates custom e-commerce platforms with AI-driven personalization, multi-vendor marketplaces, headless commerce, and seamless payment integration.",
    url: "https://cloudnexus.in/industry/ecommerce-solutions",
  },
};

export default function EcommerceSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
