import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async actions to handle API requests
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (postId) => {
    const response = await axios.get(`/api/posts/${postId}/comments`);
    return response.data;
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async ({ postId, text, userId }) => {
    const response = await axios.post(`/api/posts/${postId}/comments`, {
      text,
      userId,
    });
    return response.data.comment;
  }
);

export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async ({ commentId, text }) => {
    const response = await axios.put(`/api/comments/${commentId}`, { text });
    return response.data.updatedComment;
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentId) => {
    await axios.delete(`/api/comments/${commentId}`);
    return commentId;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        const index = state.comments.findIndex(
          (c) => c._id === action.payload._id
        );
        if (index !== -1) {
          state.comments[index] = action.payload;
        }
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter((c) => c._id !== action.payload);
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;
