"use client";

import { motion } from "motion/react";
import SectionLabel from "./SectionLabel";
import Mockup from "./Mockup";

const projects = [
  {
    href: "/trabajos/wasi",
    tag: "PropTech · Machine Learning",
    title: "Wasi",
    desc: "Nadie sabe cuánto vale realmente un depa en Lima. Wasi predice el precio por zona — y explica el porqué.",
    metric: "Venta + alquiler",
    mockupSrc: "/mockups/wasi-card.webp",
    mockupAlt: "UI de Wasi — mapa de Lima con precios por zona",
  },
  {
    href: "/trabajos/inmoba",
    tag: "PropTech · Startup Perú 11G",
    title: "Inmoba",
    desc: "Plataforma de decisiones inmobiliarias con datos. CTO desde la fundación, fondo CONCYTEC.",
    metric: "Startup Perú 11G",
    mockupSrc: "/mockups/inmoba-card.webp",
    mockupAlt: "Dashboard de Inmoba — análisis de mercado inmobiliario",
  },
  {
    href: "/trabajos/erp",
    tag: "ERP · Industria",
    title: "ERP & Costos",
    desc: "Gestión centralizada para una industria en Lima. De hojas de cálculo a tiempo real.",
    metric: "0 planillas",
    mockupSrc: "/mockups/erp-card.webp",
    mockupAlt: "Panel del ERP — gestión de costos y producción en tiempo real",
  },
];

export default function Trabajos() {
  return (
    <section id="trabajos" className="hairline">
      <div className="shell py-24 sm:py-32">
        <SectionLabel kicker="Trabajos" heading="Lo que hemos construido." />

        <div>
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 0.8, 0.2, 1] }}
              className="group grid grid-cols-[1fr_auto] items-center gap-6 py-8 no-tap sm:gap-12"
              style={{
                borderTop: "1px solid var(--border)",
                borderBottom: i === projects.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div className="grid gap-2 sm:grid-cols-[1fr_1.3fr] sm:items-center sm:gap-12">
                <div>
                  <div className="mono-meta mb-2">{p.tag}</div>
                  <h3 className="font-display tight inline-flex items-center gap-3 text-[clamp(22px,2.8vw,30px)] text-ink transition-colors group-hover:text-[var(--terra)]">
                    {p.title}
                    <svg
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      style={{ color: "var(--terra)" }}
                      width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </h3>
                </div>
                <p className="text-[15px] leading-relaxed text-muted sm:max-w-md">{p.desc}</p>
              </div>

              <div className="flex flex-col items-end gap-3">
                <div className="hidden w-[180px] sm:block">
                  <Mockup src={p.mockupSrc} alt={p.mockupAlt} ratio="16 / 10" />
                </div>
                <span className="font-mono whitespace-nowrap text-[13px]" style={{ color: "var(--gold)" }}>
                  {p.metric}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
