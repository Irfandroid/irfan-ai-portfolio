import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { projectSchema, type ProjectFrontmatter } from "./schemas";

const projectDirectory = path.join(process.cwd(), "content", "projects");

export type ProjectSource = {
  frontmatter: ProjectFrontmatter;
  content: string;
};

export function getProjectSlugs() {
  return fs.readdirSync(projectDirectory).filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectSource(slug: string): ProjectSource {
  const filePath = path.join(projectDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Project content not found: ${slug}`);
  }

  const parsed = matter(fs.readFileSync(filePath, "utf8"));
  const frontmatter = projectSchema.parse(parsed.data);
  if (frontmatter.slug !== slug) {
    throw new Error(`Project slug mismatch: ${slug}`);
  }

  return { frontmatter, content: parsed.content };
}

export function getAllProjects() {
  return getProjectSlugs().map(getProjectSource).sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getFeaturedProject() {
  const project = getAllProjects().find((item) => item.frontmatter.featured);
  if (!project) throw new Error("No featured project configured");
  return project;
}
