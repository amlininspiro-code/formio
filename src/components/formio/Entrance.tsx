import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { Logo } from "./Logo";
import entrance from "@/assets/entrance.jpg";
import entranceDesktop from "@/assets/entrance-desktop.jpg";
import living from "@/assets/living.jpg";

function DoorImage({ side }: { side: "left" | "right" }) {
  const pos = side === "left" ? "left-0" : "right-0";
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={entranceDesktop} />
      <img
        src={entrance}
        alt=""
        aria-hidden
        draggable={false}
        className={`absolute ${pos} top-0 h-full w-screen max-w-none object-cover object-center select-none`}
      />
    </picture>
  );
}

export function Entrance() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Phase 1 (0 → 0.55): doors part open
  // Phase 2 (0.55 → 1): camera dollies into the living room
  const leftX = useTransform(scrollYProgress, [0, 0.55], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.55], ["0%", "100%"]);
  const doorShadow = useTransform(scrollYProgress, [0, 0.55], [0, 0.85]);

  // Living room behind doors — starts dim & small, brightens & zooms as you "walk in"
  const innerScale = useTransform(scrollYProgress, [0, 0.55, 1], [1.05, 1.15, 1.6]);
  const innerBrightness = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.35, 0.7, 1]);
  const innerFilter = useMotionTemplate`brightness(${innerBrightness})`;

  // Content fades as the doors begin to open
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 0.4, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  // Hint to scroll fades out quickly
  const hintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Final white-out to blend into next section
  const whiteOut = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  return (
    <section ref={ref} className="relative h-[150vh] md:h-[260vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Living room behind the doors */}
        <motion.div
          style={{
            scale: innerScale,
            filter: innerFilter,
            backgroundImage: `url(${living})`,
          }}
          className="absolute inset-0 bg-cover bg-center"
        />
        {/* warm threshold glow */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.55], [0, 0.5]) }}
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,220,170,0.45), rgba(255,220,170,0) 70%)",
            }}
          />
        </motion.div>

        {/* LEFT door panel — left half of entrance image, full-viewport-wide image pinned left */}
        <motion.div
          style={{ x: leftX }}
          className="absolute left-0 top-0 h-full w-1/2 overflow-hidden will-change-transform"
        >
          <DoorImage side="left" />
          <motion.div
            style={{ opacity: doorShadow }}
            className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/80 to-transparent"
          />
          <div className="absolute inset-y-0 right-0 w-px bg-[var(--color-gold)]/40" />
        </motion.div>

        {/* RIGHT door panel — right half of entrance image, full-viewport-wide image pinned right */}
        <motion.div
          style={{ x: rightX }}
          className="absolute right-0 top-0 h-full w-1/2 overflow-hidden will-change-transform"
        >
          <DoorImage side="right" />
          <motion.div
            style={{ opacity: doorShadow }}
            className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/80 to-transparent"
          />
          <div className="absolute inset-y-0 left-0 w-px bg-[var(--color-gold)]/40" />
        </motion.div>

        {/* Content (sits over the closed doors) */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 flex items-center gap-4"
          >
            <span className="gold-line" />
            <span className="eyebrow text-[var(--color-gold)]">Maison Formio · Est. 2014</span>
            <span className="gold-line" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="[&_*]:!text-white [&_svg]:!text-[var(--color-gold)]"
          >
            <Logo 
              stacked
              className="!gap-2 [&_.logo-title]:!text-[clamp(3rem,11vw,8rem)] [&_.logo-icon]:!h-[clamp(80px,16vw,140px)] [&_.logo-icon]:!w-[clamp(80px,16vw,140px)] [&_.logo-subtitle]:!text-[clamp(0.6rem,2vw,1.4rem)] [&_.logo-subtitle]:!mt-4" 
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-display mt-12 max-w-3xl text-balance text-[clamp(1.4rem,3vw,2.4rem)] italic leading-[1.15] text-white/90"
          >
            Furniture crafted for modern living.
          </motion.h1>

          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/70"
          >
            <span className="block animate-pulse">Scroll to open the doors</span>
            <div className="mx-auto mt-3 h-10 w-px bg-[var(--color-gold)]" />
          </motion.div>
        </motion.div>

        {/* final fade into next section */}
        <motion.div
          style={{ opacity: whiteOut }}
          className="pointer-events-none absolute inset-0 bg-white"
        />
      </div>
    </section>
  );
}
