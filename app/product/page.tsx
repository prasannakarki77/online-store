import { fetchProductList } from "@/actions/queryFunctions";
import ReactQueryHydrate from "@/components/ReactQueryHydrate";
import ProductList from "@/components/product/ProductList";
import { ISearchParams } from "@/types/product";
import { QueryClient, dehydrate } from "@tanstack/react-query";

interface IProductPage {
  searchParams: ISearchParams;
}

const ProductsPage = async ({ searchParams }: IProductPage) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["items"], () =>
    fetchProductList(searchParams)
  );
  const dehydrateState = dehydrate(queryClient);
  return (
    <div className=" p-10">
      <ReactQueryHydrate state={dehydrateState}>
        <ProductList searchParams={searchParams} />
      </ReactQueryHydrate>
    </div>
  );
};
export default ProductsPage;
