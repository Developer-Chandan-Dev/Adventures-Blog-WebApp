const express = require("express");
const router = express.Router();
const {
  addPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  likePost,
  featuredPost,
} = require("../controller/blogs.controller");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/roleProtector");
const upload = require("../middlewares/fileUploadMiddleware");

// Add new post
router.post("/new-post", isAuthenticated, upload.single("coverImage"), addPost);

// Aet all posts
router.get("/", getAllPosts);

// Get single post
router.get("/:id", getSinglePost);

// Update a post
router.put("/:id", isAuthenticated, upload.single("coverImage"), updatePost);

// Delete a post
router.delete("/:id", isAuthenticated, deletePost);

// Like or dislike a post
router.patch("/:postId/like", isAuthenticated, likePost);

// Featured post
router.patch("/:postId", isAuthenticated, isAdmin, featuredPost);

module.exports = router;
