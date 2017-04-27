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

module.exports = router;
