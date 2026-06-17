"use client";

import type { ComponentType } from "react";
import { motion } from "motion/react";
import SectionLabel from "./SectionLabel";
import WasiViz from "./viz/WasiViz";
import InmobaViz from "./viz/InmobaViz";
import ErpViz from "./viz/ErpViz";
import ChammyViz from "./viz/ChammyViz";
import GeoAssayViz from "./viz/GeoAssayViz";
import AmelieViz from "./viz/AmelieViz";

type Proyecto = { title: string; desc: string; Viz: ComponentType };
type Grupo = { tipo: string; items: Proyecto[] };

const grupos: Grupo[] = [
  {
    tipo: "Machine Learning & Datos",
    items: [
      {
        title: "Motor de precios inmobiliarios",
        desc: "Los portales muestran precios de publicación, no de mercado. Construimos un modelo que predice el precio real por zona — y explica cada estimación. Del scraping al producto en producción.",
        Viz: WasiViz,
      },
    ],
  },
  {
    tipo: "Plataformas a medida",
    items: [
      {
        title: "Plataforma de inversión inmobiliaria",
        desc: "Invertir en ladrillo era decidir a ciegas. La plataforma convierte datos de mercado en decisiones concretas: recomendación, análisis y seguimiento en un solo producto.",
        Viz: InmobaViz,
      },
      {
        title: "Sistema de reservas para hospedaje",
        desc: "Un negocio que perdía reservas por no tener sistema propio. Ahora tiene calendario, disponibilidad en vivo y reserva directa — sin depender de intermediarios.",
        Viz: AmelieViz,
      },
    ],
  },
  {
    tipo: "ERP & Operaciones",
    items: [
      {
        title: "ERP de costos industriales",
        desc: "El cierre de mes tomaba días en Excel. Centralizamos costos, inventario y producción en dashboards que la gerencia consulta en tiempo real y simula al instante.",
        Viz: ErpViz,
      },
    ],
  },
  {
    tipo: "Optimización",
    items: [
      {
        title: "Optimizador de turnos por demanda",
        desc: "Dimensionar al personal según la demanda es un dolor de cabeza semanal. El sistema lee el pronóstico y arma el roster solo.",
        Viz: ChammyViz,
      },
      {
        title: "Scheduler con solver de restricciones",
        desc: "Asignar turnos y recursos bajo múltiples restricciones es un problema de optimización. Lo resolvimos con un solver que supera la planificación manual.",
        Viz: GeoAssayViz,
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="trabajos" className="hairline">
      <div className="shell py-24 sm:py-32">
        <SectionLabel kicker="Trabajos" heading="Lo que hemos construido." />

        <div className="space-y-16">
          {grupos.map((g, gi) => (
            <motion.div
              key={g.tipo}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.04, ease: [0.22, 0.8, 0.2, 1] }}
            >
              <div
                className="mb-8 flex items-center gap-4"
                style={{ borderTop: "1px solid var(--border)", paddingTop: "18px" }}
              >
                <span className="mono-label">{g.tipo}</span>
                <span className="mono-meta" style={{ color: "var(--muted-2)" }}>
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>

              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((p) => (
                  <div key={p.title}>
                    <p.Viz />
                    <h3 className="font-display tight mt-5 text-[clamp(17px,2vw,21px)] text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
