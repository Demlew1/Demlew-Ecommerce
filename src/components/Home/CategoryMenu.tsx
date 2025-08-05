import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFilterStore } from "../../store/filterStore";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import electronicsIcon from "../../assets/images/electronics.svg";
import miscelIcon from "../../assets/images/miscel.svg";
import shoesIcon from "../../assets/images/shoes.svg";
import mensClothIcon from "../../assets/images/mensCloth.svg";
import furnitureIcon from "../../assets/images/furniture.svg";

export default function CategoryMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { setSelectedCategoryId } = useFilterStore();

  const categories = [
    {
      id: 2,
      title: "Electronics",
      image: electronicsIcon,
    },
    {
      id: 5,
      title: "Miscellaneous",
      image: miscelIcon,
    },
    {
      id: 4,
      title: "Shoes",
      image: shoesIcon,
    },
    {
      id: 1,
      title: "Clothes",
      image: mensClothIcon,
    },
    {
      id: 3,
      title: "Furniture",
      image: furnitureIcon,
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    navigate("/products");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 font-['Kanit'] text-cyan-950 border-b-2 sm:text-xs md:text-sm border-transparent hover:border-cyan-950 transition duration-200"
      >
        Categories
        {isOpen ? (
          <FiChevronUp className="w-4 h-4" />
        ) : (
          <FiChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-['Kanit'] transition-colors"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-6 h-6"
              />
              {category.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
