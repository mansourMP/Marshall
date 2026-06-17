"use client";

import Link from "next/link";
import type { Lang } from "@/lib/i18n/types";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";

export function TradeClient({ lang, trade }: { lang: Lang; trade: any }) {
  return (
    <>
      <Hero headline={trade.hero.headline} subheadline={trade.hero.subheadline} />

      <section className="section section--light">
        <div className="container">
          <SectionHeader eyebrow={trade.portal.eyebrow} title={trade.portal.title} body={trade.portal.body} />
          <div className="grid-3" style={{ marginTop: "2rem" }}>
            {trade.portal.features.map((f: any) => (
              <div className="card" key={f.title}>
                <div className="card__content">
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--shell-red)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>Feature</div>
                  <h4 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>{f.title}</h4>
                  <p style={{ fontSize: "1rem", color: "var(--shell-gray)", lineHeight: 1.6 }}>{f.body}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container" style={{ maxWidth: 720 }}>
          <SectionHeader eyebrow={trade.howItWorksEyebrow} title={trade.howItWorksTitle} light />
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {trade.steps.map((s: any) => (
              <div key={s.step} style={{ display: "flex", gap: "1.5rem", padding: "1.5rem", background: "#FFFFFF", borderRadius: "0.75rem", border: "1px solid #E5E5E5" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--shell-red)", fontFamily: "var(--font-mono)", lineHeight: 1, flexShrink: 0 }}>{s.step}</div>
                <div>
                  <h4 style={{ color: "var(--shell-black)", marginBottom: "0.375rem" }}>{s.title}</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--shell-gray)", lineHeight: 1.6 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title={trade.ctaTitle} body={trade.ctaBody} ctaLabel={trade.ctaLabel} ctaHref={`/${lang}/contact/`} />
    </>
  );
}
