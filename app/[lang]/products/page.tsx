import { LANGS, type Lang } from "@/lib/i18n/types";
import { getT } from "@/lib/i18n/translations";
import { ProductsClient } from "./ProductsClient";

export async function generateStaticParams() {
  return LANGS.map((l) => ({ lang: l.code }));
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const products = getT(lang, "products");
  return <ProductsClient lang={lang as Lang} products={products} />;
}
