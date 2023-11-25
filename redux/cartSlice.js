import { createSlice } from "@reduxjs/toolkit";
import { parse } from "postcss";
import { getFromStorage } from "../functions/getFromStorage";
import { setToStorage } from "../functions/setToStorage";

const initialState = {
  cartItems: getFromStorage("cart") ? [JSON.parse(getFromStorage("cart"))] : [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      // const newItem=action.payload;
      // const existingItem=state.cartItems.find(item=>item.id === newItem.id)
      // state.totalQuantity++;

      // if(!existingItem){
      //     state.cartItems.push({
      //         id:newItem.id,
      //         title:newItem.name,
      //         image:newItem.supporting_images,
      //         quantity:1,
      //         totalPrice:Number(newItem.price)
      //     })
      //     setToStorage('cart', state.cartItems)
      // }else{
      //     existingItem.quantity++;
      //     existingItem.totalPrice=Number(existingItem.totalPrice) + Number(newItem.price)
      // }

      // state.totalAmount=state.cartItems.reduce(
      //     (total,item)=>total + Number(item.price) * Number(item.quantity),
      //     0
      // )
      const newItem = action.payload;
      const existItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cartItems, newItem];
      setToStorage("cart", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cartItems, cartItems } };
    },

    // ========= remove item ========

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setToStorage("cart", state.cartItems);
    },

    //============ delete item ===========
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        setToStorage("cart", state.cartItems);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total + Number(item.totalPrice) * Number(item.quantity),
        0
      );
      setToStorage("cart", state.cartItems);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
