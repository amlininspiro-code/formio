interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const color = variant === "dark" ? "var(--color-ink)" : "white";
  return (
    <div className={`inline-flex items-center gap-2 ${className}`} style={{ color }}>
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="3" y="3" width="26" height="26" stroke="var(--color-gold)" strokeWidth="1.2" />
        <path d="M10 22V10h12M10 16h8" stroke="var(--color-gold)" strokeWidth="1.4" strokeLinecap="square" />
      </svg>
      <span
        className="text-display"
        style={{ fontSize: "1.15rem", letterSpacing: "0.32em", fontWeight: 500 }}
      >
        FORMIO
      </span>
    </div>
  );
}
