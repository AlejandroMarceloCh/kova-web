"use client";

import { useEffect } from "react";
import type { ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";

export type Detalle = {
  contexto: string;
  construccion: string;
  resultado: string;
  stack: string;
};

export type Proyecto = {
  tipo: string;
  title: string;
  desc: string;
  Viz: ComponentType;
  detalle: Detalle;
};

const ease = [0.22, 0.8, 0.2, 1] as const;

const backdropV = { hidden: { opacity: 0 }, show: { opacity: 1 } };
const panelV = { hidden: { x: "100%" }, show: { x: 0 } };

function Bloque({ label, texto }: { label: string; texto: string }) {
  return (
    <div className="mt-9">
      <span className="mono-label">{label}</span>
      <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--ink)" }}>
        {texto}
      </p>
    </div>
  );
}

export default function ProjectDrawer({
  proyecto,
  onClose,
}: {
  proyecto: Proyecto | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!proyecto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [proyecto, onClose]);

  return (
    <AnimatePresence>
      {proyecto && (
        <motion.div
          key="drawer"
          initial="hidden"
          animate="show"
          exit="hidden"
          style={{ position: "fixed", inset: 0, zIndex: 80 }}
        >
          <motion.div
            variants={backdropV}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(8,6,5,.72)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          />

          <motion.aside
            variants={panelV}
            transition={{ duration: 0.5, ease }}
            role="dialog"
            aria-modal="true"
            aria-label={proyecto.title}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(560px, 100vw)",
              background: "var(--bg)",
              borderLeft: "1px solid var(--border)",
              overflowY: "auto",
            }}
          >
            <div className="px-7 py-8 sm:px-11 sm:py-12">
              <div className="flex items-center justify-between">
                <span className="mono-meta">{proyecto.tipo}</span>
                <button
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="no-tap grid h-9 w-9 place-items-center transition-colors hover:text-[var(--ink)]"
                  style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
                >
                  <span style={{ fontSize: 15, lineHeight: 1 }}>✕</span>
                </button>
              </div>

              <div className="mt-8">
                <proyecto.Viz />
              </div>

              <h2
                className="font-display tight mt-9 text-ink"
                style={{ fontSize: "clamp(24px, 4vw, 32px)", lineHeight: 1.1 }}
              >
                {proyecto.title}
              </h2>

              <Bloque label="Contexto" texto={proyecto.detalle.contexto} />
              <Bloque label="Qué construimos" texto={proyecto.detalle.construccion} />
              <Bloque label="Resultado" texto={proyecto.detalle.resultado} />

              <div className="mt-10" style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                <span className="mono-meta">{proyecto.detalle.stack}</span>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
