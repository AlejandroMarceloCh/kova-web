"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

// 35 días (5 semanas). 0=libre, 1=reservado, 2=hoy/destacado — determinista
const dias = [
  0, 0, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 1, 1, 0,
  1, 1, 2, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 0, 1,
  0, 0, 1, 1, 1, 0, 0,
];

function cellBg(v: number) {
  if (v === 2) return "var(--gold)";
  if (v === 1) return "var(--terra)";
  return "rgba(242,233,216,0.06)";
}

export default function AmelieViz() {
  return (
    <VizFrame label="RESERVAS" badge="AVAILABILITY" footL="" footR="LIVE">
      <div
        className="w-full self-center"
        style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}
      >
        {dias.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: v === 0 ? 1 : 0.7 + (v === 2 ? 0.3 : 0.25), scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 + (i % 7) * 0.02 + Math.floor(i / 7) * 0.05, ease: "easeOut" }}
            style={{
              aspectRatio: "1",
              borderRadius: 2,
              background: cellBg(v),
            }}
          />
        ))}
      </div>
    </VizFrame>
  );
}
