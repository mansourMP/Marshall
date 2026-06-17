import { LANGS, type Lang } from "@/lib/i18n/types";
import { getT } from "@/lib/i18n/translations";
import { ContactClient } from "./ContactClient";

export async function generateStaticParams() {
  return LANGS.map((l) => ({ lang: l.code }));
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const contact = getT(lang, "contact");
  const brand = getT(lang, "brand");
  return <ContactClient lang={lang as Lang} contact={contact} brand={brand} />;
}
