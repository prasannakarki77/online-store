import Image from "next/image";
import Link from "next/link";

const ItemCard = () => {
  return (
    <Link
      className="card w-72 bg-base-100 shadow-xl hover:shadow-slate-500  transition-all "
      href={"/"}
    >
      <figure>
        <Image src="/show.png" alt="Shoes" width={600} height={600} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </Link>
  );
};
export default ItemCard;
