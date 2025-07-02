import prada from "../../assets/images/prada.svg";
import gucci from "../../assets/images/gucci.svg";
import jordan from "../../assets/images/jordan.svg";
import zara from "../../assets/images/zara.svg";
import chanel from "../../assets/images/chanel.svg";
function Sponsors() {
  return (
    <div className="flex flex-row gap-4 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-36 justify-center items-center  bg-cyan-950">
      <img
        className="size-14 sm:size-18 md:size-24 xl:size-28 invert"
        src={prada}
        alt="prada's logo"
      />
      <img
        className="size-12 sm:size-16 md:size-22 xl:size-26 invert"
        src={gucci}
        alt="gucci's logo"
      />
      <img
        className="size-8 sm:size-10 md:size-14 xl:size-18 invert"
        src={jordan}
        alt="jordan's logo"
      />
      <img
        className="size-8 invert sm:size-10 md:size-14 xl:size-24"
        src={zara}
        alt="zara's logo"
      />
      <img
        className="size-16 sm:size-18 md:size-24 xl:size-28 invert"
        src={chanel}
        alt="chanel's logo"
      />
    </div>
  );
}

export default Sponsors;
