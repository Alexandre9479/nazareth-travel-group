import type { MetadataRoute } from "next";
import { PACKAGES } from "@/lib/data";
import { DESTINATIONS } from "@/lib/data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nazarethtravelgroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/programs`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/destinations`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/why-us`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/planning-tips`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/faqs`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/gallery`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${BASE_URL}/pastors`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  const packagePages = PACKAGES.map((p) => ({
    url: `${BASE_URL}/programs/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const destinationPages = DESTINATIONS.map((d) => ({
    url: `${BASE_URL}/destinations/${d.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...packagePages, ...destinationPages];
}
