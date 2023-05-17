const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("board");
})

router.get("/aa",(req,res)=>{
    res.send("board/aa");
})

router.get("/aaa",(req,res)=>{
    res.send("board/aaa");
})

module.exports = router;