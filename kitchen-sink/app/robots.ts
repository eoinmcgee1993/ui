import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://ui.pacifio.dev/sitemap.xml",
    host: "https://ui.pacifio.dev",
  };
}
