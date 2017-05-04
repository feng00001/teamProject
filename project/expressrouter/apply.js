var express = require('express');
var applydao = require('../dao/applydao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取购物车数量. */
router.get('/', function(req, res, next) {
  	applydao.selectcount(req, res, next)
});

/* GET 提交订单. */
router.get('/doorder', function(req, res, next) {
  	applydao.setOrder(req, res, next)
});

/* GET 支付. */
router.get('/buynow', function(req, res, next) {
  	applydao.buynow(req, res, next)
});

/* GET 支付. */
router.get('/pay', function(req, res, next) {
  	applydao.updateOrder(req, res, next)
});

module.exports = router;
