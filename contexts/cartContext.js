import React, { createContext, useState, useEffect } from "react";
import { setToStorage } from "../functions/setToStorage";
import { getFromStorage } from "../functions/getFromStorage";
import { useRouter } from "next/router";
// Some changes
export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartHandle, setCartHandle] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  const handleCartItems = (item) => {
    const itemsInStore = getFromStorage("cart");
    if (itemsInStore === "") {
      setToStorage("cart", JSON.stringify([item])); 
      setCartHandle(1);
      setCartItems(item);
      return;
    }
    let parsed = JSON.parse(itemsInStore);
    console.log(parsed)


    const sameQuantity = parsed.some(
      (parsedItem) => parsedItem.quantity === item.quantity
    );
    const sameColor = parsed.some(
      (parsedItem) =>
        parsedItem.colours.toLowerCase() === item.colours.toLowerCase()
    );
    const sameSize = parsed.some(
      (parsedItem) =>
        parsedItem.sizes.toLowerCase() === item.sizes.toLowerCase()
    );
    const sameStyle = parsed.some(
      (parsedItem) =>
        parsedItem.style.toLowerCase() === item.style.toLowerCase()
    );

    if (!sameSize) {
      parsed.push(item);
      setCartHandle(parsed.length);
      setCartItems(parsed);
      setToStorage("cart", JSON.stringify(parsed));
    }
    if (!sameColor) {
      parsed.push(item);
      setCartHandle(parsed.length);
      setCartItems(parsed);
      setToStorage("cart", JSON.stringify(parsed));
    }
    if (!sameQuantity) {
      parsed.push(item);
      setCartHandle(parsed.length);
      setCartItems(parsed);
      setToStorage("cart", JSON.stringify(parsed));
    }
    if (!sameStyle) {
      parsed.push(item);
      setCartHandle(parsed.length);
      setCartItems(parsed);
      setToStorage("cart", JSON.stringify(parsed));
    }
  };
  const removeCartItems = (id) => {
    const prevItems = getFromStorage("cart");
    let prevItemsArr = prevItems !== null ? JSON.parse(prevItems) : "";
    const filteredItems = prevItemsArr.filter((item) => item.removeId !== id);
    if (filteredItems.length) {
      setToStorage("cart", JSON.stringify(filteredItems));
      setCartHandle(filteredItems.length);
      setCartItems(filteredItems);
      router.reload(window.location.pathname);
    } else {
      setToStorage("cart", "");
      setCartHandle(0);
      setCartItems("");
      router.reload(window.location.pathname);
    }
  };

  useEffect(() => {
    const itemsInStore = getFromStorage("cart");
    if (itemsInStore !== null && itemsInStore !== "") {
      const parsed = JSON.parse(itemsInStore);
      setCartHandle(parsed.length);
      setCartItems(parsed);
    }

    if (itemsInStore === null) {
      if (cartItems.length === 0) {
        setToStorage("cart", "");
      }
    }
  }, []);

  return (
    <cartContext.Provider
      value={{
        cartItems,
        handleCartItems,
        quantity,
        setQuantity,
        total,
        setTotal,
        removeCartItems,
        setTotal,
        total,
        cartHandle,
        setCartItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
