export interface Collection {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;

  featuredProduct: {
    name: string;
    category: string;
    image: string;
  };
}