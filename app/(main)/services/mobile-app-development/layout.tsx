import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services - iOS, Android & Cross-Platform",
  description:
    "Build high-performance mobile apps with Cloud Nexus. We deliver native iOS, Android, and cross-platform solutions using React Native, Flutter, and Swift for startups and enterprises.",
  alternates: { canonical: "/services/mobile-app-development" },
  openGraph: {
    title: "Mobile App Development Services - iOS, Android & Cross-Platform",
    description:
      "Build high-performance mobile apps with Cloud Nexus. We deliver native iOS, Android, and cross-platform solutions using React Native, Flutter, and Swift for startups and enterprises.",
    url: "https://cloudnexus.in/services/mobile-app-development",
  },
};

export default function MobileAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
