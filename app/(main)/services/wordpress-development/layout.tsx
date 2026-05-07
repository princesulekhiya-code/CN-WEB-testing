import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Development Services - Custom WordPress Solutions",
  description:
    "Get custom WordPress development from Cloud Nexus. We build themes, plugins, WooCommerce stores, and enterprise WordPress sites optimized for speed, SEO, and security.",
  alternates: { canonical: "/services/wordpress-development" },
  openGraph: {
    title: "WordPress Development Services - Custom WordPress Solutions",
    description:
      "Get custom WordPress development from Cloud Nexus. We build themes, plugins, WooCommerce stores, and enterprise WordPress sites optimized for speed, SEO, and security.",
    url: "https://cloudnexus.in/services/wordpress-development",
  },
};

export default function WordPressDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
