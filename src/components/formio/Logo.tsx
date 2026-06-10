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
          d="M 25 85 L 25 35 C 25 10, 60 10, 85 15 C 60 25, 40 25, 40 35 L 40 50 C 50 50, 60 48, 70 48 C 60 55, 50 55, 40 55 L 40 80 Z" 
          fill="url(#gold-grad)" 
        />
      </svg>
      <div className={`flex flex-col ${stacked ? "items-center text-center mt-4" : "items-start justify-center"}`}>
        <span
          className="logo-title text-display"
          style={{ fontSize: stacked ? "2rem" : "1.2rem", letterSpacing: "0.15em", fontWeight: 500, fontFamily: "Playfair Display, serif" }}
        >
          FORMIO
        </span>
        <span
          className="logo-subtitle"
          style={{ fontSize: stacked ? "0.7rem" : "0.5rem", letterSpacing: "0.2em", fontWeight: 500, fontFamily: "Inter, sans-serif", marginTop: stacked ? "0.5rem" : "0.1rem", opacity: 0.9 }}
        >
          FURNITURE & HOME DECOR
        </span>
      </div>
    </div>
  );
}
