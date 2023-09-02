import SearchInput from "@/components/SearchInput";
import ProductList from "@/components/product/ProductList";

const ProductsPage = () => {
  return (
    <div className=" p-10">
      <div className=" flex justify-center  mb-10">
        <SearchInput />
      </div>
      <ProductList />
    </div>
  );
};
export default ProductsPage;
