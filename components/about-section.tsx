import Image from "next/image";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

const skills = ["RAG architecture", "Retrieval systems", "LLM integration", "Safety and quality gates", "API testing", "Technical documentation"];
const tools = ["Python", "FastAPI", "Jina embeddings", "Gemini", "Supabase pgvector", "Pytest", "Server-Sent Events"];

export function AboutSection() {
  return (
    <section className="section shell about-section" id="about" aria-labelledby="about-title">
      <div className="section-intro"><SectionLabel>ABOUT</SectionLabel></div>
      <Reveal className="about-copy"><h2 id="about-title">I learn by building something, taking it apart, then asking why the result differs from what I expected.</h2><p>My background is moving from data analysis and machine learning experiments toward AI Engineering focused on retrieval, evaluation, and explainable systems.</p><p>I am interested in AI, but what keeps me curious is the human side: how technology is understood, trusted, used, and eventually becomes part of someone&apos;s life.</p><div className="about-profile"><div className="about-profile-photo"><Image src="/images/profile/irfan-profile.png" alt="Muhamad Irfan Afriyansyah" fill sizes="160px" /></div><div><span className="about-profile-label">Profile</span><p>Muhamad Irfan Afriyansyah<br />Tangerang, Indonesia</p></div></div><div className="about-details"><div><h3>Skills</h3><ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div><div><h3>Tools &amp; technology</h3><ul>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div></div></Reveal>
    </section>
  );
}
