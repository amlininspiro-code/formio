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
  const dividerColor =
    variant === "dark"
      ? "linear-gradient(90deg,transparent,rgba(26,26,26,0.18),transparent)"
      : "linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)";

  const px = (n: number) => `${(n * scale).toFixed(2)}px`;

  /*
   * The double-line outline F is built as a compound SVG path with fill-rule="evenodd".
   *
   * viewBox: 0 0 120 160
   * Outer F silhouette:  x=10–110, y=6–154
   *   Stem width:        x=10–42  (32 px)
   *   Top bar height:    y=6–38   (32 px), extends x=10–110
   *   Mid bar height:    y=84–116 (32 px), extends x=10–88
   *
   * Outline stroke: 12 px, inner gap: 8 px
   *   Inner left of stem:        x=22  (=10+12)
   *   Inner right of stem:       x=30  (=42−12)
   *   Inner top of top bar:      y=18  (=6+12)
   *   Inner bottom of top bar:   y=26  (=38−12)
   *   Inner right of top bar:    x=98  (=110−12)
   *   Inner top of mid bar:      y=96  (=84+12)
   *   Inner bottom of mid bar:   y=104 (=116−12)
   *   Inner right of mid bar:    x=76  (=88−12)
   *
   * Three sub-paths:
   *   1. Outer F  → FILLED
   *   2. Stem inner channel + top-bar inner channel (connected L-shape) → HOLE
   *   3. Mid-bar inner channel → HOLE
   */
  const fPath = [
    // 1. Outer F silhouette (clockwise)
    "M 10 154 L 10 6 L 110 6 L 110 38 L 42 38 L 42 84 L 88 84 L 88 116 L 42 116 L 42 154 Z",

    // 2. Inner stem + top-bar channel (L-shaped hole)
    //    Goes: down left inner wall → across bottom → up right inner wall →
    //          right along top-bar inner bottom → up right of bar →
    //          left along top-bar inner top → up to very top → close
    "M 22 6 L 22 154 L 30 154 L 30 26 L 98 26 L 98 18 L 30 18 L 30 6 Z",

    // 3. Mid-bar inner channel (rectangle hole)
    "M 30 96 L 76 96 L 76 104 L 30 104 Z",
  ].join(" ");

  return (
    <div
      className={`flex flex-col items-center ${className}`}
      style={{ gap: px(14) }}
    >
      {/* ── Golden outline-F mark ── */}
      <svg
        className="logo-icon"
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        style={{ width: px(55), height: px(73) }}
      >
        <defs>
          <linearGradient
            id="fg-logo"
            gradientUnits="userSpaceOnUse"
            x1="10"
            y1="6"
            x2="110"
            y2="154"
          >
            <stop offset="0%"   stopColor="#c59218" />
            <stop offset="30%"  stopColor="#e6c45e" />
            <stop offset="60%"  stopColor="#f4df9e" />
            <stop offset="100%" stopColor="#9e6e0c" />
          </linearGradient>
        </defs>

        <path fillRule="evenodd" fill="url(#fg-logo)" d={fPath} />
      </svg>

      {/* ── Text block ── */}
      <div
        className="logo-text flex flex-col items-center"
        style={{ gap: px(4) }}
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
            letterSpacing: px(5.5),
            lineHeight: 1,
            paddingLeft: px(5.5), // compensate last-char tracking gap
          }}
        >
          FORMIO
        </span>

        {/* Thin gold divider + subtitle — hidden in compact mode */}
        {!compact && (
          <>
            <div
              style={{
                width: px(115),
                height: "0.5px",
                background: dividerColor,
                margin: `${px(3)} 0`,
              }}
            />
            <span
              className="logo-subtitle"
              style={{
                color: subtitleColor,
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontSize: px(8.5),
                fontWeight: 400,
                letterSpacing: px(2.8),
                lineHeight: 1,
                paddingLeft: px(2.8),
              }}
            >
              FURNITURE &amp; HOME DECOR
            </span>
          </>
        )}
      </div>
    </div>
  );
}
