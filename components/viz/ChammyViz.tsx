"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

// demanda por día (según pronóstico de nieve) — determinista
const demanda = [0.4, 0.55, 0.45, 0.7, 0.95, 1.0, 0.8];
const dias = ["L", "M", "M", "J", "V", "S", "D"];
// turnos asignados: 4 roles x 7 días (1 = cubierto)
const roster = [
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 1],
];

export default function ChammyViz() {
  return (
    <VizFrame label="CHAMMY" badge="AUTO" footL="" footR="LIVE">
      <div className="flex w-full flex-col justify-center gap-2.5">
        {/* curva de demanda */}
        <div className="flex items-end gap-1.5" style={{ height: 34 }}>
          {demanda.map((d, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${d * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.05, ease: [0.22, 0.8, 0.2, 1] }}
              style={{
                flex: 1,
                borderRadius: 2,
                background: d > 0.85 ? "var(--gold)" : "var(--terra)",
                opacity: d > 0.85 ? 1 : 0.5 + d * 0.4,
              }}
            />
          ))}
        </div>
        {/* grilla de turnos */}
        <div className="flex flex-col gap-1">
          {roster.map((fila, r) => (
            <div key={r} className="flex gap-1.5">
              {fila.map((cubierto, c) => (
                <div
                  key={c}
                  style={{
                    flex: 1,
                    height: 7,
                    borderRadius: 1.5,
                    background: cubierto ? "var(--terra)" : "rgba(242,233,216,0.06)",
                    opacity: cubierto ? 0.55 + demanda[c] * 0.45 : 1,
                  }}
                />
              ))}
            </div>
          ))}
          {/* etiquetas de día */}
          <div className="flex gap-1.5">
            {dias.map((d, i) => (
              <span key={i} className="font-mono" style={{ flex: 1, textAlign: "center", color: "var(--muted-2)", fontSize: 8 }}>
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </VizFrame>
  );
}
