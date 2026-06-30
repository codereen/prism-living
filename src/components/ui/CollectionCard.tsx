import { Link } from "react-router-dom";
import type { Collection } from "../../types/collection";

interface CollectionCardProps {
  collection: Collection;
}

function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link to={`/collections/${collection.slug}`}>
      <div className="rounded-3xl bg-white p-8 shadow">
        <img
          src={collection.image}
          alt={collection.title}
          className="aspect-[4/5] w-full rounded-2xl object-cover"
        />

        <h3 className="mt-6 text-3xl font-bold">
          {collection.title}
        </h3>

        <p className="mt-2 text-neutral-500">
          {collection.tagline}
        </p>
      </div>
    </Link>
  );
}

export default CollectionCard;