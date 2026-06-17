type FlywheelStep = {
  step: number;
  title: string;
  description: string;
};

type FlywheelDiagramProps = {
  steps: FlywheelStep[];
};

const ICONS = ["🎓", "🤝", "🔄", "📣"];

export function FlywheelDiagram({ steps }: FlywheelDiagramProps) {
  return (
    <div style={{ position: "relative", padding: "3rem 0" }}>
      {/* Background connecting path */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "2rem",
        position: "relative",
      }}>
        {/* Horizontal connector line */}
        <div style={{
          position: "absolute",
          top: 48,
          left: "12.5%",
          right: "12.5%",
          height: 3,
          background: "linear-gradient(90deg, var(--shell-red), var(--shell-yellow), var(--shell-red), var(--shell-yellow))",
          opacity: 0.3,
          zIndex: 0,
        }} />

        {steps.map((s, i) => (
          <div key={s.step} style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            {/* Step circle with icon */}
            <div style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: i === 0
                ? "var(--shell-red)"
                : i === steps.length - 1
                  ? "linear-gradient(135deg, var(--shell-red), var(--shell-yellow))"
                  : "#FFFFFF",
              border: i === 0 || i === steps.length - 1 ? "none" : "3px solid var(--shell-red)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              fontSize: "2.25rem",
              color: i === 0 || i === steps.length - 1 ? "#FFF" : "var(--shell-red)",
              boxShadow: "0 8px 32px rgba(221,29,33,0.15)",
              position: "relative",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              {/* Step number badge */}
              <span style={{
                position: "absolute",
                top: -4,
                right: -4,
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "var(--shell-black)",
                color: "#FFF",
                fontSize: "0.75rem",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #FFF",
              }}>
                {s.step}
              </span>
              {ICONS[i]}
            </div>

            {/* Content card */}
            <div style={{
              background: "#FFFFFF",
              borderRadius: 12,
              padding: "1.5rem 1.25rem",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              border: "1px solid #F0F0F0",
            }}>
              <h4 style={{
                fontSize: "1.0625rem",
                fontWeight: 800,
                marginBottom: "0.5rem",
                color: "var(--shell-black)",
              }}>
                {s.title}
              </h4>
              <p style={{
                fontSize: "0.8125rem",
                color: "var(--shell-gray)",
                lineHeight: 1.6,
              }}>
                {s.description}
              </p>
            </div>

            {/* Arrow to next */}
            {i < steps.length - 1 && (
              <div style={{
                display: "none", // Hidden on desktop — connector line above handles this
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Mobile: stack vertically */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flywheel-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
