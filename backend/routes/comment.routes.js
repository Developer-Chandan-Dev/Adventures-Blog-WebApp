const express = require("express");
const router = express.Router();

const {
  addComment,
  getComments,
  updateComment,
  deleteComment,
  likeComment,
} = require("../controller/comment.controller");
const {
  isAuthenticated,
  checkBlockedAfterAuth,
} = require("../middlewares/isAuthenticated");

// Add a comment
router.post("/:postId", isAuthenticated, checkBlockedAfterAuth, addComment);

// Get comments for a specific post
router.get("/:postId", getComments);

// Delete a comment
router.delete(
  "/:commentId",
  isAuthenticated,
  checkBlockedAfterAuth,
  deleteComment
);

// Update a comment
router.put(
  "/:commentId",
  isAuthenticated,
  checkBlockedAfterAuth,
  updateComment
);

// Like or dislike a comment
router.post(
  "/:commentId/like",
  isAuthenticated,
  checkBlockedAfterAuth,
  likeComment
);

module.exports = router;
