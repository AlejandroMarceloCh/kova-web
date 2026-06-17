"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

// reservas como intervalos [día_entrada, día_salida] sobre un timeline de 14 días
// offset (%) y ancho (%)
const reservas = [
  { off: 0,   w: 36, gold: false },
  { off: 7,   w: 21, gold: false },
  { off: 21,  w: 50, gold: true  },
  { off: 43,  w: 28, gold: false },
  { off: 64,  w: 22, gold: false },
  { off: 50,  w: 36, gold: false },
];

const DOT = 3.5;

export default function AmelieViz() {
  return (
    <VizFrame label="RESERVAS" badge="AVAILABILITY" footL="30D" footR="LIVE">
      <div className="flex w-full flex-col justify-center gap-3">
        {reservas.map((r, i) => (
          <div
            key={i}
            style={{ position: "relative", height: DOT, width: "100%" }}
          >
            {/* línea de la reserva */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: `${r.w}%`, opacity: r.gold ? 0.9 : 0.55 }}
              viewport={{ once: true }}
              transition={{
                width: { duration: 0.65, delay: 0.1 + i * 0.09, ease: [0.22, 0.8, 0.2, 1] },
                opacity: { duration: 0.2, delay: 0.1 + i * 0.09 },
              }}
              style={{
                position: "absolute",
                left: `${r.off}%`,
                top: "50%",
                transform: "translateY(-50%)",
                height: 1.5,
                background: r.gold ? "var(--gold)" : "var(--terra)",
                borderRadius: 1,
              }}
            />
            {/* dot de entrada */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.12 + i * 0.09 }}
              style={{
                position: "absolute",
                left: `calc(${r.off}% - ${DOT / 2}px)`,
                top: "50%",
                transform: "translateY(-50%)",
                width: DOT,
                height: DOT,
                borderRadius: "50%",
                background: r.gold ? "var(--gold)" : "var(--terra)",
              }}
            />
            {/* dot de salida */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.09 }}
              style={{
                position: "absolute",
                left: `calc(${r.off + r.w}% - ${DOT / 2}px)`,
                top: "50%",
                transform: "translateY(-50%)",
                width: DOT,
                height: DOT,
                borderRadius: "50%",
                background: r.gold ? "var(--gold)" : "var(--terra)",
                opacity: 0.6,
              }}
            />
          </div>
        ))}
        {/* eje de tiempo */}
        <div className="flex justify-between">
          {["1", "7", "14", "21", "30"].map((d) => (
            <span key={d} className="font-mono" style={{ color: "var(--muted-2)", fontSize: 7.5 }}>
              {d}
            </span>
          ))}
        </div>
      </div>
    </VizFrame>
  );
}
