var express = require('express');
var slotlistdao = require('../dao/slotlistdao');
var util = require('../../util/common');
var router = express.Router();

/* GET 获取列表. */
router.get('/slots', function(req, res, next) {
  	slotlistdao.selectlist(req, res, next)
});


module.exports = router;
