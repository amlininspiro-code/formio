import { Logo } from "./Logo";

export function Footer() {
  const cols = [
    { title: "Maison", links: ["About FORMIO", "The Atelier", "Sustainability", "Press"] },
    { title: "Service", links: ["Contact", "Store Locations", "Trade Program", "Care Guide"] },
    { title: "Account", links: ["Sign In", "Order Tracking", "Wishlist", "Gift Cards"] },
    { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Shipping", "Returns"] },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-16">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="light" scale={1} />
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-background/60">
              A modern furniture house designing pieces that quietly elevate everyday life.
            </p>
            <form className="mt-10">
              <label className="text-[10px] uppercase tracking-[0.3em] text-background/50">
                Receive our journal
              </label>
              <div className="mt-3 flex border-b border-background/30 pb-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent text-sm text-background placeholder:text-background/40 focus:outline-none"
                />
                <button className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold)] hover:text-background">
                  Subscribe →
                </button>
              </div>
            </form>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold)]">{col.title}</p>
              <ul className="mt-6 space-y-3 text-sm text-background/70">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-background">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-6 border-t border-background/10 pt-10">
          <p className="text-display text-[clamp(1.5rem,3vw,2.5rem)] italic text-background/90">
            Transforming houses into beautiful homes.
          </p>
          <div className="flex w-full flex-col items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-background/40 md:flex-row">
            <span>© {new Date().getFullYear()} Maison Formio</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--color-gold)]">Instagram</a>
              <a href="#" className="hover:text-[var(--color-gold)]">Pinterest</a>
              <a href="#" className="hover:text-[var(--color-gold)]">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
