const express = require("express");
const router = express.Router();
const { signup, login, logout } = require("../controller/auth.controller");
const { checkBlocked } = require("../middlewares/isAuthenticated");

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", checkBlocked, login);

// Logout route
router.post("/logout", logout);

module.exports = router;
