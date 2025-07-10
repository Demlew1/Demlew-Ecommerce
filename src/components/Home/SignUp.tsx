import Logo from "./Logo";
import SignUpForm from "./SignInForm";
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
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            Already have an account?
            <Link
              to="/signin"
              className="font-medium text-cyan-900 hover:text-cyan-800 cursor-pointer"
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
