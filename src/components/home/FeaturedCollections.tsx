import { collections } from "../../data/collections";
import CollectionCard from "../ui/CollectionCard";

function FeaturedCollections() {
  return (
    <section
      id="collections"
      className="bg-[#F8F5EE] px-8 py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">

        <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#F45A2A]">
          SHOP BY TRADITION
        </p>

        <h2 className="mt-4 text-center text-6xl font-black">
          Discover cultures
          <br />
          through design.
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {collections.map((collection) => (
            <CollectionCard
              key={collection.slug}
              collection={collection}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedCollections;