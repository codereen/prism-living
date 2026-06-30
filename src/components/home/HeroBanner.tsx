function HeroBanner() {
  return (
    <section className="bg-[#F8F5EE] pt-8 pb-8">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        {/* Search */}

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products, rooms, traditions..."
            className="w-full rounded-full border border-neutral-300 bg-white px-7 py-4 text-lg outline-none placeholder:text-neutral-400"
          />
        </div>

        {/* Hero Card */}

        <div className="rounded-[36px] bg-[#F45A2A] p-10">

          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}

            <div className="text-white">

              <p className="mb-5 text-sm uppercase tracking-[0.35em]">
                A NEW SPECTRUM OF LIVING · FALL / WINTER 2026
              </p>

              <h1 className="text-7xl font-black leading-[0.9] xl:text-8xl">
                PRISM.
                <br />
                PRISM.
                <br />
                PRISM.
              </h1>

              <p className="mt-8 max-w-xl text-xl leading-9">
                One light. Many traditions. IKEA Prism takes everything you
                love about IKEA—affordable, flat-pack, well-made—and opens it
                up to designers and craft from every corner of the world.
              </p>

              <button className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
                SHOP THE COLLECTION →
              </button>

            </div>

            {/* RIGHT */}

            <div className="rounded-[28px] bg-[#E44F23] h-[600px] flex items-center justify-center">

              <p className="text-2xl font-semibold text-white">
                Product Collage
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroBanner;