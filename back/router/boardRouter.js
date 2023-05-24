const express = require('express');
const { User } = require('../db/database');
const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/",(req,res)=>{
    res.send("board");
})

router.get("/aa",(req,res)=>{
    res.send("board/aa");
})

router.get("/aaa",(req,res)=>{
    res.send("board/aaa");
})
router.post("/user-add", (req, res) => {
    console.log(req.body);
    
    res.send(req.body);
})

module.exports = router;