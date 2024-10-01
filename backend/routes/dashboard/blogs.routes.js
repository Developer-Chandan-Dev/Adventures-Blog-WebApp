const express = require("express");
const router = express.Router();
const {
  addBlogs,
  allBlogs,
  updateBlog,
  deleteBlog,
  addCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
  getSingleBlog,
  addTag,
  allTags,
  updateTag,
  deleteTag,
} = require("../../controller/dashboard/blogs.controller");

// Blogs
router.post("/add-blog", addBlogs);
router.get("/", allBlogs);
router.get("/:id", getSingleBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);


// tags
router.post("/tags/add", );
router.get("/tags/add", );
router.put("/tags/add", );
router.delete("/tags/add", );

module.exports = router;
