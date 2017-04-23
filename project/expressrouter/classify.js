var express = require('express');
var classifydao = require('../dao/classifydao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取每日抢购. */
router.get('/type', function(req, res, next) {
  	classifydao.selecttype(req, res, next)
});

/* GET 获取每日抢购. */
router.get('/subtype', function(req, res, next) {
  	classifydao.selectsubfinal(req, res, next)
});

module.exports = router;
