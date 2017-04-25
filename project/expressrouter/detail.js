var express = require('express');
var detaildao = require('../dao/detaildao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取购物车数量. */
router.get('/watches', function(req, res, next) {
  	detaildao.selectshop(req, res, next)
});

module.exports = router;
