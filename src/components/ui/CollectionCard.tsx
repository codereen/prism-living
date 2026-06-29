import { Link } from "react-router-dom";
import type { Collection } from "../../types/collection";

interface CollectionCardProps {
  collection: Collection;
}

function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link to={`/collections/${collection.slug}`}>
  <article className="group relative aspect-[4/5] overflow-hidden rounded-[28px] cursor-pointer">
      <img
        src={collection.image}
        alt={collection.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 p-8 text-white">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-stone-300">
          {collection.tagline}
        </p>

        <h3 className="text-5xl font-semibold">
          {collection.title}
        </h3>

        <div className="mt-8 flex items-center gap-2 overflow-hidden transition-all duration-300 group-hover:gap-5">
          <span className="text-sm uppercase tracking-[0.2em]">
            Explore
          </span>

          <span className="translate-x-[-12px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
  →
</span>
        </div>
      </div>
    </article>
    </Link>
  );
}

export default CollectionCard;