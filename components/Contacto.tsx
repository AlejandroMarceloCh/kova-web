"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import Chakana from "./Chakana";

const WA = "51931858345";

const WhatsAppIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { nombre, email, mensaje } = form;
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) return;
    const text = encodeURIComponent(`Hola, soy ${nombre} (${email}).\n\n${mensaje}`);
    window.open(`https://wa.me/${WA}?text=${text}`, "_blank");
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contacto" className="hairline">
      <div className="shell grid gap-12 py-24 sm:py-28 md:grid-cols-2 md:gap-20">
        <div>
          <Reveal>
            <div className="flex items-start gap-4">
              <Chakana size={18} color="var(--terra)" className="mt-1.5 shrink-0" />
              <div>
                <span className="mono-label mb-3 block">Contacto</span>
                <h2 className="font-display tighter text-ink" style={{ fontSize: "clamp(28px, 4.2vw, 48px)", lineHeight: 1.05 }}>
                  Cuéntanos tu problema.
                </h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-muted">
              Sin compromiso. Te respondemos en 24 horas con una lectura honesta
              de tu situación.
            </p>
            <div className="mt-8">
              <p className="mono-label mb-3" style={{ color: "var(--muted)" }}>Respuesta más rápida</p>
              <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 text-[14px] transition-opacity hover:opacity-75 no-tap"
                style={{ color: "var(--terra)" }}>
                <WhatsAppIcon /> WhatsApp directo
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="contacto-nombre" className="mono-label mb-2.5 block" style={{ color: "var(--muted)" }}>Nombre</label>
              <input id="contacto-nombre" className="field" value={form.nombre} onChange={set("nombre")} required placeholder="Tu nombre" autoComplete="name" />
            </div>
            <div>
              <label htmlFor="contacto-email" className="mono-label mb-2.5 block" style={{ color: "var(--muted)" }}>Email</label>
              <input id="contacto-email" className="field" type="email" value={form.email} onChange={set("email")} required placeholder="tu@empresa.com" autoComplete="email" />
            </div>
            <div>
              <label htmlFor="contacto-mensaje" className="mono-label mb-2.5 block" style={{ color: "var(--muted)" }}>¿Cuál es tu problema?</label>
              <textarea id="contacto-mensaje" className="field min-h-[130px] resize-none" value={form.mensaje} onChange={set("mensaje")} required placeholder="Cuéntanos qué quieres resolver..." />
            </div>
            <button type="submit" className="btn-terra mt-1 self-start no-tap">
              Enviar mensaje
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
