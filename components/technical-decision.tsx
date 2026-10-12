export function TechnicalDecision({ problem, decision, reason, tradeoff }: { problem: string; decision: string; reason: string; tradeoff: string }) {
  return (
    <aside className="technical-decision">
      <div className="decision-heading">Technical decision</div>
      <div className="decision-grid">
        <div><span>Problem</span><p>{problem}</p></div>
        <div><span>Decision</span><p>{decision}</p></div>
        <div><span>Reason</span><p>{reason}</p></div>
        <div><span>Trade-off</span><p>{tradeoff}</p></div>
      </div>
    </aside>
  );
}
