const express = require("express");
const router = express.Router();
const homeData = require("../controller/home.controller");

router.get("/home-data", homeData);

module.exports = router;