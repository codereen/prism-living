import { Link } from "react-router-dom";

type Product = {
  id: number;
  slug: string;
  name: string;
  collection: string;
  category: string;
  price: number;
  image: string;
};

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
    >
      <article className="overflow-hidden">

        <div className="overflow-hidden rounded-[32px] bg-[#F2EEE6]">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-contain p-10 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-6">

          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
            {product.collection}
          </p>

          <div className="flex items-start justify-between gap-6">

            <div>
              <h3 className="text-3xl font-semibold tracking-tight">
                {product.name}
              </h3>

              <p className="mt-2 text-neutral-500">
                {product.category}
              </p>
            </div>

            <p className="text-lg font-semibold">
              ${product.price}
            </p>

          </div>

        </div>

      </article>
    </Link>
  );
}

export default ProductCard;