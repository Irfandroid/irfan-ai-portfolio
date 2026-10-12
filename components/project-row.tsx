import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { ProjectFrontmatter } from "@/lib/schemas";
import { Reveal } from "./reveal";

export function ProjectRow({ project, index }: { project: ProjectFrontmatter; index: number }) {
  return (
    <Reveal className={`project-row ${index % 2 ? "project-row-reverse" : ""}`} delay={index * 0.04} direction={index % 2 ? "left" : "right"}>
      <div className="project-thumb"><Image src={project.cover} alt={`Visual artifact for ${project.title}`} fill sizes="(max-width: 700px) 100vw, 38vw" /></div>
      <div className="project-row-copy">
        <div className="meta-line"><span>{project.status}</span><span>{project.year}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <p className="project-role">{project.role.join(" / ")}</p>
        <div className="project-links">
          <Link className="arrow-link" href={`/work/${project.slug}`}>Read case study <ArrowUpRight size={16} /></Link>
          <a className="text-link" href={project.repository} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
        </div>
      </div>
    </Reveal>
  );
}
