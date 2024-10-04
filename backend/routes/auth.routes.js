const express = require("express");
const router = express.Router();
const { signup, login, logout } = require("../controller/auth.controller");

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// Logout route
router.post("/logout", logout);

module.exports = router;
