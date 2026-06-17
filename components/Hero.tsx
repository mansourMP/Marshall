import Link from "next/link";
import type { ReactNode } from "react";

type HeroProps = {
  headline: string;
  subheadline: string;
  imageUrl?: string;
  children?: ReactNode; // action buttons
};

export function Hero({ headline, subheadline, imageUrl, children }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__layout">
          <div className="hero__content">
            <h1 className="hero__headline">{headline}</h1>
            <p className="hero__subheadline">{subheadline}</p>
            {children && <div className="hero__actions">{children}</div>}
          </div>
          <div className="hero__image-wrapper">
            {imageUrl ? (
              <img src={imageUrl} alt="Marshal Hero" className="hero__image" />
            ) : (
              <img
                src="/brand/hero-chemistry.svg"
                alt=""
                style={{ width: "100%", height: "auto", maxWidth: 500 }}
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          background: #FFFFFF;
          padding-block: 8rem 6rem;
        }
        .hero__layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        .hero__content {
          max-width: none;
        }
        .hero__headline {
          margin-bottom: 1.5rem;
          line-height: 1.1;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }
        .hero__subheadline {
          margin-bottom: 3rem;
          font-size: 1.25rem;
          color: var(--shell-gray);
          line-height: 1.6;
        }
        .hero__actions {
          display: flex;
          gap: 1.25rem;
        }
        .hero__image-wrapper {
          position: relative;
        }
        .hero__image {
          width: 100%;
          height: auto;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 1024px) {
          .hero__layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero__actions {
            justify-content: center;
          }
          .hero__image-wrapper {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

