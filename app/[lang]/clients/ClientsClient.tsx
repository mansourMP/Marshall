"use client";

import type { Lang } from "@/lib/i18n/types";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ClientIndustryCard } from "@/components/ClientIndustryCard";
import { FlywheelDiagram } from "@/components/FlywheelDiagram";
import { CTABanner } from "@/components/CTABanner";
import { INDUSTRY_ICONS, StoreIcon } from "@/components/icons";

export function ClientsClient({ lang, clients }: { lang: Lang; clients: any }) {

  return (
    <>
      <Hero headline={clients.hero.headline} subheadline={clients.hero.subheadline} />
      <section className="section section--light">
        <div className="container">
          <SectionHeader eyebrow={clients.industriesEyebrow} title={clients.industriesTitle} />
          <div className="grid-4">
            {clients.industries.map((ind: any) => {
              const Icon = INDUSTRY_ICONS[ind.icon] ?? StoreIcon;
              return (
                <div key={ind.id} className="card" style={{ textAlign: "center", paddingTop: "3rem", paddingBottom: "3rem" }}>
                  <div className="card__content">
                    <div style={{ marginBottom: "1.5rem", color: "var(--shell-red)", display: "flex", justifyContent: "center" }}>
                      <Icon size={64} />
                    </div>
                    <div style={{ display: "inline-block", fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase", color: "var(--shell-red)", marginBottom: "1rem" }}>
                      {ind.clientCount} {clients.clientsLabel ?? "clients"}
                    </div>
                    <h4 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>{ind.name}</h4>
                    <p style={{ fontSize: "1rem", color: "var(--shell-gray)", lineHeight: 1.6 }}>{ind.description}</p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={clients.channels.eyebrow} title={clients.channels.title} />
          <div className="grid-3">
            {clients.channels.items.map((ch: any) => (
              <div className="card" key={ch.id} style={{ textAlign: "center", padding: "3rem 2rem" }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", border: "4px solid var(--shell-red)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "1.5rem", fontWeight: 800, color: "var(--shell-red)" }}>{ch.percentage}%</div>
                <h4 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>{ch.name}</h4>
                <p style={{ fontSize: "1rem", color: "var(--shell-gray)", lineHeight: 1.6 }}>{ch.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={clients.flywheelEyebrow} title={clients.flywheelTitle} />
          <FlywheelDiagram steps={clients.flywheelSteps} />
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <SectionHeader eyebrow={clients.whyTheyStay.eyebrow} title={clients.whyTheyStay.title} />
          <div className="grid-2">
            {clients.whyTheyStay.reasons.map((r: any) => (
              <div className="card" key={r.title} style={{ padding: "2.5rem", borderLeft: "4px solid var(--shell-red)" }}>
                <h4 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>{r.title}</h4>
                <p style={{ fontSize: "1rem", color: "var(--shell-gray)", lineHeight: 1.6 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <SectionHeader eyebrow={clients.testimonials.eyebrow} title={clients.testimonials.title} />
          <div className="grid-3">
            {clients.testimonials.items.map((t: any) => (
              <div className="card" key={t.quote.slice(0, 30)}>
                <div className="card__content" style={{ padding: "3rem 2.5rem" }}>
                  <div style={{ fontSize: "3rem", color: "var(--shell-red)", lineHeight: 1, marginBottom: "1rem" }}>&ldquo;</div>
                  <p style={{ fontSize: "1.125rem", color: "var(--shell-black)", lineHeight: 1.6, marginBottom: "2rem", fontStyle: "italic", fontWeight: 500 }}>{t.quote}</p>
                  <div style={{ borderTop: "1px solid #E5E5E5", paddingTop: "1.5rem" }}>
                    <div style={{ fontWeight: 800, fontSize: "1rem", color: "var(--shell-black)" }}>{t.attribution}</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--shell-red)", textTransform: "uppercase", fontWeight: 700, marginTop: "0.25rem" }}>{t.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title={clients.ctaTitle} body={clients.ctaBody} ctaLabel={clients.ctaLabel} ctaHref={`/${lang}/contact/`} />
    </>
  );
}
