const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");

const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  updateRole,
} = require("../controller/users.controller");
const { isAdmin } = require("../middlewares/roleProtector");

router.get("/", isAuthenticated, isAdmin, getAllUsers);
router.get("/:id", getUser);
router.delete("/:id", isAuthenticated, isAdmin, deleteUser);
router.put("/:id", updateUser);
router.patch("/role/:id", isAuthenticated, isAdmin, updateRole);

module.exports = router;
