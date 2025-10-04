"use client";

import { Product } from "@/types";
import { useCartStore } from "@/hooks/use-cart-store";

interface AddToCartButtonProps {
  product: Product;
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addItem } = useCartStore();

  return (
    <button
      type="button"
      className="btn btn-accent"
      onClick={() => addItem({ product, quantity: 1 })}
    >
      Add to cart
    </button>
  );
};
