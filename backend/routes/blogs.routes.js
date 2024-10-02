const express = require("express");
const router = express.Router();
const {
  addBlogs,
  allBlogs,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  addComment,
  allComments,
  updateComment,
  deleteComment,
} = require("../controller/blogs.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");

// Blogs
router.post("/add-blog", isAuthenticated, addBlogs);
router.get("/", allBlogs);
router.get("/:id", getSingleBlog);
router.put("/:id", isAuthenticated, updateBlog);
router.delete("/:id", isAuthenticated, deleteBlog);

// Comments
router.post("/comments/new", addComment);
router.get("/comments/");

module.exports = router;
