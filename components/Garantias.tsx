"use client";

import { motion } from "motion/react";
import SectionLabel from "./SectionLabel";

const garantias = [
  {
    t: "El código es tuyo",
    d: "Todo lo que construimos — código, modelos, datos — es tuyo desde el primer commit. Si mañana trabajas con otro equipo, tienes todo listo para entregarles.",
  },
  {
    t: "Sin dependencia de nosotros",
    d: "Construimos para que puedas crecer sin nosotros. Si en algún momento decides cambiar de equipo, te dejamos la transición documentada y ordenada.",
  },
  {
    t: "Confidencialidad real",
    d: "Lo que nos cuentas se queda entre nosotros. Firmamos NDA antes de cualquier conversación sensible — sin que tengas que pedirlo.",
  },
];

export default function Garantias() {
  return (
    <section className="hairline">
      <div className="shell py-24 sm:py-32">
        <SectionLabel kicker="Garantías" heading="Tres compromisos por escrito." />

        <div>
          {garantias.map((g, i) => (
            <motion.div
              key={g.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid gap-2 py-8 sm:grid-cols-[1fr_1.4fr] sm:gap-12"
              style={{ borderTop: "1px solid var(--border)", borderBottom: i === garantias.length - 1 ? "1px solid var(--border)" : "none" }}
            >
              <h3 className="font-display tight text-[clamp(19px,2.4vw,26px)] text-ink">{g.t}</h3>
              <p className="text-[15px] leading-relaxed text-muted sm:max-w-lg">{g.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
