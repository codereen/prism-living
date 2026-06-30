import HeroCTA from "./HeroCTA";

function HeroContent() {
  return (
    <div className="flex flex-col justify-between p-14 text-white">

      <div>

        <p className="mb-6 text-sm uppercase tracking-[0.35em]">
          A NEW SPECTRUM OF LIVING • FALL / WINTER 2026
        </p>

        <h1 className="text-[6rem] font-black leading-[0.85] xl:text-[7.5rem]">
          PRISM.
          <br />
          PRISM.
          <br />
          PRISM.
        </h1>

        <p className="mt-8 max-w-md text-xl leading-9">
          One light. Many traditions. IKEA Prism brings together
          global craftsmanship and modern Scandinavian living.
        </p>

      </div>

      <HeroCTA />

    </div>
  );
}

export default HeroContent;