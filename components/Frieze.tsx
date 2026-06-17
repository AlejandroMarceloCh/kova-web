/** Banda divisora con greca andina (stepped fret). */
export default function Frieze({ gold = false }: { gold?: boolean }) {
  return (
    <div className="shell">
      <div className={`frieze ${gold ? "frieze-gold" : ""}`} />
    </div>
  );
}
