interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  stacked?: boolean;
  /** Scale multiplier for the entire logo unit (default 1) */
  scale?: number;
}

export function Logo({ className = "", variant = "dark", stacked = false, scale = 1 }: LogoProps) {
  const textColor = variant === "dark" ? "#1a1a1a" : "#ffffff";
  const subtitleOpacity = variant === "dark" ? 0.65 : 0.75;

  return (
    <div
      className={`flex flex-col items-center ${className}`}
      style={{ gap: `${scale * 14}px` }}
    >
      {/* ── Golden F mark ── */}
      <svg
        className="logo-icon"
        viewBox="0 0 120 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        style={{ width: `${scale * 64}px`, height: `${scale * 70}px` }}
      >
        <defs>
          <linearGradient id="fg1" x1="0%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%"   stopColor="#c9961a" />
            <stop offset="35%"  stopColor="#e8c96a" />
            <stop offset="65%"  stopColor="#f5dfa0" />
            <stop offset="100%" stopColor="#a07010" />
          </linearGradient>
        </defs>

        {/*
          The F is drawn as a DOUBLE-LINE outline path:
          Outer contour + inner contour = hollow / open letter look.

          outer shape: tall vertical bar on left, top bar sweeping right, mid bar.
          inner shape (hole): cutout inside the strokes.
        */}

        {/* Outer path of the double-line F */}
        <path
          d="
            M 18 128
            L 18 8
            C 18 4, 22 2, 26 4
            C 55 8, 98 12, 110 18
            C 100 22, 82 24, 66 26
            C 54 27, 44 28, 36 31
            L 36 56
            C 50 53, 66 51, 78 51
            C 68 57, 54 59, 36 60
            L 36 128
            Z
          "
          fill="url(#fg1)"
        />

        {/* Inner cutout — creates the open stroke effect */}
        <path
          d="
            M 26 118
            L 26 36
            C 38 32, 56 30, 74 28
            C 88 26, 100 24, 108 22
            C 96 17, 60 13, 28 10
            L 28 118
            Z
          "
          fill="url(#fg1)"
          opacity="0"
        />

        {/* Refined double-line approach: stroke-based */}
        {/* Vertical stem */}
        <path
          d="M 22 8 C 22 4, 114 14, 112 20 C 94 24, 54 26, 32 32 L 32 60 C 52 56, 68 54, 80 53 C 66 61, 46 63, 32 65 L 32 126 L 22 126 Z"
          fill="url(#fg1)"
        />
      </svg>

      {/* ── Text block ── */}
      <div className="logo-text flex flex-col items-center" style={{ gap: `${scale * 4}px` }}>
        {/* FORMIO */}
        <span
          className="logo-title"
          style={{
            color: textColor,
            fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
            fontSize: `${scale * 28}px`,
            fontWeight: 400,
            letterSpacing: `${scale * 6}px`,
            lineHeight: 1,
            paddingLeft: `${scale * 6}px`, /* compensate letter-spacing on last char */
          }}
        >
          FORMIO
        </span>

        {/* Divider */}
        <div
          style={{
            width: `${scale * 120}px`,
            height: "0.5px",
            background: `linear-gradient(90deg, transparent, ${variant === "dark" ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.35)"}, transparent)`,
            marginTop: `${scale * 2}px`,
            marginBottom: `${scale * 2}px`,
          }}
        />

        {/* FURNITURE & HOME DECOR */}
        <span
          className="logo-subtitle"
          style={{
            color: textColor,
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            fontSize: `${scale * 9}px`,
            fontWeight: 400,
            letterSpacing: `${scale * 3}px`,
            lineHeight: 1,
            paddingLeft: `${scale * 3}px`,
            opacity: subtitleOpacity,
          }}
        >
          FURNITURE &amp; HOME DECOR
        </span>
      </div>
    </div>
  );
}
