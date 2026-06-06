import sofa1 from "@/assets/sofa-1.jpg";
import sofa2 from "@/assets/sofa-2.jpg";
import sofa3 from "@/assets/sofa-3.jpg";

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  material: string;
  dimensions: string;
  colors: string[];
  capacity?: string;
  warranty: string;
  rating: number;
  price: string;
  image?: string;
}

export const products: Product[] = [
  {
    slug: "halden-boucle-sofa",
    name: "Halden Bouclé Sofa",
    category: "Living",
    tagline: "A sculpted three-seater wrapped in hand-loomed ivory bouclé, balanced on brushed brass.",
    material: "Ivory bouclé · Brass legs",
    dimensions: "220 × 95 × 78 cm",
    colors: ["#efe6d6", "#c9b89a", "#2a2a2a"],
    warranty: "10 Years",
    rating: 4.9,
    price: "$3,480",
    image: sofa1,
  },
  {
    slug: "mira-sectional",
    name: "Mira Sectional",
    category: "Living",
    tagline: "Modular L-shape in deep charcoal velvet — designed to host long evenings and longer conversations.",
    material: "Italian velvet · Walnut feet",
    dimensions: "280 × 200 × 82 cm",
    colors: ["#3a3a3a", "#5a4a3a", "#0d0d0d"],
    warranty: "10 Years",
    rating: 4.8,
    price: "$5,240",
    image: sofa2,
  },
  {
    slug: "oren-recliner",
    name: "Oren Recliner",
    category: "Living",
    tagline: "Full-grain camel leather recliner on a turned brass pedestal. Quiet luxury in a single seat.",
    material: "Full-grain leather · Brass base",
    dimensions: "85 × 90 × 110 cm",
    colors: ["#b8763a", "#3a2a1a", "#0d0d0d"],
    warranty: "Lifetime frame",
    rating: 5.0,
    price: "$2,180",
    image: sofa3,
  },
  {
    slug: "solene-marble-table",
    name: "Solene Marble Table",
    category: "Dining",
    tagline: "Oval Carrara marble dining table with a sculptural plinth base. Seats six in quiet ceremony.",
    material: "Carrara marble · Solid oak",
    dimensions: "240 × 110 × 75 cm",
    colors: ["#f0ece4", "#3a2a1a"],
    capacity: "6–8",
    warranty: "15 Years",
    rating: 4.9,
    price: "$6,890",
    image: sofa1,
  },
  {
    slug: "atelier-oak-dining",
    name: "Atelier Oak Dining",
    category: "Dining",
    tagline: "Solid European oak, hand-finished with natural oil. Built to age beautifully across generations.",
    material: "Solid oak · Natural oil",
    dimensions: "200 × 95 × 74 cm",
    colors: ["#c9a47a", "#7a5a3a"],
    capacity: "6",
    warranty: "Lifetime",
    rating: 4.9,
    price: "$3,940",
    image: sofa2,
  },
  {
    slug: "bistrot-compact",
    name: "Bistrot Compact",
    category: "Dining",
    tagline: "A petite four-seater for the considered apartment. Round travertine top, slim brass column.",
    material: "Travertine · Brass",
    dimensions: "Ø 110 × 74 cm",
    colors: ["#e8dcc8", "#b08d57"],
    capacity: "4",
    warranty: "10 Years",
    rating: 4.7,
    price: "$2,290",
    image: sofa3,
  },
  {
    slug: "lina-platform-bed",
    name: "Lina Platform Bed",
    category: "Bedroom",
    tagline: "Low-profile oak bed with a wide floating headboard. Designed to feel grounded and weightless at once.",
    material: "Solid oak · Linen panel",
    dimensions: "King · 200 × 220 cm",
    colors: ["#c9a47a", "#3a2a1a", "#f0ece4"],
    warranty: "15 Years",
    rating: 4.9,
    price: "$3,140",
    image: sofa1,
  },
  {
    slug: "verra-wardrobe",
    name: "Verra Wardrobe",
    category: "Bedroom",
    tagline: "Five-door wardrobe in fluted oak with brushed brass pulls. Storage rendered as architecture.",
    material: "Fluted oak · Brass",
    dimensions: "260 × 60 × 220 cm",
    colors: ["#c9a47a", "#0d0d0d"],
    warranty: "10 Years",
    rating: 4.8,
    price: "$4,680",
    image: sofa2,
  },
  {
    slug: "nox-bedside",
    name: "Nox Bedside",
    category: "Bedroom",
    tagline: "Two-drawer nightstand with a softly radiused top and concealed wireless charging.",
    material: "Walnut · Leather pull",
    dimensions: "55 × 45 × 55 cm",
    colors: ["#5a3a2a", "#0d0d0d"],
    warranty: "10 Years",
    rating: 4.8,
    price: "$890",
    image: sofa3,
  },
  // Decor items
  {
    slug: "helia-floor-lamp",
    name: "Helia Floor Lamp",
    category: "Lighting",
    tagline: "A slender brass column rising from a solid marble base.",
    material: "Brass · Marble",
    dimensions: "160 × 30 × 30 cm",
    colors: ["#b08d57", "#f0ece4"],
    warranty: "5 Years",
    rating: 4.6,
    price: "$640",
  },
  {
    slug: "lune-round-mirror",
    name: "Lune Round Mirror",
    category: "Mirrors",
    tagline: "An oversized round mirror framed in softly curved walnut.",
    material: "Glass · Walnut",
    dimensions: "Ø 120 cm",
    colors: ["#5a3a2a"],
    warranty: "5 Years",
    rating: 4.9,
    price: "$420",
  },
  {
    slug: "terra-ceramic-vase",
    name: "Terra Ceramic Vase",
    category: "Objects",
    tagline: "Hand-thrown ceramic vase with a textured matte finish.",
    material: "Ceramic",
    dimensions: "40 × 25 cm",
    colors: ["#d9d3c5"],
    warranty: "1 Year",
    rating: 4.7,
    price: "$180",
  },
  {
    slug: "aire-wool-rug",
    name: "Aire Wool Rug",
    category: "Rugs",
    tagline: "Hand-knotted wool rug in soft, undyed ivory.",
    material: "100% Wool",
    dimensions: "200 × 300 cm",
    colors: ["#f5f5f5"],
    warranty: "5 Years",
    rating: 4.8,
    price: "$1,290",
  },
  {
    slug: "pli-brass-shelf",
    name: "Pli Brass Shelf",
    category: "Storage",
    tagline: "A single sheet of brass, folded into a minimal wall shelf.",
    material: "Solid Brass",
    dimensions: "80 × 20 × 15 cm",
    colors: ["#b08d57"],
    warranty: "Lifetime",
    rating: 4.9,
    price: "$890",
  },
  {
    slug: "soleil-wall-art",
    name: "Soleil Wall Art",
    category: "Art",
    tagline: "Textured plaster on canvas, capturing the shifting light.",
    material: "Plaster · Canvas",
    dimensions: "100 × 140 cm",
    colors: ["#faf9f6"],
    warranty: "1 Year",
    rating: 5.0,
    price: "$520",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
