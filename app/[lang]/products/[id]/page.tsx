import { LANGS, type Lang } from "@/lib/i18n/types";
import { getT } from "@/lib/i18n/translations";
import { getProductDetail, PRODUCT_IDS } from "@/lib/product-details";
import { ProductDetailClient } from "./ProductDetailClient";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ lang: string; id: string }> };

export async function generateStaticParams() {
  const params: { lang: string; id: string }[] = [];
  for (const l of LANGS) {
    for (const pid of PRODUCT_IDS) {
      params.push({ lang: l.code, id: pid });
    }
  }
  return params;
}

export default async function ProductDetailPage({ params }: Props) {
  const { lang, id } = await params;
  const detail = getProductDetail(id, lang as Lang);
  if (!detail) notFound();

  // Find product name from translations
  const products = getT(lang, "products.items") as any[];
  const product = products?.find((p: any) => p.id === id);

  return (
    <ProductDetailClient
      lang={lang as Lang}
      productId={id}
      productName={product?.name ?? id}
      productTagline={product?.tagline ?? ""}
      productCapacity={product?.capacity ?? ""}
      detail={detail}
    />
  );
}
