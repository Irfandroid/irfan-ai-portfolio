import { Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function ContactSection() {
  return (
    <section className="section shell contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-intro"><SectionLabel>CONTACT</SectionLabel></div>
      <Reveal className="contact-copy"><h2 id="contact-title">{site.contact.title}</h2><p>{site.contact.body}</p><div className="contact-links"><a className="button button-primary" href={site.links.email}><Mail size={16} /> Email Irfan</a><a className="button button-secondary" href={site.links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a><a className="text-link" href={site.links.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a className="text-link" href={site.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a className="button button-secondary" href="/cv/muhamad-irfan-afriyansyah-cv.pdf" download><Download size={16} /> Download CV</a></div><p className="contact-cv-note">WhatsApp: 0882 9148 2961 · ATS-friendly PDF available to download.</p></Reveal>
    </section>
  );
}
