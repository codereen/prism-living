import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/shop/ProductCard";
import pattern1 from "../assets/icons/zafir1.svg";
import pattern2 from "../assets/icons/zafir2.svg";
import pattern3 from "../assets/icons/zafir3.svg";

function ProductDetail() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-semibold">Product not found.</h1>
      </main>
    );
  }

  return (
    <main className="bg-[#F8F5EE]">
      <section className="mx-auto grid max-w-[1440px] gap-20 px-8 py-20 lg:grid-cols-2 lg:px-16">

        {/* Product Gallery */}

<div>

  <div className="overflow-hidden rounded-[32px] bg-[#F2EEE6]">
    <img
      src={product.image}
      alt={product.name}
      className="w-full object-cover"
    />
  </div>

  <div className="mt-10 rounded-[28px] bg-black p-10 text-[#F8F5EE]">

    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em]">
      The Story
    </p>

    <h2 className="text-5xl font-black leading-none">
      Crafted in {product.collection}.
      <br />
      Built for today.
    </h2>

    <p className="mt-6 max-w-xl text-neutral-300 leading-8">
      Inspired by traditional craftsmanship and reimagined for modern living,
      every Prism piece celebrates its cultural origins while remaining
      affordable, flat-packed and easy to customise.
    </p>

  </div>

</div>

        {/* Product Details */}

        <div className="flex flex-col justify-center">

<p className="mb-10 text-sm text-neutral-500">
  Shop / {product.collection} / {product.category} /{" "}
  <span className="text-[#F45A2A]">{product.name}</span>
</p>
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            {product.collection}
          </p>

          <h1 className="mt-4 text-7xl font-black">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-3">

  <div className="text-[#F45A2A]">
    ★★★★★
  </div>

  <p className="text-sm text-neutral-500">
    4.8 · 142 reviews
  </p>

</div>

<p className="mt-4 text-lg text-neutral-500">
  {product.category}
</p>

          <p className="mt-10 max-w-xl text-lg leading-9 text-neutral-700">
            {product.description}
          </p>

          <div className="mt-10">

            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Material
            </p>

            <p className="mt-3 text-xl">
              {product.material}
            </p>

          </div>

          <div className="mt-12 flex items-center gap-6">

            <p className="text-4xl font-bold">
              ${product.price}
            </p>

            <button className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-neutral-800">
              Customise with AI
            </button>

          </div>
          <hr className="my-12 border-neutral-300" />

          <div>

  <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em]">
    Pattern
  </p>

  <div className="grid grid-cols-3 gap-5">

  {[
    {
      name: "Classic",
      image: pattern1,
    },
    {
      name: "Modern",
      image: pattern2,
    },
    {
      name: "Minimal",
      image: pattern3,
    },
  ].map((option, index) => (

    <button
      key={option.name}
      className={`rounded-xl border bg-white p-4 transition hover:border-[#F45A2A] ${
  index === 0
    ? "border-[#F45A2A] ring-1 ring-[#F45A2A]"
    : "border-neutral-300"
}`}
    >
      <img
        src={option.image}
        alt={option.name}
        className="mx-auto h-12 w-12 object-contain"
      />

      <p className="mt-3 text-sm font-semibold text-center">
  {option.name}
</p>
    </button>

  ))}

  <div className="mt-10">

  <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em]">
    Timber
  </p>

  <div className="flex gap-6">

    <button className="flex flex-col items-center gap-2">
      <div className="h-10 w-10 rounded-full border-2 border-black bg-[#5C3A21]" />
      <span className="text-sm">Walnut</span>
    </button>

    <button className="flex flex-col items-center gap-2">
      <div className="h-10 w-10 rounded-full border border-neutral-300 bg-[#D2B48C]" />
      <span className="text-sm text-neutral-500">Oak</span>
    </button>

  </div>

</div>

<div className="mt-12">

  <div className="flex items-center gap-4">

    <div className="flex items-center rounded-full border border-neutral-300">

      <button className="px-5 py-3 text-xl">
        −
      </button>

      <span className="w-8 text-center font-semibold">
        1
      </span>

      <button className="px-5 py-3 text-xl">
        +
      </button>

    </div>

    <button className="flex-1 rounded-full bg-black py-4 font-semibold text-white transition hover:bg-neutral-800">
      Add to Bag · ${product.price}
    </button>

  </div>

  <button className="mt-5 w-full rounded-full border border-neutral-300 py-4 font-medium transition hover:border-black">
    ♡ Save to Wishlist
  </button>

</div>

</div>

</div>

        </div>

      </section>

<section className="mx-auto mt-10 max-w-[1440px] px-8 pb-24 lg:px-16">

  <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-neutral-500">
    You may also like
  </p>

  <h2 className="mb-12 text-5xl font-black">
    Complete the collection.
  </h2>

  <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">

    {products
      .filter((p) => p.slug !== product.slug)
      .slice(0, 4)
      .map((item) => (
        <ProductCard
          key={item.id}
          product={item}
        />
      ))}

  </div>

</section>

</main>
  );
}

export default ProductDetail;