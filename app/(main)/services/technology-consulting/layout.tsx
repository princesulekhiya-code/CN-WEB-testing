import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Consulting - AI, IoT, AR & Digital Strategy",
  description:
    "Cloud Nexus offers technology consulting for AI, IoT, AR/VR, and digital strategy. We help businesses adopt emerging technologies, optimize operations, and drive innovation at scale.",
  alternates: { canonical: "/services/technology-consulting" },
  openGraph: {
    title: "Technology Consulting - AI, IoT, AR & Digital Strategy",
    description:
      "Cloud Nexus offers technology consulting for AI, IoT, AR/VR, and digital strategy. We help businesses adopt emerging technologies, optimize operations, and drive innovation at scale.",
    url: "https://cloudnexus.in/services/technology-consulting",
  },
};

export default function TechnologyConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
