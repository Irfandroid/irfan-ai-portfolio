import { currentFocus } from "@/data/skills";
import { site } from "@/data/site";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function CurrentFocus() {
  return (
    <section className="section shell" id="focus" aria-labelledby="focus-title">
      <div className="section-intro">
        <Reveal><SectionLabel>NOW</SectionLabel><h2 id="focus-title">{site.currentFocus.title}</h2><p>{site.currentFocus.body}</p></Reveal>
        <div className="focus-terms" aria-label="Current focus areas"><span>RAG</span><span>Retrieval</span><span>Evaluation</span><span>LLM Systems</span></div>
      </div>
      <div className="focus-list">
        {currentFocus.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04} className="focus-item">
            <span className={`focus-index tone-${item.tone}`}>{item.index}</span>
            <div><h3>{item.title}</h3><p className="focus-question">{item.question}</p><p className="focus-note">{item.note}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
