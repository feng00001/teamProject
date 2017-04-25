var express = require('express');
var shopqualitydao = require('../dao/shopqualitydao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取购物车数量. */
router.get('/init', function(req, res, next) {
  	shopqualitydao.selectshoplist(req, res, next)
});

module.exports = router;
