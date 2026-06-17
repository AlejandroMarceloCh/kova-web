"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

// 4 recursos del lab, cada uno con 2-3 tareas
// off = offset %, w = duración % del timeline total
const recursos = [
  {
    label: "R1",
    tasks: [
      { off: 0,  w: 38, gold: false },
      { off: 42, w: 44, gold: true  },
    ],
  },
  {
    label: "R2",
    tasks: [
      { off: 6,  w: 26, gold: false },
      { off: 36, w: 20, gold: false },
      { off: 62, w: 24, gold: false },
    ],
  },
  {
    label: "R3",
    tasks: [
      { off: 0,  w: 52, gold: true  },
      { off: 58, w: 28, gold: false },
    ],
  },
  {
    label: "R4",
    tasks: [
      { off: 12, w: 34, gold: false },
      { off: 52, w: 30, gold: false },
    ],
  },
];

export default function GeoAssayViz() {
  return (
    <VizFrame label="SCHEDULE" badge="OPTIMAL" footL="10 INST" footR="SOLVER">
      <div className="flex w-full flex-col justify-center gap-2.5">
        {recursos.map((rec, ri) => (
          <div key={ri} className="flex items-center gap-2">
            <span
              className="font-mono"
              style={{ color: "var(--muted-2)", fontSize: 8, width: 12, flexShrink: 0 }}
            >
              {rec.label}
            </span>
            <div style={{ position: "relative", flex: 1, height: 9 }}>
              {/* track de fondo */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 2,
                  background: "rgba(242,233,216,0.04)",
                }}
              />
              {rec.tasks.map((t, ti) => (
                <motion.div
                  key={ti}
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: `${t.w}%`, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    width: { duration: 0.55, delay: 0.12 + ri * 0.1 + ti * 0.05, ease: [0.22, 0.8, 0.2, 1] },
                    opacity: { duration: 0.2, delay: 0.12 + ri * 0.1 + ti * 0.05 },
                  }}
                  style={{
                    position: "absolute",
                    left: `${t.off}%`,
                    height: "100%",
                    borderRadius: 2,
                    background: t.gold ? "var(--gold)" : "var(--terra)",
                    opacity: t.gold ? 0.95 : 0.7,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
        {/* eje de tiempo */}
        <div className="flex justify-between" style={{ paddingLeft: 14 }}>
          {["t₀", "t₁", "t₂", "t₃", "t₄"].map((t) => (
            <span key={t} className="font-mono" style={{ color: "var(--muted-2)", fontSize: 7.5 }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </VizFrame>
  );
}
