const express = require("express");
const router = express.Router();
const homeData = require("../../controller/client/home.controller");

router.get("/home-data", homeData);

module.exports = router;