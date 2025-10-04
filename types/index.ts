export type Category =
  | "dslr"
  | "film"
  | "professional"
  | "compact"
  | "mirrorless";

export type Product = {
  id: string;
  name: string;
  category: Category;
  image: string;
  description: string;
  price: number;
  isNew: boolean;
};

export type CartItemType = {
  product: Product;
  quantity: number;
};
