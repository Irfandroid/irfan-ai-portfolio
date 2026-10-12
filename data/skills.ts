export const currentFocus = [
  {
    index: "01",
    title: "RAG",
    question: "How can answers stay close to relevant sources?",
    note: "Qalbu is the primary case study: retrieval, provenance, and generation boundaries.",
    tone: "clay",
  },
  {
    index: "02",
    title: "Retrieval Quality",
    question: "What makes context feel right, rather than merely available?",
    note: "I start with thresholds, deduplication, metadata quality, and failure paths.",
    tone: "clay",
  },
  {
    index: "03",
    title: "LLM Evaluation",
    question: "How do we evaluate systems without confusing fluency with correctness?",
    note: "System behavior should be traceable to artifacts, decisions, and tests.",
    tone: "clay",
  },
  {
    index: "04",
    title: "AI Engineering",
    question: "How do we assemble AI systems that can be understood, tested, and improved?",
    note: "My direction is to understand the full decision path, not only the model.",
    tone: "clay",
  },
  {
    index: "05",
    title: "Data Pipelines",
    question: "What must be stable before intelligence at the end of a pipeline can be trusted?",
    note: "Input quality, normalization, metadata, and observability are the foundation.",
    tone: "clay",
  },
] as const;
