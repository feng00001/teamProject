var express = require('express');
var testdao = require('../dao/testdao');
var util = require('../../util/common');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	testdao.selectAll(req, res, next);
});

/* GET search by name. */
router.get('/search', function(req, res, next) {
  	testdao.selectByName(req, res, next);
});

/* GET delete from shop. */
router.get('/selectById', function(req, res, next) {
  	testdao.selectById(req, res, next);
});

/* GET insert into shop. */
router.get('/insertVal', function(req, res, next) {
  	testdao.insertVal(req, res, next);
});

/* GET delete from shop. */
router.get('/deleteById', function(req, res, next) {
  	testdao.deleteById(req, res, next);
});

module.exports = router;
