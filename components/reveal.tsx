"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealDirection = "up" | "left" | "right";

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"initial" | "pending" | "visible">("initial");

  useEffect(() => {
    const element = elementRef.current;
    const revealNow = () => setState("visible");

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(revealNow);
      return () => window.cancelAnimationFrame(frame);
    }

    const frame = window.requestAnimationFrame(() => setState("pending"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("visible");
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const stateClass = state === "initial" ? "" : state === "visible" ? "is-visible" : "is-pending";

  return (
    <div
      ref={elementRef}
      className={`reveal reveal-${direction} ${stateClass} ${className}`}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
