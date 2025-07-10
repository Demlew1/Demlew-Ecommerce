import cart from "../../assets/images/cart.png";
type LogoProps = {
  textColor?: string;
};
export default function Logo({ textColor = "text-teal-950" }: LogoProps) {
  return (
    <div className="flex flex-row gap-1 items-center">
      <img src={cart} alt="cart" className="size-6 md:size-8" />
      <p className={`text-lg md:text-xl font-['wallpoet'] ${textColor}`}>
        DEMLEW
      </p>
    </div>
  );
}
