import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { LangSync } from "@/components/LangSync";
import { LANGS, type Lang } from "@/lib/i18n/types";
import { getT } from "@/lib/i18n/translations";

type Props = { children: ReactNode; params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const site = getT(lang, "site");
  return {
    title: {
      default: site?.title ?? "Marshal",
      template: `%s | Marshal`,
    },
    description: site?.description ?? "",
    metadataBase: new URL("https://marshal-uzb.com"),
    openGraph: {
      title: site?.title ?? "Marshal",
      description: site?.description ?? "",
      type: "website",
      locale: lang === "ru" ? "ru_UZ" : lang === "uz" ? "uz_UZ" : "en_UZ",
      siteName: "Marshal",
    },
    robots: { index: true, follow: true },
  };
}

export async function generateStaticParams() {
  return LANGS.map((l) => ({ lang: l.code }));
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  return (
    <LanguageProvider lang={lang as Lang}>
      <LangSync lang={lang as Lang} />
      <Navbar />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
