
import { products } from "../data/products";
import ProductCard from "../components/shop/ProductCard";
import PageHeader from "../components/ui/PageHeader";

function Shop() {
    return (
        <main className="min-h-screen bg-[#F8F5EE]">
            <div className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16">

                <PageHeader
                    eyebrow="132 Pieces • 6 Traditions"
                    title="Shop everything"
                    description="Browse every Prism collection and customise pieces inspired by cultures around the world."
                />
                <div className="mb-12 flex flex-wrap gap-2">
                    {[
                        "Tradition",
                        "Room",
                        "Material",
                        "Colour",
                        "Price",
                        "Customisable",
                    ].map((filter) => (
                        <button
                            key={filter}
                            className="rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium transition hover:border-black"
                        >
                            {filter}
                        </button>
                    ))}
                </div>


                <div className="mt-16 grid grid-cols-[280px_1fr] gap-20">

                    {/* Sidebar */}
                    <aside className="sticky top-28 h-fit w-[280px] shrink-0">

    <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-neutral-900">
        Collections
    </h3>

    <div className="border-t border-neutral-300">

        {[
            "All",
            "India",
            "Japan",
            "Morocco",
            "Turkey",
            "Korea",
            "France",
        ].map((collection) => (
            <button
                key={collection}
                className="flex w-full items-center justify-between border-b border-neutral-300 py-3 text-left text-[15px] transition hover:pl-2 hover:font-semibold"
            >
                <span>{collection}</span>
                <span className="text-neutral-400">+</span>
            </button>
        ))}

    </div>

</aside>

                    {/* Products */}
                    <section className="grid gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </section>

                </div>

            </div>
        </main>
    );
}

export default Shop;