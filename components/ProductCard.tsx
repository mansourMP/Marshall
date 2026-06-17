import Link from "next/link";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { getT } from "@/lib/i18n/translations";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    capacity: string;
    specs: { label: string; value: string }[];
    applications: string[];
    highlight?: boolean;
    highlightLabel?: string;
    specLabel?: string;
    appLabel?: string;
  };
  lang?: string;
};

export function ProductCard({ product, lang = "ru" }: ProductCardProps) {
  const currentLang = useLang();
  const tc = getT(currentLang, "common");
  return (
    <article
      className="card"
      style={product.highlight ? { borderColor: "var(--shell-red)", borderWidth: 2 } : undefined}
    >
      <div className="card__content" style={{ padding: "2rem" }}>
        {product.highlight && (
          <span
            style={{
              display: "inline-block",
              fontSize: "0.6875rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--shell-red)",
              marginBottom: "0.75rem",
            }}
          >
            {product.highlightLabel ?? tc?.featured ?? "Featured"}
          </span>
        )}

        <h3 style={{ marginBottom: "0.375rem", fontSize: "1.5rem" }}>{product.name}</h3>
        <p
          style={{
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "var(--shell-red)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "1rem",
          }}
        >
          {product.tagline}
        </p>
        <p
          style={{
            fontSize: "0.9375rem",
            color: "var(--shell-gray)",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
          }}
        >
          {product.description}
        </p>

        {/* Specs */}
        <div style={{ marginBottom: "1.25rem" }}>
          <div
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#94A3B8",
              marginBottom: "0.75rem",
            }}
          >
            {product.specLabel ?? "Specifications"}
          </div>
          <table style={{ width: "100%", fontSize: "0.8125rem" }}>
            <tbody>
              {product.specs.map((spec) => (
                <tr key={spec.label} style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "0.5rem 0", fontWeight: 600, width: "40%" }}>{spec.label}</td>
                  <td style={{ padding: "0.5rem 0", color: "#64748B" }}>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Applications */}
        <div style={{ marginBottom: "1.25rem" }}>
          <div
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#94A3B8",
              marginBottom: "0.5rem",
            }}
          >
            {product.appLabel ?? "Applications"}
          </div>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
            {product.applications.map((app) => (
              <li
                key={app}
                style={{
                  fontSize: "0.75rem",
                  padding: "0.25rem 0.625rem",
                  borderRadius: "999px",
                  background: "#F1F5F9",
                  fontWeight: 500,
                }}
              >
                {app}
              </li>
            ))}
          </ul>
        </div>

        {/* Capacity + Link */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #F1F5F9", paddingTop: "1rem" }}>
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              color: "var(--shell-red)",
            }}
          >
            {product.capacity}
          </span>
          <Link
            href={`/${lang}/products/${product.id}/`}
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--shell-black)",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            {tc?.details ?? "Details →"}
          </Link>
        </div>
      </div>
    </article>
  );
}
