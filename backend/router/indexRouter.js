const express = require('express');
const router = express.Router();
const { User } = require('../db/batabase');

const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    console.log(req.body);
    const { username, email, password } = req.body;
    const cryptPassword = await bcrypt.hash(password, 12);
    User.create({
        username,
        email,
        password:cryptPassword
    })
        .then((result) => {
            console.log("저장 성공");
            res.send('저장 성공');
        })
        .catch((err) => {
            console.log("저장 실패");
            res.send('저장 실패');
        })
})

router.get('/aaa', (req, res) => {
    res.send('뿌앙뿌앙')
})

module.exports = router;