var express = require('express');
var searchdao = require('../dao/searchdao');
var util = require('../../util/common');
var router = express.Router();

/* GET 模糊查询. */
router.get('/search', function(req, res, next) {
  	searchdao.selectshoplist(req, res, next)
});

module.exports = router;
