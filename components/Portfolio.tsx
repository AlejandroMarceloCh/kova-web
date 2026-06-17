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
        desc: "Pipeline completo: scraping de avisos reales, dos modelos por mercado, API con explicabilidad por zona. El precio que predice no es un promedio — es específico y trazable.",
        Viz: WasiViz,
      },
    ],
  },
  {
    tipo: "Plataformas a medida",
    items: [
      {
        title: "Plataforma de inversión inmobiliaria",
        desc: "Motor de recomendación que cruza perfil del inversionista con señales de mercado. Stack completo: datos, modelo y producto. Ganadora del fondo de innovación del CONCYTEC.",
        Viz: InmobaViz,
      },
      {
        title: "Sistema de reservas para hospedaje",
        desc: "Calendario de disponibilidad, confirmación automática y reserva directa. Infraestructura digital construida desde cero para un negocio que operaba solo por teléfono.",
        Viz: AmelieViz,
      },
    ],
  },
  {
    tipo: "ERP & Operaciones",
    items: [
      {
        title: "ERP de costos industriales",
        desc: "Visibilidad de costo por SKU, trazabilidad de insumos y simulador de escenarios. Cierre mensual automatizado. La gerencia ve el margen real de cada producto — no el estimado.",
        Viz: ErpViz,
      },
    ],
  },
  {
    tipo: "Optimización",
    items: [
      {
        title: "Asignación de personal por pronóstico",
        desc: "El sistema lee la demanda proyectada y genera el roster de turnos respetando restricciones de roles y disponibilidad. Cero iteraciones manuales.",
        Viz: ChammyViz,
      },
      {
        title: "Scheduler con solver de restricciones",
        desc: "Problema de scheduling con restricciones duras (capacidad, equipo, secuencia). Implementado con búsqueda tabú. Mejora el plan manual en tiempo de cómputo de segundos.",
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
