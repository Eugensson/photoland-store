import { ProductSlider } from "@/components/product-slider";

import { Category } from "@/types";
import { productList } from "@/lib/data";

interface RelatedProductsProps {
  category: Category;
}

export const RelatedProducts = ({ category }: RelatedProductsProps) => {
  const relatedProducts = productList.filter(
    (product) => product.category === category
  );

  return (
    <section className="mb-16">
      <div className="container">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
      </div>
      <ProductSlider products={relatedProducts} />
    </section>
  );
};
