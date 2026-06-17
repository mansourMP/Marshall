"use client";

import type { Lang } from "@/lib/i18n/types";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { CTABanner } from "@/components/CTABanner";
import { getT } from "@/lib/i18n/translations";

export function ProductionClient({ lang, production, team }: { lang: Lang; production: any; team: any[] }) {
  const home = getT(lang, "home");
  return (
    <>
      <Hero headline={production.hero.headline} subheadline={production.hero.subheadline} />
      <section className="section section--light">
        <div className="container">
          <SectionHeader eyebrow={production.facility.eyebrow} title={production.facility.title} body={production.facility.body} />
          <div className="grid-4" style={{ marginBottom: "3rem" }}>
            {home?.stats?.map((s: any) => (
              <StatCard key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
            ))}
          </div>
          <div className="grid-3" style={{ maxWidth: 800, marginInline: "auto" }}>
            {production.facility.details.map((d: any) => (
              <div key={d.label} style={{ textAlign: "center", padding: "1.5rem", background: "var(--marshal-white)", borderRadius: "0.5rem", border: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94A3B8", marginBottom: "0.375rem" }}>{d.label}</div>
                <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--marshal-dark-text)" }}>{d.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container">
          <SectionHeader eyebrow={production.process.eyebrow} title={production.process.title} light />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", position: "relative" }}>
            {/* Connecting line */}
            <div style={{ position: "absolute", top: 28, left: "12.5%", right: "12.5%", height: 2, background: "rgba(255,255,255,0.15)", zIndex: 0 }} />
            {production.process.steps.map((s: any, i: number) => (
              <div key={s.step} style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.25rem" }}>
                {/* Step circle */}
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "var(--shell-red)", color: "#FFF",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.25rem",
                  fontSize: "1.25rem", fontWeight: 800, fontFamily: "var(--font-mono)",
                  position: "relative", zIndex: 2,
                }}>
                  {s.step}
                </div>
                <h4 style={{ color: "#FFF", fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{s.title}</h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--shell-gray)", lineHeight: 1.6 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={production.teamEyebrow} title={production.teamTitle} />
          <div className="grid-2" style={{ maxWidth: 800, marginInline: "auto" }}>
            {(team ?? []).filter((m: any) => m.id !== "founder").map((m: any) => <TeamMemberCard key={m.id} member={m} />)}
          </div>
        </div>
      </section>
      <section className="section section--charcoal">
        <div className="container">
          <SectionHeader eyebrow={production.location.eyebrow} title={production.location.title} body={production.location.body} light />
          <div className="grid-2" style={{ maxWidth: 720, marginInline: "auto", marginTop: "2rem" }}>
            {production.location.advantages.map((a: string) => (
              <div key={a} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1rem" }}>
                <span style={{ color: "var(--marshal-amber)", fontWeight: 700, fontSize: "1.125rem", flexShrink: 0 }}>◆</span>
                <span style={{ fontSize: "0.9375rem", color: "var(--marshal-gray-light)", lineHeight: 1.6 }}>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title={production.ctaTitle} body={production.ctaBody} ctaLabel={production.ctaLabel} ctaHref={`/${lang}/products/`} />
    </>
  );
}
