import type { StaticImageData } from "next/image";

import accountingImage from "../../../public/portfolio/accounting.webp";
import cleaningImage from "../../../public/portfolio/cleaning.webp";
import constructionImage from "../../../public/portfolio/construction.webp";
import dentistImage from "../../../public/portfolio/dentist.webp";
import fashionImage from "../../../public/portfolio/fashion.webp";
import furnitureImage from "../../../public/portfolio/furniture.webp";
import motorcycleImage from "../../../public/portfolio/motorcycle.webp";
import realestateImage from "../../../public/portfolio/realestate.webp";
import restaurantImage from "../../../public/portfolio/restaurant.webp";
import salonImage from "../../../public/portfolio/salon.webp";
import skincareImage from "../../../public/portfolio/skincare.webp";
import skincare2Image from "../../../public/portfolio/skincare2.webp";

export type PortfolioProject = {
  id: string;
  /** The real brand name shown as the card title. */
  name: string;
  /** Short industry chip shown above the title. */
  industry: string;
  /** One or two lines describing the website, shown under the title. */
  tagline: string;
  /** Live website, opened in a new tab. */
  url: string;
  image: StaticImageData;
  alt: string;
  accentClass: string;
  ringClass: string;
};

/**
 * Real past projects by Hanifah Studio. Every entry is a live website,
 * so each card links out to the real thing instead of a mockup.
 *
 * To add a project: drop an optimized webp into public/portfolio,
 * import it here, and add one entry to the array.
 */
