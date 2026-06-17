"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import Chakana from "./Chakana";
import type { Caso } from "@/lib/casos";

export default function CasoEstudio({ caso }: { caso: Caso }) {
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
        {/* glow + campo */}
        <div className="pointer-events-none absolute inset-0">
          <div className="andean-field absolute inset-0" style={{ opacity: 0.04 }} />
          <motion.div
            className="absolute rounded-full"
            style={{ top: "-12%", right: "-8%", width: 600, height: 600, background: "radial-gradient(circle, rgba(210,85,42,.16), transparent 62%)", filter: "blur(60px)" }}
            animate={{ x: [0, -24, 0], y: [0, 20, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="shell relative max-w-4xl">

          <Reveal delay={0.05}>
            <h1 className="font-display tighter text-ink" style={{ fontSize: "clamp(30px, 5vw, 56px)", lineHeight: 1.05 }}>
              {caso.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-muted" style={{ fontSize: "clamp(16px, 1.7vw, 20px)", lineHeight: 1.6 }}>
              {caso.lead}
            </p>
          </Reveal>

          {/* stats */}
          <Reveal delay={0.15}>
            <div className="stepped mt-12 grid grid-cols-2 sm:grid-cols-4"
              style={{ borderRadius: 0 }}>
              {caso.stats.map((s, i) => (
                <div key={s.l} className="p-6"
                  style={{ borderRight: i < caso.stats.length - 1 ? "1px solid var(--border)" : "none", borderBottom: "1px solid var(--border)" }}>
                  <div className="font-display tight text-[clamp(18px,2vw,24px)]" style={{ color: i % 2 ? "var(--gold)" : "var(--terra)" }}>{s.v}</div>
                  <div className="mono-meta mt-2 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* bloques */}
          <div className="mt-20 space-y-16">
            {caso.blocks.map((b) => (
              <Reveal key={b.heading}>
                <div className="flex items-center gap-3">
                  <Chakana size={14} color="var(--terra)" />
                  <span className="mono-label">{b.label}</span>
                </div>
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

            {/* stack */}
            <Reveal>
              <div className="flex items-center gap-3">
                <Chakana size={14} color="var(--terra)" />
                <span className="mono-label">Stack</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {caso.stack.map((t) => (
                  <span key={t} className="font-mono px-3 py-1.5 text-[13px]"
                    style={{ border: "1px solid var(--border)", background: "var(--surface)", color: "var(--muted)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* CTA */}
          <Reveal>
            <div className="stepped mt-20 p-10 text-center">
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
