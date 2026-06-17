"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

const RINGS = [
  { r: 37, score: 0.92, color: "var(--gold)" },
  { r: 27, score: 0.78, color: "var(--terra)" },
  { r: 18, score: 0.85, color: "var(--terra)" },
  { r: 10, score: 0.61, color: "var(--terra)" },
];
const STROKE = 4.5;
const CX = 50;
const CY = 50;

// 270° arc from 135° to 45° clockwise
function arcPath(r: number): string {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const x1 = (CX + r * Math.cos(toRad(135))).toFixed(2);
  const y1 = (CY + r * Math.sin(toRad(135))).toFixed(2);
  const x2 = (CX + r * Math.cos(toRad(45))).toFixed(2);
  const y2 = (CY + r * Math.sin(toRad(45))).toFixed(2);
  return `M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`;
}

export default function InmobaViz() {
  return (
    <VizFrame label="MATCH" badge="ML MATCH" footL="4 DIMS" footR="LIVE">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
        <svg
          viewBox="0 0 100 100"
          style={{ width: "72%", maxWidth: 150, overflow: "visible" }}
          aria-hidden="true"
        >
          {RINGS.map(({ r, score, color }, i) => {
            const d = arcPath(r);
            return (
              <g key={r}>
                <path
                  d={d}
                  fill="none"
                  stroke="rgba(242,233,216,0.07)"
                  strokeWidth={STROKE}
                  strokeLinecap="round"
                />
                <motion.path
                  d={d}
                  fill="none"
                  stroke={color}
                  strokeWidth={STROKE}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: score, opacity: 0.55 + score * 0.45 }}
                  viewport={{ once: true }}
                  transition={{
                    pathLength: { duration: 1.1, delay: 0.15 + i * 0.14, ease: [0.22, 0.8, 0.2, 1] },
                    opacity: { duration: 0.35, delay: 0.15 + i * 0.14 },
                  }}
                />
              </g>
            );
          })}
        </svg>
      </div>
    </VizFrame>
  );
}
