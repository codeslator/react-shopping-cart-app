import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Guitar } from '@/global';

interface CartState {
  cart: Guitar[];
  add: (guitar: Guitar) => void;
  remove: (id: number) => void;
  removeAll: () => void;
  // increment: (guitar: Guitar) => void;
  // decrement: (guitar: Guitar) => void;
}

const storeAPI: StateCreator<CartState> = (set, get) => ({
  cart: [],
  add: (guitar: Guitar) => {
    const currentCart = get().cart;
    const itemExist = currentCart.findIndex((currentGuitar) => (currentGuitar.id === guitar.id));
    if (itemExist >= 0) {
      const cart = [...currentCart];
      if (cart[itemExist].quantity) {
        cart[itemExist].quantity += 1;
      }
      set({ cart })
    }
    else {
      guitar.quantity = 1;
      set({ cart: [...currentCart, guitar] })
    }
  },
  remove: (id: number) => {
    const cart = get().cart.filter((product) => (product.id !== id));
    set({ cart: cart })
  },
  removeAll: () => {
    set({ cart: [] })
  },
  // increment: (guitar: Guitar) => {
  //   const currentCart = get().cart;
  //   const currentGuitarIndex = currentCart.findIndex((currentGuitar) => (currentGuitar.id === guitar.id));
  //   if (currentGuitarIndex >= 0) {
  //     const cart = [...currentCart];
  //     if (cart[currentGuitarIndex].quantity) {
  //       cart[currentGuitarIndex].quantity += 1;
  //     }
  //     set({ cart })
  //   }
  // },
  // decrement: (guitar: Guitar) => {
  //   set({ cart: [] })
  // },

});

export const useCartStore = create<CartState>()((
  devtools(
    persist(
      storeAPI,
      { name: 'cart-store' }
    )
  )
));