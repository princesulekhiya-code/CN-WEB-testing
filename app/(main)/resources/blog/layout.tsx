import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Tech Insights, Tutorials & Industry News",
  description:
    "Read the latest Cloud Nexus blog posts covering cloud computing, AI/ML, DevOps, web development tutorials, case studies, and software engineering best practices.",
  alternates: { canonical: "/resources/blog" },
  openGraph: {
    title: "Blog - Tech Insights, Tutorials & Industry News",
    description:
      "Read the latest Cloud Nexus blog posts covering cloud computing, AI/ML, DevOps, web development tutorials, case studies, and software engineering best practices.",
    url: "https://cloudnexus.in/resources/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
