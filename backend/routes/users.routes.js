const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/isAuthenticated");

const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  updateRole,
  promoteToTeamMember,
  getTeamMembers,
} = require("../controller/users.controller");
const { isAdmin } = require("../middlewares/roleProtector");

router.get("/", isAuthenticated, isAdmin, getAllUsers);
router.get("/:id", isAuthenticated, getUser);
router.delete("/:id", isAuthenticated, isAdmin, deleteUser);
router.put("/:id", isAuthenticated, updateUser);
router.patch("/role/:id", isAuthenticated, isAdmin, updateRole);
router.patch(
  "/promote/members/:userId",
  isAuthenticated,
  isAdmin,
  promoteToTeamMember
);
router.get("/promote/members", getTeamMembers);

module.exports = router;
