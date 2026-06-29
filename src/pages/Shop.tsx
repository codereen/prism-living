import { Link } from "react-router-dom";
import { products } from "../data/products";
function Shop() {
  return (
    <main className="min-h-screen bg-[#F8F5EE]">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          132 Pieces • 6 Traditions
        </p>

        <h1 className="mt-3 text-6xl font-black">
          Shop everything
        </h1>

        <div className="mt-12 grid grid-cols-[260px_1fr] gap-12">

          {/* Sidebar */}
          <aside>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.3em]">
              Tradition
            </h3>

            <div className="space-y-4">
              <p>Japan</p>
              <p>Morocco</p>
              <p>India</p>
              <p>Korea</p>
              <p>Turkey</p>
              <p>France</p>
            </div>
          </aside>

          {/* Products */}
          <section className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
  {products.map((product) => (
    <Link
  key={product.id}
  to={`/products/${product.slug}`}
>
  <article>
      <div className="rounded-2xl bg-[#F2EEE6] p-8">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-contain"
        />
      </div>

      <div className="mt-5 flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold">{product.name}</h3>

          <p className="text-neutral-500">
            {product.category} · {product.collection}
          </p>
        </div>

        <p className="font-semibold">
          ${product.price}
        </p>
      </div>
    </article>
    </Link>
  ))}
</section>

        </div>

      </div>
    </main>
  );
}

export default Shop;