import type { MetadataRoute } from "next";
import { casos } from "@/lib/casos";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kova.pe";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const workRoutes: MetadataRoute.Sitemap = casos.map((caso) => ({
    url: `${base}/trabajos/${caso.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...workRoutes];
}
