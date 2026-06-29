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
    <Link to={`/products/${product.slug}`} className="group">
      <div className="overflow-hidden rounded-2xl bg-[#F2EEE6] transition duration-300 group-hover:shadow-xl">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-5 flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-black">{product.name}</h3>

          <p className="text-sm text-neutral-500">
            {product.category} · {product.collection}
          </p>

          <p className="mt-2 text-[#F97316]">
            ★★★★★
          </p>
        </div>

        <p className="font-bold">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;