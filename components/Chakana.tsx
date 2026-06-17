/** Cruz andina escalonada (chakana) — marca de Kova. */
export default function Chakana({
  size = 20,
  color = "var(--terra)",
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M48 0 H72 V24 H96 V48 H120 V72 H96 V96 H72 V120 H48 V96 H24 V72 H0 V48 H24 V24 H48 Z M54 54 V66 H66 V54 Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}
