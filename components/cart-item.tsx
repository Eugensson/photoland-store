import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { Minus, Plus } from "lucide-react";

import { round2 } from "@/lib/utils";
import { CartItemType, Product } from "@/types";

interface CartItemProps {
  item: CartItemType;
  increase: (product: Product) => void;
  decrease: (product: Product) => void;
  removeItem: (product: Product) => void;
}

export const CartItem = ({
  item,
  increase,
  decrease,
  removeItem,
}: CartItemProps) => {
  return (
    <div className="flex gap-x-8">
      <Link href={`/product/${item.product.id}`}>
        <Image
          src={item.product.image}
          alt={`${item.product.name} image`}
          width={70}
          height={70}
        />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3">
          <Link
            href={`/product/${item.product.id}`}
            className="text-sm line-clamp-2"
          >
            {item.product.name}
          </Link>
          <button
            type="button"
            onClick={() => removeItem(item.product)}
            className="cursor-pointer hover:text-accent transition-colors"
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className="flex items-center gap-x-12">
          <div className="flex gap-x-4 mb-2">
            <div className="flex items-center gap-x-2">
              <button
                type="button"
                className="p-1 outline-[0.5px] outline-white/30 rounded cursor-pointer"
                onClick={() => decrease(item.product)}
              >
                <Minus size={16} />
              </button>
              <span className="w-[25px] h-[25px] flex items-center justify-center outline-[0.5px] outline-white/30 rounded">
                {item.quantity}
              </span>
              <button
                type="button"
                className="p-1 outline-[0.5px] outline-white/30 rounded cursor-pointer"
                onClick={() => increase(item.product)}
              >
                <Plus size={16} />
              </button>
            </div>
            <span className="text-lg text-accent">
              ${round2(item.product.price * item.quantity)}
            </span>
          </div>
        </div>
        <div>
          <span className="text-accent">${item.product.price} per piece</span>
        </div>
      </div>
    </div>
  );
};
