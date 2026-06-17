import Link from "next/link";

type CTABannerProps = {
  title: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "primary" | "outline";
};

export function CTABanner({
  title,
  body,
  ctaLabel,
  ctaHref,
  variant = "primary",
}: CTABannerProps) {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2 className="cta-banner__title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem" }}>{title}</h2>
        {body && <p className="cta-banner__body" style={{ fontSize: "1.25rem", marginBottom: "3rem", color: "var(--shell-gray)" }}>{body}</p>}
        <Link
          href={ctaHref}
          className={`btn btn--${variant} btn--large`}
        >
          {ctaLabel}
        </Link>
      </div>
      <style jsx>{`
        .cta-banner {
          text-align: center;
          padding-block: 8rem;
          background: var(--shell-gray-light);
          color: var(--shell-black);
        }
      `}</style>
    </section>
  );
}

