import useCategories from "../../hooks/useCategories";

interface CategoryImages {
  electronics: string;
  jewelery: string;
  "men's clothing": string;
  "women's clothing": string;
}
const categoryImages: CategoryImages = {
  electronics: "src/assets/images/electronics.svg",
  jewelery: "src/assets/images/jewelery.svg",
  "men's clothing": "src/assets/images/mensCloth.svg",
  "women's clothing": "src/assets/images/womenCloth.svg",
};
export default function HomeCategories() {
  const { data: categories, isPending, error } = useCategories();
  if (isPending) return <p className="font-['Kanit'] text-center mt-20 "></p>;
  if (error)
    return (
      <p className="font-['Kanit'] text-center mt-20 text-red-500">
        {error.message}
      </p>
    );
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-['Rubik'] font-bold text-cyan-950 ">CATEGORIES</p>
      <div className="flex flex-row items-center justify-center gap-6 mt-8 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 flex-wrap">
        {categories.map((category) => (
          <button key={category} className="flex flex-col gap-2 items-center">
            <img
              src={categoryImages[category as keyof CategoryImages]}
              alt={category}
              className="size-20  p-4 border-1 border-cyan-900 rounded-md w-30 flex flex-row items-center justify-center"
            />
            <p className="font-['Rubik'] text-cyan-900">{category}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
