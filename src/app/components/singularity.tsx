/**
 * The brand mark of the «Un solo punto» world: one solid point, two firm
 * rings. Everything on the page converges here. Inline SVG so it inherits
 * `currentColor` and needs no request.
 */
export default function Singularity({
  size = 64,
  className = '',
  breathe = false,
  title,
}: {
  size?: number;
  className?: string;
  /** Rings breathe slowly (stopped under reduced motion). */
  breathe?: boolean;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      className={className}
    >
      {title && <title>{title}</title>}
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="currentColor"
        strokeWidth="3"
        className={breathe ? 'singularity-ring' : undefined}
        opacity={breathe ? undefined : 0.45}
      />
      <circle
        cx="32"
        cy="32"
        r="17"
        stroke="currentColor"
        strokeWidth="3.5"
        className={breathe ? 'singularity-ring' : undefined}
        opacity={breathe ? undefined : 0.8}
      />
      <circle cx="32" cy="32" r="6.5" fill="currentColor" />
    </svg>
  );
}
