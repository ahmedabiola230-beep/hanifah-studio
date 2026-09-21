import { MockLumiere, MockNorthstar, MockElara } from "./mockups";

export type ConceptProject = {
  id: string;
  name: string;
  industry: string;
  tagline: string;
  description: string[];
  features: string[];
  mock: React.ReactNode;
  accentClass: string;
  ringClass: string;
  ariaLabel: string;
};

/**
 * The three portfolio projects. All of them are concept (demo) projects,
 * clearly labelled as such wherever they appear. As real client work is
 * completed, entries here can be replaced or extended.
 *
 * TODO(Hanifah): swap these for real client projects over time.
 */
export const PROJECTS: ConceptProject[] = [
  {
    id: "lumiere",
    name: "Lumière Skin",
    industry: "Premium Skincare · Ecommerce",
    tagline: "A calm, editorial shopping experience that lets the products do the talking.",
    description: [
      "Lumière Skin is a concept for a premium skincare brand that wants to feel like a boutique, not a warehouse. Warm cream tones, soft blush accents, and fine gold details let the photography and the type carry the elegance.",
      "The page opens with a quiet brand statement, then walks shoppers through a curated bestseller grid. The whole path from inspiration to checkout stays short and pleasant.",
    ],
    features: [
      "Editorial hero with a soft, luxurious palette",
      "Product grid with clear pricing",
      "Shopping bag that follows the shopper",
      "Spacing and type tuned for a premium feel",
    ],
    mock: <MockLumiere />,
    accentClass: "bg-[#f3e8e0] text-[#8a5a44]",
    ringClass: "hover:ring-[#e3c2b3]",
    ariaLabel: "Concept preview of the Lumière Skin website, a premium skincare ecommerce design with cream and blush tones",
  },
  {
    id: "northstar",
    name: "Northstar Creative",
    industry: "Creative Agency · Brand Studio",
    tagline: "Bold, high contrast design that makes the agency look confident and modern.",
    description: [
      "Northstar Creative is a concept for a brand studio that needed its website to prove the thing it sells. Bold ideas, executed with energy. The near black canvas and the electric amber accent make every headline feel like a statement.",
      "A scrolling services strip adds motion without clutter, and a compact case study grid shows range at a glance. Restraint and impact, sharing one page.",
    ],
    features: [
      "Oversized headlines with strong contrast",
      "A moving marquee strip for services",
      "Case study cards with clear tags",
      "Dark theme built for focus",
    ],
    mock: <MockNorthstar />,
    accentClass: "bg-[#1c1a14] text-[#f5a623]",
    ringClass: "hover:ring-[#f5a623]/40",
    ariaLabel: "Concept preview of the Northstar Creative website, a dark and bold creative agency design with amber accents",
  },
  {
    id: "elara",
    name: "Maison Elara",
    industry: "Fashion Boutique · Lookbook",
    tagline: "Quiet luxury through generous whitespace, serif type, and a measured pace.",
    description: [
      "Maison Elara is a concept for an elegant fashion boutique with a seasonal lookbook. Ivory backgrounds, letter spaced serif headings, and a restrained palette make browsing feel like leafing through a printed magazine.",
      "The lookbook grid staggers its imagery like an editorial spread, drawing the eye from look to look. A slow, deliberate pace that suits fashion worth considering.",
    ],
    features: [
      "Full width seasonal collection hero",
      "A staggered editorial lookbook grid",
      "Serif typography for a couture feel",
      "Navigation that never fights the imagery",
    ],
    mock: <MockElara />,
    accentClass: "bg-[#ece7dc] text-[#5c554a]",
    ringClass: "hover:ring-[#b9ac9a]",
    ariaLabel: "Concept preview of the Maison Elara website, an elegant ivory fashion boutique design with an editorial lookbook",
  },
];
