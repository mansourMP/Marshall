"use client";

import type { Lang } from "@/lib/i18n/types";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { CTABanner } from "@/components/CTABanner";

export function AboutClient({ lang, about, team }: { lang: Lang; about: any; team: any[] }) {
  return (
    <>
      <Hero headline={about.hero.headline} subheadline={about.hero.subheadline} />
      <section className="section section--light">
        <div className="container">
          <SectionHeader eyebrow={about.story.eyebrow} title={about.story.title} />
          <div style={{ maxWidth: 720, marginInline: "auto" }}>
            {about.story.paragraphs.map((p: string, i: number) => (
              <p key={i} style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#475569", marginBottom: "1.25rem" }}>{p}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <SectionHeader eyebrow={about.milestonesEyebrow} title={about.milestonesTitle} />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1rem",
            position: "relative",
          }}>
            {/* Connector line */}
            <div style={{
              position: "absolute",
              top: 32,
              left: "10%",
              right: "10%",
              height: 2,
              background: "var(--shell-red)",
              opacity: 0.2,
              zIndex: 0,
            }} />
            {about.timeline.map((item: any, i: number) => (
              <div key={item.year} style={{ position: "relative", zIndex: 1 }}>
                {/* Year badge */}
                <div style={{
                  width: 64, height: 64,
                  borderRadius: "50%",
                  background: i === about.timeline.length - 1
                    ? "linear-gradient(135deg, var(--shell-red), var(--shell-yellow))"
                    : "var(--shell-red)",
                  color: "#FFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.875rem",
                  fontWeight: 800,
                  margin: "0 auto 1.25rem",
                  boxShadow: "0 4px 20px rgba(221,29,33,0.2)",
                }}>
                  {item.year}
                </div>
                {/* Event card */}
                <div style={{
                  background: "#FFFFFF",
                  borderRadius: 8,
                  padding: "1.25rem",
                  border: "1px solid #E5E5E5",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}>
                  <p style={{
                    fontSize: "0.8125rem",
                    color: "var(--shell-gray)",
                    lineHeight: 1.6,
                  }}>
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Responsive: stack on mobile */}
          <style jsx>{`
            @media (max-width: 768px) {
              .timeline-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={about.leadershipEyebrow} title={about.leadershipTitle} />
          <div className="grid-2" style={{ maxWidth: 800, marginInline: "auto" }}>
            {(team ?? []).filter((m: any) => m.id !== "founder").map((m: any) => <TeamMemberCard key={m.id} member={m} />)}
          </div>
        </div>
      </section>
      <section className="section section--charcoal">
        <div className="container" style={{ maxWidth: 640 }}>
          <SectionHeader eyebrow={about.market.eyebrow} title={about.market.title} body={about.market.body} light />
        </div>
      </section>
      <CTABanner title={about.ctaTitle} body={about.ctaBody} ctaLabel={about.ctaLabel} ctaHref={`/${lang}/production/`} />
    </>
  );
}
