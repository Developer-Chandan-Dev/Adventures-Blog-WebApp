const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/", isAuthenticated, (req, res) => {
  res.json({
    success: true,
    message: `Welcome to the dashboard, ${req.user.username}`,
    user: req.user, // Access user info from the token
  });
});

module.exports = router;
