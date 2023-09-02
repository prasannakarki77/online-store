import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const ProductCard: React.FC<{ data: Product }> = ({ data }) => {
  const { id, title, price, category, image, rating } = data;

  return (
    <Link
      className="card sm:w-60 bg-base-100 border-slate-600 border-2 hover:border-slate-400  transition-all "
      href={`/product/${id}`}
    >
      <figure className=" h-44   object-contain  bg-white  ">
        <Image src={image} alt="Shoes" width={100} height={100} />
      </figure>
      <div className="card-body">
        <h2 className="">{title}</h2>
        <p className="font-bold">&#36; {price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
