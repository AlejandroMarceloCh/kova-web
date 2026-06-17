"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

const blocks = [
  { col: "1 / 3", row: "1 / 3", bg: "var(--terra)", opacity: 0.65 },
  { col: "3",     row: "1",     bg: "var(--terra)", opacity: 0.4  },
  { col: "3",     row: "2",     bg: "var(--gold)",  opacity: 0.9  },
  { col: "1",     row: "3",     bg: "var(--terra)", opacity: 0.25 },
  { col: "2",     row: "3",     bg: "var(--terra)", opacity: 0.2  },
  { col: "3",     row: "3",     bg: "var(--terra)", opacity: 0.15 },
];

export default function ErpViz() {
  return (
    <VizFrame label="ERP" badge="REAL-TIME" footL="SKU LEVEL" footR="SYNC">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr 2fr",
          gridTemplateRows: "2fr 2fr 1fr",
          gap: "3px",
          width: "100%",
          height: "100%",
        }}
      >
        {blocks.map((b, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: b.opacity }}
            viewport={{ once: true }}
            transition={{
              scaleY: { duration: 0.55, delay: 0.1 + i * 0.07, ease: [0.22, 0.8, 0.2, 1] },
              opacity: { duration: 0.3, delay: 0.1 + i * 0.07 },
            }}
            style={{
              gridColumn: b.col,
              gridRow: b.row,
              background: b.bg,
              borderRadius: 2,
              transformOrigin: "bottom",
            }}
          />
        ))}
      </div>
    </VizFrame>
  );
}
