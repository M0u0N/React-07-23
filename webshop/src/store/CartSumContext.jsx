import React, { createContext, useState } from 'react';

// Create a new context
export const CartSumContext = createContext();

// Create a custom provider component
export function CartSumContextProvider({ children }) {
  const [cartSum, setCartSum] = useState(calculateInitial());

  function calculateInitial() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]" );
    let cost = 0;
    cart.forEach((cartProduct) => (cost = cost + cartProduct.product.price * cartProduct.quantity))
    return cost.toFixed(2);
  }

  return (
    <CartSumContext.Provider value={{cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
}