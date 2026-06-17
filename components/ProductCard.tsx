import Link from "next/link";

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

// Product images — replace with real photos
const PRODUCT_IMAGES: Record<string, string> = {
  "premium-engine-oil": "",
  "standard-engine-oil": "",
  antifreeze: "",
  "brake-fluid": "",
  grease: "",
};

export function ProductCard({ product, lang = "ru" }: ProductCardProps) {

  return (
    <article className="card" style={{ overflow: "hidden" }}>
      <div className="card__image" style={{ position: "relative", height: "180px", background: "#F8FAFC", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {PRODUCT_IMAGES[product.id] ? (
          <img
            src={PRODUCT_IMAGES[product.id]}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ color: "#CBD5E1", fontSize: "4rem", fontWeight: 300 }}>—</div>
        )}
        {product.highlight && (
          <span
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              background: "var(--shell-yellow)",
              color: "var(--shell-black)",
              padding: "0.25rem 0.75rem",
              borderRadius: "999px",
              fontSize: "0.75rem",
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            {product.highlightLabel ?? "Featured"}
          </span>
        )}
      </div>
      <div className="card__content" style={{ padding: "1.5rem" }}>
        <h3 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>{product.name}</h3>
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

        <Link href={`/${lang}/products/${product.id}/`} className="card__link">
          Read more <span style={{ marginLeft: "0.25rem" }}>→</span>
        </Link>
      </div>
    </article>
  );
}

