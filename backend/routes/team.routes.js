const express = require("express");
const router = express.Router();

const {
  addMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
} = require("../controller/team.controller");

router.post("/new", addMember);
router.get("/", getAllMembers);
router.get("/:id", getSingleMember);
router.put("/:id", updateMember);
router.delete("/:id", deleteMember);

module.exports = router;
