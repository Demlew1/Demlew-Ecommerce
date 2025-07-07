import useProducts from "../../hooks/useProducts";
export default function HomeProducts() {
  const { data: products, isPending, error } = useProducts();
  if (isPending)
    return <p className="font-['Kanit'] text-center mt-20 ">Loading...</p>;
  if (error)
    return (
      <p className="font-['Kanit'] text-center mt-20 text-red-500">
        {error.message}
      </p>
    );
  return (
    <div className="flex flex-col gap-1 items-center my-10">
      <p className="font-['Rubik'] font-bold text-cyan-950">OUR PRODUCTS</p>
      <div className="flex flex-row justify-center items-center gap-6 mt-2 flex-wrap">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 w-60 shadow-sm font-['Rubik'] flex flex-col gap-2 p-2 border-1 border-cyan-950 rounded-lg "
          >
            <figure className="px-10 pt-10">
              <img src={product.image} alt="Shoes" className=" size-40" />
            </figure>
            <div className="card-body items-center text-center flex flex-col gap-3 flex-1">
              {/* <h2 className="card-title text-cyan-950 ">{product.title}</h2> */}
              <p className="text-sm text-red-800 ">{product.price}$</p>
              <div className="card-actions">
                <button className="btn btn-primary bg-cyan-950 text-cyan-50 p-2 w-40 border-1 border-cyan-950 cursor-pointer hover:border-1 hover:border-cyan-950 hover:text-cyan-950 hover:bg-white  text-sm">
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
