const Comment = require("../models/comment.models");

// Add a comment to a post
const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;
    const userId = req.user._id;

    if (!content) {
      return res
        .status(400)
        .json({ status: false, error: "Message is required" });
    }

    const newComment = await Comment.create({
      postId,
      userId,
      content,
    });

    res.status(201).json({ success: true, comment: newComment });
  } catch (error) {
    console.log("Error in adding comment", error);
    res
      .status(500)
      .json({ success: false, error: "Internal server error", error });
  }
};

// Get all comments for a specific post
const getComments = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({ postId }).populate(
      "userId",
      "username profilePic"
    );

    res.status(200).json({ success: true, comments });
  } catch (error) {
    console.log("Failed to fetch comments", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch comments", error });
  }
};

// Update a comment
const updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { content } = req.body;

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res
        .status(404)
        .json({ seccess: false, message: "Comment not found" });
    }

    // Check if the user is the owner of the comment
    if (comment.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, error: "Unauthorized" });
    }

    comment.content = content;
    await comment.save();

    res
      .status(200)
      .json({ success: true, message: "Comment updated", comment });
  } catch (error) {
    console.log("Error in adding comment", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to update comment", error });
  }
};

// Delete a comment by its ID
const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, error: "Comment not found" });
    }

    // Check if the user is the owner of the comment or an admin
    if (
      comment.userId.toString() !== req.user._id.toString() &&
      req.user.role !== admin
    ) {
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }

    await comment.deleteOne();
    res.status(200).json({ success: true, message: "Comment deleted" });
  } catch (error) {
    console.log("Error in adding comment", error);
    res.status(500).json({ success: false, error: "Failed to delete" });
  }
};

// Like or unlike a comment
const likeComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const userId = req.user._id;

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, error: "Comment not found" });
    }

    if (comment.likes.includes(userId)) {
      comment.likes.pull(userId); // Unlike
    } else {
      comment.likes.push(userId);
    }

    await comment.save();
    res.status(200).json({
      success: true,
      message: "Like status updated",
      likes: comment.likes,
    });
  } catch (error) {
    console.log("Failed to like/unlike comment", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to link/unlike comment" });
  }
};

module.exports = {
  addComment,
  getComments,
  updateComment,
  deleteComment,
  likeComment,
};
