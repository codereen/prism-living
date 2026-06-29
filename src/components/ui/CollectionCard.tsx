import type { Collection } from "../../types/collection";

interface CollectionCardProps {
  collection: Collection;
}

function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <article className="group relative h-[520px] cursor-pointer overflow-hidden rounded-3xl">
      <img
        src={collection.image}
        alt={collection.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 p-8 text-white transition-all duration-500 group-hover:translate-y-[-8px]">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-300">
          Collection
        </p>

        <h3 className="text-4xl font-semibold">
          {collection.title}
        </h3>

        <p className="mt-4 max-w-xs leading-7 text-gray-200">
          {collection.description}
        </p>

        <div className="mt-8 text-3xl transition-transform duration-500 group-hover:translate-x-2">
          →
        </div>
      </div>
    </article>
  );
}

export default CollectionCard;