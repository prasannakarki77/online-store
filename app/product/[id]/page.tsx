import { fetchProductById } from "@/actions/queryFunctions";
import ReactQueryHydrate from "@/components/ReactQueryHydrate";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import ProductClient from "./ProductClient";

interface IParams {
  id: number;
}
const ProductPage: React.FC<{ params: IParams }> = async ({ params }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["product"], () =>
    fetchProductById(params.id)
  );
  const dehydrateState = dehydrate(queryClient);
  return (
    <ReactQueryHydrate state={dehydrateState}>
      <ProductClient productId={params.id} />
    </ReactQueryHydrate>
  );
};
export default ProductPage;
