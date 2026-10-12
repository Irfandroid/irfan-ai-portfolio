import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow hero-eyebrow">AI ENGINEER / RAG / LLM SYSTEMS</p>
          <h1 id="hero-title"><span>{site.hero.title}</span><span>{site.hero.titleLine}</span><em>{site.hero.titleAccent}</em></h1>
          <p className="hero-intro">{site.hero.intro}</p>
          <p className="hero-body">{site.hero.body}</p>
          <p className="hero-value">{site.hero.value}</p>
          <div className="hero-actions">
            <Link href="/work/qalbu/" className="button button-primary">View Qalbu case study <ArrowUpRight size={16} /></Link>
            <a href="/cv/muhamad-irfan-afriyansyah-cv.pdf" className="text-link" download><Download size={16} /> Download CV</a>
          </div>
          <div className="hero-socials" aria-label="Contact and social links">
            <a href={site.links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a>
            <a href={site.links.email}><Mail size={15} /> Email</a>
            <a href={site.links.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
          </div>
        </Reveal>
      </div>
      <Reveal className="hero-visual" delay={0.1} direction="right">
        <div className="hero-workspace">
          <Image src="/images/profile/irfan-profile.png" alt="Portrait of Muhamad Irfan Afriyansyah" fill priority sizes="(max-width: 900px) 100vw, 520px" />
        </div>
        <div className="hero-facts">
          <div><span>Based in</span><strong>Tangerang, Indonesia</strong></div>
          <div><span>Target roles</span><strong>{site.hero.availability}</strong></div>
          <div><span>Evidence</span><strong>Qalbu case study / public repository</strong></div>
        </div>
      </Reveal>
    </section>
  );
}
