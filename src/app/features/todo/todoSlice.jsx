import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: localStorage.getItem("userToken") ?? null,
};

export const todoSlice = createSlice({
  name: "userToken",
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        userToken: [action.payload],
      };
    },
    logout: (state, action) => {
      return {
        ...state,
        userToken: action.payload,
      };
    },
  },
});
export const { login, logout } = todoSlice.actions;
export default todoSlice.reducer;
