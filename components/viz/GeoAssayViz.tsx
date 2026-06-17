"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

// tareas del schedule: offset (inicio %) y width (duración %) en el timeline
const tareas = [
  { off: 0, w: 32, gold: false },
  { off: 8, w: 24, gold: false },
  { off: 28, w: 38, gold: true },
  { off: 18, w: 20, gold: false },
  { off: 44, w: 30, gold: false },
  { off: 60, w: 40, gold: true },
];

export default function GeoAssayViz() {
  return (
    <VizFrame label="SCHEDULE" badge="OPTIMAL" footL="" footR="SOLVER">
      <div className="flex w-full flex-col justify-center gap-1.5">
        {tareas.map((t, i) => (
          <div key={i} className="flex items-center" style={{ height: 9 }}>
            <div style={{ position: "relative", flex: 1, height: "100%" }}>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: `${t.w}%`, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: [0.22, 0.8, 0.2, 1] }}
                style={{
                  position: "absolute",
                  left: `${t.off}%`,
                  height: "100%",
                  borderRadius: 2,
                  background: t.gold ? "var(--gold)" : "var(--terra)",
                  opacity: t.gold ? 1 : 0.78,
                }}
              />
            </div>
          </div>
        ))}
        {/* eje de tiempo */}
        <div className="mt-1 flex justify-between">
          {["t0", "t1", "t2", "t3"].map((t) => (
            <span key={t} className="font-mono" style={{ color: "var(--muted-2)", fontSize: 8 }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </VizFrame>
  );
}
