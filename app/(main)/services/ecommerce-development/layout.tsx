import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Development Services - Online Store Solutions",
  description:
    "Launch and scale your online store with Cloud Nexus e-commerce development. We build custom Shopify, WooCommerce, and headless commerce solutions with payment gateway integration.",
  alternates: { canonical: "/services/ecommerce-development" },
  openGraph: {
    title: "E-Commerce Development Services - Online Store Solutions",
    description:
      "Launch and scale your online store with Cloud Nexus e-commerce development. We build custom Shopify, WooCommerce, and headless commerce solutions with payment gateway integration.",
    url: "https://cloudnexus.in/services/ecommerce-development",
  },
};

export default function EcommerceDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
