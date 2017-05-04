var express = require('express');
var slotlistdao = require('../dao/slotlistdao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取列表. */
router.get('/slots', function(req, res, next) {
  	slotlistdao.selectlist(req, res, next)
});

router.get('/priceasc', function(req, res, next) {
  	slotlistdao.selectpriceasc(req, res, next)
});

router.get('/pricedesc', function(req, res, next) {
  	slotlistdao.selectpricedesc(req, res, next)
});


module.exports = router;
