import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col justify-center px-8 text-white">
        <h1 className="max-w-3xl text-6xl font-bold leading-tight">
          Furniture inspired by the world.
        </h1>

        <p className="mt-6 max-w-xl text-lg">
          Discover pieces that celebrate culture,
          creativity and personal expression.
        </p>

        <button className="mt-8 w-fit rounded-full bg-white px-8 py-3 text-black">
          Explore Collection
        </button>
      </div>
    </section>
  );
}

export default Hero;