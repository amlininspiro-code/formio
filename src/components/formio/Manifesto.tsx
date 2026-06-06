import { motion } from "framer-motion";

const pillars = [
  { n: "01", t: "Material Honesty", d: "Solid oak, Carrara marble, full-grain leather. No veneers, no shortcuts." },
  { n: "02", t: "Slow Craft", d: "Each piece spends 14 weeks in our Milano atelier — built by hand, finished by eye." },
  { n: "03", t: "Designed to Age", d: "Joinery, not glue. Pieces meant to outlast the room they were made for." },
];

const marquee = [
  "Carrara Marble", "Solid Oak", "Brushed Brass", "Italian Velvet",
  "Full-Grain Leather", "Hand-Loomed Bouclé", "Travertine", "Walnut",
];

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-[#111] px-6 py-32 text-white md:px-16 md:py-44">
      {/* ambient gold orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[80vh] w-[80vh] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(176,141,87,0.55), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 md:grid-cols-12 md:gap-20">
        {/* LEFT — editorial quote */}
        <div className="md:col-span-7">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[var(--color-gold)]" />
            <span className="eyebrow !text-[var(--color-gold)]">Atelier Formio · Est. 2014</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-display text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight"
          >
            A home should feel like a{" "}
            <span className="italic text-[var(--color-gold)]">quiet exhale</span> —
            <br className="hidden md:block" />
            every object earning its presence.
          </motion.h2>

          <div className="mt-12 flex items-center gap-6">
            <div className="h-14 w-14 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10" />
            <div>
              <div className="font-serif text-lg italic">Elena Marchetti</div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">Founder & Creative Director</div>
            </div>
          </div>
        </div>

        {/* RIGHT — craft pillars */}
        <div className="md:col-span-5">
          <div className="space-y-10 border-l border-white/10 pl-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <span className="absolute -left-[33px] top-2 h-2 w-2 rounded-full bg-[var(--color-gold)]" />
                <div className="font-serif text-2xl text-[var(--color-gold)]">{p.n}</div>
                <div className="mt-2 text-xl font-medium tracking-tight">{p.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* marquee of materials */}
      <div className="relative mt-24 overflow-hidden border-y border-white/10 py-6">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...marquee, ...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="font-serif text-2xl italic text-white/30 md:text-3xl"
            >
              {m} <span className="ml-12 text-[var(--color-gold)]">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
