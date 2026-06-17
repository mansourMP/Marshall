import { LANGS, type Lang } from "@/lib/i18n/types";
import { getT } from "@/lib/i18n/translations";
import { HomeClient } from "./HomeClient";

export async function generateStaticParams() {
  return LANGS.map((l) => ({ lang: l.code }));
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const home = getT(lang, "home");
  return <HomeClient lang={lang as Lang} home={home} />;
}
