import { LANGS, type Lang } from "@/lib/i18n/types";
import { getT } from "@/lib/i18n/translations";
import { ProductionClient } from "./ProductionClient";

export async function generateStaticParams() {
  return LANGS.map((l) => ({ lang: l.code }));
}

export default async function ProductionPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const production = getT(lang, "production");
  const team = getT(lang, "team");
  return <ProductionClient lang={lang as Lang} production={production} team={team} />;
}
