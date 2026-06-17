"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

const COLS = 13;
const ROWS = 7;
const PEAKS: [number, number][] = [[9, 1], [10, 3], [3, 4], [7, 5], [5, 1]];

function heat(c: number, r: number): number {
  let v = 0;
  for (const [pc, pr] of PEAKS) {
    const d2 = (c - pc) ** 2 + (r - pr) ** 2;
    v = Math.max(v, Math.exp(-d2 / 5));
  }
  return v;
}

function bubbleColor(v: number): string {
  if (v > 0.78) return "var(--gold)";
  if (v > 0.45) return "var(--terra)";
  return `rgba(210,85,42,${0.12 + v * 0.55})`;
}

export default function WasiViz() {
  return (
    <VizFrame label="PRICING" badge="SPATIAL" footL="LIMA" footR="LIVE">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          gap: "4px",
          width: "100%",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {Array.from({ length: COLS * ROWS }, (_, i) => {
          const c = i % COLS;
          const r = Math.floor(i / COLS);
          const v = heat(c, r);
          const size = 2.5 + v * 7;
          return (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.35 + v * 0.65 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.1 + (c + r) * 0.011,
                ease: [0.22, 0.8, 0.2, 1],
              }}
              style={{
                width: size,
                height: size,
                borderRadius: "50%",
                background: bubbleColor(v),
              }}
            />
          );
        })}
      </div>
    </VizFrame>
  );
}
