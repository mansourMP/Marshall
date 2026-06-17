"use client";

import Link from "next/link";
import type { Lang } from "@/lib/i18n/types";
import type { ProductDetail } from "@/lib/product-details";
import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { getT } from "@/lib/i18n/translations";

type Props = {
  lang: Lang;
  productId: string;
  productName: string;
  productTagline: string;
  productCapacity: string;
  detail: ProductDetail;
};

const SECTIONS = [
  { key: "quality" as const, label: "Quality & Standards", icon: "✓" },
  { key: "origin" as const, label: "Origin & Engineering", icon: "◆" },
  { key: "usage" as const, label: "Usage & Application", icon: "⚙" },
  { key: "oem" as const, label: "OEM & Bulk Supply", icon: "↗" },
];

export function ProductDetailClient({
  lang,
  productId,
  productName,
  productTagline,
  productCapacity,
  detail,
}: Props) {
  const productsT = getT(lang, "products");
  const contactT = getT(lang, "contact");

  return (
    <>
      {/* Hero */}
      <Hero
        headline={productName}
        subheadline={productTagline}
      />

      {/* Capacity badge */}
      <section style={{ background: "var(--shell-gray-light)", padding: "2rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            borderRadius: 6,
            background: "var(--shell-red)",
            color: "#FFF",
            fontSize: "1rem",
            fontWeight: 700,
          }}>
            Production Capacity: {productCapacity}
          </div>
        </div>
      </section>

      {/* Detail sections */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {SECTIONS.map((section) => (
              <div key={section.key} style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: "1.5rem",
                alignItems: "flex-start",
              }}>
                {/* Icon */}
                <div style={{
                  width: 48, height: 48,
                  borderRadius: 6,
                  background: "var(--shell-red)",
                  color: "#FFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  flexShrink: 0,
                }}>
                  {section.icon}
                </div>
                {/* Content */}
                <div>
                  <h4 style={{
                    fontSize: "1.0625rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--shell-red)",
                    marginBottom: "0.5rem",
                  }}>
                    {section.label}
                  </h4>
                  <p style={{
                    fontSize: "1.0625rem",
                    color: "var(--shell-gray)",
                    lineHeight: 1.75,
                  }}>
                    {detail[section.key]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title={productsT?.ctaTitle ?? "Need Custom Formulations?"}
        body={productsT?.ctaBody ?? "Contact us to discuss OEM, private label, or custom-blend requirements."}
        ctaLabel={productsT?.ctaLabel ?? "Request Specifications"}
        ctaHref={`/${lang}/contact/`}
      />

      {/* Back link */}
      <section style={{ paddingBottom: "4rem", textAlign: "center" }}>
        <Link href={`/${lang}/products/`} style={{
          fontSize: "0.9375rem",
          fontWeight: 600,
          color: "var(--shell-gray)",
          textDecoration: "underline",
        }}>
          ← {productsT?.sectionTitle ?? "Back to Products"}
        </Link>
      </section>
    </>
  );
}
