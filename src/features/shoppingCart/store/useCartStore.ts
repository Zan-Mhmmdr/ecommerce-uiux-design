import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [
    {
      id: 1,
      name: "Sample Product",
      price: 10000,
      qty: 1,
      image: "/sample.jpg",
    },
  ],

  // ➕ Tambah item baru atau tambah qty kalau sudah ada
  addItem: (item) =>
    set((state) => {
      const exists = state.items.find((i) => i.id === item.id);

      if (exists) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }

      return { items: [...state.items, item] };
    }),

  // ⬆️ Increase qty
  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      ),
    })),

  // ⬇️ Decrease qty (minimal 1)
  decreaseQty: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, qty: Math.max(i.qty - 1, 1) } : i
      ),
    })),

  // ❌ Hapus item
  remove: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  // 🗑 Clear cart
  clear: () => set({ items: [] }),
}));
