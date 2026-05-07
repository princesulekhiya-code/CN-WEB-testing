import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services - User-Centric Design Solutions",
  description:
    "Cloud Nexus delivers exceptional UI/UX design services. We create intuitive interfaces, wireframes, prototypes, and design systems that boost user engagement and conversion rates.",
  alternates: { canonical: "/services/ui-ux-design" },
  openGraph: {
    title: "UI/UX Design Services - User-Centric Design Solutions",
    description:
      "Cloud Nexus delivers exceptional UI/UX design services. We create intuitive interfaces, wireframes, prototypes, and design systems that boost user engagement and conversion rates.",
    url: "https://cloudnexus.in/services/ui-ux-design",
  },
};

export default function UiUxDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
