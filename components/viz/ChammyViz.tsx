"use client";

import { motion } from "motion/react";
import VizFrame from "./VizFrame";

// demanda semanal: 7 días
const demand = [0.3, 0.5, 0.45, 0.72, 0.9, 1.0, 0.72];
const dias = ["L", "M", "M", "J", "V", "S", "D"];

// SVG viewport 100 × 46 para la curva
const W = 100;
const H = 46;

const pts = demand.map((d, i) => ({
  x: (i / (demand.length - 1)) * W,
  y: H * (1 - d),
}));

const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
const areaPath = `M 0 ${H} ${linePath.slice(1)} L ${W} ${H} Z`;

// 4 roles × 7 días
const roster = [
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 1],
];

export default function ChammyViz() {
  return (
    <VizFrame label="ROSTER" badge="AUTO" footL="7D" footR="LIVE">
      <div className="flex w-full flex-col gap-2">
        {/* curva de demanda en SVG */}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          style={{ width: "100%", height: 44, overflow: "visible" }}
          aria-hidden="true"
        >
          {/* área bajo la curva — fade-in estático */}
          <motion.path
            d={areaPath}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            fill="rgba(210,85,42,0.15)"
          />
          {/* línea de demanda animada */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="var(--terra)"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 0.8, 0.2, 1] }}
          />
          {/* puntos de dato */}
          {pts.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={demand[i] > 0.85 ? 2.2 : 1.5}
              fill={demand[i] > 0.85 ? "var(--gold)" : "var(--terra)"}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.1 }}
            />
          ))}
        </svg>

        {/* grilla de turnos */}
        <div className="flex flex-col gap-1">
          {roster.map((fila, r) => (
            <div key={r} className="flex gap-1">
              {fila.map((cubierto, c) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.9 + c * 0.04 + r * 0.02 }}
                  style={{
                    flex: 1,
                    height: 6,
                    borderRadius: 1.5,
                    background: cubierto ? "var(--terra)" : "rgba(242,233,216,0.06)",
                    opacity: cubierto ? 0.5 + demand[c] * 0.5 : 1,
                  }}
                />
              ))}
            </div>
          ))}
          <div className="flex gap-1">
            {dias.map((d, i) => (
              <span
                key={i}
                className="font-mono"
                style={{ flex: 1, textAlign: "center", color: "var(--muted-2)", fontSize: 7.5 }}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </VizFrame>
  );
}
