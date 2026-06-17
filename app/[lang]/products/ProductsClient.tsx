"use client";

import Link from "next/link";
import type { Lang } from "@/lib/i18n/types";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";

export function ProductsClient({ lang, products }: { lang: Lang; products: any }) {
  return (
    <>
      <Hero headline={products.hero.headline} subheadline={products.hero.subheadline} />
      <section className="section section--light">
        <div className="container">
          <SectionHeader eyebrow={products.sectionEyebrow} title={products.sectionTitle} />
          <div className="grid-2">
            {products.items.map((p: any) => (
              <ProductCard key={p.id} lang={lang} product={{ ...p, highlightLabel: products.featuredProduct, specLabel: products.specifications, appLabel: products.applications }} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container">
          <SectionHeader eyebrow={products.oem.eyebrow} title={products.oem.title} body={products.oem.body} light />
          <div className="grid-2" style={{ marginTop: "2.5rem", maxWidth: 720, marginInline: "auto" }}>
            {products.oem.capabilities.map((cap: string) => (
              <div key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.25rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px" }}>
                <span style={{ fontSize: "0.9375rem", color: "var(--shell-gray-light)", lineHeight: 1.6 }}>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 640, marginInline: "auto", textAlign: "center", padding: "4rem 3rem", border: "1px solid #E5E5E5", borderRadius: "12px", background: "var(--shell-gray-light)" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--shell-red)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>In Development</div>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{products.comingSoon.title}</h3>
            <p style={{ fontSize: "1.0625rem", color: "var(--shell-gray)", lineHeight: 1.6 }}>{products.comingSoon.body}</p>
          </div>
        </div>
      </section>
      <CTABanner title={products.ctaTitle} body={products.ctaBody} ctaLabel={products.ctaLabel} ctaHref={`/${lang}/contact/`} />
    </>
  );
}
