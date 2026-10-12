import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  return [{ url: siteUrl, lastModified: new Date() }, ...getAllProjects().map(({ frontmatter }) => ({ url: `${siteUrl}/work/${frontmatter.slug}`, lastModified: new Date() }))];
}
