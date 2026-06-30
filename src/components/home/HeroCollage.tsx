import heroPattern from "../../assets/images/collections/moroccostyled.png";
import india from "../../assets/images/products/india.png";
import japan from "../../assets/images/products/japbed.png";
import turkey from "../../assets/images/products/turkey.png";

function HeroCollage() {
  return (
    <div className="grid h-[620px] grid-cols-2 gap-4 bg-[#F8F5EE] p-4">
      <div className="overflow-hidden rounded-[28px]">
        <img
          src={heroPattern}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="overflow-hidden rounded-[28px] bg-[#E86A43]">
        <img
          src={india}
          alt=""
          className="h-full w-full object-contain p-8"
        />
      </div>

      <div className="overflow-hidden rounded-[28px] bg-[#E86A43]">
        <img
          src={japan}
          alt=""
          className="h-full w-full object-contain p-8"
        />
      </div>

      <div className="overflow-hidden rounded-[28px] bg-[#E86A43]">
        <img
          src={turkey}
          alt=""
          className="h-full w-full object-contain p-8"
        />
      </div>
    </div>
  );
}

export default HeroCollage;