export const processSteps = [
  { number: "01", title: "Understand the problem", body: "Separate the symptom from the actual technical problem." },
  { number: "02", title: "Inspect data & context", body: "Review quality, limitations, and assumptions before choosing a model." },
  { number: "03", title: "Design an approach", body: "Choose the simplest system that can test the hypothesis." },
  { number: "04", title: "Build a small experiment", body: "Make something small enough to fail quickly." },
  { number: "05", title: "Evaluate failure", body: "Find out not only whether it failed, but why." },
  { number: "06", title: "Iterate & document", body: "Improve it, document it, then test again." },
] as const;
