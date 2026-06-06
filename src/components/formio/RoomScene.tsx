import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { Product } from "@/lib/data";

interface RoomSceneProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  bg: string;
  products: Product[];
  reverse?: boolean;
}

export function RoomScene({ id, eyebrow, title, subtitle, bg, products, reverse }: RoomSceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  const product = products[active];

  return (
    <section id={id} ref={ref} className="relative">
      {/* Room intro panel with parallax photo */}
      <div className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <motion.div
          style={{ y: bgY, scale: bgScale, backgroundImage: `url(${bg})` }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-background" />
        <div className="relative z-10 flex flex-col items-start px-6 md:px-16">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="gold-line" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h2 className="text-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-foreground">
              {title}
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-foreground/65">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Product showcase grid */}
      <div className="bg-background px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-8">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/products/$slug" params={{ slug: p.slug }} className="group flex flex-col h-full">
                  <div className="relative mb-6 aspect-square w-full overflow-hidden bg-[var(--color-stone)]/50 p-4 transition-colors group-hover:bg-[var(--color-stone)]">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-foreground py-3 text-center text-[10px] uppercase tracking-[0.3em] text-background transition-transform duration-500 group-hover:translate-y-0">
                      View Product
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-gold)]">
                      {p.material.split("·")[0]}
                    </p>
                    <h3 className="text-display mt-2 text-xl md:text-2xl">{p.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-foreground/60">
                      {p.tagline}
                    </p>
                    
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="text-lg font-medium">{p.price}</span>
                      <button className="border-b border-foreground/30 pb-0.5 text-[10px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
                        Shop
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="hairline flex justify-between gap-4 pb-3">
      <dt className="text-[10px] uppercase tracking-[0.25em] text-foreground/40">{label}</dt>
      <dd className="text-right text-foreground/85">{value}</dd>
    </div>
  );
}
