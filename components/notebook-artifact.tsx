export function NotebookArtifact({ label = "Technical flow diagram" }: { label?: string }) {
  return (
    <div className="notebook-artifact" aria-label="Technical artifact diagram">
      <svg viewBox="0 0 700 460" role="img" aria-label="Abstract pipeline diagram and technical notes">
        <rect width="700" height="460" fill="#FFFFFF" />
        <path d="M70 0v460M105 0v460" stroke="#E4E4E7" strokeWidth="2" />
        {Array.from({ length: 12 }).map((_, index) => <path key={index} d={`M0 ${42 + index * 34}h700`} stroke="#E4E4E7" strokeWidth="1" />)}
        <text x="140" y="85" fill="#18181B" fontSize="23" fontFamily="monospace" letterSpacing="3">QALBU / FLOW</text>
        <text x="140" y="125" fill="#B45B3C" fontSize="14" fontFamily="monospace">context before answer</text>
        <path d="M150 185h112m0 0-12-8m12 8-12 8M310 185h112m0 0-12-8m12 8-12 8M470 185h100" stroke="#71717A" strokeWidth="3" fill="none" />
        <rect x="140" y="160" width="98" height="48" rx="2" fill="#FFFFFF" stroke="#18181B" />
        <rect x="300" y="160" width="98" height="48" rx="2" fill="#FFFFFF" stroke="#18181B" />
        <rect x="460" y="160" width="110" height="48" rx="2" fill="#FFFFFF" stroke="#18181B" />
        <text x="158" y="190" fill="#18181B" fontSize="12" fontFamily="monospace">QUERY</text>
        <text x="318" y="190" fill="#18181B" fontSize="12" fontFamily="monospace">RETRIEVE</text>
        <text x="484" y="190" fill="#18181B" fontSize="12" fontFamily="monospace">REFLECT</text>
        <path d="M140 286q84-62 168 0t168 0" stroke="#B45B3C" strokeWidth="3" fill="none" />
        <circle cx="140" cy="286" r="6" fill="#B45B3C" /><circle cx="308" cy="286" r="6" fill="#B45B3C" /><circle cx="476" cy="286" r="6" fill="#B45B3C" />
        <text x="140" y="340" fill="#71717A" fontSize="13" fontFamily="monospace">threshold → provenance → fallback</text>
        <text x="140" y="390" fill="#71717A" fontSize="12" fontFamily="monospace">{"// a system earns trust through visible limits"}</text>
      </svg>
      <span>{label}</span>
    </div>
  );
}
