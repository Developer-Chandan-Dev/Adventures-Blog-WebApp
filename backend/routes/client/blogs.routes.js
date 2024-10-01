const express = require("express");
const router = express.Router();
const blogs = require("../../controller/client/blogs.controller")

router.get("/blogs", blogs);


module.exports = router;
