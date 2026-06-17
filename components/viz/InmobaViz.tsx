"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

const scores = [0.96, 0.88, 0.71, 0.58, 0.43];

export default function InmobaViz() {
  return (
    <VizFrame label="MATCH" badge="ML MATCH" footL="" footR="LIVE">
      <div className="flex w-full flex-col justify-center gap-3">
        {scores.map((score, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: [0.22, 0.8, 0.2, 1] }}
            className="flex items-center gap-2.5"
          >
            <span style={{
              width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
              background: score > 0.8 ? "var(--gold)" : "var(--terra)",
              opacity: 0.65 + score * 0.35,
            }} />
            <div style={{ flex: 1, height: 5, background: "rgba(242,233,216,0.06)", borderRadius: 3 }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${score * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.08, ease: [0.22, 0.8, 0.2, 1] }}
                style={{
                  height: "100%", borderRadius: 3,
                  background: score > 0.8 ? "var(--gold)" : "var(--terra)",
                  opacity: 0.5 + score * 0.5,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </VizFrame>
  );
}
