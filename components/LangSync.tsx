"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/i18n/types";

/**
 * Sets document.documentElement.lang on the client side
 * to match the current language route. Avoids hydration
 * mismatch from nested <html lang> tags.
 */
export function LangSync({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
