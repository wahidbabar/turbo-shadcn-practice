import { getSortedPostsData } from "./lib/posts";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: "http://localhost:3000/en",
      hreflang: "en",
    },
    {
      href: "http://localhost:3000/fr",
      hreflang: "fr",
    },
    {
      href: "http://localhost:3000/es",
      hreflang: "es",
    },
  ],

  transform: async (config, path) => {
    // Custom transform function to add dynamic routes
    if (path === "/") {
      const locales = ["en", "fr", "es"]; // Add all your locales here
      const allPaths = [];

      for (const locale of locales) {
        const posts = getSortedPostsData(locale);
        const localePaths = posts.map((post) => `/${locale}/${post.slug}`);
        allPaths.push(...localePaths);
      }

      return allPaths.map((path) => ({
        loc: path,
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }));
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
