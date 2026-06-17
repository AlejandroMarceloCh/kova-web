import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { casos, getCaso } from "@/lib/casos";
import CasoEstudio from "@/components/CasoEstudio";

export function generateStaticParams() {
  return casos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) return { title: "Caso de estudio — Kova" };
  return {
    title: `${caso.title} · Caso de estudio — Kova`,
    description: caso.lead,
  };
}

export default async function CasoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) notFound();
  return <CasoEstudio caso={caso} />;
}
