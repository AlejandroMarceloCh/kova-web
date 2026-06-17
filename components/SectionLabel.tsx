import Reveal from "./Reveal";
import Chakana from "./Chakana";

type Props = { kicker: string; heading: React.ReactNode };

export default function SectionLabel({ kicker, heading }: Props) {
  return (
    <Reveal>
      <div className="mb-14 flex items-start gap-4">
        <Chakana size={18} color="var(--terra)" className="mt-1.5 shrink-0" />
        <div>
          <span className="mono-label mb-3 block">{kicker}</span>
          <h2
            className="font-display tighter text-ink"
            style={{ fontSize: "clamp(28px, 4.2vw, 48px)", lineHeight: 1.05 }}
          >
            {heading}
          </h2>
        </div>
      </div>
    </Reveal>
  );
}