export const PROJECTS: PortfolioProject[] = [
  {
    id: "cerulea-pools",
    name: "Cerulea Pools",
    industry: "Pool Design & Construction",
    tagline:
      "A complete website for a custom pool company in Austin, covering design, construction, maintenance plans, and honest quote requests.",
    url: "https://cerulea.space-z.ai/",
    image: cleaningImage,
    alt: "Multi device preview of the Cerulea Pools website, a pool design and care company in Austin, Texas",
    accentClass: "bg-[#ddf0fa] text-[#0d7490]",
    ringClass: "hover:ring-[#8fd8f2]",
  },
  {
    id: "stonemark",
    name: "Stonemark Build Group",
    industry: "Commercial Construction",
    tagline:
      "A confident website for a Denver design build contractor, with services, past projects, and a clear process from bid to building.",
    url: "https://stonemark.space-z.ai/",
    image: constructionImage,
    alt: "Multi device preview of the Stonemark Build Group website, a commercial construction firm in Denver",
    accentClass: "bg-[#e6e8ee] text-[#4a5568]",
    ringClass: "hover:ring-[#c3c9d6]",
  },
  {
    id: "ember-and-oak",
    name: "Ember & Oak",
    industry: "Restaurant & Coffee House",
    tagline:
      "A warm, fire lit website for a wood fired kitchen and coffee house in Portland, with menus, opening hours, and table booking.",
    url: "https://resturantember.space-z.ai/",
    image: restaurantImage,
    alt: "Multi device preview of the Ember and Oak website, a wood fired restaurant and coffee house in Portland",
    accentClass: "bg-[#f9e0d4] text-[#b3401f]",
    ringClass: "hover:ring-[#f2b59b]",
  },
  {
    id: "cedar-health",
    name: "Cedar Health Clinic",
    industry: "Family Healthcare",
    tagline:
      "A friendly clinic website built around forty years of family care, with departments, doctors, and simple appointment booking.",
    url: "https://dentisthealth.space-z.ai/",
    image: dentistImage,
    alt: "Multi device preview of the Cedar Health Clinic website, a family healthcare practice",
    accentClass: "bg-[#ddf3e4] text-[#177a48]",
    ringClass: "hover:ring-[#9bdcb4]",
  },
  {
    id: "olisse",
    name: "Olisse",
    industry: "Hair & Beauty Salon",
    tagline:
      "A calm, light filled salon site for a Charleston team, with services and prices, styling ideas, and online chair booking.",
    url: "https://hairandsalon.space-z.ai/#/",
    image: salonImage,
    alt: "Multi device preview of the Olisse salon website, a hair and beauty studio in Charleston",
    accentClass: "bg-[#e9edda] text-[#5c6b32]",
    ringClass: "hover:ring-[#c6d29a]",
  },
  {
    id: "solemarch",
    name: "Solemarch",
    industry: "Footwear Store",
    tagline:
      "A clean online store for sneakers, runners, and everyday shoes in Lagos, with product pages, weekly deals, and delivery across Nigeria.",
    url: "https://fashion.space-z.ai/",
    image: fashionImage,
    alt: "Multi device preview of the Solemarch website, an online footwear store in Lagos",
    accentClass: "bg-[#f9e3e3] text-[#b42b2b]",
    ringClass: "hover:ring-[#f0b0b0]",
  },
  {
    id: "serein",
    name: "Serein Spa & Wellness",
    industry: "Spa & Wellness",
    tagline:
      "A quiet, restful website for a Lagos spa, with treatment menus, the story behind the rooms, and a free consultation booking.",
    url: "https://serein.space-z.ai/",
    image: skincareImage,
    alt: "Multi device preview of the Serein Spa and Wellness website, a day spa in Lagos",
    accentClass: "bg-[#f7e6ee] text-[#a13a6e]",
    ringClass: "hover:ring-[#eeb3cd]",
  },
  {
    id: "ledgerwell",
    name: "Ledgerwell",
    industry: "Accounting & Tax",
    tagline:
      "A clear, trustworthy website for an independent accounting firm in Ohio, explaining bookkeeping, tax, payroll, and advisory in plain words.",
    url: "https://ledgerwellaccounting.space-z.ai/",
    image: accountingImage,
    alt: "Multi device preview of the Ledgerwell website, an accounting and advisory firm in Ohio",
    accentClass: "bg-[#dcf1ea] text-[#0d6e5c]",
    ringClass: "hover:ring-[#95d6c4]",
  },
  {
    id: "woodora",
    name: "Woodora Kitchens",
    industry: "Modular Kitchens",
    tagline:
      "A studio website for modular kitchen design and installation, with project galleries, core values, and a free design consultation.",
    url: "https://furniturekitchen.space-z.ai/",
    image: furnitureImage,
    alt: "Multi device preview of the Woodora Kitchens website, a modular kitchen design studio",
    accentClass: "bg-[#f6e8d6] text-[#925c12]",
    ringClass: "hover:ring-[#e4c896]",
  },
  {
    id: "cinder-ridge",
    name: "Cinder Ridge MX Park",
    industry: "Motocross Park",
    tagline:
      "An energetic website for a family run motocross park in California, with track info, rider classes, a race series, and merch.",
    url: "https://mortocycle.space-z.ai/",
    image: motorcycleImage,
    alt: "Multi device preview of the Cinder Ridge MX Park website, a motocross park in California",
    accentClass: "bg-[#efe0d1] text-[#a34e0e]",
    ringClass: "hover:ring-[#dcba94]",
  },
  {
    id: "haven-crest",
    name: "Haven Crest Realty",
    industry: "Real Estate Brokerage",
    tagline:
      "A warm, trustworthy website for an independent brokerage in Austin, with featured properties, recent sales, and a team that answers the phone.",
    url: "https://realestatehomeconstruction.space-z.ai/",
    image: realestateImage,
    alt: "Multi device preview of the Haven Crest Realty website, a real estate brokerage in Austin, Texas",
    accentClass: "bg-[#d9edec] text-[#0f6a68]",
    ringClass: "hover:ring-[#93d3d0]",
  },
  {
    id: "amara",
    name: "Amara Beauty & Spa",
    industry: "Beauty Salon & Spa",
    tagline:
      "A calm, elegant website for a salon and spa in Lekki, Lagos, covering hair, nails, facials, massage, and makeup, with honest prices throughout.",
    url: "https://beautyskincare.space-z.ai/",
    image: skincare2Image,
    alt: "Multi device preview of the Amara Beauty and Spa website, a beauty salon and spa in Lekki, Lagos",
    accentClass: "bg-[#efe3f3] text-[#7d4494]",
    ringClass: "hover:ring-[#d5b3e0]",
  },
];
