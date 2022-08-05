import { Cart, CartItem } from "../types/cart";
import { createContext, ReactNode, useState } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<Cart>({} as Cart);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    console.log("Add");
  }

  const removeItem = (item: CartItem) => {
    console.log("Remove");
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}