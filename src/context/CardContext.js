import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Create a context
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // Initialize the cart from localStorage or an empty array
  const [cart, setCart] = useLocalStorage("data", []);

  const addItem = (item) => {
    // Update the cart by adding the new item
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    // Update the cart by removing the item with the specified id
    setCart(cart.filter((item) => item.id !== id));
  };

  // Create a value object with cart and the addItem function
  const value = { cart, addItem, removeItem };

  return (
    // Provide the value to the context
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
