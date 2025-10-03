import Link from "next/link";
import Image from "next/image";

import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <article className="relative grad w-full h-90.5 rounded-lg overflow-hidden group">
        {product.isNew && (
          <p className="absolute top-4 right-4 z-10 px-2 rounded-full text-xs font-extrabold uppercase text-primary bg-accent">
            new
          </p>
        )}
        <div className="relative w-full h-50 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={160}
            height={160}
            className="w-40 h-40 group-hover:scale-90 transition-all"
          />
        </div>
        <div className="px-6 pb-8 flex flex-col">
          <p className="mb-2 text-sm text-accent capitalize">
            {product.category}
          </p>
          <div className="mb-4 lg:mb-9 text-[15px] line-clamp-2">
            {product.name}
          </div>
          <p className="text-lg text-accent">${product.price}</p>
        </div>
      </article>
    </Link>
  );
};
