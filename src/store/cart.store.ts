import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Guitar } from '@/global';

interface CartState {
  cart: Guitar[];
  add: (guitar: Guitar) => void;
  remove: (id: number) => void;
  removeAll: () => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
}

const storeAPI: StateCreator<CartState> = (set, get) => ({
  cart: [],
  total: 0,
  add: (guitar: Guitar) => {
    const currentCart = get().cart;
    const itemExist = currentCart.findIndex((currentGuitar) => (currentGuitar.id === guitar.id));
    if (itemExist >= 0) {
      const cart = [...currentCart];
      if (cart[itemExist].quantity) {
        cart[itemExist].quantity += 1;
      }
      set({ cart });
    }
    else {
      guitar.quantity = 1;
      set({ cart: [...currentCart, guitar] });
    }
  },
  remove: (id: number) => {
    const cart = get().cart.filter((guitar) => (guitar.id !== id));
    set({ cart });
  },
  removeAll: () => {
    set({ cart: [] });
  },
  increment: (id: number) => {
    const cart = get().cart.map((guitar: Guitar) => {
      if (guitar.id === id) {
        return {
          ...guitar,
          quantity: guitar.quantity + 1,
        }
      }
      return guitar;
    });
    set({ cart });
  },
  decrement: (id: number) => {
    const cart = get().cart.map((guitar: Guitar) => {
      if (guitar.id === id && guitar.quantity > 1) {
        return {
          ...guitar,
          quantity: guitar.quantity - 1,
        }
      }
      return guitar;
    });
    set({ cart });
  },
});

export const useCartStore = create<CartState>()((
  devtools(
    persist(
      storeAPI,
      { name: 'cart-store' }
    )
  )
));