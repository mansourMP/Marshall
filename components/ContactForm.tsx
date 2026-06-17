"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { getT } from "@/lib/i18n/translations";

type ContactFormProps = {
  title: string;
  description: string;
  fields: string[];
  note?: string;
};

export function ContactForm({
  title,
  description,
  fields,
  note,
}: ContactFormProps) {
  const lang = useLang();
  const tc = getT(lang, "common");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Static export — no server. In production, replace action with
    // a form handler (Formspree, Web3Forms, or a serverless function).
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="card"
        style={{ textAlign: "center", padding: "4rem 2rem", background: "#FFFFFF" }}
      >
        <h3 style={{ marginBottom: "1rem", color: "var(--shell-black)", fontSize: "2rem" }}>
          {tc?.thankYou ?? "Thank You"}
        </h3>
        <p style={{ color: "var(--shell-gray)", fontSize: "1.125rem", lineHeight: 1.6 }}>
          {tc?.thankYouBody ?? "We will get back to you within 24 hours."}
        </p>
      </div>
    );
  }

  return (
    <div className="card" style={{ background: "#FFFFFF", padding: "3rem" }}>
      <h3 style={{ marginBottom: "1rem", color: "var(--shell-black)", fontSize: "2rem" }}>
        {title}
      </h3>
      <p
        style={{
          color: "var(--shell-gray)",
          fontSize: "1.125rem",
          marginBottom: "2rem",
          lineHeight: 1.6
        }}
      >
        {description}
      </p>

      {note && (
        <p
          style={{
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "var(--shell-red)",
            marginBottom: "2rem",
            padding: "1rem 1.25rem",
            borderRadius: "var(--radius-sm)",
            background: "var(--shell-gray-light)",
            borderLeft: "4px solid var(--shell-red)",
          }}
        >
          {note}
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {fields.map((field) => (
          <div className="form-group" key={field}>
            <label className="form-label" style={{ color: "var(--shell-black)", fontWeight: 700, marginBottom: "0.5rem" }}>{field}</label>
            {field === "Product Interest" || field === "Industry" ? (
              <select className="form-select" required style={{ background: "var(--shell-gray-light)", border: "none", color: "var(--shell-black)", padding: "1rem 1.25rem", borderRadius: "var(--radius-sm)" }}>
                <option value="">{tc?.select ?? "Select..."}</option>
                {field === "Product Interest" && (
                  <>
                    <option>Engine Oil — Premium</option>
                    <option>Engine Oil — Standard</option>
                    <option>Antifreeze / Coolant</option>
                    <option>Brake Fluid</option>
                    <option>Grease</option>
                    <option>Multiple Products</option>
                    <option>OEM / Private Label</option>
                  </>
                )}
                {field === "Industry" && (
                  <>
                    <option>Auto Parts Retail</option>
                    <option>Fleet / Transportation</option>
                    <option>Industrial Manufacturing</option>
                    <option>Driving School</option>
                    <option>Agriculture</option>
                    <option>Construction</option>
                    <option>Other</option>
                  </>
                )}
              </select>
            ) : field === "Estimated Volume" ? (
              <select className="form-select" required style={{ background: "var(--shell-gray-light)", border: "none", color: "var(--shell-black)", padding: "1rem 1.25rem", borderRadius: "var(--radius-sm)" }}>
                <option value="">{tc?.select ?? "Select..."}</option>
                <option>Under 1 ton/month</option>
                <option>1–5 tons/month</option>
                <option>5–20 tons/month</option>
                <option>20+ tons/month</option>
                <option>Discussing</option>
              </select>
            ) : field === "Investment Range" ? (
              <select className="form-select" required style={{ background: "var(--shell-gray-light)", border: "none", color: "var(--shell-black)", padding: "1rem 1.25rem", borderRadius: "var(--radius-sm)" }}>
                <option value="">{tc?.select ?? "Select..."}</option>
                <option>$1,000 — $2,000</option>
                <option>$2,000 — $3,000</option>
                <option>$3,000 — $4,000</option>
                <option>$4,000 — $5,000</option>
                <option>$5,000+</option>
              </select>
            ) : field === "Timeline" ? (
              <select className="form-select" required style={{ background: "var(--shell-gray-light)", border: "none", color: "var(--shell-black)", padding: "1rem 1.25rem", borderRadius: "var(--radius-sm)" }}>
                <option value="">{tc?.select ?? "Select..."}</option>
                <option>Immediate (within 30 days)</option>
                <option>1–3 months</option>
                <option>3–6 months</option>
                <option>6+ months</option>
              </select>
            ) : (
              <input
                type={field === "Email" ? "email" : "text"}
                className="form-input"
                placeholder={field}
                required
                style={{ background: "var(--shell-gray-light)", border: "none", color: "var(--shell-black)", padding: "1rem 1.25rem", borderRadius: "var(--radius-sm)" }}
              />
            )}
          </div>
        ))}
        <button type="submit" className="btn btn--primary btn--large" style={{ marginTop: "1rem" }}>
          {tc?.submitInquiry ?? "Submit Inquiry"}
        </button>
      </form>
    </div>
  );

}
