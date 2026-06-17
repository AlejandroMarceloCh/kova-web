import Chakana from "./Chakana";

const links = [
  { href: "#trabajos", label: "Trabajos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="hairline">
      <div className="shell flex flex-wrap items-center justify-between gap-5 py-12">
        <a href="#top" className="flex items-center gap-2.5 no-tap">
          <Chakana size={16} color="var(--terra)" />
          <span className="font-display tighter text-[16px]">
            Ko<span style={{ color: "var(--terra)" }}>va</span>
          </span>
        </a>
        <nav className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mono-meta transition-colors hover:text-[var(--ink)] no-tap">
              {l.label}
            </a>
          ))}
        </nav>
        <p className="mono-meta">© 2026 KOVA · LIMA</p>
      </div>
    </footer>
  );
}
