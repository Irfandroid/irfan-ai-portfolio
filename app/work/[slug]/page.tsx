import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { FailureStudy } from "@/components/failure-study";
import { NotebookArtifact } from "@/components/notebook-artifact";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TechnicalDecision } from "@/components/technical-decision";
import { getAllProjects, getProjectSource } from "@/lib/content";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProjects().map(({ frontmatter }) => ({ slug: frontmatter.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = getProjectSource(slug);
  return { title: frontmatter.title, description: frontmatter.summary, ...(process.env.NEXT_PUBLIC_SITE_URL ? { alternates: { canonical: `/work/${slug}` } } : {}), openGraph: { title: frontmatter.title, description: frontmatter.summary, images: [frontmatter.cover] } };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const { frontmatter, content } = getProjectSource(slug);
  const { content: body } = await compileMDX({
    source: content,
    components: { ArchitectureFlow, FailureStudy, NotebookArtifact, TechnicalDecision },
    // Project MDX is repository-controlled content. Keep JSX props for the
    // editorial components while retaining next-mdx-remote's dangerous-code guard.
    options: { parseFrontmatter: false, blockJS: false, blockDangerousJS: true },
  });

  return (
    <>
      <SiteHeader />
      <main className="case-study shell">
        <Link className="back-link" href="/#work"><ArrowLeft size={15} /> All work</Link>
        <header className="case-header">
          <div className="meta-line"><span>{frontmatter.status}</span><span>{frontmatter.year}</span></div>
          <h1>{frontmatter.title}</h1>
          <p className="case-summary">{frontmatter.summary}</p>
          <div className="case-meta"><div><span>Role</span><p>{frontmatter.role.join(" / ")}</p></div><div><span>Stack / focus</span><p>{frontmatter.technologies.join(" / ")}</p></div><a className="text-link" href={frontmatter.repository} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={15} /></a></div>
        </header>
        <div className="case-cover"><Image src={frontmatter.cover} alt={`Visual artifact for ${frontmatter.title}`} fill sizes="(max-width: 900px) 100vw, 80vw" priority /></div>
        <article className="prose prose-stone prose-lg max-w-none">{body}</article>
      </main>
      <SiteFooter />
    </>
  );
}
