import React, { createContext, useState } from "react";

export const wishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState([]);
 
  const addItemsToWishList = (item) => {
    setWishListItems([...wishListItems, item]);
  }; 

  const removeItemsFromWishList = (item) => {
    const filter = wishListItems.filter((i) => i.id !== item.id);
    setWishListItems(filter);
  };
 
  return (
    <wishlistContext.Provider
      value={{
        wishListItems,
        addItemsToWishList,
        removeItemsFromWishList,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

export default WishlistContextProvider;
