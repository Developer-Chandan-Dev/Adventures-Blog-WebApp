const express = require("express");
const router = express.Router();
const {
  addPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  likePost,
} = require("../controller/blogs.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");

// Add new post
router.post("/new-post", isAuthenticated, addPost);

// Aet all posts
router.get("/", getAllPosts);

// Get single post
router.get("/:id", getSinglePost);

// Update a post
router.put("/:id", isAuthenticated, updatePost);

// Delete a post
router.delete("/:id", isAuthenticated, deletePost);

// Like or dislike a post
router.post("/:postId/like", isAuthenticated, likePost);

module.exports = router;
