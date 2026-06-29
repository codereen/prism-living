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
    title: "India",
    tagline: "Heritage craftsmanship",
    image: india,
  },
  {
    id: 2,
    title: "Japan",
    tagline: "Zen minimalism",
    image: japan,
  },
  {
    id: 3,
    title: "Morocco",
    tagline: "Bold textures",
    image: morocco,
  },
  {
    id: 4,
    title: "Turkey",
    tagline: "Timeless elegance",
    image: turkey,
  },
  {
    id: 5,
    title: "Korea",
    tagline: "Modern serenity",
    image: korea,
  },
  {
    id: 6,
    title: "France",
    tagline: "Contemporary luxury",
    image: france,
  },
];