import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

import { CartItemType, Product } from "@/types";

interface CartState {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  increase: (product: Product) => void;
  decrease: (product: Product) => void;
  removeItem: (product: Product) => void;
  clearCart: () => void;
  calcTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (i) => i.product.id === item.product.id
          );
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.product.id === item.product.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),

      increase: (product) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        })),

      decrease: (product) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.product.id === product.id
                ? { ...i, quantity: i.quantity - 1 }
                : i
            )
            .filter((i) => i.quantity > 0),
        })),

      removeItem: (product) =>
        set((state) => ({
          items: state.items.filter((i) => i.product.id !== product.id),
        })),

      clearCart: () => set({ items: [] }),

      calcTotalPrice: () => {
        const total = get().items.reduce(
          (total: number, item: CartItemType) =>
            total + item.product.price * item.quantity,
          0
        );
        return parseFloat(total.toFixed(2));
      },
    }),
    {
      name: "cart-storage",
    } as PersistOptions<CartState>
  )
);
