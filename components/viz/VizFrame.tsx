"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  label: string;        // header izquierda (mono)
  badge: string;        // header derecha (dorado)
  footL: string;        // footer izquierda
  footR: string;        // footer derecha (con dot EN VIVO)
  children: ReactNode;  // cuerpo gráfico
  ratio?: string;
};

export default function VizFrame({ label, badge, footL, footR, children, ratio = "16 / 10" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 0.8, 0.2, 1] }}
      className="stepped overflow-hidden"
      style={{ padding: "16px", aspectRatio: ratio, display: "flex", flexDirection: "column", gap: "12px" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span style={{ width: 6, height: 6, background: "var(--terra)", borderRadius: 1, display: "inline-block" }} />
          <span className="mono-meta" style={{ color: "var(--muted)", letterSpacing: ".14em", fontSize: 9.5 }}>
            {label}
          </span>
        </div>
        <span className="font-mono" style={{ color: "var(--gold)", fontSize: 10.5 }}>
          {badge}
        </span>
      </div>

      <div className="flex flex-1" style={{ minHeight: 0 }}>
        {children}
      </div>

      <div className="flex items-center justify-between" style={{ borderTop: "1px solid var(--border)", paddingTop: "9px" }}>
        <span className="mono-meta" style={{ color: "var(--muted-2)", fontSize: 9 }}>
          {footL}
        </span>
        <span className="flex items-center gap-1.5 mono-meta" style={{ color: "var(--muted-2)", fontSize: 9 }}>
          <span className="viz-live" style={{ width: 5, height: 5, background: "var(--terra)", borderRadius: "50%", display: "inline-block" }} />
          {footR}
        </span>
      </div>
    </motion.div>
  );
}
