const express = require("express");
const router = express.Router();

const {
  addCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
  setOnHome,
} = require("../controller/category.controller");
const {
  isAuthenticated,
  checkBlockedAfterAuth,
} = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/roleProtector");

// Add category - admin
router.post(
  "/add",
  isAuthenticated,
  checkBlockedAfterAuth,
  isAdmin,
  addCategory
);

// Get all categories
router.get("/", getAllCategory);

// Update categories - admin
router.put(
  "/:id",
  isAuthenticated,
  checkBlockedAfterAuth,
  isAdmin,
  updateCategory
);

// Delete category - admin
router.delete(
  "/:id",
  isAuthenticated,
  checkBlockedAfterAuth,
  isAdmin,
  deleteCategory
);

// Update home categories
router.patch(
  "/:id",
  isAuthenticated,
  checkBlockedAfterAuth,
  isAdmin,
  setOnHome
);

module.exports = router;
