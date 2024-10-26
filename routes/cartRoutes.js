const express = require('express');
const { addTocart, removeCart, getCart, removeItem } = require('../controller/cartController');
const { isAuth } = require('../config/auth');
const router = express.Router();



router.post('/add',isAuth , addTocart);
router.get('/get',isAuth , getCart);
router.delete('/remove',isAuth , removeCart);
router.put('/item',isAuth ,  removeItem);


module.exports = router;