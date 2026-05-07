import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Cloud Nexus Tech Events & Meetups",
  description:
    "Stay updated with Cloud Nexus tech events, meetups, conferences, and community engagements. Join us in shaping the future of technology.",
  alternates: { canonical: "/company/events" },
  openGraph: {
    title: "Events - Cloud Nexus Tech Events & Meetups",
    description:
      "Stay updated with Cloud Nexus tech events, meetups, conferences, and community engagements. Join us in shaping the future of technology.",
    url: "https://cloudnexus.in/company/events",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
