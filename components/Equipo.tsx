"use client";

import { motion } from "motion/react";
import SectionLabel from "./SectionLabel";

const LinkedInIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const team = [
  {
    initials: "DG",
    name: "Diego Guerra Chevarría",
    role: "ML & AI Lead",
    bio: "ML Engineer en Yape. Ex-CTO de Inmoba (Startup Perú 11G). Recomendación e IA generativa a escala.",
    href: "https://pe.linkedin.com/in/diego-guerra-ch",
    accent: "var(--terra)",
  },
  {
    initials: "AM",
    name: "Alejandro Marcelo",
    role: "Data Engineering & Full Stack Lead",
    bio: "Full stack de productos de datos. ERPs, analítica y ML en producción para empresas en Lima.",
    href: "#",
    accent: "var(--gold)",
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="hairline">
      <div className="shell py-24 sm:py-32">
        <SectionLabel kicker="Quiénes somos" heading={<>Quien construye<br />es quien te responde.</>} />

        <div className="grid gap-px sm:grid-cols-2" style={{ background: "var(--border)", border: "1px solid var(--border)" }}>
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 0.8, 0.2, 1] }}
              className="p-9"
              style={{ background: "var(--bg)" }}
            >
              <div className="font-display tight grid h-11 w-11 place-items-center rounded-full text-[13px]"
                style={{ background: "rgba(210,85,42,.1)", border: `1px solid ${m.accent}`, color: m.accent }}>
                {m.initials}
              </div>
              <div className="font-display tight mt-5 text-[19px] text-ink">{m.name}</div>
              <div className="mono-meta mt-1.5">{m.role}</div>
              <p className="mt-5 text-[14px] leading-relaxed text-muted">{m.bio}</p>
              <a href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined} rel="noopener"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-[var(--terra)] no-tap">
                <LinkedInIcon /> LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
