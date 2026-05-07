import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & E-Learning Software Solutions",
  description:
    "Cloud Nexus builds interactive e-learning platforms including LMS systems, virtual classrooms, adaptive learning engines, and student management solutions.",
  alternates: { canonical: "/industry/education-elearning" },
  openGraph: {
    title: "Education & E-Learning Software Solutions",
    description:
      "Cloud Nexus builds interactive e-learning platforms including LMS systems, virtual classrooms, adaptive learning engines, and student management solutions.",
    url: "https://cloudnexus.in/industry/education-elearning",
  },
};

export default function EducationElearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
