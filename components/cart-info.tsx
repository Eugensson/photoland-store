"use client";

import { useMemo } from "react";
import { SlBag } from "react-icons/sl";

import { useCartStore } from "@/hooks/use-cart-store";
import { useHasMounted } from "@/hooks/use-has-mounted";

export const CartInfo = () => {
  const { items } = useCartStore();
  const hasMounted = useHasMounted();

  const totalItems = useMemo(
    () => items.reduce((a, c) => a + c.quantity, 0),
    [items]
  );

  if (!hasMounted)
    return (
      <>
        <SlBag size={28} />
        <span className="absolute top-3 -right-1 size-4.5 flex items-center justify-center bg-accent text-primary rounded-full text-[13px] font-semibold tracking-[-0.1em]">
          0
        </span>
      </>
    );

  return (
    <>
      <SlBag size={28} />
      <span className="absolute top-3 -right-1 size-4.5 flex items-center justify-center bg-accent text-primary rounded-full text-[13px] font-semibold tracking-[-0.1em]">
        {totalItems}
      </span>
    </>
  );
};
