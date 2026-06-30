import Container from "../ui/Container";
import CollectionCard from "../ui/CollectionCard";
import { collections } from "../../data/collections";

function FeaturedCollections() {
  return (
    <section id="collections"> 
    <section className="bg-[#faf8f3] py-24">
      <Container>
     <div className="mb-16 text-center">
  <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
    COLLECTIONS
  </p>

  <h2 className="mt-4 text-5xl font-semibold text-neutral-900">
    Discover cultures through design.
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
    Discover furniture collections inspired by cultures around the world,
    thoughtfully reimagined for modern living.
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
    </section>
  );
}

export default FeaturedCollections;