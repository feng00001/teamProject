var express = require('express');
var detaildao = require('../dao/detaildao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取购物车数量. */
router.get('/watches', function(req, res, next) {
  	detaildao.selectshop(req, res, next)
});

router.get('/hots', function(req, res, next) {
  	detaildao.selecthot(req, res, next)
});

router.get('/buys', function(req, res, next) {
  	detaildao.selectbuy(req, res, next)
});

router.get('/report', function(req, res, next) {
  	detaildao.selectreport(req, res, next)
});

module.exports = router;
