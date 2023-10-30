import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },

    removeFromCart: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});
export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
