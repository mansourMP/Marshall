"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { getT } from "@/lib/i18n/translations";

export function Footer() {
  const lang = useLang();
  const tn = (path: string) => getT(lang, path);
  const brand = getT(lang, "brand");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand-section">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <img src="/brand/marshal-logo.svg" alt="Marshall" style={{ width: "28px", height: "28px", flexShrink: 0 }} />
              <div className="footer__brand-name" style={{ marginBottom: 0 }}>{brand?.name ?? "Marshall"}</div>
            </div>
            <p className="footer__brand-tagline">{brand?.tagline ?? ""}</p>
            <div className="footer__socials" style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
              {/* Placeholder socials */}
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--shell-gray-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>f</div>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--shell-gray-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>in</div>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--shell-gray-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>𝕏</div>
            </div>
          </div>

          <div className="footer__link-column">
            <div className="footer__link-group-title">Explore</div>
            <Link href={`/${lang}/products/`} className="footer__link">{tn("nav.products")}</Link>
            <Link href={`/${lang}/production/`} className="footer__link">{tn("nav.production")}</Link>
            <Link href={`/${lang}/clients/`} className="footer__link">{tn("nav.clients")}</Link>
            <Link href={`/${lang}/about/`} className="footer__link">{tn("nav.about")}</Link>
            <Link href={`/${lang}/trade/`} className="footer__link">{tn("nav.trade")}</Link>
          </div>

          <div className="footer__link-column">
            <div className="footer__link-group-title">Solutions</div>
            <span className="footer__link">{tn("products.items.0.name")}</span>
            <span className="footer__link">{tn("products.items.2.name")}</span>
            <span className="footer__link">{tn("products.items.3.name")}</span>
            <span className="footer__link">{tn("products.items.4.name")}</span>
          </div>

          <div className="footer__link-column">
            <div className="footer__link-group-title">Contact</div>
            <span className="footer__link" style={{ color: "var(--shell-red)", fontWeight: 700 }}>{brand?.email ?? ""}</span>
            <span className="footer__link">{brand?.phone ?? ""}</span>
            <p style={{ fontSize: "0.875rem", color: "var(--shell-gray)", marginTop: "1rem" }}>
              {brand?.location ?? ""}
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <span>© {new Date().getFullYear()} {brand?.name ?? "Marshal"}. All rights reserved.</span>
          </div>
          <div className="footer__legal-links" style={{ display: "flex", gap: "2rem" }}>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer__brand-section {
          max-width: 400px;
        }
        .footer__link-column {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 768px) {
          .footer__inner {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 480px) {
          .footer__inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}

