import { createFileRoute, notFound } from "@tanstack/react-router";
import { getProductBySlug } from "@/lib/data";
import { Nav } from "@/components/formio/Nav";
import { Footer } from "@/components/formio/Footer";

export const Route = createFileRoute("/products/$slug")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.product) return { meta: [] };
    return {
      meta: [
        { title: `${loaderData.product.name} — FORMIO` },
        { name: "description", content: loaderData.product.tagline },
      ],
    };
  },
});

function ProductPage() {
  const { product } = Route.useLoaderData();

  return (
    <div className="bg-background text-foreground">
      {/* We pass a prop or just let Nav be absolute on top of the image */}
      <Nav />
      <main className="min-h-screen pt-24 md:pt-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-16 py-12 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
            
            {/* Left side: Images */}
            <div className="flex flex-col gap-8">
              {product.image ? (
                <div className="aspect-square w-full overflow-hidden bg-[var(--color-stone)]/50 p-8 md:p-16">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain drop-shadow-2xl"
                  />
                </div>
              ) : (
                <div className="aspect-square w-full overflow-hidden bg-[var(--color-stone)]" />
              )}
            </div>

            {/* Right side: Product Details */}
            <div className="flex flex-col items-start pt-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-gold)]">
                {product.category}
              </span>
              <h1 className="text-display mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
                {product.name}
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/70">
                {product.tagline}
              </p>
              
              <div className="mt-8 text-2xl font-medium tracking-tight">
                {product.price}
              </div>

              {product.colors && (
                <div className="mt-12">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">Colors</span>
                  <div className="mt-4 flex gap-4">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        className="h-8 w-8 rounded-full border border-foreground/10 ring-offset-background transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2"
                        style={{ backgroundColor: color }}
                        aria-label={`Color ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 w-full max-w-sm flex flex-col gap-4">
                <button className="w-full bg-foreground py-4 text-[11px] uppercase tracking-[0.2em] text-background transition-colors hover:bg-[var(--color-gold)]">
                  Add to Cart
                </button>
                <button className="w-full border border-foreground py-4 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground/5">
                  Request Swatches
                </button>
              </div>

              {/* Specifications */}
              <div className="mt-20 w-full border-t border-foreground/10 pt-10">
                <h3 className="mb-6 text-[10px] uppercase tracking-[0.2em] text-foreground/50">Specifications</h3>
                <dl className="flex flex-col gap-4">
                  <Spec label="Material" value={product.material} />
                  <Spec label="Dimensions" value={product.dimensions} />
                  {product.capacity && <Spec label="Capacity" value={product.capacity} />}
                  <Spec label="Warranty" value={product.warranty} />
                </dl>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-foreground/10 pb-3">
      <dt className="text-[11px] uppercase tracking-[0.2em] text-foreground/50">{label}</dt>
      <dd className="text-right text-[14px] text-foreground/90">{value}</dd>
    </div>
  );
}
