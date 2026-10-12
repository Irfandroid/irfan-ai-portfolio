import { processSteps } from "@/data/process";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function ProcessSection() {
  return (
    <section className="section shell process-section" id="process" aria-labelledby="process-title">
      <div className="section-intro"><Reveal><SectionLabel>PROCESS</SectionLabel><h2 id="process-title">How I move from questions to evidence.</h2><p>A simple process for keeping experiments close to the problem, context, and evidence.</p></Reveal></div>
      <div className="process-list">
        {processSteps.map((step, index) => (
          <Reveal key={step.number} className="process-step" delay={index * 0.03}>
            <span>{step.number}</span><div><h3>{step.title}</h3><p>{step.body}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
