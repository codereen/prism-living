import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16">

        <div className="grid gap-16 lg:grid-cols-4">

          <div>
            <h2 className="text-4xl font-black">PRISM.</h2>

            <p className="mt-6 leading-8 text-neutral-400">
              One light. Many traditions.
              Furniture inspired by cultures around the world.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-bold">Explore</h3>

            <div className="space-y-3 text-neutral-400">
              <Link to="/">Home</Link><br />
              <Link to="/shop">Shop</Link><br />
              <Link to="/#collections">Collections</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-bold">Collections</h3>

            <div className="space-y-3 text-neutral-400">
              <p>India</p>
              <p>Japan</p>
              <p>Morocco</p>
              <p>Turkey</p>
              <p>Korea</p>
              <p>France</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-bold">Project</h3>

            <p className="leading-8 text-neutral-400">
              Software Engineering Portfolio Project
              <br />
              Torrens University Australia
            </p>
          </div>

        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8 text-sm text-neutral-500">
          © 2026 Prism Living. Designed & developed by Afreen Fatima Syeda.
        </div>

      </div>
    </footer>
  );
}

export default Footer;