type FlywheelStep = {
  step: number;
  title: string;
  description: string;
};

type FlywheelDiagramProps = {
  steps: FlywheelStep[];
};

export function FlywheelDiagram({ steps }: FlywheelDiagramProps) {
  return (
    <div className="flywheel">
      {steps.map((s, i) => (
        <div key={s.step} style={{ display: "flex", alignItems: "center" }}>
          <div className="flywheel-step">
            <div className="flywheel-step__circle">{s.step}</div>
            <div className="flywheel-step__title">{s.title}</div>
            <p className="flywheel-step__body">{s.description}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="flywheel-arrow" aria-hidden="true">→</div>
          )}
        </div>
      ))}
    </div>
  );
}
