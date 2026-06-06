import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/formio/Nav";
import { Entrance } from "@/components/formio/Entrance";
import { RoomScene, type Product } from "@/components/formio/RoomScene";
import { Manifesto } from "@/components/formio/Manifesto";
import { DecorGrid } from "@/components/formio/DecorGrid";
import { Footer } from "@/components/formio/Footer";

import living from "@/assets/living.jpg";
import dining from "@/assets/dining.jpg";
import bedroom from "@/assets/bedroom.jpg";

import { getProductsByCategory } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FORMIO — Furniture Crafted for Modern Living" },
      {
        name: "description",
        content:
          "FORMIO designs premium, modern furniture and home decor — sofas, dining tables, beds and objects crafted for considered living.",
      },
      { property: "og:title", content: "FORMIO — Furniture Crafted for Modern Living" },
      {
        property: "og:description",
        content: "A modern furniture house. Step inside and discover pieces designed for considered living.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const livingProducts = getProductsByCategory("Living");
  const diningProducts = getProductsByCategory("Dining");
  const bedroomProducts = getProductsByCategory("Bedroom");
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Entrance />
        <RoomScene
          id="living"
          eyebrow="Chapter One"
          title="The Living Room."
          subtitle="A room to soften into. Designed around the quiet rituals — long evenings, slow mornings, the weight of an open book."
          bg={living}
          products={livingProducts}
        />
        <Manifesto />
        <RoomScene
          id="dining"
          eyebrow="Chapter Two"
          title="The Dining Room."
          subtitle="A table is the centre of a home. Ours are cut from honest materials and built to gather generations around them."
          bg={dining}
          products={diningProducts}
          reverse
        />
        <RoomScene
          id="bedroom"
          eyebrow="Chapter Three"
          title="The Bedroom."
          subtitle="The most private room in the house. Composed in soft woods, warm linens and the kind of light that asks for nothing."
          bg={bedroom}
          products={bedroomProducts}
        />
        <DecorGrid />
      </main>
      <Footer />
    </div>
  );
}
