import type { Collection } from "../types/collection";

import india from "../assets/images/collections/indiastyled.png";
import japan from "../assets/images/collections/japanstyled.png";
import morocco from "../assets/images/collections/moroccostyled.png";
import turkey from "../assets/images/collections/turkeystyled.png";
import korea from "../assets/images/collections/koreastyled.png";
import france from "../assets/images/collections/frenchstyled.png";

export const collections: Collection[] = [
  {
    id: 1,
    slug: "india",
    title: "India",
    tagline: "Heritage craftsmanship",
    image: india,
  },
  {
    id: 2,
    slug: "japan",
    title: "Japan",
    tagline: "Zen minimalism",
    image: japan,
  },
  {
    id: 3,
    slug: "morocco",
    title: "Morocco",
    tagline: "Bold textures",
    image: morocco,
  },
  {
    id: 4,
    slug: "turkey",
    title: "Turkey",
    tagline: "Timeless elegance",
    image: turkey,
  },
  {
    id: 5,
    slug: "korea",
    title: "Korea",
    tagline: "Modern serenity",
    image: korea,
  },
  {
    id: 6,
    slug: "france",
    title: "France",
    tagline: "Contemporary luxury",
    image: france,
  },
];