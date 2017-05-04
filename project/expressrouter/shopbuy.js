var express = require('express');
var shopbuydao = require('../dao/shopbuydao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取购物车数量. */
router.get('/init', function(req, res, next) {
  	shopbuydao.selectshoplist(req, res, next)
});

module.exports = router;
