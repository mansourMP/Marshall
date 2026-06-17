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
      <section className="section section--dark">
        <div className="container" style={{ maxWidth: 640 }}>
          <SectionHeader eyebrow={about.milestonesEyebrow} title={about.milestonesTitle} light />
          <div className="timeline">
            {about.timeline.map((item: any) => (
              <div key={item.year} className="timeline-item">
                <div className="timeline-item__year">{item.year}</div>
                <p className="timeline-item__event">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={about.leadershipEyebrow} title={about.leadershipTitle} />
          <div className="grid-2" style={{ maxWidth: 800, marginInline: "auto" }}>
            {(team ?? []).map((m: any) => <TeamMemberCard key={m.id} member={m} />)}
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
