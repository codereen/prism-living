import { useParams } from "react-router-dom";
import { collections } from "../data/collections";

function CollectionDetail() {
  const { slug } = useParams();

  const collection = collections.find(
    (collection) => collection.slug === slug
  );

  if (!collection) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl">Collection not found.</h1>
      </main>
    );
  }

  return (
    
    <main className="bg-[#faf8f3]">
      <section className="relative h-screen overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-24 left-20 text-white">
          <p className="mb-4 uppercase tracking-[0.35em]">
            Collection
          </p>

          <h1 className="text-7xl font-semibold">
            {collection.title}
          </h1>

          <p className="mt-6 max-w-xl text-xl">
            {collection.tagline}
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-16 px-8 py-24 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-600">
            Inspired by Tradition
          </p>

          <h2 className="text-5xl font-semibold leading-tight">
            The story behind
            <br />
            {collection.title}.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-9 text-neutral-700">
  {collection.description}
</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-8 py-24 lg:grid-cols-2 lg:px-12">
  <div className="rounded-3xl bg-[#F4F1EA] p-12">
    <img
      src={collection.featuredProduct.image}
      alt={collection.featuredProduct.name}
      className="mx-auto h-[520px] object-contain"
    />
  </div>

  <div>
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-600">
      Featured Piece
    </p>

    <h2 className="text-5xl font-semibold">
      {collection.featuredProduct.name}
    </h2>

    <p className="mt-4 text-xl text-neutral-500">
      {collection.featuredProduct.category}
    </p>

    <p className="mt-8 max-w-lg leading-8 text-neutral-700">
      Designed exclusively for the {collection.title} collection, this piece
      combines authentic cultural inspiration with contemporary craftsmanship
      to create timeless interiors.
    </p>

    <div className="mt-10 flex gap-4">
      <button className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-neutral-800">
        Customise with AI
      </button>

      <button className="rounded-full border border-neutral-300 px-8 py-4 transition hover:bg-neutral-100">
        Save
      </button>
    </div>
  </div>
</section>
    </main>
  );
}

export default CollectionDetail;