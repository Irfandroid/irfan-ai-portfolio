import { socialLinks } from "./social-links";

export const site = {
  name: "Muhamad Irfan Afriyansyah",
  shortName: "Irfan Afriyansyah",
  description: "A recruiter-focused portfolio of AI engineering work, with Qalbu as the primary case study in retrieval, RAG, and dependable LLM applications.",
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Thinking", href: "#thinking" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    title: "AI Engineer.",
    titleLine: "RAG systems.",
    titleAccent: "LLM applications.",
    intro: "I am Muhamad Irfan Afriyansyah, an AI Engineer focused on RAG, retrieval systems, and machine learning.",
    body: "I build small, inspectable systems that connect data, context, and evaluation.",
    value: "My work makes retrieval, provenance, fallback behavior, and system boundaries visible.",
    availability: "AI Engineer / LLM Engineer / GenAI Engineer",
  },
  currentFocus: {
    title: "Current focus.",
    body: "I am deepening my work in retrieval: finding the right context, explaining its source, and recognizing when a system does not have enough evidence.",
  },
  contact: {
    title: "Open to building reliable AI systems.",
    body: "Open to AI Engineering, Machine Learning, and retrieval-focused roles. Email is the primary contact route; GitHub and LinkedIn provide more context on my work.",
  },
  links: socialLinks,
};
