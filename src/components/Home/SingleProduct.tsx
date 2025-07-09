import { useParams } from "react-router-dom";
import useSingleProduct from "../../hooks/useSingleProduct";
export default function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id ?? "0", 10);
  const { data: singleProduct, isPending, error } = useSingleProduct(productId);
  if (isPending)
    return <p className="font-['Kanit'] text-center mt-20 ">Loading...</p>;
  if (error)
    return (
      <p className="font-['Kanit'] text-center mt-20 text-red-500">
        {error.message}
      </p>
    );
  return (
    <div>
      <p>{singleProduct.title}</p>
    </div>
  );
}
