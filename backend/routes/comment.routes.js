const express = require("express");
const router = express.Router();

const {
  addComment,
  deleteComment,
} = require("../controller/comment.controller");

router.post("/:postId", addComment);
router.get("/:postId", deleteComment);

module.exports = router;
