import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Entertainment Software Solutions",
  description:
    "Cloud Nexus creates media and entertainment software including video streaming platforms, content management systems, DRM solutions, and live event ticketing.",
  alternates: { canonical: "/industry/media-entertainment" },
  openGraph: {
    title: "Media & Entertainment Software Solutions",
    description:
      "Cloud Nexus creates media and entertainment software including video streaming platforms, content management systems, DRM solutions, and live event ticketing.",
    url: "https://cloudnexus.in/industry/media-entertainment",
  },
};

export default function MediaEntertainmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
