import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebarSlice";
import userSlice from './features/userSlice.js'

// Create and configure the store
export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    user: userSlice
  },
});
