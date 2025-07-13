import useCategories from "../../hooks/useCategories";
import { useFilterStore } from "../../store/filterStore";

export default function Categories() {
  const { data: categories, isPending, error } = useCategories();
  const { selectedCategoryId, setSelectedCategoryId } = useFilterStore();

  if (isPending) return <p className="font-['Kanit'] text-center mt-20 "></p>;
  if (error)
    return (
      <p className="font-['Kanit'] text-center mt-20 text-red-500">
        {error.message}
      </p>
    );
  return (
    <div className="hidden md:flex md:flex-col md:items-center gap-2 h-full rounded-lg shadow-lg p-4 shadow-cyan-900">
      <p className="font-['Kanit'] text-gray-950">Categories</p>
      <button
        className={`font-['Rubik'] w-50 p-2 text-sm border-1 cursor-pointer rounded-md ${
          selectedCategoryId === null
            ? "bg-cyan-950 text-white"
            : "bg-white text-cyan-950 border-cyan-950"
        }`}
        onClick={() => setSelectedCategoryId(null)}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          className={`font-['Rubik'] w-50 p-2 text-sm border-1 cursor-pointer rounded-md ${
            selectedCategoryId === category.id
              ? "bg-cyan-950 text-white"
              : "bg-white text-cyan-950 border-cyan-950"
          }`}
          onClick={() => setSelectedCategoryId(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
