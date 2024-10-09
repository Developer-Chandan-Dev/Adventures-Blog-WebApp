const express = require("express");
const router = express.Router();
const {
  addPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  likePost,
  getDashboardBlogs,
  featuredPost,
  getDraftBlogs,
  publishUnPublishPost,
  getSinglePostById
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

// Get all posts
router.get("/", getAllPosts);

// Get all posts in dashboard
router.get(
  "/dashboard-blogs",
  isAuthenticated,
  checkBlockedAfterAuth,
  getDashboardBlogs
);

// Get all draft posts in dashboard
router.get(
  "/dashboard-blogs/draft",
  isAuthenticated,
  checkBlockedAfterAuth,
  getDraftBlogs
);

// Get single post
router.get("/:slug", getSinglePost);

// Get single post
router.get("/byId/:id", getSinglePostById);

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

// Publish posts
router.patch(
  "/publish/:postId",
  isAuthenticated,
  checkBlockedAfterAuth,
  publishUnPublishPost
);

// Like or dislike a post
router.patch("/:postId/like", isAuthenticated, checkBlockedAfterAuth, likePost);

// Featured post
router.patch(
  "/featuredPost/:postId",
  isAuthenticated,
  checkBlockedAfterAuth,
  isAdmin,
  featuredPost
);

module.exports = router;
