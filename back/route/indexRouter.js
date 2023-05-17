const express = require('express');
const router = express.Router();
const {User} = require('../db/database');

router.get("/",(req,res)=>{
    res.send("text");

    User.create({
        username:"aaa",
        email:"email",
        password:"password"
    });
})

router.get("/aa",(req,res)=>{
    res.send("aaa");
})

router.get("/aaa",(req,res)=>{
    res.send("새로 추가함..");
})

module.exports = router;

//--