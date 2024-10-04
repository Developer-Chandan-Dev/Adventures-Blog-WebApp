const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  updateRole,
  promoteToTeamMember,
  blockUnblockUser,
  getTeamMembers,
} = require("../controller/users.controller");

const {
  isAuthenticated,
  checkBlockedAfterAuth,
} = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/roleProtector");
const upload = require("../middlewares/fileUploadMiddleware");

// Get all users
router.get("/", isAuthenticated, checkBlockedAfterAuth, isAdmin, getAllUsers);

// Get user profile
router.get("/:id", isAuthenticated, checkBlockedAfterAuth, getUser);

// Delete user
router.delete(
  "/:id",
  isAuthenticated,
  checkBlockedAfterAuth,
  isAdmin,
  deleteUser
);

// Block or Unblock a user
router.patch(
  "/block-unblock/:userId",
  isAuthenticated,
  checkBlockedAfterAuth,
  isAdmin,
  blockUnblockUser
);

// Update user profile
router.put(
  "/:id",
  isAuthenticated,
  checkBlockedAfterAuth,
  upload.single("profilePic"),
  updateUser
);

// Change user role
router.patch(
  "/role/:id",
  isAuthenticated,
  checkBlockedAfterAuth,
  isAdmin,
  updateRole
);

// Change team members - true/false
router.patch(
  "/promote/members/:userId",
  isAuthenticated,
  checkBlockedAfterAuth,
  isAdmin,
  promoteToTeamMember
);

// Get all team members
router.get(
  "/promote/members",
  isAuthenticated,
  checkBlockedAfterAuth,
  isAdmin,
  getTeamMembers
);

module.exports = router;
