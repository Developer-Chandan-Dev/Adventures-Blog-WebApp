const express = require("express");
const router = express.Router();

const {
  addComment,
  getComments,
  updateComment,
  deleteComment,
  likeComment,
} = require("../controller/comment.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");

// Add a comment
router.post("/:postId", isAuthenticated, addComment);

// Get comments for a specific post
router.get("/:postId", getComments);

// Delete a comment
router.delete("/:commentId", isAuthenticated, deleteComment);

// Update a comment
router.put("/:commentId", isAuthenticated, updateComment);

// Like or dislike a comment
router.post("/:commentId/like", isAuthenticated, likeComment);

module.exports = router;
