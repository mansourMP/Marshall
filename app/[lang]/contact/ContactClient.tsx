"use client";

import type { Lang } from "@/lib/i18n/types";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/icons";

export function ContactClient({ lang, contact, brand }: { lang: Lang; contact: any; brand: any }) {
  return (
    <>
      <Hero headline={contact.hero.headline} subheadline={contact.hero.subheadline} />

      {/* ── Forms ──────────────────────────────────────── */}
      <section className="section section--light">
        <div className="container">
          <SectionHeader
            eyebrow="Direct Inquiry"
            title="Partner or Invest — We're Ready"
            body="Two paths. One team. Choose yours and we'll respond within 24 hours."
          />
          <div className="grid-2" style={{ gap: "3rem" }}>
            <div id="partner-section">
              <ContactForm
                title={contact.partner.title}
                description={contact.partner.description}
                fields={contact.partner.fields}
              />
            </div>
            <div id="investment-section">
              <ContactForm
                title={contact.investment.title}
                description={contact.investment.description}
                fields={contact.investment.fields}
                note={contact.investment.note}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── What Happens Next ──────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 960 }}>
          <SectionHeader
            eyebrow="Process"
            title="What Happens After You Submit"
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {[
              { step: "01", title: "We Review", body: "Your inquiry lands directly with our team. We assess fit, volume, and timeline — typically within a few hours." },
              { step: "02", title: "We Respond", body: "Within 24 hours, you'll receive a direct reply with next steps, pricing guidance, or NDA documentation for investment inquiries." },
              { step: "03", title: "We Move Forward", body: "Partnership terms, site visits, product samples, or due diligence materials — whatever your path requires, we deliver." },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--shell-red)", fontFamily: "var(--font-mono)", marginBottom: "0.75rem" }}>
                  {item.step}
                </div>
                <h4 style={{ marginBottom: "0.5rem" }}>{item.title}</h4>
                <p style={{ fontSize: "0.9375rem", color: "var(--shell-gray)", lineHeight: 1.6 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Info ────────────────────────────────── */}
      <section className="section" style={{ background: "#1F1F1F", color: "#FFFFFF" }}>
        <div className="container">
          <SectionHeader eyebrow={contact.locationEyebrow} title="Manufacturing & Sales Office" light />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", maxWidth: 900, marginInline: "auto" }}>
            {[
              { Icon: MailIcon, label: contact.email, value: brand?.email ?? "", sub: "Response within 24 hours" },
              { Icon: PhoneIcon, label: contact.phone, value: brand?.phone ?? "", sub: "Available 9:00–18:00 UZT" },
              { Icon: MapPinIcon, label: contact.address, value: brand?.location ?? "", sub: "Surkhandarya region, Uzbekistan" },
            ].map((item) => (
              <div key={item.label} style={{ padding: "2.5rem 2rem", background: "rgba(255,255,255,0.05)", borderRadius: "6px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ marginBottom: "1rem", color: "var(--shell-red)", display: "flex", justifyContent: "center" }}><item.Icon size={32} /></div>
                <div style={{ fontSize: "0.75rem", color: "var(--shell-red)", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem", letterSpacing: "0.08em" }}>{item.label}</div>
                <div style={{ color: "#FFFFFF", fontSize: "1.0625rem", fontWeight: 600, marginBottom: "0.5rem" }}>{item.value}</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--shell-gray)" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
