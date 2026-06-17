"use client";

import { useCountUp } from "@/hooks/useCountUp";
import type { Stat } from "@/lib/types";

/** Match numeric part of stat value for counter animation */
function parseNumericValue(value: string): number {
  const parsed = parseFloat(value.replace(/[^0-9.]/g, ""));
  return Number.isNaN(parsed) ? 0 : parsed;
}

type TrustBarProps = {
  stats: Stat[];
};

export function TrustBar({ stats }: TrustBarProps) {
  return (
    <section className="section" style={{ background: "var(--shell-gray-light)", paddingBlock: "4rem" }}>
      <div className="container">
        <div className="stats-bar" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" }}>
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .stats-bar {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

function StatItem({ stat }: { stat: Stat }) {
  const numericValue = parseNumericValue(stat.value);
  const isNumeric = numericValue > 0;
  const { ref, display } = useCountUp(numericValue, 1800, {
    suffix: stat.suffix ?? "",
  });

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-item__value" style={{ fontSize: "3rem", fontWeight: 800, color: "var(--shell-red)", lineHeight: 1, marginBottom: "0.5rem" }}>
        {isNumeric ? display : stat.value}
      </div>
      <div className="stat-item__label" style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--shell-gray)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</div>
    </div>
  );
}

