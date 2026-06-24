import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://investing-9otnx1jsn-willsobotka2005-6780s-projects.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/account", "/api/", "/upgrade-success"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
