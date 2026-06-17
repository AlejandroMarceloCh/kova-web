import Chakana from "./Chakana";

type Props = {
  /** ruta dentro de public, ej. /mockups/wasi.webp */
  src: string;
  /** descripción accesible de la imagen */
  alt: string;
  /** caption visible bajo el marco */
  caption?: string;
  /** ancho/alto del marco, ej. "16 / 10" */
  ratio?: string;
  className?: string;
};

/**
 * Marco de mockup de producto con esquina andina (stepped).
 * Mientras la imagen no exista en /public, muestra un placeholder
 * on-brand (chakana + ruta del archivo a generar con Gemini).
 * Cuando se pega la .webp en esa ruta, la imagen cubre el placeholder
 * automáticamente — sin tocar código.
 */
export default function Mockup({ src, alt, caption, ratio = "16 / 10", className }: Props) {
  return (
    <figure className={className}>
      <div className="mockup-frame stepped" style={{ aspectRatio: ratio }}>
        {/* placeholder visible solo si no hay imagen */}
        <div className="andean-field absolute inset-0" style={{ opacity: 0.06 }} aria-hidden />
        <div className="mockup-placeholder">
          <Chakana size={40} color="var(--terra)" className="opacity-30" />
          <span className="mono-meta mt-4">{src}</span>
        </div>
        {/* imagen real: cubre el placeholder cuando el archivo existe */}
        <div
          className="mockup-img"
          role="img"
          aria-label={alt}
          style={{ backgroundImage: `url(${src})` }}
        />
      </div>
      {caption && <figcaption className="mono-meta mt-3">{caption}</figcaption>}
    </figure>
  );
}
