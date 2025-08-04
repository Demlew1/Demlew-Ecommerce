type Props = {
  loading: boolean;
};

export default function SubmitButton({ loading }: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-950 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      {loading ? "Creating Account..." : "Sign Up"}
    </button>
  );
}
