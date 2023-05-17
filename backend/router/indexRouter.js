const express = require('express');
const router = express.Router();
const { User } = require('../db/batabase');

router.get('/', (req, res) => {
    res.send('text');
    User.create({
        username: 'aaa',
        email: 'email',
        password: 'password'
    })
})

router.get('/aaa', (req, res) => {
    res.send('뿌앙뿌앙')
})

module.exports = router;