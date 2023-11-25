import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});
