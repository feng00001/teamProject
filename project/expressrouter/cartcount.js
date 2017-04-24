var express = require('express');
var cartcountdao = require('../dao/classifydao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取购物车数量. */
router.get('/cartcount', function(req, res, next) {
  	cartcountdao.insertcount(req, res, next)
});

module.exports = router;
