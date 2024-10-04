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
const {
  isAuthenticated,
  protectCRUD,
  checkBlockedAfterAuth,
} = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/roleProtector");
const upload = require("../middlewares/fileUploadMiddleware");

// Add new post
router.post(
  "/new-post",
  isAuthenticated,
  checkBlockedAfterAuth,
  protectCRUD,
  upload.single("coverImage"),
  addPost
);

// Aet all posts
router.get("/", getAllPosts);

// Get single post
router.get("/:id", getSinglePost);

// Update a post
router.put(
  "/:id",
  isAuthenticated,
  checkBlockedAfterAuth,
  protectCRUD,
  upload.single("coverImage"),
  updatePost
);

// Delete a post
router.delete(
  "/:id",
  isAuthenticated,
  checkBlockedAfterAuth,
  protectCRUD,
  deletePost
);

// Like or dislike a post
router.patch("/:postId/like", isAuthenticated, checkBlockedAfterAuth, likePost);

// Featured post
router.patch(
  "/:postId",
  isAuthenticated,
  checkBlockedAfterAuth,
  isAdmin,
  featuredPost
);

module.exports = router;
