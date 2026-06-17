import { LANGS } from "@/lib/i18n/types";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        background: "var(--marshal-navy)",
        color: "var(--marshal-white)",
      }}
    >
      <div style={{ fontSize: "5rem", fontWeight: 800, color: "var(--marshal-amber)", lineHeight: 1, marginBottom: "1rem" }}>404</div>
      <h1 style={{ marginBottom: "0.75rem" }}>Page Not Found</h1>
      <p style={{ color: "var(--marshal-gray)", marginBottom: "2rem", maxWidth: 400 }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
        {LANGS.map((l) => (
          <a key={l.code} href={`/${l.code}/`} className="btn btn--outline">
            {l.nativeLabel}
          </a>
        ))}
      </div>
    </main>
  );
}
