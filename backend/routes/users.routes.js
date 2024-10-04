const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  updateRole,
  promoteToTeamMember,
  getTeamMembers,
} = require("../controller/users.controller");

const { isAuthenticated } = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/roleProtector");
const upload = require("../middlewares/fileUploadMiddleware");

// Get all users
router.get("/", isAuthenticated, isAdmin, getAllUsers);

// Get user profile
router.get("/:id", isAuthenticated, getUser);

// Delete user
router.delete("/:id", isAuthenticated, isAdmin, deleteUser);

// Update user profile
router.put("/:id", isAuthenticated, upload.single("profilePic"), updateUser);

// Change user role
router.patch("/role/:id", isAuthenticated, isAdmin, updateRole);

// Change team members - true/false
router.patch(
  "/promote/members/:userId",
  isAuthenticated,
  isAdmin,
  promoteToTeamMember
);

// Get all team members
router.get("/promote/members", getTeamMembers);

module.exports = router;
