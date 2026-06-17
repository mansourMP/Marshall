import { LANGS, type Lang } from "@/lib/i18n/types";
import { getT } from "@/lib/i18n/translations";
import { AboutClient } from "./AboutClient";

export async function generateStaticParams() {
  return LANGS.map((l) => ({ lang: l.code }));
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const about = getT(lang, "about");
  const team = getT(lang, "team");
  return <AboutClient lang={lang as Lang} about={about} team={team} />;
}
