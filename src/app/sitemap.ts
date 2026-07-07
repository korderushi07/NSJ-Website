import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nsjstudio.in";

  // In a real project, we would fetch these from a CMS like Sanity.
  // We'll define the static paths we support.
  const staticPaths = [
    "",
    "/about",
    "/projects",
    "/services",
    "/insights",
    "/contact",
  ];

  // Project slugs to support dynamic routes search indexing
  const projectSlugs = [
    "nagpur-minimalist-villa",
    "civil-lines-office",
  ];

  // Service slugs
  const serviceSlugs = [
    "architectural-design",
    "interior-design",
    "home-renovation",
    "residential-architecture",
    "commercial-architecture",
    "institutional-government-projects",
    "landscape-design",
    "construction-drawings",
    "architectural-consultancy",
  ];

  // Insights slugs
  const insightSlugs = [
    "things-to-consider-before-renovating-home",
    "how-good-space-planning-improves-living",
    "architecture-vs-interior-design-difference",
    "planning-home-renovation-nagpur",
  ];

  const staticSitemaps = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  const projectSitemaps = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as "monthly",
    priority: 0.7,
  }));

  const serviceSitemaps = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as "monthly",
    priority: 0.7,
  }));

  const insightSitemaps = insightSlugs.map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as "weekly",
    priority: 0.6,
  }));

  return [
    ...staticSitemaps,
    ...projectSitemaps,
    ...serviceSitemaps,
    ...insightSitemaps,
  ];
}
