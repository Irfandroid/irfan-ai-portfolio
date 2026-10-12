import { thinkingPrinciples } from "@/data/thinking";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function ThinkingSection() {
  return (
    <section className="section shell thinking-section" id="thinking" aria-labelledby="thinking-title">
      <div className="section-intro"><Reveal><SectionLabel>HOW I THINK</SectionLabel><h2 id="thinking-title">Principles guiding my technical work.</h2><p>Four ways of working that keep me close to the problem, people, and evidence.</p></Reveal></div>
      <div className="principles-grid">{thinkingPrinciples.map((item, index) => <Reveal key={item.number} className="principle" delay={index * 0.04}><span>{item.number}</span><h3>{item.title}</h3><p>{item.body}</p></Reveal>)}</div>
    </section>
  );
}
