"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import Reveal from "./Reveal";
import Chakana from "./Chakana";
import WasiViz from "./viz/WasiViz";
import InmobaViz from "./viz/InmobaViz";
import ErpViz from "./viz/ErpViz";
import type { Caso } from "@/lib/casos";

const VIZ: Record<string, ComponentType> = {
  wasi: WasiViz,
  inmoba: InmobaViz,
  erp: ErpViz,
};

function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <Chakana size={13} color="var(--terra)" />
      <span className="mono-label">{children}</span>
    </div>
  );
}

export default function CasoEstudio({ caso }: { caso: Caso }) {
  const Viz = VIZ[caso.slug];

  return (
    <>
      {/* header de caso */}
      <header className="fixed inset-x-0 top-0 z-50" style={{ background: "rgba(20,16,14,0.78)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}>
        <nav className="shell flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 no-tap">
            <Chakana size={18} color="var(--terra)" />
            <span className="font-display tighter text-[18px]">
              Ko<span style={{ color: "var(--terra)" }}>va</span>
            </span>
          </Link>
          <Link href="/#trabajos" className="inline-flex items-center gap-2 mono-meta transition-colors hover:text-[var(--ink)] no-tap">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            VOLVER
          </Link>
        </nav>
      </header>

      <main className="relative overflow-hidden pb-28 pt-32">
        {/* campo andino sutil — único elemento de fondo */}
        <div className="andean-field pointer-events-none absolute inset-0" style={{ opacity: 0.035 }} />

        <div className="shell relative max-w-4xl">

          <Reveal delay={0.05}>
            <h1 className="font-display tighter text-ink" style={{ fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.02 }}>
              {caso.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-muted" style={{ fontSize: "clamp(16px, 1.7vw, 21px)", lineHeight: 1.55 }}>
              {caso.lead}
            </p>
          </Reveal>

          {/* stats — tira tipográfica con hairlines, jerarquía por escala */}
          <Reveal delay={0.15}>
            <div
              className="mt-14 grid grid-cols-2 sm:grid-cols-4"
              style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
            >
              {caso.stats.map((s, i) => (
                <div
                  key={s.l}
                  className="py-7 sm:py-8"
                  style={{
                    borderRight: i < caso.stats.length - 1 ? "1px solid var(--border)" : "none",
                    paddingInline: "clamp(0px, 2vw, 22px)",
                  }}
                >
                  <div
                    className="font-display tighter"
                    style={{ fontSize: "clamp(22px, 2.7vw, 34px)", lineHeight: 1.08, color: i % 2 ? "var(--gold)" : "var(--terra)" }}
                  >
                    {s.v}
                  </div>
                  <div className="mono-meta mt-3 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* el sistema — la viz nativa del proyecto como evidencia */}
          {Viz && (
            <Reveal delay={0.2}>
              <div className="mt-20">
                <BlockLabel>El sistema</BlockLabel>
                <div className="mt-7 grid items-center gap-8 sm:grid-cols-[1.1fr_1fr]">
                  <div className="mx-auto w-full" style={{ maxWidth: 480 }}>
                    <Viz />
                  </div>
                  <p className="max-w-sm text-[15px] leading-relaxed text-muted">
                    {caso.systemNote}
                  </p>
                </div>
              </div>
            </Reveal>
          )}

          {/* bloques narrativos */}
          <div className="mt-20 space-y-16">
            {caso.blocks.map((b) => (
              <Reveal key={b.heading}>
                <BlockLabel>{b.label}</BlockLabel>
                <h2 className="font-display tight mt-4 text-ink" style={{ fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.1 }}>
                  {b.heading}
                </h2>
                <div className="mt-5 space-y-3">
                  {b.paragraphs.map((p, i) => (
                    <p key={i} className="max-w-2xl text-[15px] leading-relaxed text-muted">{p}</p>
                  ))}
                </div>
                {b.cards && (
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {b.cards.map((c) => (
                      <div key={c.title} className="stepped p-6">
                        <h3 className="font-display tight mb-2 text-[16px] text-ink">{c.title}</h3>
                        <p className="text-[14px] leading-relaxed text-muted">{c.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}

            {/* stack — línea mono corrida, sin pills */}
            <Reveal>
              <BlockLabel>Stack</BlockLabel>
              <p
                className="font-mono mt-5 text-[13px] leading-relaxed"
                style={{ color: "var(--muted)", letterSpacing: ".04em" }}
              >
                {caso.stack.join("   ·   ")}
              </p>
            </Reveal>
          </div>

          {/* CTA */}
          <Reveal>
            <div className="stepped mt-24 p-10 text-center">
              <Chakana size={22} color="var(--gold)" className="mx-auto mb-5 opacity-60" />
              <h3 className="font-display tight text-[clamp(20px,2.5vw,26px)] text-ink">{caso.cta.heading}</h3>
              <p className="mt-2 text-[15px] text-muted">{caso.cta.text}</p>
              <Link href="/#contacto" className="btn-terra mt-7 no-tap">
                Hablemos
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <footer>
        <div className="shell"><div className="frieze frieze-gold" style={{ opacity: 0.4 }} /></div>
        <div className="shell flex flex-wrap items-center justify-between gap-5 py-10">
          <Link href="/" className="flex items-center gap-2.5 no-tap">
            <Chakana size={16} color="var(--terra)" />
            <span className="font-display tighter text-[16px]">Ko<span style={{ color: "var(--terra)" }}>va</span></span>
          </Link>
          <p className="mono-meta">© 2026 KOVA · LIMA — PERÚ</p>
        </div>
      </footer>
    </>
  );
}
