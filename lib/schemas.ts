import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  status: z.enum(["WORK IN PROGRESS", "PROTOTYPE", "EXPERIMENT", "ARCHIVED"]),
  year: z.string().min(4),
  featured: z.boolean().default(false),
  summary: z.string().min(1),
  role: z.array(z.string().min(1)).min(1),
  repository: z.string().url(),
  demo: z.string().url().optional(),
  technologies: z.array(z.string().min(1)).min(1),
  cover: z.string().startsWith("/"),
  order: z.number().int().positive(),
});

export type ProjectFrontmatter = z.infer<typeof projectSchema>;
