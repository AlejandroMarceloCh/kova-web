"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

const COLS = 14;
const ROWS = 8;

const HOTSPOTS: [number, number][] = [[10, 2], [11, 3], [4, 5], [9, 5]];

function heat(c: number, r: number) {
  let v = 0.1;
  for (const [hc, hr] of HOTSPOTS) {
    const d2 = (c - hc) ** 2 + (r - hr) ** 2;
    v += 0.95 * Math.exp(-d2 / 6.5);
  }
  return Math.min(1, v);
}

function cellColor(v: number) {
  if (v > 0.72) return "#E0A93B";
  return `rgba(210,85,42,${(0.12 + v * 0.72).toFixed(3)})`;
}

export default function WasiViz() {
  return (
    <VizFrame label="PRICING" badge="SPATIAL" footL="" footR="LIVE">
      <div
        className="w-full"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          gap: "2.5px",
        }}
      >
        {Array.from({ length: COLS * ROWS }, (_, i) => {
          const c = i % COLS;
          const r = Math.floor(i / COLS);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 + (c + r) * 0.012, ease: "easeOut" }}
              style={{ background: cellColor(heat(c, r)), borderRadius: 1.5 }}
            />
          );
        })}
      </div>
    </VizFrame>
  );
}
