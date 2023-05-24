const express = require('express');
const router = express.Router();
const {User} = require('../db/database');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/user-add",(req,res)=>{
    console.log(req.body);
    
    User.create({
        username:"aaa",
        email:"email",
        password:"password"
    });
    
    res.send(req.body);
})

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