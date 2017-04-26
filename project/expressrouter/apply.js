var express = require('express');
var applydao = require('../dao/applydao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取购物车数量. */
router.get('/', function(req, res, next) {
  	applydao.selectcount(req, res, next)
});


module.exports = router;
