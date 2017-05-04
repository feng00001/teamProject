var express = require('express');
var shoplifedao = require('../dao/shoplifedao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取购物车数量. */
router.get('/init', function(req, res, next) {
  	shoplifedao.selectshoplist(req, res, next)
});

module.exports = router;
