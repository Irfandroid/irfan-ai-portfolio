import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://irfandroid.vercel.app";
  return [{ url: siteUrl, lastModified: new Date() }, ...getAllProjects().map(({ frontmatter }) => ({ url: `${siteUrl}/work/${frontmatter.slug}`, lastModified: new Date() }))];
}
