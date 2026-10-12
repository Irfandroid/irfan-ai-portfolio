import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function SiteFooter() {
  return <footer className="site-footer shell"><div><strong>{site.name}</strong><span>AI Engineering / Machine Learning / RAG</span></div><Link href="#hero">Back to top <ArrowUpRight size={14} /></Link></footer>;
}
