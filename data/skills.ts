export const currentFocus = [
  {
    index: "01",
    title: "RAG",
    question: "Ground responses in relevant source context.",
    note: "I validate retrieval, provenance, and generation boundaries in applied AI systems.",
    tone: "clay",
  },
  {
    index: "02",
    title: "Retrieval Quality",
    question: "Use thresholds, deduplication, and metadata quality to control retrieved context.",
    note: "I start with thresholds, deduplication, metadata quality, and failure paths.",
    tone: "clay",
  },
  {
    index: "03",
    title: "LLM Evaluation",
    question: "Separate fluent output from supported output.",
    note: "System behavior should be traceable to artifacts, decisions, and tests.",
    tone: "clay",
  },
  {
    index: "04",
    title: "AI Engineering",
    question: "Understand the full decision path, not only the model.",
    note: "My direction is to understand the full decision path, not only the model.",
    tone: "clay",
  },
  {
    index: "05",
    title: "Data Pipelines",
    question: "Treat input quality, normalization, metadata, and observability as system foundations.",
    note: "Input quality, normalization, metadata, and observability are the foundation.",
    tone: "clay",
  },
] as const;
