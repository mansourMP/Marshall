"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Lang } from "./types";
import { DEFAULT_LANG } from "./types";

const LangContext = createContext<Lang>(DEFAULT_LANG);

export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang(): Lang {
  return useContext(LangContext);
}
