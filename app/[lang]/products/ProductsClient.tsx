"use client";

import type { Lang } from "@/lib/i18n/types";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";
import { getT } from "@/lib/i18n/translations";

export function ProductsClient({ lang, products }: { lang: Lang; products: any }) {
  return (
    <>
      {/* Hero — compact */}
      <Hero headline={products.hero.headline} subheadline={products.hero.subheadline} />

      {/* Product cards — no section header gap, straight into products */}
      <section className="section section--light" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="grid-2">
            {products.items.map((p: any) => (
              <ProductCard
                key={p.id}
                lang={lang}
                product={{
                  ...p,
                  highlightLabel: products.featuredProduct,
                  specLabel: products.specifications,
                  appLabel: products.applications,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OEM section */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={products.oem.eyebrow}
            title={products.oem.title}
            body={products.oem.body}
          />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            maxWidth: 900,
            marginInline: "auto",
          }}>
            {products.oem.capabilities.map((cap: string, i: number) => (
              <div
                key={cap}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1.25rem 1.5rem",
                  background: "#FFFFFF",
                  borderRadius: 6,
                  border: "1px solid #E5E5E5",
                }}
              >
                <span style={{
                  width: 32, height: 32,
                  borderRadius: 6,
                  background: "var(--shell-red)",
                  color: "#FFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.875rem",
                  fontWeight: 800,
                  flexShrink: 0,
                }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: "0.9375rem", color: "var(--shell-black)", fontWeight: 500 }}>
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section section--light">
        <div className="container" style={{ maxWidth: 640, textAlign: "center" }}>
          <div style={{
            padding: "3rem",
            border: "1px solid #E5E5E5",
            borderRadius: 12,
            background: "#FFFFFF",
          }}>
            <div style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "var(--shell-red)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "1rem",
            }}>
              {products.comingSoon?.eyebrow ?? getT(lang, "common")?.inDevelopment ?? "In Development"}
            </div>
            <h3 style={{ marginBottom: "1rem" }}>{products.comingSoon.title}</h3>
            <p style={{ fontSize: "1.0625rem", color: "var(--shell-gray)", lineHeight: 1.6 }}>
              {products.comingSoon.body}
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title={products.ctaTitle}
        body={products.ctaBody}
        ctaLabel={products.ctaLabel}
        ctaHref={`/${lang}/contact/`}
      />
    </>
  );
}
