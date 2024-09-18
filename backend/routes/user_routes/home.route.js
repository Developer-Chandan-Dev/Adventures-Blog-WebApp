const express = require('express');
const router = express.Router();

router.get("/home/data",(req,res)=>{
    res.send("Welcome on Home Page");
});

module.exports = router;