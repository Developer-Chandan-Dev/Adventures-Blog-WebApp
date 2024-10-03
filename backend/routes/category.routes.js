const express = require("express");
const router = express.Router();

const {
  addCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/category.controller");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/roleProtector");

// Category
router.post("/add", isAuthenticated, isAdmin, addCategory);
router.get("/", getAllCategory);
router.put("/:id", isAuthenticated, isAdmin, updateCategory);
router.delete("/:id", isAuthenticated, isAdmin, deleteCategory);

module.exports = router;
