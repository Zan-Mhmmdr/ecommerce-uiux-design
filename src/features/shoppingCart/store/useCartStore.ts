import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
};

type CartState = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [] as CartItem[],
  addToCart: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
}));
