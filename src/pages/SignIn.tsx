// import { Link } from "react-router-dom";
import Logo from "../components/Home/Logo";
import SignInForm from "../components/Home/SignInForm";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white border-1 border-cyan-950 p-8 rounded-lg shadow-md w-full max-w-md font-['Rubik']">
        <div className="mb-8 flex flex-col items-center">
          <Logo />
          <p className="text-gray-600 mt-3 text-sm">Sign in to your account</p>
        </div>
        <SignInForm />
        <div className="mt-6 flex flex-col gap-2">
          <div className="text-sm">
            <p className="font-medium text-center text-cyan-900 hover:text-cyan-800">
              Forgot password?
            </p>
          </div>
          <Link to="/signup">
            <p className="w-full flex justify-center py-2 px-4 border border-cyan-900 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Create new account
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
