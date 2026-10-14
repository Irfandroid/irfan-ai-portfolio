"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLSpanElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isCaseStudy = pathname.startsWith("/work/");

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), { threshold: 0 });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <span ref={sentinelRef} className="header-sentinel" aria-hidden="true" />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <Link href="/" className="wordmark" aria-label="Return to homepage">
          <span className="wordmark-mark">ia</span>
          <span>{site.shortName}</span>
        </Link>

        <nav className={`desktop-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {site.navigation.map((item) => (
            <Link key={item.href} href={isCaseStudy ? `/${item.href}` : item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="icon-link" href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} strokeWidth={1.7} />
          </a>
          <a className="icon-link" href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} strokeWidth={1.7} />
          </a>
          <a className="icon-link" href={site.links.email} aria-label="Email">
            <Mail size={17} strokeWidth={1.7} />
          </a>
          <button ref={menuButtonRef} className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      </header>
    </>
  );
}
