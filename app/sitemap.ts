import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://investing-9otnx1jsn-willsobotka2005-6780s-projects.vercel.app";

const articleSlugs = [
  "build-your-first-budget",
  "50-30-20-rule",
  "start-investing-with-50-dollars",
  "money-mistakes-college-students",
  "roth-ira-for-beginners",
  "pay-off-student-loans-faster",
  "index-funds-for-beginners",
  "emergency-fund-guide",
  "first-job-money-moves",
  "build-credit-at-18",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: siteUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/blog`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/courses`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/tools`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/pricing`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/signup`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/tools/budget-calculator`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const articlePages = articleSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...articlePages];
}
