import Logo from "../Home/Logo";
import SignUpForm from "../Home/signUpForm";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white border-1 border-cyan-950 p-8 rounded-lg shadow-md w-full max-w-md font-['Rubik']">
        <div className="mb-8 flex flex-col items-center">
          <Logo />
          <p className="text-gray-600 mt-3 text-sm">Create a new account</p>
        </div>
        <SignUpForm />
        <div className="mt-6">
          <p className="text-xs text-center text-gray-600">
            Already have an account?
            <Link
              to="/signin"
              className="font-medium ml-1 text-cyan-900 hover:text-cyan-800 cursor-pointer"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
