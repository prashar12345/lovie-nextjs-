import React, { createContext, useState, useEffect } from "react";
export const cartContextTwo = createContext();
import { setToStorage } from "../functions/setToStorage";
import { getFromStorage } from "../functions/getFromStorage";

const CartContextTwoProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getFromStorage('cart'))
  }, [])

  const [total, setTotal] = useState(0);

  const addItemsToCart = (item) => {
    setCartItems([...cartItems, item]);
    setToStorage('cart', JSON.stringify([item]))
    // setCartItems(getFromStorage('cart'))
  };

  const removeItemsFromCart = (item) => {
    const filter = cartItems.filter((i) => i.removeId !== item);
    setCartItems(filter);
    setToStorage('cart', JSON.stringify([filter]))
  };
  return (
    <cartContextTwo.Provider

      value={{
        cartItems,
        setCartItems,
        removeItemsFromCart,
        addItemsToCart,
        total,
        setTotal,
      }}

    >
      {children}

    </cartContextTwo.Provider>
  );
};

export default CartContextTwoProvider;
