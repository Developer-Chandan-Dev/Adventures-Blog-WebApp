const express = require("express");
const router = express.Router();

router.post("/add");
router.get("/");
router.put("/:id");
router.delete("/:id");

module.exports = router;
