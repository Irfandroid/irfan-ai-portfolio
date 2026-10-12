import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CurrentFocus } from "@/components/current-focus";
import { ExperienceSection } from "@/components/experience-section";
import { FeaturedProject } from "@/components/featured-project";
import { Hero } from "@/components/hero";
import { ProjectRow } from "@/components/project-row";
import { ProcessSection } from "@/components/process-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThinkingSection } from "@/components/thinking-section";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { getAllProjects, getFeaturedProject } from "@/lib/content";

export const dynamic = "force-static";

export default function HomePage() {
  const allProjects = getAllProjects();
  const featured = getFeaturedProject().frontmatter;
  const selectedProjects = allProjects.filter((project) => !project.frontmatter.featured).map((project) => project.frontmatter);

  return (
    <>
      <SiteHeader />
      <main id="hero">
        <Hero />
        <CurrentFocus />
        <FeaturedProject project={featured} />
        <section className="section shell selected-work" aria-labelledby="selected-work-title">
          <div className="section-intro"><Reveal><SectionLabel>SELECTED WORK</SectionLabel><h2 id="selected-work-title">Selected work showing how I work.</h2><p>Each project is read as a trail of decisions, limitations, and learning, not a catalog of perfection.</p></Reveal></div>
          <div className="project-list">{selectedProjects.map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}</div>
        </section>
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
