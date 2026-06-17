"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { CTABanner } from "@/components/CTABanner";
import { GatedInquiryModal } from "@/components/GatedInquiryModal";
import { INDUSTRY_ICONS, StoreIcon } from "@/components/icons";
import { getT } from "@/lib/i18n/translations";
import { useLang } from "@/lib/i18n/LanguageProvider";
import type { Lang } from "@/lib/i18n/types";

export function HomeClient({ lang, home }: { lang: Lang; home: any }) {
  const [modalOpen, setModalOpen] = useState(false);
  const cl = getT(lang, "clients");

  useEffect(() => {
    const handleOpen = () => setModalOpen(true);
    window.addEventListener("open-investment-modal", handleOpen);
    return () => window.removeEventListener("open-investment-modal", handleOpen);
  }, []);

  return (
    <>
      <Hero 
        headline={home.hero.headline} 
        subheadline={home.hero.subheadline}
        imageUrl="/images/ceo.jpg"
      />


      <TrustBar stats={home.trustStats} />

      <section className="section section--light">
        <div className="container">
          <SectionHeader eyebrow={home.whatWeDo.eyebrow} title={home.whatWeDo.title} />
          <div className="grid-3">
            {home.whatWeDo.cards.map((c: any) => (
              <div className="card" key={c.title}>
                <div className="card__content">
                  <h3 style={{ marginBottom: "1rem" }}>{c.title}</h3>
                  <p style={{ fontSize: "1rem", color: "var(--shell-gray)", lineHeight: 1.6 }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeader eyebrow={home.byTheNumbers.eyebrow} title={home.byTheNumbers.title} light />
          <div className="grid-4">
            {home.stats.map((s: any) => (
              <StatCard key={s.label} value={s.value} label={s.label} suffix={s.suffix} dark />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={home.whoTrustsUs.eyebrow} title={home.whoTrustsUs.title} body={home.whoTrustsUs.body} />
          <div className="grid-4">
            {(cl?.industries ?? []).slice(0, 4).map((ind: any) => {
              const Icon = INDUSTRY_ICONS[ind.icon] ?? StoreIcon;
              return (
                <div key={ind.id} className="card" style={{ textAlign: "center", padding: "3rem 2rem" }}>
                  <div style={{ marginBottom: "1.5rem", color: "var(--shell-red)", display: "flex", justifyContent: "center" }}>
                    <Icon size={56} />
                  </div>
                  <h4 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>{ind.name}</h4>
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--shell-red)", textTransform: "uppercase" }}>
                    {ind.clientCount} {ind.clientCount > 1 ? cl?.clientsLabel ?? "clients" : cl?.clientsLabel ?? "client"}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <CTABanner title={home.ctaTitle} body={home.ctaBody} ctaLabel={home.ctaLabel} ctaHref={`/${lang}/products/`} />
      <GatedInquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

