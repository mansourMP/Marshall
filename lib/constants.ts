import type { NavLink, SiteMeta } from "./types";

// ─── Site ───────────────────────────────────────────────────
export const SITE: SiteMeta = {
  title: "Marshal — Premium Lubricants, Central Asian Production",
  description:
    "Marshal manufactures high-quality engine oils, antifreeze, brake fluid, and grease in Surkhandarya, Uzbekistan. 70+ tons/month capacity. 15+ enterprise clients. Since 2022.",
  url: "https://marshal-uzb.com",
};

// ─── Navigation ─────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "/products/" },
  { label: "Production", href: "/production/" },
  { label: "Clients", href: "/clients/" },
  { label: "About", href: "/about/" },
  { label: "Trade", href: "/trade/" },
  { label: "Contact", href: "/contact/" },
];

// ─── Brand ──────────────────────────────────────────────────
export const BRAND = {
  name: "Marshal",
  tagline: "Premium Lubricants, Central Asian Production",
  location: "Surkhandarya, Sariasia, Uzbekistan",
  founded: 2022,
  email: "mansurao886@gmail.com",
  phone: "+998 90 519 0007",
};

// ─── Colors (referenced in CSS variables) ───────────────────
export const COLORS = {
  navy: "#0F172A",
  charcoal: "#1E293B",
  amber: "#F59E0B",
  gold: "#D97706",
  white: "#F8FAFC",
  gray: "#94A3B8",
  light: "#F1F5F9",
  darkText: "#0F172A",
} as const;
