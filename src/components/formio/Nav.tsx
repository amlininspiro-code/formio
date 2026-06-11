import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Search, ShoppingBag, Heart, User } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? "1px solid color-mix(in oklab, var(--color-ink) 8%, transparent)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Logo scale={0.72} compact variant={scrolled ? "dark" : "light"} />
        <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.28em] text-foreground/70 md:flex">
          {["Living", "Dining", "Bedroom", "Decor", "Atelier"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-[var(--color-gold)]">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-foreground/80">
          <Search className="h-[18px] w-[18px] cursor-pointer transition-colors hover:text-[var(--color-gold)]" />
          <Heart className="hidden h-[18px] w-[18px] cursor-pointer transition-colors hover:text-[var(--color-gold)] md:block" />
          <User className="hidden h-[18px] w-[18px] cursor-pointer transition-colors hover:text-[var(--color-gold)] md:block" />
          <div className="relative">
            <ShoppingBag className="h-[18px] w-[18px] cursor-pointer transition-colors hover:text-[var(--color-gold)]" />
            <span
              className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-medium text-white"
              style={{ background: "var(--color-gold)" }}
            >
              2
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
