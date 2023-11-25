import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    filters: null,
  },
  reducers: {
    updateFilters(state, action) {
      state.filters = action.payload;
    },
    removeFilters(state, action) {
      state.filters = null;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
