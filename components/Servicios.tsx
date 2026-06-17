"use client";

import { motion } from "motion/react";
import SectionLabel from "./SectionLabel";

const services = [
  { t: "Software a medida", d: "Construimos sistemas para tu proceso específico. Sin plantillas genéricas ni funciones que nadie va a usar." },
  { t: "Machine Learning aplicado", d: "Modelos que predicen, clasifican y recomiendan — integrados en tu operación, no como experimento." },
  { t: "Analítica que se usa", d: "Dashboards y reportes que tu equipo abre todos los días. No los que quedan bonitos en la demo y nadie más toca." },
  { t: "Automatización de procesos", d: "Lo que hoy hace alguien manualmente, lo hacemos confiable, trazable y sin errores de turno." },
];

export default function Servicios() {
  return (
    <section id="servicios" className="hairline">
      <div className="shell py-24 sm:py-32">
        <SectionLabel kicker="Servicios" heading="Lo que construimos." />

        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid gap-2 py-7 sm:grid-cols-[1fr_1.4fr] sm:gap-12"
              style={{ borderTop: "1px solid var(--border)", borderBottom: i === services.length - 1 ? "1px solid var(--border)" : "none" }}
            >
              <h3 className="font-display tight text-[clamp(19px,2.4vw,26px)] text-ink">{s.t}</h3>
              <p className="text-[15px] leading-relaxed text-muted sm:max-w-lg">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
