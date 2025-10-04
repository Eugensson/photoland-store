import { CategoryNav } from "@/components/category-nav";
import { ProductCard } from "@/components/product-card";

import { productList } from "@/lib/data";

interface CategoryProductsPageProps {
  params: Promise<{
    category: string;
  }>;
}

const CategoryProductsPage = async ({ params }: CategoryProductsPageProps) => {
  const { category } = await params;

  const filteredProducts = productList.filter((product) =>
    product?.category?.toLowerCase().includes(category?.toLowerCase())
  );

  return (
    <section className="mb-16 pt-40 lg:pt-7.5 xl:pt-0">
      <div className="container">
        <div className="flex gap-x-7.5">
          <CategoryNav />
          <div>
            <h2 className="py-3 text-xl text-center lg:text-left uppercase">
              {category} cameras
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-7.5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryProductsPage;
