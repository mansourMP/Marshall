"use client";

import { useLang } from "@/lib/i18n/LanguageProvider";
import { getT } from "@/lib/i18n/translations";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
};

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const lang = useLang();
  const credLabel = getT(lang, "common.credentials") ?? "Credentials";

  const getImageUrl = (id: string) => {
    switch (id) {
      case "ceo": return "/images/ceo.jpg";
      case "chemical-expert": return "/images/chief-chemical-engineer.jpg";
      default: return null;
    }
  };

  const imageUrl = getImageUrl(member.id);

  return (
    <div style={{ background: "var(--marshal-charcoal)", border: "1px solid #334155", borderRadius: "0.75rem", padding: "2rem", color: "var(--marshal-white)" }}>
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={member.name} 
          style={{ width: 80, height: 80, borderRadius: "0.5rem", objectFit: "cover", marginBottom: "1rem" }} 
        />
      ) : (
        <div style={{ width: 64, height: 64, borderRadius: "0.5rem", background: "linear-gradient(135deg, var(--marshal-amber), var(--marshal-gold))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: 800, color: "var(--marshal-navy)", marginBottom: "1rem" }}>
          {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
        </div>
      )}
      <h3 style={{ marginBottom: "0.25rem" }}>{member.name}</h3>
      <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--marshal-amber)", marginBottom: "1rem" }}>{member.role}</p>
      <p style={{ fontSize: "0.875rem", color: "var(--marshal-gray)", lineHeight: 1.6, marginBottom: "1.25rem" }}>{member.bio}</p>
      <div style={{ borderTop: "1px solid #334155", paddingTop: "1rem" }}>
        <div style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748B", marginBottom: "0.5rem" }}>{credLabel}</div>
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
          {member.credentials.map((cred) => (
            <li key={cred} style={{ fontSize: "0.8125rem", color: "var(--marshal-gray-light)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "var(--marshal-amber)", fontWeight: 700 }}>✓</span>
              {cred}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
