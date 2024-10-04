import { createSlice } from "@reduxjs/toolkit";

// Unique key for localStorage to avoid conflicts
const LOCAL_STORAGE_KEY = "adventures_blogs_userDetails";

// Check for user data in localStorage
const userFormLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  : null;

const initialState = {
  user: userFormLocalStorage,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      // Save user to localStorage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      // Remove user from localStorage
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
