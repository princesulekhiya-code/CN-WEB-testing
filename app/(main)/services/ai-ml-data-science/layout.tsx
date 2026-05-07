import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI, ML & Data Science Services - Intelligent Solutions",
  description:
    "Leverage AI, machine learning, and data science with Cloud Nexus. We build predictive models, NLP systems, computer vision solutions, and intelligent automation for your business.",
  alternates: { canonical: "/services/ai-ml-data-science" },
  openGraph: {
    title: "AI, ML & Data Science Services - Intelligent Solutions",
    description:
      "Leverage AI, machine learning, and data science with Cloud Nexus. We build predictive models, NLP systems, computer vision solutions, and intelligent automation for your business.",
    url: "https://cloudnexus.in/services/ai-ml-data-science",
  },
};

export default function AiMlDataScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
