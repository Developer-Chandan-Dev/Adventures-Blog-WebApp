const express = require("express");
const router = express.Router();
const { homeData } = require("../controller/home.controller");

// Get home page data
router.get("/home-data", homeData);

module.exports = router;
