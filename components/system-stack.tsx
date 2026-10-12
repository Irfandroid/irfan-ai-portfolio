const layers = [
  ["05", "Response layer", "Reflection + citation"],
  ["04", "Context layer", "Parent verse + provenance"],
  ["03", "Quality layer", "Threshold + fallback"],
  ["02", "Retrieval layer", "Vector search + embedding"],
  ["01", "Data layer", "Indonesian Quran corpus"],
] as const;

export function SystemStack() {
  return (
    <div className="system-stack" aria-label="Qalbu system layers">
      {layers.map(([number, title, detail]) => (
        <div className="system-layer" key={number}>
          <span className="system-layer-number">{number}</span>
          <strong>{title}</strong>
          <small>{detail}</small>
        </div>
      ))}
    </div>
  );
}
