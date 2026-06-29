import Container from "../ui/Container";
import CollectionCard from "../ui/CollectionCard";
import { collections } from "../../data/collections";

function FeaturedCollections() {
  return (
    <section className="bg-[#faf8f3] py-24">
      <Container>
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Explore
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Featured Collections
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Curated furniture collections inspired by cultures from around the
            world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedCollections;