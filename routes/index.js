const express = require('express');
const myData = require('../data');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index',{myData});
});
module.exports = router;