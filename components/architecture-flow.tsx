import { ArrowRight } from "lucide-react";

export function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="architecture-flow" aria-label="Architecture flow">
      {steps.map((step, index) => <span key={`${step}-${index}`}><b>{String(index + 1).padStart(2, "0")}</b>{step}{index < steps.length - 1 && <ArrowRight size={14} aria-hidden="true" />}</span>)}
    </div>
  );
}
