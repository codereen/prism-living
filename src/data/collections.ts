import type { Collection } from "../types/collection";

import india from "../assets/images/collections/indiastyled.png";
import japan from "../assets/images/collections/japanstyled.png";
import morocco from "../assets/images/collections/moroccostyled.png";
import turkey from "../assets/images/collections/turkeystyled.png";
import korea from "../assets/images/collections/koreastyled.png";
import france from "../assets/images/collections/frenchstyled.png";

import indiaProduct from "../assets/images/products/india.png";
import japanProduct from "../assets/images/products/japbed.png";
import moroccoProduct from "../assets/images/products/mortable.png";
import turkeyProduct from "../assets/images/products/turkey.png";
import koreanProduct from "../assets/images/products/korean.png";
import frenchProduct from "../assets/images/products/french.png";

export const collections: Collection[] = [
  {
    id: 1,
    slug: "india",
    title: "India",
    tagline: "Heritage craftsmanship",
    description:
    "Inspired by centuries of Indian craftsmanship, this collection combines carved timber, woven textures and warm earthy tones to create spaces rich in culture and comfort.",
    image: india,

    featuredProduct: {
  name: "Rang",
  category: "Lounge",
  image: indiaProduct,
},
  },
  {
    id: 2,
    slug: "japan",
    title: "Japan",
    tagline: "Zen minimalism",
    description:
    "Inspired by Japanese philosophy, this collection embraces simplicity, balance and natural materials. Clean lines and calming textures create peaceful spaces designed for everyday living.",
    image: japan,

    featuredProduct: {
  name: "Torii",
  category: "Bedroom",
  image: japanProduct,
},
  },
  {
    id: 3,
    slug: "morocco",
    title: "Morocco",
    tagline: "Bold textures",
    description:
    "Rich patterns, handcrafted details and vibrant textures define this collection, bringing warmth and character into contemporary interiors.",
    image: morocco,

    featuredProduct: {
  name: "Zafir",
  category: "Dining",
  image: moroccoProduct,
},
  },
  {
    id: 4,
    slug: "turkey",
    title: "Turkey",
    tagline: "Timeless elegance",
    description:
    "Blending Ottoman elegance with modern living, this collection features soft curves, luxurious fabrics and timeless craftsmanship.",
    image: turkey,

    featuredProduct: {
  name: "Kinar",
  category: "Living",
  image: turkeyProduct,
},
  },
  {
    id: 5,
    slug: "korea",
    title: "Korea",
    tagline: "Modern serenity",
    description:
    "Minimal yet inviting, this collection reflects contemporary Korean interiors with light woods, soft neutrals and refined simplicity.",
    image: korea,

    featuredProduct: {
  name: "Haean",
  category: "Workspace",
  image: koreanProduct,
},
  },
  {
    id: 6,
    slug: "france",
    title: "France",
    tagline: "Contemporary luxury",
    description:
    "Inspired by Parisian apartments and modern French interiors, this collection balances sophistication with effortless everyday comfort.",
    image: france,

    featuredProduct: {
  name: "Riviera",
  category: "Outdoor",
  image: frenchProduct,
},
  },
];