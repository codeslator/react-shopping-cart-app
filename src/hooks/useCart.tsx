import { useMemo } from "react";
import { useCartStore } from "@/store";

const useCart = () => {
  const cart = useCartStore((state) => state.cart);
  const add = useCartStore((state) => state.add);
  const remove = useCartStore((state) => state.remove);
  const removeAll = useCartStore((state) => state.removeAll);
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);

  const rating = Math.floor(Math.random() * 6) + 1;

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const total = useMemo(() => cart.reduce((acc: number, currentGuitar) => acc + (currentGuitar.price * currentGuitar.quantity), 0), [cart]);

  return {
    cart,
    add,
    remove,
    removeAll,
    increment,
    decrement,
    isEmpty,
    total,
    rating
  };
};

export default useCart;