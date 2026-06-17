"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

const bars = [
  { w: "72%", gold: false },
  { w: "48%", gold: false },
  { w: "31%", gold: false },
  { w: "19%", gold: true },
  { w: "11%", gold: false },
];

export default function ErpViz() {
  return (
    <VizFrame label="ERP" badge="REAL-TIME" footL="" footR="SYNC">
      <div className="flex w-full flex-col justify-center gap-3">
        {bars.map((b, i) => (
          <div key={i} style={{ height: 6, background: "rgba(242,233,216,0.06)", borderRadius: 3 }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: b.w }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.09, ease: [0.22, 0.8, 0.2, 1] }}
              style={{
                height: "100%", borderRadius: 3,
                background: b.gold ? "var(--gold)" : "var(--terra)",
                opacity: b.gold ? 1 : 0.55 + i * 0.05,
              }}
            />
          </div>
        ))}
      </div>
    </VizFrame>
  );
}
