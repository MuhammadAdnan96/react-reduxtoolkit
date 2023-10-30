import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../app/features/todo/todoSlice";
import productsReducer from "../app/features/todo/productsSlice";
import detailReducer from "../app/features/todo/prductDetailSlice";

const store = configureStore({
  reducer: { tokenReducer, productsReducer, detailReducer },
});
export default store;
