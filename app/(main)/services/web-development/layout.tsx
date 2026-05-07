import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services - Custom Websites & Web Applications",
  description:
    "Get custom web development from Cloud Nexus. We build responsive websites, progressive web apps, and full-stack web applications using React, Next.js, Node.js, and more.",
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    title: "Web Development Services - Custom Websites & Web Applications",
    description:
      "Get custom web development from Cloud Nexus. We build responsive websites, progressive web apps, and full-stack web applications using React, Next.js, Node.js, and more.",
    url: "https://cloudnexus.in/services/web-development",
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
