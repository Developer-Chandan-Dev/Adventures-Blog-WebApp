const express = require("express");
const router = express.Router();

const {
  addCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
} = require("../../controller/dashboard/category.controller");

// Category
router.post("/add", addCategory);
router.get("/", getAllCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
