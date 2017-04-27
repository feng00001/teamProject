var express = require('express');
var orderdao = require('../dao/orderdao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取所有订单. */
router.get('/init', function(req, res, next) {
  	orderdao.selectorder(req, res, next)
});

module.exports = router;
