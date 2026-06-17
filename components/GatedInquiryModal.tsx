"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { getT } from "@/lib/i18n/translations";

type GatedInquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function GatedInquiryModal({ isOpen, onClose }: GatedInquiryModalProps) {
  const lang = useLang();
  const tc = getT(lang, "common");
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{ position: "relative", padding: "3.5rem", borderRadius: "var(--radius-lg)", background: "#FFFFFF", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "var(--shell-black)",
            padding: "0.5rem",
            lineHeight: 1,
            background: "var(--shell-gray-light)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <h3 style={{ color: "var(--shell-black)", marginBottom: "1rem", fontSize: "2rem" }}>
              {tc?.received ?? "Request Received"}
            </h3>
            <p style={{ color: "var(--shell-gray)", fontSize: "1.125rem", lineHeight: 1.6 }}>
              {tc?.receivedBody ?? "We will respond within 24 hours with the next steps."}
            </p>
          </div>
        ) : (
          <>
            <div style={{ display: "inline-block", background: "rgba(221, 29, 33, 0.1)", color: "var(--shell-red)", padding: "0.375rem 1rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1.5rem" }}>
              {tc?.ndaProtected ?? "NDA Protected"}
            </div>
            <h2 className="modal__title" style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "var(--shell-black)", lineHeight: 1.1 }}>{tc?.directInquiry ?? "Direct Inquiry"}</h2>
            <p className="modal__body" style={{ color: "var(--shell-gray)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              Qualified inquiries receive our commercial curriculum and full specifications.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="form-group">
                <label className="form-label" style={{ color: "var(--shell-black)", fontWeight: 700, marginBottom: "0.5rem" }}>{tc?.fullName ?? "Full Name"}</label>
                <input className="form-input" placeholder="Your name" required style={{ background: "var(--shell-gray-light)", border: "none", color: "var(--shell-black)", padding: "1rem 1.25rem", borderRadius: "var(--radius-sm)" }} />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ color: "var(--shell-black)", fontWeight: 700, marginBottom: "0.5rem" }}>{tc?.professionalEmail ?? "Professional Email"}</label>
                <input className="form-input" type="email" placeholder="your@company.com" required style={{ background: "var(--shell-gray-light)", border: "none", color: "var(--shell-black)", padding: "1rem 1.25rem", borderRadius: "var(--radius-sm)" }} />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ color: "var(--shell-black)", fontWeight: 700, marginBottom: "0.5rem" }}>Organization</label>
                <input className="form-input" placeholder="Company Name" required style={{ background: "var(--shell-gray-light)", border: "none", color: "var(--shell-black)", padding: "1rem 1.25rem", borderRadius: "var(--radius-sm)" }} />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ color: "var(--shell-black)", fontWeight: 700, marginBottom: "0.5rem" }}>{tc?.investmentRange ?? "Investment Range (USD)"}</label>
                <select className="form-select" required style={{ background: "var(--shell-gray-light)", border: "none", color: "var(--shell-black)", padding: "1rem 1.25rem", borderRadius: "var(--radius-sm)" }}>
                  <option value="">{tc?.select ?? "Select..."}</option>
                  <option>$1,000 — $2,000</option>
                  <option>$2,000 — $3,000</option>
                  <option>$3,000 — $4,000</option>
                  <option>$4,000 — $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>
              <button type="submit" className="btn btn--primary btn--large" style={{ marginTop: "1rem", width: "100%" }}>
                {tc?.submitInquiry ?? "Submit Inquiry"}
              </button>
            </form>
          </>
        )}
      </div>

    </div>
  );
}
