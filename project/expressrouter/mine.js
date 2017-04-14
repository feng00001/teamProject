var express = require('express');
var testdao = require('../dao/testdao');
var util = require('../../util/common');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	
});

/* GET checkuser. */
router.get('/checkuser', function(req, res, next) {
  	testdao.selectByName(req, res, next);
});



module.exports = router;
