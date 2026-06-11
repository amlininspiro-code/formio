interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  /** Uniform scale multiplier. 1 = standard footer size, ~0.6 = nav, 4 = hero */
  scale?: number;
  /** Hide subtitle and divider (useful in compact/nav contexts) */
  compact?: boolean;
}

export function Logo({
  className = "",
  variant = "dark",
  scale = 1,
  compact = false,
}: LogoProps) {
  const textColor = variant === "dark" ? "#1a1a1a" : "#ffffff";
  const subtitleColor =
    variant === "dark" ? "rgba(26,26,26,0.6)" : "rgba(255,255,255,0.7)";

  const px = (n: number) => `${(n * scale).toFixed(2)}px`;

  return (
    <div
      className={`flex flex-col items-center ${className}`}
      style={{ gap: px(14) }}
    >
      {/* ── Golden outline-F mark ── */}
      <svg
        className="logo-icon"
        viewBox="0 0 95 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        style={{ width: px(65), height: px(61) }}
      >
        <defs>
          <linearGradient
            id="fg-logo"
            gradientUnits="userSpaceOnUse"
            x1="10"
            y1="5"
            x2="85"
            y2="85"
          >
            <stop offset="0%"   stopColor="#c59218" />
            <stop offset="30%"  stopColor="#e6c45e" />
            <stop offset="60%"  stopColor="#f4df9e" />
            <stop offset="100%" stopColor="#9e6e0c" />
          </linearGradient>
        </defs>

        <path
          fill="url(#fg-logo)"
          d="M 10 85 L 10 25 C 10 10, 20 10, 30 10 C 50 10, 70 7, 85 5 C 70 17, 50 18, 30 18 C 23 18, 18 21, 18 28 L 18 40 C 18 45, 21 45, 27 45 L 55 45 C 63 45, 63 53, 50 53 L 18 53 L 18 75 C 18 80, 13 84, 10 85 Z"
        />
      </svg>

      {/* ── Text block ── */}
      <div
        className="logo-text flex flex-col items-center"
        style={{ gap: px(6) }}
      >
        {/* Brand name */}
        <span
          className="logo-title"
          style={{
            color: textColor,
            fontFamily:
              "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
            fontSize: px(27),
            fontWeight: 400,
            letterSpacing: px(6.5),
            lineHeight: 1,
            paddingLeft: px(6.5), // compensate last-char tracking gap
          }}
        >
          FORMIO
        </span>

        {/* Subtitle — hidden in compact mode */}
        {!compact && (
          <span
            className="logo-subtitle"
            style={{
              color: subtitleColor,
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: px(7),
              fontWeight: 400,
              letterSpacing: px(3.2),
              lineHeight: 1,
              paddingLeft: px(3.2),
            }}
          >
            FURNITURE &amp; HOME DECOR
          </span>
        )}
      </div>
    </div>
  );
}
