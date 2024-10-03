const express = require("express");
const router = express.Router();

const {
  addCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
  setOnHome,
} = require("../controller/category.controller");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/roleProtector");

// Add category - admin
router.post("/add", isAuthenticated, isAdmin, addCategory);

// Get all categories
router.get("/", getAllCategory);

// Update categories - admin
router.put("/:id", isAuthenticated, isAdmin, updateCategory);

// Delete category - admin
router.delete("/:id", isAuthenticated, isAdmin, deleteCategory);

// Update home categories
router.patch("/:id", isAuthenticated, isAdmin, setOnHome);

module.exports = router;
