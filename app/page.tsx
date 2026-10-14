import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CurrentFocus } from "@/components/current-focus";
import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { ProjectRow } from "@/components/project-row";
import { ProcessSection } from "@/components/process-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThinkingSection } from "@/components/thinking-section";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { getAllProjects } from "@/lib/content";

export const dynamic = "force-static";

export default function HomePage() {
  const selectedProjects = getAllProjects().map((project) => project.frontmatter);

  return (
    <>
      <SiteHeader />
      <main id="hero">
        <Hero />
        <section className="section shell selected-work" aria-labelledby="selected-work-title">
          <div className="section-intro"><Reveal><SectionLabel>SELECTED WORK</SectionLabel><h2 id="selected-work-title">Projects across AI, data, and applied machine learning.</h2><p>Read the work as a trail of decisions, constraints, and learning across different technical problems.</p></Reveal></div>
          <div className="project-list">{selectedProjects.map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}</div>
        </section>
        <CurrentFocus />
        <ExperienceSection />
        <ThinkingSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
