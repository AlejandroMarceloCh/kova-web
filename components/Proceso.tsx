"use client";

import { motion } from "motion/react";
import SectionLabel from "./SectionLabel";

const steps = [
  { n: "01", t: "Primera conversación, sin costo", d: "Escuchamos el problema real. Si no es algo que podemos resolver, te lo decimos antes de perder tu tiempo." },
  { n: "02", t: "Entendemos antes de construir", d: "Hablamos con quien usa el sistema, no solo con quien lo paga. Eso cambia todo lo que viene después." },
  { n: "03", t: "Algo que ya puedes usar", d: "La primera entrega no es un prototipo ni un mockup. Es software real que tu equipo puede probar." },
  { n: "04", t: "El sistema crece con el negocio", d: "No entregamos y desaparecemos. Los mejores sistemas los construimos en ciclos cortos, con feedback real." },
];

export default function Proceso() {
  return (
    <section id="proceso" className="hairline">
      <div className="shell py-24 sm:py-32">
        <SectionLabel kicker="Cómo trabajamos" heading="Del problema real a la solución." />

        <div>
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 0.8, 0.2, 1] }}
              className="grid grid-cols-[auto_1fr] gap-6 py-8 sm:gap-12"
              style={{ borderTop: "1px solid var(--border)", borderBottom: i === steps.length - 1 ? "1px solid var(--border)" : "none" }}
            >
              <span className="font-mono text-[14px] font-bold" style={{ color: "var(--terra)" }}>{s.n}</span>
              <div className="grid gap-3 sm:grid-cols-[1fr_1.4fr] sm:gap-12">
                <h3 className="font-display tight text-[clamp(18px,2.2vw,24px)] text-ink">{s.t}</h3>
                <p className="text-[15px] leading-relaxed text-muted sm:max-w-md">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
