import heroImage from "../../assets/images/HeroImg.svg";
export default function Hero() {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:gap-6 lg:gap-16 sm:items-start sm:justify-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <p className="font-['Rubik'] w-70 sm:w-80 lg:w-100 text-gray-900 font-bold text-3xl text-center mx-3 mt-10 uppercase  sm:text-4xl ">
          Discover top quality products at unbeatable prices.
        </p>
        <button className="bg-cyan-950 text-white font-['Rubik'] text-xs w-60 p-3 hover:bg-white hover:text-gray-900 hover:border-1 hover:border-cyan-950 hover:cursor-pointer">
          Shop Now
        </button>
      </div>
      <img src={heroImage} alt="hero" className="size-100 md:size-120" />
    </div>
  );
}
