// ─── Product ────────────────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: string; // e.g. "20 tons/month"
  specs: { label: string; value: string }[];
  applications: string[];
  highlight?: boolean; // visually emphasize this product
}

// ─── Client Industry ────────────────────────────────────────
export interface ClientIndustry {
  id: string;
  name: string;
  description: string;
  clientCount: number;
  icon: string; // lucide icon name
}

// ─── Revenue Channel ───────────────────────────────────────
export interface RevenueChannel {
  id: string;
  name: string;
  description: string;
  percentage: number; // approximate share
}

// ─── Team Member ────────────────────────────────────────────
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
}

// ─── Stat ───────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
  suffix?: string; // "+", "T", "%", etc.
}

// ─── Nav Link ───────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ─── Site Metadata ──────────────────────────────────────────
export interface SiteMeta {
  title: string;
  description: string;
  url: string;
}
