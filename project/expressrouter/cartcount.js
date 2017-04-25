var express = require('express');
var cartcountdao = require('../dao/cartcountdao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取购物车数量. */
router.get('/ins', function(req, res, next) {
  	cartcountdao.updatecount(req, res, next)
});

module.exports = router;
