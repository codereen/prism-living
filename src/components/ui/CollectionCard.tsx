import { Link } from "react-router-dom";
import type { Collection } from "../../types/collection";

interface CollectionCardProps {
  collection: Collection;
}

function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link to={`/collections/${collection.slug}`}>
      <article className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <div className="overflow-hidden">
          <img
            src={collection.image}
            alt={collection.title}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-8">

          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
            {collection.tagline}
          </p>

          <h3 className="text-4xl font-black">
            {collection.title}
          </h3>

          <div className="mt-6 flex items-center gap-2 text-[#F45A2A] transition-all group-hover:gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Explore
            </span>

            <span>→</span>
          </div>

        </div>

      </article>
    </Link>
  );
}

export default CollectionCard;