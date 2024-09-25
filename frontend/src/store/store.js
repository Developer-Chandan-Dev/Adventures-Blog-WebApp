import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebarSlice";

// Create and configure the store
export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});
