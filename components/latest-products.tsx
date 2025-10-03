import { ProductSlider } from "@/components/product-slider";

export const LatestProducts = () => {
  return (
    <section className="mb-16 ">
      <div className="container">
        <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
      </div>
      <ProductSlider />
    </section>
  );
};
