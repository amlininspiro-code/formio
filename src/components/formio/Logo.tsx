interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className = "", variant = "dark", stacked = false }: LogoProps & { stacked?: boolean }) {
  const color = variant === "dark" ? "var(--color-ink)" : "white";
  return (
    <div className={`flex ${stacked ? "flex-col items-center" : "items-center gap-3"} ${className}`} style={{ color }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon w-8 h-8 md:w-10 md:h-10" aria-hidden>
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#f3e5ab" />
            <stop offset="100%" stopColor="#aa7c11" />
          </linearGradient>
        </defs>
        <path 
          d="M 25 90 L 25 35 C 25 15, 45 10, 85 10 C 70 20, 50 20, 42 25 L 42 45 C 55 42, 65 42, 75 40 C 60 48, 50 48, 42 50 L 42 80 C 42 88, 35 90, 25 90 Z" 
          fill="url(#gold-grad)" 
        />
      </svg>
      <div className={`flex flex-col ${stacked ? "items-center text-center mt-4" : "items-start justify-center"}`}>
        <span
          className="logo-title text-display"
          style={{ fontSize: stacked ? "2rem" : "1.2rem", letterSpacing: "0.22em", fontWeight: 400, fontFamily: "Playfair Display, serif" }}
        >
          FORMIO
        </span>
        <span
          className="logo-subtitle"
          style={{ fontSize: stacked ? "0.6rem" : "0.45rem", letterSpacing: "0.25em", fontWeight: 400, fontFamily: "Inter, sans-serif", marginTop: stacked ? "0.4rem" : "0.1rem", opacity: 0.8 }}
        >
          FURNITURE & HOME DECOR
        </span>
      </div>
    </div>
  );
}
