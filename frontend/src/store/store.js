import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";
import userReducer from "./features/userSlice.js";
import categoryReducer from "./features/categorySlice.js";

// Create and configure the store
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer,
    categories: categoryReducer,
  },
});
