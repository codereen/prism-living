import type { Collection } from "../../types/collection";

interface CollectionCardProps {
  collection: Collection;
}

function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl">
      <img
        src={collection.image}
        alt={collection.title}
        className="h-96 w-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="absolute bottom-0 p-8 text-white">
        <h3 className="text-2xl font-semibold">
          {collection.title}
        </h3>

        <p className="mt-2 text-gray-200">
          {collection.description}
        </p>
      </div>
    </article>
  );
}

export default CollectionCard;