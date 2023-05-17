const express = require('express');
const router = require('./indexRouter');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/aaa', (req, res) => {
    res.send('aaa');
});

router.get('/aaaa', (req, res) => {
    res.send('aaaa');
});




module.exports = router;