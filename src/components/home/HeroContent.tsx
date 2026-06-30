import HeroCTA from "./HeroCTA";

function HeroContent() {
  return (
    <div className="flex h-full flex-col justify-between bg-[#F05A28] p-16 text-white">
      <div>
        <p className="mb-6 text-sm uppercase tracking-[0.35em]">
          A NEW SPECTRUM OF LIVING • FALL / WINTER 2026
        </p>

        <h1 className="text-[5rem] font-black leading-[0.78] xl:text-[7rem]">
          PRISM.
          <br />
          PRISM.
          <br />
          PRISM.
        </h1>

        <p className="mt-10 max-w-lg text-xl leading-9 text-white/90">
          One light. Many traditions. IKEA Prism brings together global
          craftsmanship and modern Scandinavian living.
        </p>
      </div>

      <HeroCTA />
    </div>
  );
}

export default HeroContent;