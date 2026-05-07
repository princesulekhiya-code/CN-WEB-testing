import { MetadataRoute } from "next";

const BASE_URL = "https://cloudnexus.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const mainPages = [
    { url: `${BASE_URL}`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/company`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/industry`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/resources`, priority: 0.7, changeFrequency: "weekly" as const },
  ];

  const servicePages = [
    "mobile-app-development",
    "web-development",
    "custom-software-development",
    "cloud-services",
    "cloud-saas-solutions",
    "ai-ml-data-science",
    "ui-ux-design",
    "devops-cloud-automation",
    "digital-transformation",
    "cybersecurity-compliance",
    "ecommerce-development",
    "product-engineering",
    "software-development",
    "it-consulting",
    "technology-consulting",
    "hire-dedicated-developers",
    "mvp-development",
    "saas-development",
    "wordpress-development",
    "digital-marketing",
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const companyPages = [
    "about-us",
    "team",
    "infrastructure",
    "career-benefits",
    "life-at-cloud-nexus",
    "events",
    "process-methodology",
    "overview",
  ].map((slug) => ({
    url: `${BASE_URL}/company/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const industryPages = [
    "healthcare-lifesciences",
    "fintech",
    "ecommerce-solutions",
    "education-elearning",
    "real-estate",
    "travel-hospitality",
    "media-entertainment",
    "social-networking",
    "banking-finance-insurance",
    "on-demand-delivery",
    "enterprise-retail-manufacturing",
    "transport-logistics",
    "oil-gas",
    "home-service",
    "mcommerce",
  ].map((slug) => ({
    url: `${BASE_URL}/industry/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const resourcePages = [
    { url: `${BASE_URL}/resources/career`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/resources/blog`, priority: 0.7, changeFrequency: "daily" as const },
    { url: `${BASE_URL}/resources/contact`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/resources/support`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/resources/free-consultation`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return [
    ...mainPages,
    ...servicePages,
    ...companyPages,
    ...industryPages,
    ...resourcePages,
  ].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
