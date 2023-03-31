const express = require('express');
const path    = require('path');

const router   = express.Router();

router.post('/login', (req, res)=>{
    console.log('student url')
})

module.exports = router;