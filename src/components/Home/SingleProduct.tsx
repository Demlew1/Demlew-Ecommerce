import { useParams } from "react-router-dom";
import useSingleProduct from "../../hooks/useSingleProduct";
export default function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id ?? "0");
  const { data: singleProduct, isPending, error } = useSingleProduct(productId);
  if (isPending)
    return <p className="font-['Kanit'] text-center mt-20 ">Loading...</p>;
  if (error)
    return (
      <p className="font-['Kanit'] text-center mt-20 text-red-500">
        {error.message}
      </p>
    );
  if (!singleProduct || !singleProduct.images?.length) {
    return <p>No product images available.</p>;
  }
  return (
    <div className="font-['Rubik']">
      <div>
        <img className="p-1 rounded-t-lg" src={singleProduct.images[0]} />
        <div className="flex flex-row justify-center items-center">
          <img className="size-40 p-1 " src={singleProduct.images[1]} />
          <img className="size-40 p-1 " src={singleProduct.images[2]} />
        </div>
      </div>
      <p className="text-center text-cyan-950 font-bold">
        {singleProduct.title}
      </p>
      <div className="flex flex-row gap-1">
        <p className="text-cyan-900 ">Description:</p>
        <p className="font-['Montserrat'] text-xs  px-8">
          {singleProduct.description}
        </p>
      </div>
    </div>
  );
}
