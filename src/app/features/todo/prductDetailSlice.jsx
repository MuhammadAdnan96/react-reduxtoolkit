import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetail: [],
};
export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    addProductDetail: (state, action) => {
      return {
        ...state,
        productDetail: action.payload,
      };
    },
  },
});
export const { addProductDetail } = productDetailSlice.actions;
export default productDetailSlice.reducer;
