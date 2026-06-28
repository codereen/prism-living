import type { Collection } from "../types/collection";

import livingRoom from "../assets/images/living-room.jpg";
import bedroom from "../assets/images/bedroom.jpg";
import dining from "../assets/images/dining.jpg";

export const collections: Collection[] = [
  {
    id: 1,
    title: "Living Room",
    description: "Spaces designed for gathering and comfort.",
    image: livingRoom,
  },
  {
    id: 2,
    title: "Bedroom",
    description: "Restful interiors inspired by global design.",
    image: bedroom,
  },
  {
    id: 3,
    title: "Dining",
    description: "Beautiful furniture made for shared moments.",
    image: dining,
  },
];