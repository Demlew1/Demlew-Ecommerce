export default function HomeCategories() {
  // Hardcoded category data
  const categories = [
    {
      title: "Electronics",
      image: "src/assets/images/electronics.svg",
    },
    {
      title: "Jewelery",
      image: "src/assets/images/jewelery.svg",
    },
    {
      title: "Men's",
      image: "src/assets/images/mensCloth.svg",
    },
    {
      title: "Women's",
      image: "src/assets/images/womenCloth.svg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <p className="font-['Rubik'] text-2xl font-bold text-cyan-950 mb-2">
        CATEGORIES
      </p>
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-12 flex-wrap">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex flex-col gap-1 mt-2 xl:mt-4 items-center hover:scale-105 transition-transform"
          >
            <div className="size-30 px-6 p-4 border  rounded-md flex items-center justify-center ">
              <img
                src={category.image}
                alt={category.title}
                className="w-full"
              />
            </div>
            <p className="font-['Rubik'] text-cyan-900 text-sm sm:text-base ">
              {category.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
