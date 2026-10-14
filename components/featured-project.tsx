import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectFrontmatter } from "@/lib/schemas";
import { Reveal } from "./reveal";
import { SystemStack } from "./system-stack";
import { SectionLabel } from "./section-label";

export function FeaturedProject({ project }: { project: ProjectFrontmatter }) {
  return (
    <section className="section featured-section shell" id="work" aria-labelledby="featured-title">
      <div className="section-intro section-intro-wide">
        <Reveal><SectionLabel>QALBU</SectionLabel><h2 id="featured-title">Qalbu is an Indonesian Qur&apos;an reflection chat built around retrieval, visible sources, and explicit fallbacks.</h2><p>The system retrieves relevant Indonesian Qur&apos;an context, limits generation to available evidence, and falls back when retrieval is insufficient.</p></Reveal>
      </div>
      <div className="featured-project">
        <Reveal className="featured-media" delay={0.08} direction="left"><Image src={project.cover} alt="Qalbu architecture diagram from input, retrieval, quality gate, to citation" fill sizes="(max-width: 900px) 100vw, 55vw" /></Reveal>
        <Reveal className="featured-copy" direction="right">
          <div className="meta-line"><span>{project.status}</span><span>{project.year}</span></div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <p className="project-role">{project.role.join(" / ")}</p>
          <p className="project-tech">{project.technologies.join(" · ")}</p>
          <Link className="button button-primary" href={`/work/${project.slug}`}>Read Qalbu case study <ArrowUpRight size={16} /></Link>
          <a className="text-link project-github" href={project.repository} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
        </Reveal>
      </div>
      <dl className="evidence-strip" aria-label="Documented Qalbu evidence">
        <div className="evidence-item"><dt>52</dt><dd>Pytest test functions</dd></div>
        <div className="evidence-item"><dt>768</dt><dd>Jina embedding dimensions</dd></div>
        <div className="evidence-item"><dt>0.32</dt><dd>Documented cosine threshold</dd></div>
        <div className="evidence-item"><dt>4</dt><dd>Maximum parent sources</dd></div>
      </dl>
      <div className="featured-story">
        <Reveal className="qalbu-callout"><p>Good answers begin with the right context.</p><span>retrieval quality → context quality → generation quality</span></Reveal>
        <Reveal className="qalbu-stack" delay={0.06}><SystemStack /></Reveal>
        <Reveal className="qalbu-note" delay={0.1}><h3>What I inspect</h3><p>Retrieval relevance, provenance, citation correctness, fallback behavior, and the boundary where context is not enough.</p><Link className="arrow-link" href={`/work/${project.slug}`}>Read full case study <ArrowUpRight size={16} /></Link></Reveal>
      </div>
    </section>
  );
}
