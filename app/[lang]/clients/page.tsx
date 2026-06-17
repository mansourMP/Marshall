import { LANGS, type Lang } from "@/lib/i18n/types";
import { getT } from "@/lib/i18n/translations";
import { ClientsClient } from "./ClientsClient";

export async function generateStaticParams() {
  return LANGS.map((l) => ({ lang: l.code }));
}

export default async function ClientsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const clients = getT(lang, "clients");
  return <ClientsClient lang={lang as Lang} clients={clients} />;
}
