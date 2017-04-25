var express = require('express');
var cartcountdao = require('../dao/cartcountdao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取购物车数量. */
router.get('/ins', function(req, res, next) {
  	cartcountdao.updatecount(req, res, next)
});

router.get('/alls', function(req, res, next) {
  	cartcountdao.selectcount(req, res, next)
});

router.get('/minus', function(req, res, next) {
  	cartcountdao.selectcountminus(req, res, next)
});

router.get('/add', function(req, res, next) {
  	cartcountdao.selectcountadd(req, res, next)
});

module.exports = router;
