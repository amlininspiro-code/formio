import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { getProductsByCategory } from "@/lib/data";
import decor from "@/assets/decor.jpg";

export function DecorGrid() {
  const items = getProductsByCategory("Lighting").concat(
    getProductsByCategory("Mirrors"),
    getProductsByCategory("Objects"),
    getProductsByCategory("Rugs"),
    getProductsByCategory("Storage"),
    getProductsByCategory("Art")
  );

  return (
    <section id="decor" className="relative bg-background px-6 py-32 md:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Chapter Five</span>
            <h2 className="text-display mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-[1.05]">
              The finishing touch.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-foreground/60">
            Objects, lighting and textiles selected to complete a home. Made by hand, made to last.
          </p>
        </div>

        <div className="mb-16 aspect-[21/9] w-full overflow-hidden">
          <img src={decor} alt="Decor collection" loading="lazy" className="h-full w-full object-cover" />
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/products/$slug" params={{ slug: item.slug }} className="group block cursor-pointer">
                <div className="relative mb-4 aspect-square overflow-hidden bg-[var(--color-stone)]">
                  <div
                    className="absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in oklab, var(--color-gold) ${10 + i * 4}%, white), white)`,
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-foreground py-2 text-center text-[10px] uppercase tracking-[0.3em] text-background transition-transform duration-500 group-hover:translate-y-0">
                    Quick View
                  </div>
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-gold)]">{item.category}</p>
                <p className="text-display mt-1 text-base">{item.name}</p>
                <p className="mt-1 text-sm text-foreground/55">{item.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
