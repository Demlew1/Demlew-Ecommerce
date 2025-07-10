import cart from "../../assets/images/cart.png";

type LogoProps = {
  textColor?: string;
};

export default function Logo({ textColor = "text-teal-950" }: LogoProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <img src={cart} alt="cart" className="w-8 h-8 md:w-10 md:h-10" />
      <p className={`text-xl md:text-2xl font-['Wallpoet'] ${textColor}`}>
        DEMLEW
      </p>
    </div>
  );
}
