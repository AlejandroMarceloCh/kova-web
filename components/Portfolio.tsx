"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { motion } from "motion/react";
import SectionLabel from "./SectionLabel";
import WasiViz from "./viz/WasiViz";
import InmobaViz from "./viz/InmobaViz";
import ErpViz from "./viz/ErpViz";
import ChammyViz from "./viz/ChammyViz";
import GeoAssayViz from "./viz/GeoAssayViz";
import AmelieViz from "./viz/AmelieViz";

const CATS = ["Todo", "ML & Datos", "Optimización", "Plataformas", "ERP & Ops"] as const;
type Cat = (typeof CATS)[number];

const projects: {
  cat: Cat;
  title: string;
  desc: string;
  href?: string;
  Viz: ComponentType;
}[] = [
  {
    cat: "ML & Datos",
    title: "Wasi Price Engine",
    desc: "Los portales muestran precios de publicación, no de mercado. Wasi predice el precio real por zona — y explica por qué.",
    href: "/trabajos/wasi",
    Viz: WasiViz,
  },
  {
    cat: "Plataformas",
    title: "Inmoba",
    desc: "Invertir en ladrillo en Perú era decidir a ciegas. Inmoba convierte datos de mercado en decisiones concretas.",
    href: "/trabajos/inmoba",
    Viz: InmobaViz,
  },
  {
    cat: "ERP & Ops",
    title: "ERP de Costos Industriales",
    desc: "El cierre de mes tomaba días en Excel. Ahora la gerencia ve costos por producto en tiempo real y simula escenarios al instante.",
    href: "/trabajos/erp",
    Viz: ErpViz,
  },
  {
    cat: "Optimización",
    title: "Chammy Workforce Optimizer",
    desc: "El resort no puede saber cuántos instructores necesita el sábado — hasta que nieva. El sistema lee el pronóstico y arma el roster solo.",
    Viz: ChammyViz,
  },
  {
    cat: "Optimización",
    title: "GeoAssay Lab Scheduler",
    desc: "Asignar turnos en un laboratorio de geoanálisis es un problema de restricciones. Lo resolvimos con un solver que supera la planificación manual.",
    Viz: GeoAssayViz,
  },
  {
    cat: "Plataformas",
    title: "Amelie",
    desc: "Un hospedaje en Quives que perdía reservas por no tener sistema propio. Ahora tiene calendario, disponibilidad en vivo y reserva directa.",
    Viz: AmelieViz,
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Cat>("Todo");
  const filtered = active === "Todo" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="capacidades" className="hairline">
      <div className="shell py-24 sm:py-32">
        <SectionLabel kicker="Capacidades" heading="Lo que sabemos construir." />

        {/* filtros */}
        <div className="mb-12 flex flex-wrap gap-2">
          {CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="no-tap"
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "7px 16px",
                border: `1px solid ${active === cat ? "var(--terra)" : "var(--border)"}`,
                color: active === cat ? "var(--terra)" : "var(--muted-2)",
                background: active === cat ? "rgba(210,85,42,.08)" : "transparent",
                cursor: "pointer",
                transition: "all .2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* grid — key en active hace fade al cambiar categoría */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 0.8, 0.2, 1] }}
          className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p) => {
            const Card = (
              <>
                <p.Viz />
                <div className="mt-5">
                  <span className="mono-meta" style={{ color: "var(--terra)", opacity: 0.85 }}>
                    {p.cat}
                  </span>
                  <h3 className="font-display tight mt-2 text-[clamp(17px,2vw,21px)] text-ink">
                    {p.href && (
                      <svg
                        className="mr-1.5 inline opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-px"
                        style={{ color: "var(--terra)" }}
                        width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    )}
                    <span className={p.href ? "transition-colors group-hover:text-[var(--terra)]" : ""}>
                      {p.title}
                    </span>
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--muted)" }}>
                    {p.desc}
                  </p>
                </div>
              </>
            );

            return p.href ? (
              <a key={p.title} href={p.href} className="group no-tap">
                {Card}
              </a>
            ) : (
              <div key={p.title} className="group">
                {Card}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
