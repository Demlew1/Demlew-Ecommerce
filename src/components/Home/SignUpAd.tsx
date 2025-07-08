import { Link } from "react-router-dom";
export default function SignUpAd() {
  return (
    <div className="flex flex-row gap-2 font-['Rubik'] text-[10px] bg-cyan-950 text-gray-200 justify-center p-1 sm:text-xs">
      <p>Take your product,</p>
      <Link to="signin" className="underline">
        sign-up here
      </Link>
    </div>
  );
}
