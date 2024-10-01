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

// Blogs
router.post("/add-blog", addBlogs);
router.get("/", allBlogs);
router.get("/:id", getSingleBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

// Comments
router.post("/comments/new", addComment);
router.get("/comments/")



module.exports = router;
