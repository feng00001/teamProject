var express = require('express');
var homepagedao = require('../dao/homepagedao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取每日抢购. */
router.get('/everyday', function(req, res, next) {
  	homepagedao.selecteveryday(req, res, next)
});

module.exports = router;
