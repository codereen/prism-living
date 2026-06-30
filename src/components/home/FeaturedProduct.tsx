import japan from "../../assets/images/products/japbed.png";
import { Link } from "react-router-dom";

function FeaturedProduct() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-20 px-8 lg:grid-cols-2 lg:px-16">

        <div className="rounded-[32px] bg-[#F8F5EE] p-16">
          <img
            src={japan}
            alt="Torii Bed"
            className="mx-auto h-[500px] object-contain"
          />
        </div>

        <div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#F45A2A]">
            FEATURED PRODUCT
          </p>

          <h2 className="text-6xl font-black">
            Torii
          </h2>

          <p className="mt-8 text-xl leading-9 text-neutral-600">
            Inspired by traditional Japanese interiors, Torii combines calm
            proportions, natural timber and modern comfort into a timeless bed
            frame.
          </p>

          <p className="mt-10 text-5xl font-black">
            $699
          </p>

          <Link
            to="/products/torii"
            className="mt-10 inline-block rounded-full bg-[#F45A2A] px-8 py-4 font-semibold text-white transition hover:bg-[#dd4d21]"
          >
            View Product →
          </Link>

        </div>

      </div>
    </section>
  );
}

export default FeaturedProduct;