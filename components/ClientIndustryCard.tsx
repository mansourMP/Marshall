import type { ClientIndustry } from "@/lib/types";
import { INDUSTRY_ICONS, StoreIcon } from "./icons";

type ClientIndustryCardProps = { industry: ClientIndustry };

export function ClientIndustryCard({ industry }: ClientIndustryCardProps) {
  const Icon = INDUSTRY_ICONS[industry.icon] ?? StoreIcon;
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "0.75rem", color: "var(--shell-red)", display: "flex", justifyContent: "center" }}>
        <Icon size={48} />
      </div>
      <div style={{
        display: "inline-block", fontSize: "0.75rem", fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.08em",
        color: "var(--shell-red)", background: "rgba(221,29,33,0.08)",
        padding: "0.25rem 0.75rem", borderRadius: "999px", marginBottom: "0.75rem",
      }}>
        {industry.clientCount} client{industry.clientCount > 1 ? "s" : ""}
      </div>
      <h4 style={{ marginBottom: "0.5rem" }}>{industry.name}</h4>
      <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.6 }}>
        {industry.description}
      </p>
    </div>
  );
}
