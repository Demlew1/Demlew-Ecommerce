import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/api";
export default function Categories() {
  const {
    data: categories,
    isPending,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });
  if (isPending) return <p className="font-['Kanit'] text-center mt-20 "></p>;
  if (error)
    return (
      <p className="font-['Kanit'] text-center mt-20 text-red-500">
        {error.message}
      </p>
    );
  console.log(categories);
  return (
    <div className="hidden md:flex md:flex-col gap-2 h-full rounded-lg  shadow-lg p-4 shadow-cyan-900">
      {categories.map((category) => (
        <button
          key={category}
          className="font-['Rubik'] w-50 bg-cyan-950 text-cyan-50 text-sm p-2 border-1 border-cyan-950 hover:border-cyan-950 hover:bg-white hover:text-gray-950 cursor-pointer"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
