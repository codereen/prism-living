import HeroContent from "./HeroContent";
import HeroCollage from "./HeroCollage";

function HeroCard() {
  return (
    <section className="bg-[#F8F5EE] py-4">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        <div className="overflow-hidden rounded-[34px] bg-[bg-[#F05A28]]">

          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <HeroContent />

            <HeroCollage />

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroCard;