import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/prism-logo-round.png";

function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-[#F8F5EE]">
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center px-8 lg:px-16">

        {/* Logo */}
<div className="w-1/4">
        <Link to="/">
          <img
            src={logo}
            alt="Prism Living"
            className="h-16 object-contain"
          />
        </Link>
        </div>

        {/* Navigation */}
<nav className="flex w-2/4 justify-center gap-12">
        <nav className="hidden items-center gap-12 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "font-semibold text-black"
                  : "text-neutral-600 hover:text-black"
              }`
            }
          >
            Home
          </NavLink>

<NavLink
    to="/#collections"
    className="text-neutral-600 hover:text-black transition"
  >
    Collections
  </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "font-semibold text-black"
                  : "text-neutral-600 hover:text-black"
              }`
            }
          >
            Shop
          </NavLink>
        </nav>
        </nav>

        {/* CTA */}
<div className="flex w-1/4 justify-end">
        <Link
          to="/shop"
          className="rounded-full bg-[#F45A2A] px-7 py-3 font-medium text-white transition hover:bg-[#dd4d21]"
        >
          Design Studio
        </Link>
</div>
      </div>
    </header>
  );
}

export default Navbar;