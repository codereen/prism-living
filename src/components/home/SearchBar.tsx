import { Search } from "lucide-react";

function SearchBar() {
  return (
    <section className="bg-[#F8F5EE] py-6">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        <div className="relative">

          <Search
            className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400"
            size={22}
          />

          <input
            type="text"
            placeholder="Search products, rooms, traditions..."
            className="w-full rounded-full border border-neutral-300 bg-white py-5 pl-16 pr-6 text-lg outline-none transition focus:border-[#F45A2A]"
          />

        </div>

      </div>
    </section>
  );
}

export default SearchBar;