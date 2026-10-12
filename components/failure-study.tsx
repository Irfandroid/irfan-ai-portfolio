type Failure = { problem: string; cause: string; experiment: string };

export function FailureStudy({ items }: { items: Failure[] }) {
  return (
    <div className="failure-study">
      {items.map((item) => <div className="failure-item" key={item.problem}><span>Observed problem</span><h4>{item.problem}</h4><p><strong>Possible cause.</strong> {item.cause}</p><p><strong>Next experiment.</strong> {item.experiment}</p></div>)}
    </div>
  );
}
