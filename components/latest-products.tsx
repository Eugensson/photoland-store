import { ProductSlider } from "@/components/product-slider";

import { productList } from "@/lib/data";

export const LatestProducts = () => {
  const newProduct = productList.filter((product) => product.isNew);

  return (
    <section className="mb-16">
      <div className="container">
        <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
      </div>
      <ProductSlider products={newProduct} />
    </section>
  );
};
