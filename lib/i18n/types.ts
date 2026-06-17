export type Lang = "en" | "ru" | "uz";

export const LANGS: { code: Lang; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "ru", label: "Russian", nativeLabel: "Русский" },
  { code: "uz", label: "Uzbek", nativeLabel: "O'zbek" },
];

export const DEFAULT_LANG: Lang = "ru";
