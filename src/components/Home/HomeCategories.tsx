import { useNavigate } from "react-router-dom";
import { useFilterStore } from "../../store/filterStore";

export default function HomeCategories() {
  const navigate = useNavigate();
  const { setSelectedCategoryId } = useFilterStore();

  const categories = [
    {
      id: 1,
      title: "Electronics",
      image: "src/assets/images/electronics.svg",
    },
    {
      id: 5,
      title: "Miscellaneous",
      image: "src/assets/images/miscel.svg",
    },
    {
      id: 4,
      title: "Shoes",
      image: "src/assets/images/shoes.svg",
    },
    {
      id: 11,
      title: "Clothes",
      image: "src/assets/images/mensCloth.svg",
    },
    {
      id: 3,
      title: "Furniture",
      image: "src/assets/images/furniture.svg",
    },
  ];

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    navigate("/products");
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <p className="font-['Rubik'] text-2xl font-bold text-cyan-950 mb-2">
        CATEGORIES
      </p>
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="flex flex-col gap-1 mt-2 xl:mt-4 items-center hover:scale-105 transition-transform"
          >
            <div className="size-30 px-6 p-4 border  rounded-md flex items-center justify-center">
              <img
                src={category.image}
                alt={category.title}
                className="w-full"
              />
            </div>
            <p className="font-['Rubik'] text-cyan-900 text-sm sm:text-base">
              {category.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
