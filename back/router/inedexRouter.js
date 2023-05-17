const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("text");
})

router.get("/aa",(req,res)=>{
    res.send("aaa");
})

router.get("/aaa",(req,res)=>{
    res.send("새로 추가 함...");
})

module.exports = router;