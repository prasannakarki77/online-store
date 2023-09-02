import Image from "next/image";
import Link from "next/link";

const SkeletonCard = () => {
  return (
    <Link
      className="card sm:w-60 bg-base-100 border-slate-600 border-2 hover:border-slate-400  transition-all overflow-hidden "
      href={"/"}
    >
      <div className=" h-44   object-contai bg bg-slate-600 animate-pulse  "></div>
      <div className="card-body">
        <h2 className="h-4 w-32 animate-pulse bg-slate-600 rounded-full "></h2>
        <p className=" h-4 w-10 animate-pulse bg-slate-600  rounded-full "></p>
        <div className="card-actions justify-end ">
          <div className=" h-4 w-16 animate-pulse bg-slate-600  rounded-full "></div>
        </div>
      </div>
    </Link>
  );
};
export default SkeletonCard;
