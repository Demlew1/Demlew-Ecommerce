import Filter from "../../assets/images/filter.svg";
import useProducts from "../../hooks/useProducts";
import { useNavigate } from "react-router-dom";
export default function ProductCards() {
  const navigate = useNavigate();
  const { data: products, isPending, error } = useProducts();
  if (isPending)
    return <p className="font-['Kanit'] text-center mt-20 ">Loading...</p>;
  if (error)
    return (
      <p className="font-['Kanit'] text-center mt-20 text-red-500">
        {error.message}
      </p>
    );
  const productsWithImages = products.filter(
    (product) =>
      product.images && product.images.length > 0 && product.images[0]
  );
  console.log(products);
  return (
    <div className="flex flex-col gap-1 ">
      <div className="relative self-end mr-10 sm:mr-18 md:mr-2 lg:mr-18 xl:mr-24">
        <img
          className="size-4 absolute top-1.5 left-1 "
          src={Filter}
          alt="filter"
        />
        <select className="font-['Rubik'] text-xs border-cyan-950 w-23 border-1 focus:outline-none rounded-sm pl-5 p-1 ">
          <option>Filter by</option>
          <option>A-Z</option>
          <option>expensive to low</option>
        </select>
      </div>
      <div className="flex flex-row justify-center items-center gap-6 mt-2 flex-wrap">
        {productsWithImages.map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 w-60 shadow-sm font-['Rubik'] flex flex-col gap-2 pb-2 border-1 border-cyan-950 rounded-lg "
          >
            <figure className="">
              <img
                src={product.images[0]}
                alt="Shoes"
                className=" w-full rounded-t-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "src/assets/images/noImage.jpg";
                }}
              />
            </figure>
            <div className="card-body items-center text-center flex flex-col gap-3 flex-1">
              <h2 className="card-title text-cyan-950 px-2">{product.title}</h2>
              <p className="text-sm text-red-800 ">{product.price}$</p>
              <div className="card-actions">
                <button
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="btn btn-primary bg-cyan-950 text-cyan-50 p-2 w-40 border-1 border-cyan-950 cursor-pointer hover:border-1 hover:border-cyan-950 hover:text-cyan-950 hover:bg-white  text-sm"
                >
                  More details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
