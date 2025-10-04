import Image from "next/image";

import { RelatedProducts } from "@/components/related-products";

import { productList } from "@/lib/data";

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { id } = await params;

  const product = productList.find((product) => product.id === id);

  if (!product) {
    return (
      <div className="container h-[70vh] flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <section className="mb-16 pt-44 lg:pt-7.5 xl:pt-0">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-7.5 mb-7.5">
          <div className="relative flex-1 w-full min-h-100 md:min-h-135 overflow-hidden rounded-lg grad">
            <Image
              src={product.image as string}
              alt={product.name as string}
              fill
              className="w-full max-w-[80%] h-full mx-auto object-contain"
            />
          </div>
          <div className="flex-1 p-12 xl:p-20 flex flex-col justify-center bg-primary rounded-lg">
            <p className="mb-2 text-lg font-medium text-accent uppercase">
              {product.category} cameras
            </p>
            <h2 className="mb-4 h2">{product.name}</h2>
            <p className="mb-12">{product.description}</p>
            <div className="flex items-center gap-x-8">
              <p className="text-3xl text-accent font-semibold">
                ${product.price}
              </p>
              <button type="button" className="btn btn-accent">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts category={product.category} />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
