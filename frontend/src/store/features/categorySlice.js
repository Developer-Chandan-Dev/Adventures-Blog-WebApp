import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {
    /**
     * Add a new category to the state
     * @param {object} state - The current state
     * @param {object} action - The action object containing the new category
     * @param {object} action.payload - The new category object
     */
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },


    // Read (fetch) categories from backend
    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    // Update a category
    updateCategory: (state, action) => {
      const { _id, data } = action.payload;
      const index = state.categories.findIndex(
        (category) => category._id === _id
      );
      if (index !== -1) {
        state.categories[index] = { ...state.categories[index], ...data };
      }
    },

    // Delete a category
    deleteCategory: (state, action) => {
      const _id = action.payload;
      state.categories = state.categories.filter(
        (category) => category._id !== _id
      );
    },

    // Set loading state for async operations
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Set error state if any operation fails
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  addCategory,
  setCategories,
  updateCategory,
  deleteCategory,
  setLoading,
  setError,
} = categorySlice.actions;

// Export reducer
export default categorySlice.reducer;
