"use client";

import { useCountUp } from "@/hooks/useCountUp";

type StatCardProps = {
  value: string;
  label: string;
  suffix?: string;
  dark?: boolean;
};

function parseNumeric(value: string): number {
  const p = parseFloat(value.replace(/[^0-9.]/g, ""));
  return Number.isNaN(p) ? 0 : p;
}

export function StatCard({ value, label, suffix = "", dark }: StatCardProps) {
  const num = parseNumeric(value);
  const isNumeric = num > 0;
  const { ref, display } = useCountUp(num, 1600, { suffix });

  return (
    <div
      ref={ref}
      style={{ textAlign: "center", padding: "1rem" }}
    >
      <div
        style={{
          fontSize: "3.5rem",
          fontWeight: 800,
          color: "var(--shell-yellow)",
          lineHeight: 1,
          marginBottom: "0.75rem",
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "-0.04em",
        }}
      >
        {isNumeric ? display : value}
      </div>
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: dark ? "#FFFFFF" : "var(--shell-black)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

