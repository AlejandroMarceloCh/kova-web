"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Chakana from "./Chakana";

const links = [
  { href: "#trabajos", label: "Trabajos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#equipo", label: "Equipo" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 0.8, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className="transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          background: scrolled ? "rgba(20,16,14,0.78)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <nav className="shell flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 no-tap">
            <Chakana size={18} color="var(--terra)" />
            <span className="font-display tighter text-[18px]">
              Ko<span style={{ color: "var(--terra)" }}>va</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="mono-meta transition-colors hover:text-[var(--ink)] no-tap"
                style={{ letterSpacing: ".1em" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a href="#contacto" className="btn-terra !py-2 !px-4 !text-[13px] no-tap">
            Contacto
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
