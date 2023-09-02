export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ISearchParams {
  title?: string;
}

export interface CartItem {
  product: Product;
  count: number;
}
