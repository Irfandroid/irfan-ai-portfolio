import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function ExperienceSection() {
  return (
    <section className="section shell experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-intro"><Reveal><SectionLabel>EXPERIENCE</SectionLabel><h2 id="experience-title">Experience that shaped my direction in AI engineering.</h2><p>A factual timeline based on public profile information. Where responsibilities are not documented, I keep the description brief.</p></Reveal></div>
      <div className="timeline">{experience.map((item, index) => <Reveal key={`${item.organization}-${item.period}`} className="timeline-item" delay={index * 0.05}><span className="timeline-period">{item.period}</span><div><h3>{item.role}</h3><p className="timeline-org">{item.organization}</p><small>{item.source}</small></div></Reveal>)}</div>
      <div className="credentials"><div id="education"><span className="eyebrow">EDUCATION</span><h3>{education.school}</h3><p>{education.program}</p><p>{education.period} / {education.note}</p></div><div><span className="eyebrow">CERTIFICATIONS / LEARNING</span><ul>{certifications.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
    </section>
  );
}
