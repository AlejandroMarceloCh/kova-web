"use client";

import { motion } from "motion/react";

const ease = [0.22, 0.8, 0.2, 1] as const;
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="shell flex min-h-[92svh] flex-col justify-center pb-24 pt-36">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* texto */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className="mono-label mb-8">
              Ciencia de datos y software · Lima, Perú
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display tighter text-ink"
              style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.0 }}
            >
              Tu negocio creció más rápido que tus sistemas
              <span style={{ color: "var(--terra)" }}>.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 text-muted"
              style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6, maxWidth: "34ch" }}
            >
              Construimos el software y la inteligencia que tu operación necesita
              para dejar de frenarse — y lo seguimos hasta que funciona de verdad.
            </motion.p>

            <motion.div variants={item} className="mt-10">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.55, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.8 }}
                style={{ display: "inline-block" }}
              >
                <HeroButton />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* imagen sin frame — sangra al fondo oscuro */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="hidden lg:block"
            style={{ position: "relative" }}
          >
            <img
              src="/mockups/kova-flow.png"
              alt="Kova — flujo de datos"
              style={{
                width: "100%",
                aspectRatio: "16 / 10",
                objectFit: "cover",
                display: "block",
                maskImage: "radial-gradient(ellipse 85% 85% at 55% 50%, black 55%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 55% 50%, black 55%, transparent 100%)",
              }}
            />
            {/* wordmark sobre la imagen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2, ease }}
              style={{
                position: "absolute",
                bottom: "12%",
                left: "8%",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "var(--ink)",
              }}
            >
              Ko<span style={{ color: "var(--terra)" }}>va</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function HeroButton() {
  return (
    <a
      href="#contacto"
      className="no-tap hero-cta"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "15px 30px",
        fontFamily: "var(--font-display)",
        fontSize: "13px",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        textDecoration: "none",
        position: "relative",
        overflow: "hidden",
        border: "1.5px solid var(--terra)",
        color: "var(--terra)",
        background: "transparent",
      }}
    >
      <span className="hero-cta-fill" />
      <span className="hero-cta-text">Hablemos</span>
      <span className="hero-cta-arrow">→</span>
    </a>
  );
}
