import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <h1 className="p-20 text-4xl">Product not found.</h1>;
  }

  return (
    <main className="min-h-screen bg-[#F8F5EE] p-12">
      <h1 className="text-6xl font-black">{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        className="mt-12 h-[600px] object-contain"
      />
    </main>
  );
}

export default ProductDetail;