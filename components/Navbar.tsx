"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { LANGS } from "@/lib/i18n/types";
import { getT } from "@/lib/i18n/translations";

const FLAG_CODE: Record<string, string> = { en: "gb", ru: "ru", uz: "uz" };

export function Navbar() {
  const pathname = usePathname();
  const lang = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const tn = (path: string) => getT(lang, path);

  const navLinks = [
    { label: tn("nav.products"), href: `/${lang}/products/` },
    { label: tn("nav.production"), href: `/${lang}/production/` },
    { label: tn("nav.clients"), href: `/${lang}/clients/` },
    { label: tn("nav.trade"), href: `/${lang}/trade/` },
    { label: tn("nav.about"), href: `/${lang}/about/` },
    { label: tn("nav.contact"), href: `/${lang}/contact/` },
  ];

  const currentLang = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  // Click outside closes lang dropdown
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function toggleLang() {
    setLangOpen(!langOpen);
  }

  const brand = getT(lang, "brand");

  return (
    <header
      ref={navRef}
      className={`marshal-navbar${scrolled ? " marshal-navbar--scrolled" : ""}`}
    >
      <div className="marshal-navbar__inner container">
        <Link href={`/${lang}/`} className="marshal-navbar__brand" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }} aria-label="Marshall home">
          <img src="/brand/marshal-logo.svg" alt="Marshall" style={{ width: 28, height: 28, flexShrink: 0, display: "block" }} />
          <span style={{ whiteSpace: "nowrap", fontWeight: 800, fontSize: "1rem", color: "var(--shell-black)" }}>{brand?.name ?? "Marshall"}</span>
        </Link>

        <nav className="marshal-navbar__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`marshal-navbar__link${
                pathname === link.href ? " marshal-navbar__link--active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="marshal-navbar__actions">
          {!pathname.endsWith("/contact/") && (
            <>
              <button
                className="btn btn--outline marshal-navbar__cta"
                onClick={() => {
                  if (window.location.pathname.endsWith("/contact/")) {
                    document.getElementById("investment-section")?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.dispatchEvent(new CustomEvent("open-investment-modal"));
                  }
                }}
                style={{ border: "2px solid var(--shell-red)", color: "var(--shell-red)" }}
              >
                {tn("home.hero.secondaryCta")}
              </button>
              <Link href={`/${lang}/contact/`} className="btn btn--primary marshal-navbar__cta">
                {tn("nav.partnerWithUs")}
              </Link>
            </>
          )}
          <button
            className={`marshal-navbar__hamburger${mobileOpen ? " is-open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="marshal-navbar__lang">
            <button
              className="marshal-navbar__lang-btn"
              onClick={toggleLang}
              aria-label={`Language: ${currentLang.nativeLabel}`}
            >
              <span className={`fi fi-${FLAG_CODE[currentLang.code] ?? currentLang.code}`} />
            </button>
            {langOpen && (
              <div className="marshal-navbar__lang-dropdown">
                {LANGS.map((l) => {
                  const href = pathname
                    .replace(/^\/(en|ru|uz)\//, `/${l.code}/`)
                    .replace(/^\/(en|ru|uz)$/, `/${l.code}`)
                    .replace(/^\/$/, `/${l.code}/`);
                  return (
                    <a
                      key={l.code}
                      href={href}
                      className={`marshal-navbar__lang-option${l.code === lang ? " is-active" : ""}`}
                    >
                      <span className={`fi fi-${FLAG_CODE[l.code] ?? l.code}`} style={{ marginRight: "0.5rem" }} />
                      {l.nativeLabel}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <nav className={`marshal-navbar__mobile${mobileOpen ? " is-open" : ""}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`marshal-navbar__mobile-link${pathname === link.href ? " marshal-navbar__link--active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.5rem" }}>
          {LANGS.map((l) => {
            const href = pathname
              .replace(/^\/(en|ru|uz)\//, `/${l.code}/`)
              .replace(/^\/(en|ru|uz)$/, `/${l.code}`)
              .replace(/^\/$/, `/${l.code}/`);
            return (
              <a
                key={l.code}
                href={href}
                className="btn btn--ghost"
                style={{ padding: "0.5rem 1rem", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem", border: "1px solid #E5E5E5" }}
              >
                <span className={`fi fi-${FLAG_CODE[l.code] ?? l.code}`} />
                {l.nativeLabel}
              </a>
            );
          })}
        </div>
        {!pathname.endsWith("/contact/") && (
          <Link href={`/${lang}/contact/`} className="btn btn--primary" style={{ width: "100%", marginTop: "2rem" }}>
            {tn("nav.partnerWithUs")}
          </Link>
        )}
      </nav>

      <style jsx>{`
        .marshal-navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding-block: 0.375rem;
          transition: background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
          background: #FFFFFF;
          border-bottom: 1px solid #E5E5E5;
        }
        .marshal-navbar--scrolled {
          padding-block: 0.25rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        .marshal-navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .marshal-navbar__brand {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-weight: 800;
          font-size: 1rem;
          color: var(--shell-black);
          z-index: 101;
        }
        .marshal-navbar__logo-img {
          width: 28px; height: 28px;
          flex-shrink: 0;
        }
        .marshal-navbar__nav {
          display: flex;
          align-items: center;
          gap: 0.125rem;
        }
        .marshal-navbar__lang {
          position: relative;
          margin-left: 0.5rem;
        }
        .marshal-navbar__lang-btn {
          padding: 0.375rem 0.625rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--shell-black);
          background: var(--shell-gray-light);
          cursor: pointer;
        }
        .marshal-navbar__lang-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          background: #FFFFFF;
          border: 1px solid #E5E5E5;
          border-radius: var(--radius-sm);
          padding: 0.5rem;
          min-width: 160px;
          z-index: 200;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .marshal-navbar__lang-option {
          display: flex;
          align-items: center;
          padding: 0.625rem 1rem;
          border-radius: 4px;
          font-size: 0.875rem;
          color: var(--shell-gray);
        }
        .marshal-navbar__lang-option:hover,
        .marshal-navbar__lang-option.is-active {
          background: var(--shell-gray-light);
          color: var(--shell-black);
        }
        .marshal-navbar__actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .marshal-navbar__cta {
          font-size: 0.8125rem;
          padding: 0.5rem 1.25rem;
        }
        .marshal-navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 0.5rem;
          z-index: 101;
          cursor: pointer;
        }
        .marshal-navbar__hamburger span {
          display: block;
          width: 22px; height: 2px;
          background: var(--shell-black);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .marshal-navbar__hamburger.is-open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .marshal-navbar__hamburger.is-open span:nth-child(2) {
          opacity: 0;
        }
        .marshal-navbar__hamburger.is-open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .marshal-navbar__mobile {
          display: none;
          position: fixed;
          inset: 0;
          background: #FFFFFF;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          z-index: 100;
          padding: 2rem;
        }
        .marshal-navbar__mobile.is-open {
          display: flex;
        }
        .marshal-navbar__mobile-link {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--shell-black);
          padding: 0.75rem;
        }
        @media (max-width: 1024px) {
          .marshal-navbar__nav,
          .marshal-navbar__cta {
            display: none;
          }
          .marshal-navbar__hamburger {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
