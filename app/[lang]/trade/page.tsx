import { LANGS, type Lang } from "@/lib/i18n/types";
import { getT } from "@/lib/i18n/translations";
import { TradeClient } from "./TradeClient";

export async function generateStaticParams() {
  return LANGS.map((l) => ({ lang: l.code }));
}

export default async function TradePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const trade = getT(lang, "trade");
  return <TradeClient lang={lang as Lang} trade={trade} />;
}
