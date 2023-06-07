const express = require('express');
const router = express.Router();
const {User} = require('../db/database');

const bcrypt = require('bcrypt');

router.post("/", async (req,res)=>{
    const {username,email,password} = req.body;
    const cryptpassword = await bcrypt.hash(password,12);
    User.create({
        username,
        email,
        password:cryptpassword
    })
    .then(()=>{
        console.log("저장 성공");
        res.send("저장 성공");
    })
    .catch((err)=>{
        console.log("email 중복");
        res.send("email 중복");
    });
})

router.get("/aa",(req,res)=>{
    res.send("aaa");
})

router.get("/aaa",(req,res)=>{
    res.send("새로 추가 함...");
})

module.exports = router;